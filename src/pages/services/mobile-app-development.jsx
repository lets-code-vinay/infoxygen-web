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
import { PhoneAndroid, Code, Cloud, Security } from "@mui/icons-material";

const MobileAppDevelopment = () => {
  const features = [
    {
      title: "Native iOS Development",
      description:
        "High-performance iOS applications built with Swift and SwiftUI.",
      icon: <PhoneAndroid sx={{ fontSize: 40, color: "primary.main" }} />,
    },
    {
      title: "Native Android Development",
      description:
        "Robust Android applications using Kotlin and modern Android architecture.",
      icon: <Code sx={{ fontSize: 40, color: "primary.main" }} />,
    },
    {
      title: "Cross-Platform Development",
      description:
        "React Native and Flutter solutions for faster time-to-market.",
      icon: <Cloud sx={{ fontSize: 40, color: "primary.main" }} />,
    },
    {
      title: "App Security & Testing",
      description:
        "Comprehensive security measures and thorough testing protocols.",
      icon: <Security sx={{ fontSize: 40, color: "primary.main" }} />,
    },
  ];

  return (
    <Box sx={{ flex: 1, py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h1" gutterBottom>
          Mobile App Development
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          Creating innovative mobile experiences for iOS and Android platforms
        </Typography>
        <Typography variant="body1" paragraph sx={{ mb: 6 }}>
          Our mobile app development services deliver cutting-edge applications
          that engage users and drive business results. We specialize in both
          native and cross-platform development, ensuring your app performs
          optimally across all devices and platforms.
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
            Our Mobile Development Expertise
          </Typography>
          <Typography variant="body1" paragraph>
            • User Experience Design and Prototyping
          </Typography>
          <Typography variant="body1" paragraph>
            • Native and Cross-Platform Development
          </Typography>
          <Typography variant="body1" paragraph>
            • App Store Optimization and Deployment
          </Typography>
          <Typography variant="body1" paragraph>
            • Ongoing Maintenance and Updates
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default MobileAppDevelopment;
