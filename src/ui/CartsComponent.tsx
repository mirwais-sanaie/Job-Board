import JobCart from "@/features/Job/JobCart";
import { useGetJob } from "@/features/Job/useGetJob";
import Loader from "./Loader";
import { useSearchParams } from "react-router-dom";

function CartsComponent() {
  const { jobs, isLoading, error } = useGetJob();
  const [searchParams] = useSearchParams();

  const filteredJobType = searchParams.get("jobType") || "all";
  const filteredLocation = searchParams.get("location") || "all";

  if (isLoading) return <Loader />;
  if (error) return <div className="text-red-500">Error loading jobs.</div>;

  const filteredJobs = jobs?.filter((job) => {
    const matchJobType =
      filteredJobType === "all" || job.type === filteredJobType;
    const matchLocation =
      filteredLocation === "all" || job.locationType === filteredLocation;

    return matchJobType && matchLocation;
  });

  return (
    <div className="pb-20 pt-5">
      {filteredJobs?.length ? (
        filteredJobs.map((job) => <JobCart job={job} key={job.id} />)
      ) : (
        <div className="text-center text-gray-500">No jobs found.</div>
      )}
    </div>
  );
}

export default CartsComponent;
