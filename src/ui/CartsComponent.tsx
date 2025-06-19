import JobCart from "@/features/Job/JobCart";
import { useGetJob } from "@/features/Job/useGetJob";
function CartsComponent() {
  const { jobs, isLoading, error } = useGetJob();

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  if (error) {
    <div>Error</div>;
  }
  return (
    <div>
      {jobs?.map((job) => (
        <JobCart job={job} key={job.id} />
      ))}
    </div>
  );
}

export default CartsComponent;
