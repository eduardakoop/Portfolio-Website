import { useState, useRef, useEffect, FormEvent } from "react";
import { Send, RefreshCw, Sparkles, ShieldAlert, User, Bot } from "lucide-react";
import { ChatMessage } from "../types";
import ReactMarkdown from "react-markdown";

const PRESET_PROMPTS = [
  "What did Eduarda do at Qualcomm?",
  "List her cybersecurity certifications",
  "Tell me about her WiCyS leadership",
  "What coding languages and tools does she know?",
];

export default function CyberBot() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "assistant",
      text: "Hello!",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

    const userMsgId = `user-${Date.now()}`;
    const userMessage: ChatMessage = {
      id: userMsgId,
      role: "user",
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      const historyContext = messages
        .filter((m) => m.id !== "welcome")
        .map((m) => ({
          role: m.role,
          text: m.text,
        }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: textToSend,
          history: historyContext,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to communicate with portfolio server.");
      }

      const data = await res.json();
      
      const botMessage: ChatMessage = {
        id: `bot-${Date.now()}`,
        role: "assistant",
        text: data.response || "No reply from system.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err: any) {
      console.error(err);
      const errorMessage: ChatMessage = {
        id: `err-${Date.now()}`,
        role: "assistant",
        text: "Connection Error: Failed to reach the backend gateway. Please check your connection and try again.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleSendMessage(inputValue);
  };

  const resetChat = () => {
    setMessages([
      {
        id: "welcome",
        role: "assistant",
        text: "Hello!",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
  };

  return (
    <section id="ai-assistant" className="space-y-8 scroll-mt-20">
      {/* Section Header */}
      <div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 font-sans text-[11px] text-violet-400 font-medium mb-3">
          <Sparkles className="w-3.5 h-3.5 text-violet-400" />
          AI assistant
        </div>
        <h2 className="text-3xl font-bold text-white tracking-tight relative pb-3 font-display">
          AI assistant
          <span className="absolute bottom-0 left-0 w-16 h-0.5 bg-violet-500" />
        </h2>
        <p className="mt-3 text-sm text-slate-400 max-w-2xl font-sans font-light leading-relaxed">
          Chat with my AI assistant to get more information on my professional profile, learn more about my certifications, achievements, work experience, or background.
        </p>
      </div>

      {/* Centered AI Chat Console */}
      <div className="max-w-3xl mx-auto w-full border border-slate-900 bg-[#070a13]/90 rounded-xl flex flex-col overflow-hidden shadow-2xl h-[520px]">
        {/* Header */}
        <div className="bg-slate-950 border-b border-slate-900 px-6 py-4 flex items-center justify-between select-none">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
            <span className="text-sm font-sans font-semibold text-slate-200 tracking-wide">
              Chat Session
            </span>
          </div>
          
          <button
            id="btn-reboot-chat"
            onClick={resetChat}
            title="Clear Chat Session"
            className="flex items-center gap-1.5 text-xs font-sans text-slate-400 hover:text-violet-400 border border-slate-800/80 hover:border-violet-500/20 rounded-lg py-1.5 px-3 bg-slate-950/80 transition-colors cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>
        </div>

        {/* Message Stream */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-transparent">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex flex-col ${
                msg.role === "user" ? "items-end" : "items-start"
              }`}
            >
              {/* Sender Metadata */}
              <span className="text-[10px] font-sans text-slate-500 mb-1 flex items-center gap-1.5 select-none">
                {msg.role === "user" ? (
                  <>
                    <User className="w-3 h-3 text-slate-500" />
                    <span>You</span>
                  </>
                ) : (
                  <>
                    <Bot className="w-3 h-3 text-violet-400" />
                    <span>Assistant</span>
                  </>
                )}
                <span>•</span>
                <span>{msg.timestamp}</span>
              </span>

              {/* Message bubble */}
              <div
                className={`max-w-[90%] sm:max-w-[85%] rounded-lg px-4 py-3 text-sm leading-relaxed border font-sans ${
                  msg.role === "user"
                    ? "bg-slate-900/60 border-slate-850 text-slate-200 whitespace-pre-wrap"
                    : msg.text.startsWith("Connection Error")
                    ? "bg-rose-950/15 border-rose-950/40 text-rose-300 flex gap-2 items-start whitespace-pre-wrap"
                    : "bg-violet-950/10 border-violet-950/20 text-violet-400/90"
                }`}
              >
                {msg.text.startsWith("Connection Error") && (
                  <ShieldAlert className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                )}
                {msg.role === "user" || msg.text.startsWith("Connection Error") ? (
                  <span>{msg.text}</span>
                ) : (
                  <div className="markdown-body space-y-2">
                    <ReactMarkdown
                      components={{
                        p: ({ children }) => <p className="mb-2 last:mb-0 leading-relaxed text-slate-200">{children}</p>,
                        ul: ({ children }) => <ul className="list-disc pl-5 mb-2 space-y-1.5">{children}</ul>,
                        ol: ({ children }) => <ol className="list-decimal pl-5 mb-2 space-y-1.5">{children}</ol>,
                        li: ({ children }) => <li className="text-slate-300">{children}</li>,
                        strong: ({ children }) => <strong className="font-semibold text-violet-300">{children}</strong>,
                        h1: ({ children }) => <h1 className="text-sm font-bold text-violet-200 mt-2 mb-1">{children}</h1>,
                        h2: ({ children }) => <h2 className="text-xs font-semibold text-violet-200 mt-2 mb-1">{children}</h2>,
                        h3: ({ children }) => <h3 className="text-[11px] font-semibold text-violet-300 mt-2 mb-1">{children}</h3>,
                      }}
                    >
                      {msg.text}
                    </ReactMarkdown>
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Suggested Questions inside chat session */}
          {messages.length === 1 && (
            <div className="pl-9 mt-1 space-y-3 animate-fade-in max-w-xl">
              <span className="text-[10px] font-sans text-slate-500 font-semibold uppercase tracking-wider block">
                Suggested Questions:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {PRESET_PROMPTS.map((prompt, idx) => (
                  <button
                    id={`preset-prompt-${idx}`}
                    key={prompt}
                    onClick={() => handleSendMessage(prompt)}
                    className="text-left font-sans text-xs text-slate-300 hover:text-violet-400 bg-slate-900/40 hover:bg-violet-950/10 border border-slate-900/60 hover:border-violet-500/20 rounded-lg p-3.5 transition-all cursor-pointer group flex items-start gap-2"
                  >
                    <span className="text-violet-500 group-hover:translate-x-0.5 inline-block transition-transform shrink-0 select-none">→</span>
                    <span className="leading-normal">{prompt}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {isLoading && (
            <div className="flex flex-col items-start">
              <span className="text-[10px] font-sans text-slate-500 mb-1 flex items-center gap-1.5 select-none">
                <Bot className="w-3 h-3 text-violet-400" />
                <span>Assistant is thinking...</span>
              </span>
              <div className="flex items-center gap-1.5 bg-violet-950/5 border border-violet-950/10 rounded-lg px-4 py-3 text-sm text-violet-400/80 font-sans">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-bounce" style={{ animationDelay: "150ms" }} />
                <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Chat Form Footer */}
        <form
          id="cyberbot-form"
          onSubmit={handleSubmit}
          className="p-4 border-t border-slate-900 bg-slate-950/60 flex gap-3"
        >
          <input
            id="cyberbot-input"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask about my cybersecurity projects, skills, or certifications..."
            disabled={isLoading}
            className="flex-1 bg-slate-900/40 border border-slate-800/80 focus:border-violet-500/30 focus:outline-none text-sm text-slate-200 rounded-lg py-3 px-4 font-sans transition-colors placeholder-slate-600"
          />
          <button
            id="cyberbot-send-btn"
            type="submit"
            disabled={!inputValue.trim() || isLoading}
            className={`flex items-center justify-center px-4 py-3 rounded-lg border transition-all ${
              inputValue.trim() && !isLoading
                ? "bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white border-violet-500 cursor-pointer shadow-lg hover:shadow-[0_0_15px_rgba(139,92,246,0.4)]"
                : "bg-slate-900/40 text-slate-600 border-slate-800 cursor-not-allowed"
            }`}
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </section>
  );
}
