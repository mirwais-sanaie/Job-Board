/* eslint-disable no-unused-vars */
import { Close } from "@material-ui/icons";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  MenuItem,
  Select,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { useGeneralContext } from "../../contexts/GeneralContextApi";
import { useState } from "react";
import { useCreateJob } from "./useCreateJob";

const SkillChip = styled("div")(({ theme }) => ({
  margin: theme.spacing(0.5),
  padding: theme.spacing(0.75),
  fontSize: "14.5px",
  borderRadius: "10px",
  fontWeight: 600,
  //   backgroundColor: theme.palette.secondary.main,
  backgroundColor: "White",
  color: "#000",
  border: "1px solid #000",
  cursor: "pointer",
  position: "relative",

  "&:hover": {
    backgroundColor: "black",
    color: "white",
  },
}));

const predeFinedSkills = [
  "JavaScript",
  "Java",
  "Python",
  "C++",
  "C#",
  "Ruby",
  "Go",
];

function CreateJob() {
  const { isModalOpen, setIsModalOpen } = useGeneralContext();
  const { createJob, isPending, error } = useCreateJob();
  const [jobType, setJobType] = useState("");
  const [title, setTitle] = useState("");
  const [locationType, setLocationType] = useState("");
  const [link, setLink] = useState("");
  const [companyUrl, setCompanyUrl] = useState("");
  const [companyName, setCompanyName] = useState("");

  const [selectedSkills, setSelectedSkills] = useState([]);

  function handleSelectedSkill(skill) {
    if (!skill) return;
    if (selectedSkills.includes(skill)) {
      return;
    }
    setSelectedSkills([...selectedSkills, skill]);
  }

  function handleDeleteSkill(skill) {
    if (!skill) return;
    const filtered = selectedSkills.filter((lastSkill) => lastSkill !== skill);
    setSelectedSkills(filtered);
  }

  function handleSubmitData() {
    if (
      !companyName ||
      !companyUrl ||
      !link ||
      !locationType ||
      !title ||
      !jobType
    )
      return null;
    const newJob = {
      companyName,
      companyUrl,
      link,
      locationType,
      title,
      type: jobType,
      skills: selectedSkills,
    };
    createJob(newJob);

    setSelectedSkills([]);
    setTitle("");
    setCompanyName("");
    setCompanyUrl("");
    setLink("");
    setLocationType("");
    setJobType("");
  }
  return (
    <Dialog open={isModalOpen}>
      <DialogTitle>
        <Box display={"flex"} className="justify-between my-2">
          <Typography>Post Job</Typography>
          <button onClick={() => setIsModalOpen((isOpen) => !isOpen)}>
            <Close className="hover:bg-gray-200 cursor-pointer rounded-full !w-7 !h-7 p-0.5 text-lg " />
          </button>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <div className="w-full flex gap-2">
            <Grid className="w-1/2">
              <TextField
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                label="Job Title *"
                variant="filled"
                fullWidth
              />
            </Grid>

            <Grid className="w-1/2">
              <Select
                value={jobType}
                onChange={(e) => setJobType(e.target.value)}
                variant="filled"
                fullWidth
              >
                <MenuItem value="FullTime">Full time</MenuItem>
                <MenuItem value="PartTime">Part time</MenuItem>
                <MenuItem value="Contract">Contract</MenuItem>
              </Select>
            </Grid>
          </div>

          <div className="w-full flex gap-2">
            <Grid className="w-1/2">
              <TextField
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                label="Company name *"
                variant="filled"
                fullWidth
              />
            </Grid>
            <Grid className="w-1/2">
              <TextField
                value={companyUrl}
                onChange={(e) => setCompanyUrl(e.target.value)}
                label="Company url *"
                variant="filled"
                fullWidth
              />
            </Grid>
          </div>

          <div className="w-full flex gap-2">
            <Grid className="w-1/2">
              <Select
                value={locationType}
                onChange={(e) => setLocationType(e.target.value)}
                defaultValue="remote"
                variant="filled"
                fullWidth
              >
                <MenuItem value="remote">Remote</MenuItem>
                <MenuItem value="inOffice">In Office</MenuItem>
              </Select>
            </Grid>

            <Grid className="w-1/2">
              <TextField
                value={link}
                onChange={(e) => setLink(e.target.value)}
                label="Job link"
                fullWidth
                variant="filled"
              />
            </Grid>
          </div>

          <Grid className="w-full">
            <TextField
              label="Job description"
              fullWidth
              variant="filled"
              multiline
              rows={3}
            />
          </Grid>
        </Grid>

        <Box mt={2}>
          <Typography>Skills</Typography>
          <Box display={"flex"}>
            {predeFinedSkills.map((skill) => (
              <SkillChip onClick={() => handleSelectedSkill(skill)} key={skill}>
                {skill}
              </SkillChip>
            ))}
          </Box>

          <Box mt={2} display={"flex"}>
            {selectedSkills?.map((skill) => (
              <SkillChip key={skill} className="group cursor-alias">
                <span className="absolute -top-2.5 -right-2 hidden group-hover:block">
                  <button onClick={() => handleDeleteSkill(skill)}>
                    <Close className="text-red-600 !w-5 !h-5 bg-gray-200 rounded-full cursor-pointer" />
                  </button>
                </span>
                <span>{skill}</span>
              </SkillChip>
            ))}
          </Box>
        </Box>
      </DialogContent>
      <DialogActions className="mx-4 mb-2" spacing={2}>
        <Box className="flex justify-between w-full items-center">
          <Typography className="text-red-600" variant="caption">
            *Requied Fields
          </Typography>
          <Button
            onClick={handleSubmitData}
            disabled={isPending}
            variant="contained"
            disableElevation
            color="primary"
          >
            {isPending ? "Posting..." : "Post"}
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
}

export default CreateJob;
