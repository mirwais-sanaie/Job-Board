import { useQuery } from "@tanstack/react-query";
import { getJobs } from "../../services/apiJobs";

export function useGetJob() {
  const {
    data: jobs,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["jobs"],
    queryFn: getJobs,
  });

  return { jobs, isLoading, error };
}
