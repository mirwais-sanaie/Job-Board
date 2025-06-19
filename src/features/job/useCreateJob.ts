import { createNewJob } from "@/services/apiJobs";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useCreateJob() {
  const queryClient = useQueryClient();
  const {
    mutate: createJobFN,
    isPending,
    error,
  } = useMutation({
    mutationKey: ["jobs"],
    mutationFn: createNewJob,
    onSuccess: () => {
      console.log("Succeffuly created");
      queryClient.invalidateQueries({ queryKey: ["jobs"] });
    },
    onError: () => {
      console.log("Succfully failed");
    },
  });

  return { createJobFN, isPending, error };
}
