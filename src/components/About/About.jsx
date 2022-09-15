
import { useNavigate } from "react-router-dom";
import Nav from "../Nav/Nav";
import {
  Button,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Popover,
} from "@mui/material";

function About() {
  const navigate = useNavigate();

  const goBack = () => {
    console.log("in goBack");
    navigate("/");
  };
  return (
    <div className="navBar">

    <Nav/>
    <br />
    <div className="myCard">
     <Card sx={{ maxWidth: 345, minWidth: 345, p:5}}>
     Dear hiring manager, 

Please consider my resume and cover letter for the Full-Stack React Developer position. 

I was pleasantly surprised that upon reading the core values of the company, they aligned so closely with how I work. I love to learn and push myself to be better each and every day - both in and outside of work. 

The main reason I made the career switch from the service industry into development was because there are always new things to learn; coding is a never ending journey. Paired with the constantly updating languages and changing of best practices it keeps developers on their toes. In my mind it is stagnancy that kills creativity.  Outside of work I have been a self-taught musician for 14 years, and even with that amount of time practicing the craft I still feel as if I've barely scratched the surface. Having a hobby that is so vast and limitless keeps me inspired, motivates me to keep learning, and growing. 

Collaboration has been a crucial part of my upbringing and work ethic. My favorite aspect of customer service was getting to work closely with such great and diverse people. I not only met my partner through working in the service industry, I also met some of my closest friends that I still see regularly. Practicing a craft solo is important, but the true magic happens when you bring together like minded people. 


Thank you for your time, 
Connor Peck

        </Card>
        <Button variant="contained"  onClick={goBack}>Back</Button>
      
    </div>
    </div>
  );
}

export default About;
