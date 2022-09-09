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
  const navigate = useNavigate();

  const showProjects = () => {
    console.log("in showProjects");
    navigate("/projects");
  };

  return (
    <div className="myCard">
      <Card sx={{ maxWidth: 345, minWidth:345}}>
        <CardMedia component="img" alt="myself" image="./myself.jpg" />
        <CardContent>
            <div className="myCard">
          <Typography gutterBottom variant="h5" component="div">
            Connor Peck 
            <br />
            Full-Stack Developer
          </Typography>
          </div>
        </CardContent>
      
      </Card>
      <Button variant="contained" className="myCard" onClick={showProjects}>
          View My Projects
        </Button>
    </div>
  );
}

export default Home;
