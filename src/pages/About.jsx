import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Paper,
} from "@mui/material";
import { Business, People, TrendingUp, EmojiEvents } from "@mui/icons-material";

const About = () => {
  const stats = [
    {
      number: "500+",
      label: "Projects Completed",
      icon: <Business sx={{ fontSize: 40, color: "primary.main" }} />,
    },
    {
      number: "50+",
      label: "Expert Team Members",
      icon: <People sx={{ fontSize: 40, color: "primary.main" }} />,
    },
    {
      number: "95%",
      label: "Client Satisfaction",
      icon: <TrendingUp sx={{ fontSize: 40, color: "primary.main" }} />,
    },
    {
      number: "10+",
      label: "Years of Experience",
      icon: <EmojiEvents sx={{ fontSize: 40, color: "primary.main" }} />,
    },
  ];

  return (
    <Box sx={{ flex: 1, py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h1" gutterBottom>
          About Infoxygen
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          Driving digital transformation through innovative technology solutions
        </Typography>

        <Typography variant="body1" paragraph sx={{ mb: 6 }}>
          Infoxygen is a leading technology company dedicated to helping
          businesses transform their digital presence and achieve sustainable
          growth. With over a decade of experience in software development,
          cloud solutions, and digital strategy, we partner with organizations
          across various industries to deliver cutting-edge technology
          solutions.
        </Typography>

        <Grid container spacing={4} sx={{ mb: 6 }}>
          {stats.map((stat, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ height: "100%", textAlign: "center", p: 3 }}>
                <CardContent>
                  {stat.icon}
                  <Typography
                    variant="h3"
                    component="div"
                    sx={{ mt: 2, fontWeight: 700, color: "primary.main" }}
                  >
                    {stat.number}
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    {stat.label}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Paper sx={{ p: 4 }}>
          <Typography variant="h4" gutterBottom>
            Our Mission
          </Typography>
          <Typography variant="body1" paragraph>
            To empower businesses with innovative technology solutions that
            drive growth, efficiency, and competitive advantage in the digital
            age.
          </Typography>

          <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
            Our Vision
          </Typography>
          <Typography variant="body1" paragraph>
            To be the trusted technology partner for organizations worldwide,
            delivering exceptional value through cutting-edge solutions and
            unwavering commitment to client success.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default About;
