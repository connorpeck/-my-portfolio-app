import { Button, CardActions, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Card } from "@mui/material";

function Projects() {
  const navigate = useNavigate();

  const goBack = () => {
    console.log("in goBack");
    navigate("/");
  };
  return (
    <div className="myCard">
      <Card sx={{ maxWidth: 345, minWidth: 345, minHeight: 345 }}>
        <Typography
          sx={{ mt: 3 }}
          className="myCard"
          gutterBottom
          variant="h5"
          component="div"
        >
          Projects
        </Typography>
        <CardActions>
          <ul>
            <li>
              <Button
                href="https://redwinglurecompany.herokuapp.com/#/home"
                target="_blank"
                rel="noopener noreferrer"
              >
                Custom Fishing Lure Designer
              </Button>
            </li>
            <li>
              <Button
                href="https://tennis-courts-app.herokuapp.com/#/registration"
                target="_blank"
                rel="noopener noreferrer"
              >
                 Tennis Court Map & Review App
              </Button>
            </li>
          </ul>
        </CardActions>
      </Card>
      {/* <Button variant="contained" onClick={goBack}>
        Back
      </Button> */}
    </div>
  );
}

export default Projects;
