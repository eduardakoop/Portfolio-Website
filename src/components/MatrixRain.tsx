import { useEffect, useRef } from "react";

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;

    const resizeCanvas = () => {
      if (canvas && canvas.parentElement) {
        canvas.width = canvas.parentElement.clientWidth || window.innerWidth;
        canvas.height = canvas.parentElement.clientHeight || window.innerHeight;
      }
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Custom characters inspired by cryptography and cybersecurity
    const chars = "01010110010011011100010101010101101SYSTEM SECURE BYPASS AUTHORIZED USF COMPTIA SPLUNK WIZ CLOUD FORTRESS ".split("");
    const fontSize = 12;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = "rgba(9, 13, 22, 0.08)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "rgba(139, 92, 246, 0.12)"; // Subtle cyber violet code drops
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        // Add variations of violet, fuchsia, blue for high-tech cosmic richness
        if (Math.random() > 0.95) {
          ctx.fillStyle = "#ec4899"; // Pink spark
        } else if (Math.random() > 0.8) {
          ctx.fillStyle = "#3b82f6"; // Blue spark
        } else {
          ctx.fillStyle = "rgba(139, 92, 246, 0.14)";
        }

        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.985) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 40);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      id="matrix-rain"
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-30 pointer-events-none"
    />
  );
}
