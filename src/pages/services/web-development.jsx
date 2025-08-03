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
import { Web, Code, Speed, Security } from "@mui/icons-material";

const WebDevelopment = () => {
  const features = [
    {
      title: "Custom Web Applications",
      description:
        "Tailored web solutions built with modern technologies and best practices.",
      icon: <Web sx={{ fontSize: 40, color: "primary.main" }} />,
    },
    {
      title: "Frontend Development",
      description:
        "Responsive and interactive user interfaces using React, Vue, and Angular.",
      icon: <Code sx={{ fontSize: 40, color: "primary.main" }} />,
    },
    {
      title: "Performance Optimization",
      description:
        "Fast-loading websites optimized for speed and user experience.",
      icon: <Speed sx={{ fontSize: 40, color: "primary.main" }} />,
    },
    {
      title: "Security & Compliance",
      description:
        "Secure web applications with industry-standard security measures.",
      icon: <Security sx={{ fontSize: 40, color: "primary.main" }} />,
    },
  ];

  return (
    <Box sx={{ flex: 1, py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h1" gutterBottom>
          Web Development
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          Building modern, scalable web applications that drive business growth
        </Typography>
        <Typography variant="body1" paragraph sx={{ mb: 6 }}>
          Our web development services combine cutting-edge technologies with
          proven methodologies to deliver high-performance, user-friendly web
          applications. From simple websites to complex enterprise applications,
          we create solutions that meet your business needs and exceed user
          expectations.
        </Typography>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card sx={{ height: "100%", p: 3 }}>
                <CardContent>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    {feature.icon}
                    <Typography variant="h6" sx={{ ml: 2 }}>
                      {feature.title}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Paper sx={{ p: 4, mt: 6 }}>
          <Typography variant="h4" gutterBottom>
            Our Web Development Process
          </Typography>
          <Typography variant="body1" paragraph>
            • Discovery and Requirements Analysis
          </Typography>
          <Typography variant="body1" paragraph>
            • UI/UX Design and Prototyping
          </Typography>
          <Typography variant="body1" paragraph>
            • Development and Testing
          </Typography>
          <Typography variant="body1" paragraph>
            • Deployment and Maintenance
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default WebDevelopment;
