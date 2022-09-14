import "./Home.css";
import { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Popover,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Projects from "../Projects/Projects";
import Nav from "../Nav/Nav";

function Home() {
  const navigate = useNavigate();

  const [projects, setProjects] = useState(false);
  const [about, setAbout] = useState(false);

  const showProjects = () => {
    console.log("in showProjects", projects);
    setProjects(!projects);
  };


  return (
    <div className='navBar'>
      <Nav/>
      <br/>
    <div className="myCard">

  
      {projects ? (
        <Card sx={{ maxWidth: 345, minWidth: 345 }}>
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
      ) : (
        <Card sx={{ maxWidth: 345, minWidth: 345 }}>
          <Projects />
        </Card>
      )}
      {projects ? (     <Button variant="contained" className="myCard" onClick={showProjects}>
        View My Projects
      </Button>) :
      (     <Button variant="contained" className="myCard" onClick={showProjects}>
      Back
    </Button>)}
 
  
    </div>
    </div>
  );
}

export default Home;
