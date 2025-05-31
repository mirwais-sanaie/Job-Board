import Header from "./ui/Header";
import SearchBar from "./ui/SearchBar";
import JobCart from "./features/job/JobCart";
import { useJobs } from "./features/job/useJobs";
import Loader from "./ui/Loader";
import { toast, ToastContainer } from "react-toastify";
import CreateJob from "./features/job/CreateJob";

function AppLayout() {
  const { jobs, error, isLoading } = useJobs();

  if (error) {
    toast.error("Error fetching data...");
  }

  return (
    <div>
      <Header />
      <SearchBar />
      {isLoading && (
        <div className="flex justify-center mt-20">
          <Loader />
        </div>
      )}
      {error && <p>error</p>}
      {jobs?.map((job) => (
        <JobCart key={job.title} job={job} />
      ))}
      <CreateJob />

      <ToastContainer />
    </div>
  );
}

export default AppLayout;
