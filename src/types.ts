export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
  imageUrl?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  metrics?: string; // High-level security metric or impact
}

export interface Certification {
  name: string;
  issuer: string;
  status: "active" | "in-progress";
  iconName: string;
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  text: string;
  timestamp: string;
}
