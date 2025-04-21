
import { Company } from "@/types/demoData";
import { Link } from "react-router-dom";
import { Building } from "lucide-react";

type Props = {
  company: Company;
};

const CompanyCard = ({ company }: Props) => {
  return (
    <Link
      to={`/companies/${company.id}`}
      className="bg-white rounded-xl shadow hover:shadow-lg p-5 transition flex flex-col"
    >
      <div className="flex items-center gap-3 mb-3">
        <img src={company.logo} alt={company.name} className="w-10 h-10 rounded-full object-cover border" />
        <h3 className="text-xl font-bold">{company.name}</h3>
      </div>
      <div className="text-xs text-gray-500 flex items-center gap-1 mb-2">
        <Building size={14} />
        <span>{company.sector}</span>
      </div>
      <p className="text-gray-600 text-sm mb-3">{company.description.slice(0, 80)}...</p>
    </Link>
  );
};

export default CompanyCard;
