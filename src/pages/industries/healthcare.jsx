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
  LocalHospital,
  HealthAndSafety,
  Medication,
  MonitorHeart,
} from "@mui/icons-material";

const Healthcare = () => {
  const solutions = [
    {
      title: "Electronic Health Records",
      description:
        "Secure and efficient digital patient record management systems.",
      icon: <LocalHospital sx={{ fontSize: 40, color: "primary.main" }} />,
    },
    {
      title: "Telemedicine Platforms",
      description:
        "Remote healthcare delivery solutions for improved patient access.",
      icon: <HealthAndSafety sx={{ fontSize: 40, color: "primary.main" }} />,
    },
    {
      title: "Medical Device Integration",
      description:
        "IoT solutions for connected medical devices and patient monitoring.",
      icon: <Medication sx={{ fontSize: 40, color: "primary.main" }} />,
    },
    {
      title: "Health Analytics",
      description:
        "Data-driven insights for improved patient outcomes and operational efficiency.",
      icon: <MonitorHeart sx={{ fontSize: 40, color: "primary.main" }} />,
    },
  ];

  return (
    <Box sx={{ flex: 1, py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h1" gutterBottom>
          Healthcare
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          Transforming healthcare delivery through innovative technology
          solutions
        </Typography>
        <Typography variant="body1" paragraph sx={{ mb: 6 }}>
          We partner with healthcare organizations to develop cutting-edge
          technology solutions that improve patient care, enhance operational
          efficiency, and ensure compliance with healthcare regulations. Our
          solutions are designed to meet the unique challenges of the healthcare
          industry.
        </Typography>

        <Grid container spacing={4}>
          {solutions.map((solution, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card sx={{ height: "100%", p: 3 }}>
                <CardContent>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    {solution.icon}
                    <Typography variant="h6" sx={{ ml: 2 }}>
                      {solution.title}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    {solution.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Paper sx={{ p: 4, mt: 6 }}>
          <Typography variant="h4" gutterBottom>
            Healthcare Technology Expertise
          </Typography>
          <Typography variant="body1" paragraph>
            • HIPAA-compliant solutions with robust security measures
          </Typography>
          <Typography variant="body1" paragraph>
            • Integration with existing healthcare systems and workflows
          </Typography>
          <Typography variant="body1" paragraph>
            • AI-powered diagnostic and treatment recommendation systems
          </Typography>
          <Typography variant="body1" paragraph>
            • Patient engagement and communication platforms
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default Healthcare;
