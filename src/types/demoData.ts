
export type Company = {
  id: string;
  name: string;
  logo: string;
  description: string;
  sector: string;
};

export type Job = {
  id: string;
  title: string;
  companyId: string;
  location: string;
  sector: string;
  type: string;
  posted: string;
  description: string;
  requirements: string;
  perks?: string;
};

export const companies: Company[] = [
  {
    id: "1",
    name: "SkyWeb",
    logo: "https://randomuser.me/api/portraits/men/32.jpg",
    description: "Building the future of cloud connectivity.",
    sector: "Technology",
  },
  {
    id: "2",
    name: "HealthBridge",
    logo: "https://randomuser.me/api/portraits/women/44.jpg",
    description: "Revolutionizing digital healthcare solutions.",
    sector: "Healthcare",
  },
  {
    id: "3",
    name: "EcoFinance",
    logo: "https://randomuser.me/api/portraits/men/85.jpg",
    description: "Greener banking and affordable investments.",
    sector: "Finance",
  },
];

export const jobs: Job[] = [
  {
    id: "101",
    title: "Frontend Developer",
    companyId: "1",
    location: "Remote",
    sector: "Technology",
    type: "Full-time",
    posted: "2025-04-10",
    description: "Work with React and TypeScript to create seamless cloud interfaces. Help design the next generation of dashboards.",
    requirements: "- 2+ years React\n- TypeScript experience\n- Figma knowledge",
    perks: "100% remote, Gym membership, Home office stipend",
  },
  {
    id: "102",
    title: "Healthcare Product Designer",
    companyId: "2",
    location: "San Francisco, CA",
    sector: "Healthcare",
    type: "Full-time",
    posted: "2025-03-29",
    description: "Design apps that improve wellness for millions. Collaborate closely with clinicians and engineers.",
    requirements: "- 3+ years UI/UX\n- Healthcare app experience\n- User research skills",
  },
  {
    id: "103",
    title: "Junior Accountant",
    companyId: "3",
    location: "New York, NY",
    sector: "Finance",
    type: "Part-time",
    posted: "2025-04-07",
    description: "Assist with monthly reconciliations and sustainability reporting. Great for recent graduates!",
    requirements: "- Bachelor’s in Accounting or similar\n- Excel/Sheets expertise",
    perks: "Mentorship, Promotion pathway, Hybrid work",
  },
  {
    id: "104",
    title: "DevOps Engineer",
    companyId: "1",
    location: "Berlin, DE",
    sector: "Technology",
    type: "Full-time",
    posted: "2025-04-19",
    description: "Maintain and automate CI/CD pipelines for robust deployments. Cloud and Docker expertise required.",
    requirements: "- 2+ years DevOps\n- Docker, AWS\n- Scripting proficiency",
  },
];

export function getCompanyById(id: string): Company | undefined {
  return companies.find((c) => c.id === id);
}

export function getJobsByCompany(companyId: string): Job[] {
  return jobs.filter((j) => j.companyId === companyId);
}

export function getJobById(id: string): Job | undefined {
  return jobs.find((j) => j.id === id);
}
