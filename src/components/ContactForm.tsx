import { useState, useEffect, FormEvent } from "react";
import { Send, CheckCircle, Shield, AlertTriangle } from "lucide-react";

interface LogMessage {
  text: string;
  type: "info" | "success" | "error" | "system";
}

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitLogs, setSubmitLogs] = useState<LogMessage[]>([]);
  const [showConsole, setShowConsole] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);
    setShowConsole(true);
    setSubmitLogs([]);

    // Simulate real-time secure terminal compilation logs
    const logs: LogMessage[] = [
      { text: "INITIATING SECURE SESSION HANDSHAKE ON PORT 443...", type: "system" },
      { text: "ESTABLISHING TCP SOCKET CONNECTION... [CONNECTED]", type: "info" },
      { text: "ACQUIRING RSA-4096 ENCRYPTION KEYS...", type: "info" },
      { text: "COMPILING CONTACT INGESTION PAYLOAD...", type: "info" },
      { text: "ENCRYPTING DATA BLOB WITH AES-GCM-256...", type: "info" },
      { text: "TRANSMITTING ENCRYPTED BLOB TO GATEWAY...", type: "info" },
      { text: "RECV: SECURE DELIVERY RECEIPT [200 OK VERIFIED]", type: "success" },
      { text: "MESSAGE DISPATCHED SUCCESSFULLY TO EDUARDA'S INBOX.", type: "success" },
    ];

    let currentLogIndex = 0;
    const interval = setInterval(() => {
      if (currentLogIndex < logs.length) {
        setSubmitLogs((prev) => [...prev, logs[currentLogIndex]]);
        currentLogIndex++;
      } else {
        clearInterval(interval);
        setIsSubmitting(false);
        setIsCompleted(true);
      }
    }, 450);
  };

  const handleResetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
    setShowConsole(false);
    setIsCompleted(false);
    setSubmitLogs([]);
  };

  return (
    <div className="border border-slate-800 bg-slate-950/60 rounded-lg overflow-hidden backdrop-blur-md">
      {/* Top Header Bar */}
      <div className="bg-slate-900 border-b border-slate-800 px-5 py-3 flex items-center justify-between font-mono text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
          <span className="w-2.5 h-2.5 rounded-full bg-violet-500/50" />
          <span className="ml-2">guest@port_console:~/contact_gateway</span>
        </div>
        <span className="text-violet-500/70 text-[10px] select-none animate-pulse">● SECURE CHANNEL</span>
      </div>

      <div className="p-6">
        {!showConsole ? (
          <form id="contact-gate-form" onSubmit={handleSubmit} className="space-y-6 font-mono">
            {/* Name Input */}
            <div className="space-y-2">
              <label htmlFor="name-input" className="block text-xs text-slate-400 font-medium">
                guest@port_console:~$ <span className="text-violet-400">setenv GUEST NAME</span>
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-xs text-slate-600 select-none">&gt;</span>
                <input
                  id="name-input"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name..."
                  className="w-full bg-slate-900/50 border border-slate-800 rounded px-4 py-2 pl-8 text-xs text-slate-200 placeholder-slate-700 focus:border-violet-500/50 focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Email Input */}
            <div className="space-y-2">
              <label htmlFor="email-input" className="block text-xs text-slate-400 font-medium">
                guest@port_console:~$ <span className="text-violet-400">setenv GUEST EMAIL</span>
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-xs text-slate-600 select-none">&gt;</span>
                <input
                  id="email-input"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  className="w-full bg-slate-900/50 border border-slate-800 rounded px-4 py-2 pl-8 text-xs text-slate-200 placeholder-slate-700 focus:border-violet-500/50 focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Message Input */}
            <div className="space-y-2">
              <label htmlFor="message-input" className="block text-xs text-slate-400 font-medium">
                guest@port_console:~$ <span className="text-violet-400">cat &gt;&gt; SECURE MESSAGE.txt</span>
              </label>
              <div className="relative">
                <span className="absolute left-3 top-3 text-xs text-slate-600 select-none">&gt;</span>
                <textarea
                  id="message-input"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write your transmission details..."
                  className="w-full bg-slate-900/50 border border-slate-800 rounded px-4 py-3 pl-8 text-xs text-slate-200 placeholder-slate-700 focus:border-violet-500/50 focus:outline-none transition-colors resize-none"
                />
              </div>
            </div>

            {/* Submit CTA */}
            <button
              id="btn-contact-submit"
              type="submit"
              className="w-full bg-slate-900 hover:bg-violet-950/40 text-violet-400 border border-slate-800 hover:border-violet-500/50 rounded py-3 text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all hover:shadow-[0_0_12px_rgba(139,92,246,0.15)]"
            >
              <Send className="w-4 h-4" />
              [SEND SECURE TRANSMISSION]
            </button>
          </form>
        ) : (
          /* Logs Terminal Console Screen */
          <div className="space-y-5 font-mono">
            <div className="bg-slate-950 border border-slate-900 rounded p-4 h-[240px] overflow-y-auto space-y-1.5 scrollbar-thin">
              {submitLogs.map((log, index) => (
                <div
                  id={`submit-log-${index}`}
                  key={index}
                  className={`text-[11px] leading-relaxed ${
                    log.type === "system"
                      ? "text-cyan-400 font-bold"
                      : log.type === "success"
                      ? "text-violet-400"
                      : log.type === "error"
                      ? "text-red-400 animate-pulse"
                      : "text-slate-500"
                  }`}
                >
                  <span className="select-none text-slate-700 mr-2">[{index + 1}]</span>
                  {log.type === "success" && "✔ "}
                  {log.type === "error" && "✖ "}
                  {log.text}
                </div>
              ))}
              
              {isSubmitting && (
                <div className="text-[11px] text-violet-500 animate-pulse flex items-center gap-1 mt-1">
                  <span className="w-1.5 h-3 bg-violet-500 inline-block animate-pulse" />
                  <span>TRANSMITTING DATA BLOCK...</span>
                </div>
              )}
            </div>

            {/* Completion Screen Actions */}
            {isCompleted && (
              <div className="flex flex-col items-center justify-center py-4 text-center space-y-4">
                <CheckCircle className="w-10 h-10 text-violet-400 animate-bounce" />
                <div>
                  <h4 className="text-sm font-semibold text-slate-200">TRANSMISSION DELIVERED</h4>
                  <p className="text-[11px] text-slate-500 mt-1 max-w-xs">
                    Eduarda Koop has received your query and will reply to you as soon as possible.
                  </p>
                </div>
                <button
                  id="btn-contact-reset"
                  onClick={handleResetForm}
                  className="bg-slate-900 border border-slate-800 hover:border-slate-700 hover:text-slate-200 text-slate-400 text-[10px] py-1.5 px-3.5 rounded transition-all cursor-pointer"
                >
                  [NEW TRANSMISSION]
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
