
import * as React from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

type Props = {
  open: boolean;
  onOpenChange: (val: boolean) => void;
  jobTitle: string;
};

const ApplyJobModal = ({ open, onOpenChange, jobTitle }: Props) => {
  const { toast } = useToast();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [coverLetter, setCoverLetter] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      toast({
        title: "Application Submitted",
        description: `You successfully applied for "${jobTitle}"!`,
      });
      setName("");
      setEmail("");
      setCoverLetter("");
      setLoading(false);
      onOpenChange(false);
    }, 1000);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Apply for {jobTitle}</DialogTitle>
          <DialogDescription>
            Submit your application. We'll send your info to the company.
          </DialogDescription>
        </DialogHeader>
        <form className="space-y-4 mt-2" onSubmit={handleSubmit}>
          <div>
            <label className="text-sm font-medium block mb-1" htmlFor="appl-name">Name</label>
            <Input id="appl-name" required value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <label className="text-sm font-medium block mb-1" htmlFor="appl-email">Email</label>
            <Input id="appl-email" required type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label className="text-sm font-medium block mb-1" htmlFor="appl-letter">Cover Letter</label>
            <textarea
              id="appl-letter"
              value={coverLetter}
              onChange={(e) => setCoverLetter(e.target.value)}
              required
              className="w-full px-3 py-2 rounded border border-border bg-muted resize-none min-h-[80px]"
            />
          </div>
          <Button className="w-full mt-2" type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit Application"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ApplyJobModal;
