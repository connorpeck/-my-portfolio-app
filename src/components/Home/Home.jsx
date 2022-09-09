import "./Home.css";
import {
  Button,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function Home() {
  const history = useNavigate();

  const showProjects = () => {
    console.log("in showProjects");
    history.push("/projects");
  };

  return (
    <div className="myCard">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia component="img" alt="myself" image="./myself.jpg" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Connor Peck - Full-Stack Developer
          </Typography>
        </CardContent>
        <Button variant="contained" onClick={showProjects}>
          View My Projects
        </Button>
      </Card>
    </div>
  );
}

export default Home;
