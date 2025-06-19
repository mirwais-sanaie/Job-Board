import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

function SearchBar() {
  return (
    <div
      className={`container mx-auto flex justify-between items-center gap-4 -mt-6 p-3 py-5 bg-background border`}
    >
      <Select defaultValue="full-time">
        <SelectTrigger className="w-1/3 py-6">
          <SelectValue placeholder="Job Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="full-time">Full Time</SelectItem>
          <SelectItem value="part-time">Part Time</SelectItem>
          <SelectItem value="contract">Contract</SelectItem>
        </SelectContent>
      </Select>

      <Select defaultValue="remote">
        <SelectTrigger className="w-1/3 py-6">
          <SelectValue placeholder="Location" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="remote">Remote</SelectItem>
          <SelectItem value="in-office">In-office</SelectItem>
        </SelectContent>
      </Select>

      <Button className="w-1/3 py-6 text-md">Search</Button>
    </div>
  );
}

export default SearchBar;
