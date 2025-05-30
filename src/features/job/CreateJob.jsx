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

  "&:hover": {
    backgroundColor: "black",
    color: "white",
  },
}));

const skills = ["JavaScript", "Java", "Python"];
function CreateJob() {
  return (
    <Dialog open={true}>
      <DialogTitle>
        <Box display={"flex"} className="justify-between my-2">
          <Typography>Post Job</Typography>
          <Close className="hover:bg-gray-200 cursor-pointer rounded-full !w-7 !h-7 p-0.5 text-lg " />
        </Box>
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <div className="w-full flex gap-2">
            <Grid className="w-1/2">
              <TextField label="Job Title *" variant="filled" fullWidth />
            </Grid>

            <Grid className="w-1/2">
              <Select defaultValue="FullTime" variant="filled" fullWidth>
                <MenuItem value="FullTime">Full time</MenuItem>
                <MenuItem value="PartTime">Part time</MenuItem>
                <MenuItem value="Contract">Contract</MenuItem>
              </Select>
            </Grid>
          </div>

          <div className="w-full flex gap-2">
            <Grid className="w-1/2">
              <TextField label="Company name *" variant="filled" fullWidth />
            </Grid>
            <Grid className="w-1/2">
              <TextField label="Company url *" variant="filled" fullWidth />
            </Grid>
          </div>

          <div className="w-full flex gap-2">
            <Grid className="w-1/2">
              <Select defaultValue="remote" variant="filled" fullWidth>
                <MenuItem value="remote">Remote</MenuItem>
                <MenuItem value="inOffice">In Office</MenuItem>
              </Select>
            </Grid>

            <Grid className="w-1/2">
              <TextField label="Job link" fullWidth variant="filled" />
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
            {skills.map((skill) => (
              <SkillChip key={skill}>{skill}</SkillChip>
            ))}
          </Box>
        </Box>
      </DialogContent>
      <DialogActions className="mx-4 mb-2" container spacing={2}>
        <Box className="flex justify-between w-full items-center">
          <Typography className="text-red-600" variant="caption">
            *Requied Fields
          </Typography>
          <Button variant="contained" disableElevation color="primary">
            Post
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
}

export default CreateJob;
