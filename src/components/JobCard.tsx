
import { Job, Company, getCompanyById } from "@/types/demoData";
import { briefcase, building, arrow-right } from "lucide-react";
import { Link } from "react-router-dom";

type Props = {
  job: Job;
};

const JobCard = ({ job }: Props) => {
  const company = getCompanyById(job.companyId) as Company;

  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg p-5 transition flex flex-col">
      <div className="flex items-center gap-2 mb-2">
        <img src={company.logo} alt={company.name} className="w-8 h-8 rounded-full object-cover border" />
        <span className="font-semibold">{company.name}</span>
      </div>
      <h3 className="text-lg font-bold">{job.title}</h3>
      <div className="text-xs text-gray-500 flex items-center gap-2 mb-2">
        <briefcase size={14} />
        <span>{job.type}</span>
        <building size={14} />
        <span>{job.sector}</span>
        <span>•</span>
        <span>{job.location}</span>
      </div>
      <p className="text-gray-600 text-sm flex-1">{job.description.slice(0, 60)}...</p>
      <Link to={`/jobs/${job.id}`} className="mt-4">
        <button className="w-full bg-primary text-white rounded-md px-4 py-1.5 text-sm flex items-center justify-center gap-1 hover:bg-primary/90 transition group">
          View Details <arrow-right size={16} />
        </button>
      </Link>
    </div>
  );
};

export default JobCard;
