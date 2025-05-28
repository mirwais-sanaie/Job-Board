import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

function Post({ post }) {
  return (
    <Card sx={{ minWidth: 275, backgroundColor: "black", color: "white" }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
          {post.title}
        </Typography>
        <Typography variant="h5" component="div">
          {post.title}
        </Typography>
        <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" size="small">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default Post;
