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
  AccountBalance,
  Security,
  Payment,
  TrendingUp,
} from "@mui/icons-material";

const BankingFinancialServices = () => {
  const solutions = [
    {
      title: "Digital Banking Platforms",
      description:
        "Modern, secure digital banking solutions for enhanced customer experience.",
      icon: <AccountBalance sx={{ fontSize: 40, color: "primary.main" }} />,
    },
    {
      title: "Fraud Detection Systems",
      description:
        "AI-powered fraud detection and prevention solutions for financial security.",
      icon: <Security sx={{ fontSize: 40, color: "primary.main" }} />,
    },
    {
      title: "Payment Processing",
      description:
        "Secure and efficient payment processing and transaction management systems.",
      icon: <Payment sx={{ fontSize: 40, color: "primary.main" }} />,
    },
    {
      title: "Investment Analytics",
      description:
        "Advanced analytics and portfolio management solutions for investment firms.",
      icon: <TrendingUp sx={{ fontSize: 40, color: "primary.main" }} />,
    },
  ];

  return (
    <Box sx={{ flex: 1, py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h1" gutterBottom>
          Banking & Financial Services
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          Driving innovation in financial technology and digital banking
        </Typography>
        <Typography variant="body1" paragraph sx={{ mb: 6 }}>
          We help financial institutions transform their operations with
          cutting-edge technology solutions that enhance security, improve
          customer experience, and drive operational efficiency. Our solutions
          are designed to meet the strict regulatory requirements of the
          financial industry.
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
            Financial Technology Expertise
          </Typography>
          <Typography variant="body1" paragraph>
            • Regulatory compliance and security-first approach
          </Typography>
          <Typography variant="body1" paragraph>
            • Real-time transaction processing and monitoring
          </Typography>
          <Typography variant="body1" paragraph>
            • Blockchain and distributed ledger technology solutions
          </Typography>
          <Typography variant="body1" paragraph>
            • Risk management and compliance automation
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default BankingFinancialServices;
