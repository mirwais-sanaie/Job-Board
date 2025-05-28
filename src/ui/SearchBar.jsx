import { Box, Button, MenuItem, Select } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";

const styles = makeStyles({
  wrapper: {
    backgroundColor: "#fff",
    display: "flex",
    boxShadow: "1px 0px 5px rgba(0 , 0 , 0 , 0.1)",
    borderRadius: "5px",
    "& > *": {
      flex: "1",
      height: "45px",
      margin: "8px",
    },
  },
});

function SearchBar() {
  const styleCom = styles();

  return (
    <Box
      className={`${styleCom.wrapper} container mx-auto items-center -mt-6 p-3`}
    >
      <Select
        disableUnderline
        variant="filled"
        defaultValue="full-time"
        className="pb-4"
      >
        <MenuItem value="full-time">Full Time</MenuItem>
        <MenuItem value="part-time">Part Time</MenuItem>
        <MenuItem value="contract">Contract</MenuItem>
      </Select>
      <Select
        disableUnderline
        variant="filled"
        defaultValue="remote"
        className="pb-4"
      >
        <MenuItem value="remote">Remote</MenuItem>
        <MenuItem value="in-office">In-office</MenuItem>
      </Select>
      <Button variant="contained" disableElevation color="primary">
        Search
      </Button>
    </Box>
  );
}

export default SearchBar;
