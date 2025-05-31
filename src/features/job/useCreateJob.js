import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createNewJob } from "./apiJobs";
import { toast } from "react-toastify";

export function useCreateJob() {
  const queryClient = useQueryClient();
  const {
    mutate: createJob,
    isPending,
    error,
  } = useMutation({
    mutationFn: createNewJob,
    onSuccess: () => {
      toast.success("Your post successfully uploaded.");
      queryClient.invalidateQueries({ queryKey: "jobs" });
    },
    onError: () => {
      toast.error("Error while uploading..");
    },
  });

  return { createJob, isPending, error };
}
