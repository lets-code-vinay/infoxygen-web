import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Paper,
} from "@mui/material";
import { Email, Phone, LocationOn, Send } from "@mui/icons-material";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Email sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Email",
      details: "info@infoxygen.com",
      description: "Get in touch with our team",
    },
    {
      icon: <Phone sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Phone",
      details: "+91-7307805030",
      description: "Call us anytime",
    },
    {
      icon: <LocationOn sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Address",
      details: "India",
      description: "Our headquarters",
    },
  ];

  return (
    <Box sx={{ flex: 1, py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h1" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          Get in touch with our team for any inquiries or collaboration
        </Typography>

        <Grid container spacing={6}>
          {/* Contact Information */}
          <Grid item xs={12} md={4}>
            <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
              Get In Touch
            </Typography>
            <Grid container spacing={3}>
              {contactInfo.map((info, index) => (
                <Grid item xs={12} key={index}>
                  <Card sx={{ p: 3 }}>
                    <CardContent>
                      <Box
                        sx={{ display: "flex", alignItems: "center", mb: 2 }}
                      >
                        {info.icon}
                        <Typography variant="h6" sx={{ ml: 2 }}>
                          {info.title}
                        </Typography>
                      </Box>
                      <Typography
                        variant="h6"
                        color="primary.main"
                        gutterBottom
                      >
                        {info.details}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {info.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={8}>
            <Paper sx={{ p: 4 }}>
              <Typography variant="h4" gutterBottom>
                Send us a Message
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                Fill out the form below and we'll get back to you as soon as
                possible.
              </Typography>

              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="First Name"
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Last Name"
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Email"
                    type="email"
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Subject"
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Message"
                    multiline
                    rows={4}
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    size="large"
                    startIcon={<Send />}
                    sx={{ px: 4, py: 1.5 }}
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
