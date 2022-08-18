import React from "react";
import {
  Grid,
  Typography,
  IconButton,
  Avatar,
  Box,
  FormControl,
  TextField,
  Card,
  Button,
} from "@mui/material";
import { useNavigate } from 'react-router-dom';
import LocalPharmacyIcon from "@mui/icons-material/LocalPharmacy";
import doctor from "../Images/doctor.jfif";
import LockIcon from '@mui/icons-material/Lock';
import hospital from "../Images/hospital.png";
const Login = () => {
    const navigate = useNavigate();
    const handleSubmit = () => {
        setTimeout(()=>{
            navigate("/dashboard");
        },2000)

    }
  return (
    <div>
      <Grid container>
        <Grid item lg={4} sx={{}}>
          <Box
            sx={{
              flexGrow: 1,
              textAlign: "center",
              width: "100%",
              backgroundColor: "#172845",
              color: "white",
              height: "690px",
            }}
          >
            <Box sx={{ textAlign: "center", paddingTop: "50px" }}>
              <IconButton
                sx={{ textAlign: "center", color: "white" }}
                style={{ height: "200px", width: "200px" }}
              >
              <img src={hospital} alt="hospital"/>
              </IconButton>
              <Typography variant="h4" fontWeight="bold">
           Sanjeebani Hospital Management
              </Typography>
              <br />
              <br />
              <br />
              <Grid container justifyContent="center">
                <Grid item lg={8}>
                  <Card>
                    <TextField sx={{ display: "none" }} autoComplete="on" />
                    <TextField
                      sx={{ width: "100%" }}
                      name="email"
                      label="admin@gmail.com"
                      variant="outlined"
                      component="div"
                      autoComplete="off"
                      placeholder="admin@gmail.com"
                    />
                  </Card>

                  <Card sx={{ mt: 2 }}>
                    <TextField
                      sx={{ width: "100%" }}
                      name="password"
                      label="Password"
                      variant="outlined"
                      component="div"
                      type="password"
                      placeholder="aaaaa"
                      autoComplete="new-password"
                    />
                  </Card>
                  <Button
                    variant="contained"
                 
                    sx={{ marginTop: "20px" ,backgroundColor:'#20a4b0'}}
                    fullWidth
                    onClick={handleSubmit}
                  >
                    Login <LockIcon sx={{fontSize:'20px'}}/>
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          lg={8}
          sx={{
            backgroundImage: `url(${doctor})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></Grid>
      </Grid>
    </div>
  );
};

export default Login;
