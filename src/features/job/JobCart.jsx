import { Box, Button, Grid, Typography } from "@mui/material";

import { styled } from "@mui/material/styles";

const Wrapper = styled("div")(({ theme }) => ({
  border: "1px solid #e8e8e8",
  cursor: "pointer",
  padding: theme.spacing(2),

  "&:hover": {
    boxShadow: "0px 5px 25px rgba(0 ,0 , 0, 0.1)",
    borderLeft: "6px solid #4D64D4",
    transition: ".3s",
  },
}));

const SkillChip = styled("div")(({ theme }) => ({
  margin: theme.spacing(0.5),
  padding: theme.spacing(0.75),
  fontSize: "14.5px",
  borderRadius: "5px",
  fontWeight: 600,
  backgroundColor: theme.palette.secondary.main,
  color: "#fff",
}));

const CompanyName = styled("div")(({ theme }) => ({
  fontSize: "13px",
  backgroundColor: theme.palette.primary.main,
  borderRadius: "5px",
  display: "inline-block",
  fontWeight: "600",
  padding: theme.spacing(0.75),
}));

function JobCart({ job }) {
  return (
    <Wrapper className="container mx-auto mt-2">
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid>
          <Typography variant="subtitle1">{job.title}</Typography>
          <CompanyName>{job.companyName}</CompanyName>
        </Grid>

        <Grid>
          <Grid container>
            {job?.skills?.map((skill) => (
              <SkillChip key={skill} item>
                {skill}
              </SkillChip>
            ))}
          </Grid>
        </Grid>

        <Grid container direction={"column"} alignItems={"flex-end"}>
          <Grid>
            <Typography variant="caption">
              {job.date} | fulltime | Remote
            </Typography>
          </Grid>
          <Grid>
            <Box mt={2}>
              <Button variant="outlined">Check</Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Wrapper>
  );
}

export default JobCart;
