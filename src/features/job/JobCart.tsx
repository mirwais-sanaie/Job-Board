import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Job } from "../../services/apiJobs";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";

function JobCart({ job }: { job: Job }) {
  const {
    title,
    companyName,
    date,
    skills,
    companyUrl,
    link,
    type,
    locationType,
  } = job;

  return (
    <div
      className={cn(
        "container mx-auto mt-2 p-4 border cursor-pointer transition-all hover:shadow-xl hover:border-l-[6px] hover:border-secondary rounded-lg"
      )}
    >
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        {/* Job title and company */}
        <div>
          <p className="text-lg font-semibold">{title}</p>
          <span className="inline-block text-sm bg-primary text-white rounded px-3 py-1 font-semibold mt-1">
            {companyName}
          </span>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap gap-2">
          {skills?.map((skill) => (
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
            {date} | {type} | {locationType}
          </p>

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="mt-2">
                Check
              </Button>
            </DialogTrigger>

            <DialogContent className="max-w-lg">
              <DialogHeader>
                <DialogTitle>{title}</DialogTitle>
                <DialogDescription>{companyName}</DialogDescription>
              </DialogHeader>

              <div className="my-4">
                <p className="mb-2 text-sm text-muted-foreground">
                  {date} | {type} | {locationType}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {skills?.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
                {/* <p>{description ?? "No description provided."}</p> */}
                <p>{link}</p>
                <p>{companyUrl}</p>
              </div>

              <DialogFooter>
                <DialogClose asChild>
                  <Button>Close</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}

export default JobCart;
