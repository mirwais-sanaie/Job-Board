import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "react-router-dom";

function SearchBar() {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleSetJobType(value: string) {
    searchParams.set("jobType", value);
    setSearchParams(searchParams);
  }
  function handleSetLocationType(value: string) {
    searchParams.set("location", value);
    setSearchParams(searchParams);
  }

  return (
    <div
      className={`container mx-auto flex justify-between items-center gap-4 -mt-6 p-3 py-5 bg-background border`}
    >
      <Select defaultValue="all" onValueChange={handleSetJobType}>
        <SelectTrigger className="w-1/3 py-6">
          <SelectValue placeholder="Job Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="FullTime">Full Time</SelectItem>
          <SelectItem value="PartTime">Part Time</SelectItem>
          <SelectItem value="Contract">Contract</SelectItem>
        </SelectContent>
      </Select>

      <Select defaultValue="all" onValueChange={handleSetLocationType}>
        <SelectTrigger className="w-1/3 py-6">
          <SelectValue placeholder="Location" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="remote">Remote</SelectItem>
          <SelectItem value="inOffice">In-office</SelectItem>
        </SelectContent>
      </Select>

      <Button className="w-1/3 py-6 text-md">Search</Button>
    </div>
  );
}

export default SearchBar;
