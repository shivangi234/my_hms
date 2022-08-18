import React from "react";
import { AppBar, Grid, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PageviewIcon from "@mui/icons-material/Pageview";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import ContactsIcon from "@mui/icons-material/Contacts";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const Dashboard = () => {
  return (
    <div>
      <AppBar sx={{ backgroundColor: "black" }}>
        <Grid container>
          <Grid item lg={5}></Grid>
          <Grid item lg={5}>
            <Typography
              variant="h5" fontWeight="bold"
              sx={{ marginTop: "5px", marginBottom: "5px" }}
            >
              Hospital Management System
            </Typography>
          </Grid>
          <Grid item lg={2}>
            <ArrowBackIcon sx={{ marginTop: "5px" ,cursor:'pointer'}} />
            &nbsp;&nbsp;&nbsp;
            <PageviewIcon sx={{ marginTop: "5px",cursor:'pointer' }} />
            &nbsp;&nbsp;&nbsp;
            <CircleNotificationsIcon sx={{ marginTop: "5px",cursor:'pointer' }} />
            &nbsp;&nbsp;&nbsp;
            <ContactsIcon sx={{ marginTop: "5px",cursor:'pointer' }} />
          </Grid>
        </Grid>
      </AppBar>
      <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Disabled Accordion</Typography>
        </AccordionSummary>
      </Accordion>
    </div>
    </div>
  );
};

export default Dashboard;
