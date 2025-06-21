import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import CreateJob from "@/features/Job/CreateJob";
import { ModeToggle } from "./ModeToggler";

function Header() {
  return (
    <div className="py-16 bg-muted">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <h1 className="font-bold text-4xl">Job Board App</h1>

          <ModeToggle />

          <Dialog>
            <DialogTrigger className="bg-white text-black px-7 py-3 rounded-md cursor-pointer">
              Post Job
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Post a Job</DialogTitle>
                <DialogDescription>
                  Fill out the form below to post your job listing.
                </DialogDescription>
              </DialogHeader>

              <CreateJob />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}

export default Header;
