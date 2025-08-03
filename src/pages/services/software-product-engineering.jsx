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
import { Code, Build, BugReport, Speed } from "@mui/icons-material";

const SoftwareProductEngineering = () => {
  const features = [
    {
      title: "Custom Development",
      description:
        "Tailored software solutions designed to meet your specific business requirements.",
      icon: <Code sx={{ fontSize: 40, color: "primary.main" }} />,
    },
    {
      title: "Product Architecture",
      description:
        "Scalable and maintainable software architecture for long-term success.",
      icon: <Build sx={{ fontSize: 40, color: "primary.main" }} />,
    },
    {
      title: "Quality Assurance",
      description:
        "Comprehensive testing and quality assurance to ensure reliable software delivery.",
      icon: <BugReport sx={{ fontSize: 40, color: "primary.main" }} />,
    },
    {
      title: "Performance Optimization",
      description:
        "Optimize your applications for speed, efficiency, and user experience.",
      icon: <Speed sx={{ fontSize: 40, color: "primary.main" }} />,
    },
  ];

  return (
    <Box sx={{ flex: 1, py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h1" gutterBottom>
          Software Product Engineering
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          Building innovative software products that drive business growth
        </Typography>
        <Typography variant="body1" paragraph sx={{ mb: 6 }}>
          Our software product engineering services combine technical expertise
          with business acumen to deliver high-quality, scalable software
          solutions. From concept to deployment, we ensure your product meets
          market demands and exceeds user expectations.
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
            Our Development Process
          </Typography>
          <Typography variant="body1" paragraph>
            • Agile methodology for rapid development and continuous improvement
          </Typography>
          <Typography variant="body1" paragraph>
            • User-centered design approach for optimal user experience
          </Typography>
          <Typography variant="body1" paragraph>
            • DevOps practices for seamless deployment and maintenance
          </Typography>
          <Typography variant="body1" paragraph>
            • Continuous integration and delivery for reliable software releases
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default SoftwareProductEngineering;
