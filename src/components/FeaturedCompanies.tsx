
import { companies } from "@/types/demoData";
import CompanyCard from "./CompanyCard";

const FeaturedCompanies = () => (
  <section className="mb-10">
    <h2 className="text-2xl font-bold mb-5">Featured Companies</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {companies.map((company) => (
        <CompanyCard key={company.id} company={company} />
      ))}
    </div>
  </section>
);

export default FeaturedCompanies;
