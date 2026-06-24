import { Experience, Project, Certification } from "./types";
import exp1Img from "./assets/images/regenerated_image_1782304839025.jpg";
import exp2Img from "./assets/images/regenerated_image_1782304839589.jpg";
import exp3Img from "./assets/images/regenerated_image_1782304839862.jpg";
import lead1Img from "./assets/images/regenerated_image_1782305191909.jpg";
import lead2Img from "./assets/images/regenerated_image_1782305192337.jpg";

export const education = {
  degree: "Bachelor of Science in Cybersecurity",
  institution: "University of South Florida",
  location: "Tampa, FL",
  graduation: "May 2026",
  gpa: "3.97",
};

export const certifications: Certification[] = [
  {
    name: "Blue Team Level 1 (BTL1)",
    issuer: "Security Blue Team",
    status: "active",
    iconName: "ShieldAlert",
  },
  {
    name: "Google Cybersecurity Professional Certificate",
    issuer: "Google",
    status: "active",
    iconName: "FileCheck",
  },
  {
    name: "CompTIA Security+",
    issuer: "CompTIA",
    status: "in-progress",
    iconName: "Lock",
  },
  {
    name: "SC-900: Microsoft Security Fundamentals",
    issuer: "Microsoft",
    status: "in-progress",
    iconName: "Network",
  },
];

export const experiences: Experience[] = [
  {
    id: "exp-1",
    role: "Security Analyst",
    company: "Cyber Florida",
    location: "Tampa, FL",
    period: "Aug 2025 – Present",
    imageUrl: exp1Img,
    achievements: [
      "Performed digital forensics and incident response (DFIR) investigations on 100+ escalated SIEM and IDS alerts, triaging, containing, and documenting findings in under 1 hour.",
      "Published 4 Threat Advisories covering the BRICKSTORM APT intrusion campaign, Qilin ransomware, the BIG-IP Integrity vulnerability, and AI-Powered Cyber Threats, translating all-source intelligence into actionable reporting.",
      "Developed a threat intelligence automation initiative to ingest, prioritize, and cluster cyber news and vulnerability updates, improving research efficiency and supporting weekly Threat Advisories.",
    ],
  },
  {
    id: "exp-2",
    role: "Cybersecurity Intern (Cyber Investigations Team)",
    company: "Qualcomm",
    location: "San Diego, CA",
    period: "May 2025 – Aug 2025",
    imageUrl: exp2Img,
    achievements: [
      "Designed and implemented a client-agnostic secure file access system using the Valet Key Pattern, applying temporary, permission-limited SAS tokens to enforce least-privilege access controls and automate secure file transfers.",
      "Developed automated detection logic and security rules in Wiz to monitor AI-related activity across cloud environments, improving visibility into AI resource usage and strengthening detection capabilities.",
      "Built a Databricks dashboard with SQL queries to assess device compliance with Zero Trust policies, restricting unauthorized network access, and improving policy enforcement.",
      "Organized and developed challenges for a company-wide Capture the Flag (CTF) competition for Security Awareness Month, engaging 50,000+ employees and strengthening security culture.",
    ],
  },
  {
    id: "exp-3",
    role: "Security Operations Intern",
    company: "ReliaQuest",
    location: "Tampa, FL",
    period: "Jun 2024 – Dec 2024",
    imageUrl: exp3Img,
    achievements: [
      "Investigated and responded to 300+ security incidents in a high-volume SOC environment, maintaining a false positive rate under 20% and improving efficiency and accuracy in threat detection.",
      "Executed real-time incident response support in a 24/7 Security Operations Center (SOC), identifying, triaging, and containing threats to strengthen organizational security.",
      "Researched and documented emerging vulnerabilities and exploits, providing threat intelligence insights in support of proactive defense strategies and risk mitigation.",
    ],
  },
];

export const leadershipAndVolunteer: Experience[] = [
  {
    id: "lead-1",
    role: "Vice-President",
    company: "WiCyS at the University of South Florida (Women in Cybersecurity)",
    location: "Tampa, FL",
    period: "Jan 2025 – May 2026",
    imageUrl: lead1Img,
    achievements: [
      "Led the development of hands-on programs and national conference preparation, directly benefiting 250+ members and securing full sponsorship for 8 attendees to attend the WiCyS National Conference.",
      "Directed the planning and execution of 20+ events annually, including technical workshops and professional panels, increasing member engagement and enhancing professional development.",
      "Drove the organization to achieve the Outstanding Student Organization Award at the University of South Florida, recognizing excellence in impact, leadership, and engagement.",
    ],
  },
  {
    id: "lead-2",
    role: "President",
    company: "BRASA Connect",
    location: "Tampa, FL",
    period: "May 2025 – May 2026",
    imageUrl: lead2Img,
    achievements: [
      "Led the largest Brazilian student-led conference in Florida, managing a 28-person team across 7 functional teams, and successfully engaging over 300 stakeholders, showcasing executive-level management and collaboration.",
      "Implemented effective project management processes that improve communication, resource allocation, and strategic decision-making, resulting in enhanced productivity and a 98% satisfaction rate.",
      "Represented the organization externally, strengthening relationships with sponsors, universities, vendors, and media partners to ensure successful collaboration.",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "threat-intel-pipeline",
    description:
      "Automation pipeline that ingests, deduplicates, and clusters cyber news and CVE feeds, then prioritizes them to power weekly threat advisories.",
    tags: ["Python", "NLP", "Threat Intel", "Automation"],
    githubUrl: "https://github.com/eduardakoop/threat-intel-pipeline",
    demoUrl: "#",
  },
];

export interface Publication {
  id: string;
  title: string;
  publisher: string;
  date: string;
  description: string;
  url: string;
  category: "Threat Advisory" | "Student Spotlight" | "Research";
  tags: string[];
}

export const publications: Publication[] = [
  {
    id: "pub-1",
    title: "AI-Powered Cyber Threats: From Emerging Risks to Practical Defenses",
    publisher: "Cyber Florida",
    date: "Apr 2026",
    description: "An informational report examining emerging AI-driven attack vectors -including deepfake-enabled social engineering, automated malware campaigns, prompt injection, AI-assisted spear phishing, and more.",
    url: "https://cyberflorida.org/ai-powered-cyber-threats-from-emerging-to-risks-to-practical-defenses/",
    category: "Threat Advisory",
    tags: ["AI Security", "Threat Intel", "Emerging Threats"],
  },
  {
    id: "pub-2",
    title: "Qilin Ransomware – A Double Extortion Campaign",
    publisher: "Cyber Florida",
    date: "Dec 2025",
    description: "A technical threat report examining the Qilin ransomware threat landscape, including its tactics, techniques, and procedures (TTPs), indicators of compromise (IOCs), and recommended defensive strategies.",
    url: "https://cyberflorida.org/qilin-ransomware-a-double-extortion-campaign/",
    category: "Threat Advisory",
    tags: ["Ransomware", "Threat Intel", "Indicators of Compromise"],
  },
  {
    id: "pub-3",
    title: "BRICKSTORM APT Intrusion Campaign",
    publisher: "Cyber Florida",
    date: "Dec 2025",
    description: "A technical threat report analyzing the BRICKSTORM APT campaign, including its threat landscape, targeted sectors, tactics, techniques, and procedures (TTPs), indicators of compromise, threat hunting guidance, and defensive strategies.",
    url: "https://cyberflorida.org/big-ip-integrity-vulnerability-threat-report-2/",
    category: "Threat Advisory",
    tags: ["BRICKSTORM", "Threat Intel", "UNC5221"],
  },
  {
    id: "pub-4",
    title: "BIG-IP Integrity Vulnerability Threat Report",
    publisher: "Cyber Florida",
    date: "Nov 2025",
    description: "A technical threat report analyzing CVE-2025-58424 affecting F5 BIG-IP systems, including the threat landscape, affected modules, adversary tactics and techniques, detection indicators, and recommended mitigation strategies.",
    url: "https://cyberflorida.org/big-ip-integrity-vulnerability-threat-report/",
    category: "Threat Advisory",
    tags: ["CVE-2025-58424", "F5 BIG-IP", "Threat Report"],
  },
  {
    id: "pub-5",
    title: "USF Bellini College: From Criminology to Cybersecurity",
    publisher: "University of South Florida",
    date: "Sep 2025",
    description: "A featured USF Bellini College article highlighting my transition from criminology to cybersecurity, my hands-on learning experience at USF, leadership roles in student organizations, and cybersecurity internship with Qualcomm.",
    url: "https://www.usf.edu/ai-cybersecurity-computing/news/2025/eduarda_koop.aspx",
    category: "Student Spotlight",
    tags: ["Student Spotlight"],
  },
];

export const skillsByCategory = {
  "Programming & Scripting": ["Python", "C", "SQL", "PowerShell", "Shell Scripting"],
  "Technical Competencies": [
    "Incident Response",
    "Security Operations (SOC)",
    "Digital Forensics (DFIR)",
    "Network Security",
    "Cloud Security (AWS/Azure)",
    "Identity & Access Management (IAM)",
    "Log Analysis & Triaging",
    "Threat Intelligence",
    "Zero Trust Architecture",
    "AI Governance & Security",
  ],
  "Tools & Platforms": [
    "Splunk",
    "CrowdStrike Falcon",
    "QRadar",
    "Microsoft Defender",
    "Google SecOps",
    "Wiz (Cloud Security)",
    "Metasploit",
    "Burp Suite",
    "Wireshark",
    "Nmap",
    "Docker",
    "Databricks",
  ],
  "Languages & Extra": [
    "Portuguese (Native)",
    "English (Fluent)",
    "Spanish (Basic)",
  ],
};
