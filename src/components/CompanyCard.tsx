
import { Company } from "@/types/demoData";
import { building } from "lucide-react";
import { Link } from "react-router-dom";

type Props = {
  company: Company;
};

const CompanyCard = ({ company }: Props) => (
  <div className="bg-white rounded-xl shadow hover:shadow-lg p-6 transition group flex flex-col items-center text-center">
    <img
      src={company.logo}
      alt={company.name}
      className="w-16 h-16 rounded-full object-cover border mb-2 group-hover:scale-105 transition"
      loading="lazy"
    />
    <h3 className="font-bold text-lg mb-1">{company.name}</h3>
    <div className="text-xs flex items-center gap-1 text-primary mb-1">
      <building size={14} />
      <span>{company.sector}</span>
    </div>
    <p className="mb-2 text-gray-600 text-sm">{company.description}</p>
    <Link to={`/companies/${company.id}`}>
      <button className="bg-primary text-white rounded-md px-4 py-1.5 text-sm hover:bg-primary/90 transition">View Jobs</button>
    </Link>
  </div>
);

export default CompanyCard;
