import { useQuery } from "@tanstack/react-query";
import { getJobs } from "./apiJobs";

export function useJobs() {
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
