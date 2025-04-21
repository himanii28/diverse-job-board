
import FeaturedJobs from "@/components/FeaturedJobs";
import FeaturedCompanies from "@/components/FeaturedCompanies";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Search } from "lucide-react";

const Index = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/jobs?q=${encodeURIComponent(query)}`);
    } else {
      navigate("/jobs");
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      <div className="max-w-4xl mx-auto py-10 md:pt-16 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-primary to-purple-400 text-transparent bg-clip-text mb-2">
          Discover Your Next Career Opportunity
        </h1>
        <p className="text-gray-600 mb-6 text-lg font-medium">
          Apply for diverse jobs across sectors — Technology, Healthcare, Finance, and more.
        </p>
        <form className="flex max-w-2xl mx-auto items-center gap-2 bg-white rounded-full shadow px-4 py-2 mb-10" onSubmit={handleSearch}>
          <Search size={20} className="text-gray-400" />
          <input 
            className="flex-1 outline-none border-none bg-transparent px-2 py-1 text-base"
            placeholder="Search jobs or companies..."
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          <button type="submit" className="bg-primary px-5 py-2 rounded-full text-white font-semibold hover:bg-primary/90 transition">
            Search
          </button>
        </form>
      </div>

      <div className="max-w-5xl mx-auto px-4">
        <FeaturedJobs />
        <FeaturedCompanies />
      </div>
    </div>
  );
};

export default Index;
