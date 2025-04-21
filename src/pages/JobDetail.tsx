
import { useParams } from "react-router-dom";
import { getJobById, getCompanyById } from "@/types/demoData";
import { useState } from "react";
import ApplyJobModal from "@/components/ApplyJobModal";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const JobDetail = () => {
  const { id } = useParams();
  const job = getJobById(id || "");
  const company = job ? getCompanyById(job.companyId) : undefined;
  const [open, setOpen] = useState(false);

  if (!job || !company) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-xl shadow text-center">
          <div className="text-2xl font-bold text-destructive mb-2">Job not found</div>
          <Link to="/jobs" className="text-primary underline">Back to Jobs</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-xl shadow p-8 my-10">
      <div className="flex items-center mb-6">
        <Link to="/jobs" className="mr-4 text-muted-foreground hover:text-primary flex items-center gap-1">
          <ArrowLeft size={18} /> Back
        </Link>
        <img src={company.logo} alt={company.name} className="w-14 h-14 rounded-full border mr-4" />
        <div>
          <h2 className="text-xl font-bold">{job.title}</h2>
          <div className="text-gray-500 text-sm">{company.name} • {job.location}</div>
        </div>
      </div>
      <div className="mb-4">
        <span className="bg-secondary px-2 py-0.5 rounded text-xs mr-2">{job.sector}</span>
        <span className="bg-secondary px-2 py-0.5 rounded text-xs">{job.type}</span>
        <span className="ml-2 text-xs text-gray-400">Posted: {job.posted}</span>
      </div>
      <p className="mb-3">{job.description}</p>
      <div className="mb-4">
        <strong>Requirements:</strong>
        <pre className="bg-muted p-2 rounded text-sm mt-1 whitespace-pre-line">{job.requirements}</pre>
      </div>
      {job.perks && (
        <div className="mb-4">
          <strong>Perks:</strong>
          <span className="ml-2">{job.perks}</span>
        </div>
      )}
      <button
        className="bg-primary text-white rounded-md px-6 py-2 text-lg mt-4 hover:bg-primary/90 transition"
        onClick={() => setOpen(true)}
      >
        Apply Now
      </button>
      <ApplyJobModal open={open} onOpenChange={setOpen} jobTitle={job.title} />
    </div>
  );
};

export default JobDetail;
