
import { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, Lock, User } from "lucide-react";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignup(e: React.FormEvent) {
    e.preventDefault();
    // This is a placeholder: no real registration
    alert("Signup submitted!");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-secondary/30 to-purple-200">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow">
        <h2 className="text-3xl font-bold mb-2 text-center">Sign Up</h2>
        <p className="mb-6 text-gray-600 text-center">Create a new account to start applying.</p>
        <form className="space-y-4" onSubmit={handleSignup}>
          <div>
            <label className="text-gray-700 font-medium flex items-center gap-2">
              <User size={18} /> Name
            </label>
            <Input
              type="text"
              required
              placeholder="Your Name"
              value={name}
              onChange={e => setName(e.target.value)}
              className="mt-1"
            />
          </div>
          <div>
            <label className="text-gray-700 font-medium flex items-center gap-2">
              <Mail size={18} /> Email
            </label>
            <Input
              type="email"
              required
              placeholder="your@email.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="mt-1"
            />
          </div>
          <div>
            <label className="text-gray-700 font-medium flex items-center gap-2">
              <Lock size={18} /> Password
            </label>
            <Input
              type="password"
              required
              placeholder="••••••••"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="mt-1"
            />
          </div>
          <Button type="submit" className="w-full mt-2">Sign Up</Button>
        </form>
        <div className="text-sm text-center text-gray-500 mt-5">
          Already have an account?
          <Link to="/login" className="ml-1 text-primary font-medium hover:underline">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
