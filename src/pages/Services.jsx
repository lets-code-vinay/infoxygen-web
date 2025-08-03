import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

const Services = () => {
  const services = [
    {
      title: "AI & Machine Learning",
      description:
        "Cutting-edge artificial intelligence and machine learning solutions for your business needs.",
      image: "/path-to-ai-image.jpg",
    },
    {
      title: "Web Development",
      description:
        "Modern, responsive web applications built with the latest technologies and best practices.",
      image: "/path-to-web-image.jpg",
    },
    {
      title: "Mobile Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android platforms.",
      image: "/path-to-mobile-image.jpg",
    },
    {
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure and deployment solutions for modern applications.",
      image: "/path-to-cloud-image.jpg",
    },
    {
      title: "Data Analytics",
      description:
        "Comprehensive data analysis and business intelligence solutions.",
      image: "/path-to-data-image.jpg",
    },
    {
      title: "Digital Transformation",
      description:
        "End-to-end digital transformation services to modernize your business processes.",
      image: "/path-to-transformation-image.jpg",
    },
  ];

  return (
    <Box sx={{ flex: 1, py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h1" gutterBottom>
          Our Services
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          Comprehensive technology solutions tailored to your business needs
        </Typography>

        <Grid container spacing={4} sx={{ mt: 4 }}>
          {services.map((service, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
