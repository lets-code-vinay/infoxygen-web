import * as React from "react";
import * as classes from "./style.module.css";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import WorldMapWithIndia from "../WorldMapWithIndia";

export default function OurPresence() {
  return (
    <>
      <Box className={classes["mainBody"]}>
        <Grid container>
          <Grid
            item
            xs={12}
            sm={12}
            md={5}
            lg={5}
            className={classes["gridLeft"]}
          >
            <Box className={classes["leftSideWorld"]}>
              <Typography className={classes["our-presence-title"]}>
                Worldwide Presence
              </Typography>
              <Typography
                variant={"body1"}
                className={classes["our-presence-text"]}
              >
                We provide Best in class services belongs to all IT technologies
                If you’re searching for talented tech minds who are dedicated to
                their work, we are a perfect fit. We are a dynamic
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={7} lg={7}>
            <WorldMapWithIndia />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
