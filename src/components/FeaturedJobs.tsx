
import { jobs } from "@/types/demoData";
import JobCard from "./JobCard";

const FeaturedJobs = () => (
  <section className="mb-10">
    <h2 className="text-2xl font-bold mb-5">Featured Jobs</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {jobs.slice(0, 3).map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  </section>
);

export default FeaturedJobs;
