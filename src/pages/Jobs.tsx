
import { jobs } from "@/types/demoData";
import JobCard from "@/components/JobCard";

const Jobs = () => (
  <div className="py-6">
    <h1 className="text-3xl font-bold mb-8">Browse Jobs</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  </div>
);

export default Jobs;
