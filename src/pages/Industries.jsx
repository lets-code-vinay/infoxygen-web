import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
} from "@mui/material";

const Industries = () => {
  const industries = [
    {
      title: "Healthcare",
      description:
        "Innovative healthcare solutions including telemedicine, patient management systems, and AI-powered diagnostics.",
      icon: "🏥",
    },
    {
      title: "Finance & Banking",
      description:
        "Secure financial technology solutions for banking, insurance, and fintech applications.",
      icon: "🏦",
    },
    {
      title: "Energy & Utilities",
      description:
        "Smart energy management systems and renewable energy technology solutions.",
      icon: "⚡",
    },
    {
      title: "Manufacturing",
      description:
        "Industry 4.0 solutions including IoT, automation, and smart manufacturing systems.",
      icon: "🏭",
    },
    {
      title: "Retail & E-commerce",
      description:
        "Digital commerce platforms and retail technology solutions for modern businesses.",
      icon: "🛒",
    },
    {
      title: "Education",
      description:
        "EdTech solutions including learning management systems and educational applications.",
      icon: "🎓",
    },
    {
      title: "Transportation & Logistics",
      description:
        "Smart transportation systems and logistics optimization solutions.",
      icon: "🚚",
    },
    {
      title: "Real Estate",
      description:
        "Property management systems and real estate technology solutions.",
      icon: "🏠",
    },
  ];

  return (
    <Box sx={{ flex: 1, py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h1" gutterBottom>
          Industries We Serve
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          Specialized technology solutions for diverse industry sectors
        </Typography>

        <Grid container spacing={4} sx={{ mt: 4 }}>
          {industries.map((industry, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <Typography variant="h3" sx={{ mb: 2 }}>
                    {industry.icon}
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    {industry.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {industry.description}
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

export default Industries;
