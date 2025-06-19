import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { X } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { useCreateJob } from "./useCreateJob";

const predeFinedSkills = [
  "JavaScript",
  "React",
  "Node.js",
  "Python",
  "Java",
  "C#",
  "Ruby",
  "PHP",
  "SQL",
  "HTML",
  "CSS",
];
interface CreateJobFormData {
  title: string;
  type: string;
  companyName: string;
  companyUrl: string;
  locationType: string;
  link: string;
  date: string;
  skill: [];
}

function CreateJob() {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const { createJobFN, isPending, error } = useCreateJob();

  const { handleSubmit, register, control, reset } =
    useForm<CreateJobFormData>();

  function onSubmit(data: CreateJobFormData) {
    const finalData = { ...data, skills: selectedSkills };
    createJobFN(finalData);
    reset();
    setSelectedSkills([]);
  }
  function onError(errors: unknown) {
    console.log(errors);
  }

  function handleSelectedSkill(skill: string) {
    if (!skill || selectedSkills.includes(skill)) return;
    setSelectedSkills([...selectedSkills, skill]);
  }
  function handleDeleteSkill(skill: string) {
    setSelectedSkills(selectedSkills.filter((s) => s !== skill));
  }

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      {/* First row */}
      <div className="flex gap-4">
        <div className="w-1/2 space-y-1">
          <Label>Job Title *</Label>
          <Input
            type="text"
            {...register("title", {
              required: "Job title is required",
            })}
          />
        </div>
        <div className="w-1/2 space-y-1">
          <Label>Job Type *</Label>
          <Controller
            name="type"
            control={control}
            rules={{ required: "Job type is required" }}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select job type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="FullTime">Full time</SelectItem>
                  <SelectItem value="PartTime">Part time</SelectItem>
                  <SelectItem value="Contract">Contract</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
        </div>
      </div>

      {/* Second row */}
      <div className="flex gap-4 mt-4">
        <div className="w-1/2 space-y-1">
          <Label>Company Name *</Label>
          <Input
            type="text"
            {...register("companyName", {
              required: "Company Name is required",
            })}
          />
        </div>
        <div className="w-1/2 space-y-1">
          <Label>Company URL *</Label>
          <Input
            type="text"
            {...register("companyUrl", {
              required: "Company Url is required",
            })}
          />
        </div>
      </div>

      {/* Third row */}
      <div className="flex gap-4 mt-4">
        <div className="w-1/2 space-y-1">
          <Label>Location Type</Label>
          <Controller
            name="locationType"
            control={control}
            rules={{ required: "Location type is required" }}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select location type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="remote">Remote</SelectItem>
                  <SelectItem value="inOffice">In Office</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
        </div>

        <div className="w-1/2 space-y-1">
          <Label>Job Link</Label>
          <Input
            type="text"
            {...register("link", {
              required: "Job link is required",
            })}
          />
        </div>
      </div>

      {/* Description */}
      <div className="mt-4 space-y-1">
        <Label>Job Description</Label>
        <Textarea rows={3} />
      </div>

      {/* Skills */}
      <div className="mt-6">
        <Label className="mb-2 block">Skills</Label>
        <div className="flex flex-wrap gap-2">
          {predeFinedSkills.map((skill) => (
            <Badge
              key={skill}
              className="cursor-pointer hover:bg-primary"
              onClick={() => handleSelectedSkill(skill)}
            >
              {skill}
            </Badge>
          ))}
        </div>

        {selectedSkills.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {selectedSkills.map((skill) => (
              <div
                key={skill}
                className="relative inline-flex items-center pr-2 bg-muted rounded-full text-sm"
              >
                <span className="px-3 py-1">{skill}</span>
                <button
                  onClick={() => handleDeleteSkill(skill)}
                  className="absolute -top-1.5 -right-1.5"
                >
                  <X className="w-4 h-4 text-red-500 bg-white rounded-full" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mt-6">
        <button
          type="submit"
          className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 transition-colors"
        >
          {isPending ? "Creating..." : "Post Job"}
        </button>
        {error && "Error while creating job!"}
      </div>
    </form>
  );
}

export default CreateJob;
