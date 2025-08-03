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
import {
  Analytics,
  TrendingUp,
  Assessment,
  DataUsage,
} from "@mui/icons-material";

const DataAnalytics = () => {
  const features = [
    {
      title: "Business Intelligence",
      description:
        "Transform raw data into actionable insights with our advanced BI solutions.",
      icon: <Analytics sx={{ fontSize: 40, color: "primary.main" }} />,
    },
    {
      title: "Predictive Analytics",
      description:
        "Leverage machine learning to forecast trends and make data-driven decisions.",
      icon: <TrendingUp sx={{ fontSize: 40, color: "primary.main" }} />,
    },
    {
      title: "Data Visualization",
      description:
        "Create compelling visualizations that make complex data easy to understand.",
      icon: <Assessment sx={{ fontSize: 40, color: "primary.main" }} />,
    },
    {
      title: "Real-time Analytics",
      description:
        "Monitor and analyze data in real-time for immediate insights and actions.",
      icon: <DataUsage sx={{ fontSize: 40, color: "primary.main" }} />,
    },
  ];

  return (
    <Box sx={{ flex: 1, py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h1" gutterBottom>
          Data & Analytics
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          Transform your business with intelligent data solutions
        </Typography>
        <Typography variant="body1" paragraph sx={{ mb: 6 }}>
          Our data and analytics services help organizations harness the power
          of their data to drive innovation, improve decision-making, and
          achieve competitive advantages. We combine cutting-edge technology
          with industry expertise to deliver actionable insights.
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
            Why Choose Our Data & Analytics Solutions?
          </Typography>
          <Typography variant="body1" paragraph>
            • Advanced machine learning algorithms for predictive insights
          </Typography>
          <Typography variant="body1" paragraph>
            • Scalable cloud-based analytics platforms
          </Typography>
          <Typography variant="body1" paragraph>
            • Real-time data processing and visualization
          </Typography>
          <Typography variant="body1" paragraph>
            • Industry-specific analytics models and frameworks
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default DataAnalytics;
