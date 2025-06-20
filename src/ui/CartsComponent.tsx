import JobCart from "@/features/Job/JobCart";
import { useGetJob } from "@/features/Job/useGetJob";
import Loader from "./Loader";

function CartsComponent() {
  const { jobs, isLoading, error } = useGetJob();

  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    <div>Error</div>;
  }
  return (
    <div className="pb-20 pt-5">
      {jobs?.map((job) => (
        <JobCart job={job} key={job.id} />
      ))}
    </div>
  );
}

export default CartsComponent;
