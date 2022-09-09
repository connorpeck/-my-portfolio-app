import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Projects() {
  const navigate = useNavigate();

  const goBack = () => {
    console.log("in goBack");
    navigate("/");
  };
  return (
    <div>
      This is a List of my Projects
      <Button
      variant="contained"
        href="https://redwinglurecompany.herokuapp.com/#/home"
        target="_blank"
        rel="noopener noreferrer"
      >
        Custom Fishing Lure Designer
      </Button>
      <Button variant="contained" onClick={goBack}>
        Back
      </Button>
    </div>
  );
}

export default Projects;
