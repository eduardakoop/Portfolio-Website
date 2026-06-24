import { useEffect, useState } from "react";

const roles = [
  "Cybersecurity Analyst",
  "Incident Response & Security Operations",
  "USF Cybersecurity Graduate",
  "Threat Intelligence",
  "Artificial Intelligence",
  "Former Qualcomm & ReliaQuest Intern",
  "Passionate About Cybersecurity!"
];

export default function TerminalTyping() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullText = roles[roleIndex];

    const handleType = () => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          setTypingSpeed(1800); // Wait before starting to delete
          setIsDeleting(true);
        } else {
          setTypingSpeed(70);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(400); // Wait before typing next
        } else {
          setTypingSpeed(35);
        }
      }
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, typingSpeed]);

  return (
    <span id="terminal-typing-text" className="bg-gradient-to-r from-violet-400 via-indigo-400 to-fuchsia-400 bg-clip-text text-transparent font-sans font-bold tracking-wide drop-shadow-[0_0_12px_rgba(139,92,246,0.25)]">
      {currentText}
      <span className="animate-pulse text-fuchsia-400 font-bold ml-1">|</span>
    </span>
  );
}
