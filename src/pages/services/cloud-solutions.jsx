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
import { Cloud, Storage, Security, Speed } from "@mui/icons-material";

const CloudSolutions = () => {
  const features = [
    {
      title: "Cloud Migration",
      description:
        "Seamless migration of applications and data to cloud platforms.",
      icon: <Cloud sx={{ fontSize: 40, color: "primary.main" }} />,
    },
    {
      title: "Infrastructure as Code",
      description:
        "Automated infrastructure deployment using Terraform and CloudFormation.",
      icon: <Storage sx={{ fontSize: 40, color: "primary.main" }} />,
    },
    {
      title: "Cloud Security",
      description: "Comprehensive security measures for cloud environments.",
      icon: <Security sx={{ fontSize: 40, color: "primary.main" }} />,
    },
    {
      title: "Performance Optimization",
      description:
        "Optimize cloud resources for cost and performance efficiency.",
      icon: <Speed sx={{ fontSize: 40, color: "primary.main" }} />,
    },
  ];

  return (
    <Box sx={{ flex: 1, py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h1" gutterBottom>
          Cloud Solutions
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          Scalable cloud infrastructure and deployment solutions for modern
          applications
        </Typography>
        <Typography variant="body1" paragraph sx={{ mb: 6 }}>
          Our cloud solutions help organizations leverage the power of cloud
          computing to scale their operations, reduce costs, and improve
          performance. We work with leading cloud providers to deliver robust,
          secure, and cost-effective cloud infrastructure solutions.
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
            Cloud Services We Offer
          </Typography>
          <Typography variant="body1" paragraph>
            • AWS, Azure, and Google Cloud Platform expertise
          </Typography>
          <Typography variant="body1" paragraph>
            • Container orchestration with Kubernetes
          </Typography>
          <Typography variant="body1" paragraph>
            • Serverless architecture and microservices
          </Typography>
          <Typography variant="body1" paragraph>
            • DevOps and CI/CD pipeline implementation
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default CloudSolutions;
