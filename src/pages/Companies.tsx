
import { companies } from "@/types/demoData";
import CompanyCard from "@/components/CompanyCard";

const Companies = () => (
  <div className="py-6">
    <h1 className="text-3xl font-bold mb-8">All Companies</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {companies.map((company) => (
        <CompanyCard key={company.id} company={company} />
      ))}
    </div>
  </div>
);

export default Companies;
