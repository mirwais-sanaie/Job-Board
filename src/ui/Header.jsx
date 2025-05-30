import { Box, Button, Grid, Typography } from "@mui/material";

function Header() {
  return (
    <Box py={10} bgcolor={"secondary.main"} color={"white"}>
      <Grid container justify="center" className="container mx-auto">
        <Grid width={"100%"}>
          <Box display={"flex"} justifyContent={"space-around"}>
            <Typography variant="h4">Job Board app</Typography>
            <Button variant="contained" disableElevation>
              Post job
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Header;
