import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils"; // Optional utility for conditional classes

// type Job = {
//   title: string;
//   companyName: string;
//   date: string;
//   skills?: string[];
// };
const predeFinedSkills = [
  "JavaScript",
  "React",
  "Node.js",
  "Python",
  "Java",
  "C#",
  "Ruby",
  "PHP",
  "SQL",
  "HTML",
  "CSS",
];

function JobCart() {
  return (
    <div
      className={cn(
        "container mx-auto mt-2 p-4 border cursor-pointer transition-all hover:shadow-xl hover:border-l-[6px] hover:border-secondary rounded-lg"
      )}
    >
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        {/* Job title and company */}
        <div>
          <p className="text-lg font-semibold">title</p>
          <span className="inline-block text-sm bg-primary text-white rounded px-3 py-1 font-semibold mt-1">
            companyName
          </span>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap gap-2">
          {predeFinedSkills.map((skill) => (
            <Badge
              key={skill}
              className="text-sm font-semibold bg-foreground text-white rounded px-3 py-1"
            >
              {skill}
            </Badge>
          ))}
        </div>

        {/* Meta info and action */}
        <div className="flex flex-col items-end">
          <p className="text-xs text-muted-foreground">
            date | Full Time | Remote
          </p>
          <Button variant="outline" className="mt-2">
            Check
          </Button>
        </div>
      </div>
    </div>
  );
}

export default JobCart;
