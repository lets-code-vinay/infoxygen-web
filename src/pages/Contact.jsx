import React, { useState } from "react";
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
  Alert,
  Snackbar,
} from "@mui/material";
import { Email, Phone, LocationOn, Send } from "@mui/icons-material";
import emailjs from "emailjs-com";
import { useTheme } from "@mui/material/styles";
import Notification from "../components/Notification/Notification";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState({
    open: false,
    title: "",
    description: "",
    type: "info",
  });

  const theme = useTheme();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Initialize EmailJS with your public key
      emailjs.init("k8YB18eoN4d7-gs0Y");

      const templateParams = {
        to_email:
          "info@infoxygen.com,vinay.shermauryan@gmail.com,infoxygen1@gmail.com",
        from_name: formData.fullName,
        from_email: formData.email,
        contact_number: formData.contactNumber,
        subject: formData.subject,
        message: formData.message,
      };

      console.log("Sending email with params:", templateParams);

      await emailjs.send(
        "service_7y9zl0l", // Replace with your EmailJS service ID
        "template_ooayexo", // Replace with your EmailJS template ID
        templateParams
      );

      setNotification({
        open: true,
        title: "Success",
        description: "Message sent successfully! We'll get back to you soon.",
        type: "success",
      });

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        contactNumber: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      console.error("Error details:", {
        message: error.message,
        status: error.status,
        response: error.response,
      });
      setNotification({
        open: true,
        title: "Error",
        description: `Failed to send message: ${
          error.message || "Unknown error"
        }`,
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCloseNotification = () => {
    setNotification((prev) => ({ ...prev, open: false }));
  };

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
    <Box
      sx={{
        flex: 1,
        py: 8,
        background:
          theme.palette.mode === "light"
            ? theme.palette.background.lightBg
            : theme.palette.darkBg,
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h2" component="h1" gutterBottom align="center">
          Contact Us
        </Typography>
        <Typography
          variant="h5"
          color="text.secondary"
          paragraph
          align="center"
          sx={{ mb: 6 }}
        >
          Get in touch with our team for any inquiries or collaboration
        </Typography>

        <Paper
          sx={{
            p: 4,
            background:
              theme.palette.mode === "light"
                ? "rgba(255, 255, 255, 0.2)"
                : "rgba(24, 18, 43, 0.8)",
            backdropFilter: "blur(10px)",
            border: `1px solid ${
              theme.palette.mode === "light"
                ? "rgba(0,0,0,0.1)"
                : "rgba(255,255,255,0.1)"
            }`,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 4,
              alignItems: "stretch",
            }}
          >
            {/* Left Side - Contact Image */}
            <Box
              sx={{
                flex: { xs: "1", md: "1" },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: { xs: "300px", md: "auto" },
              }}
            >
              <img
                src={
                  new URL(
                    "../assets/images/contact/contact.png",
                    import.meta.url
                  ).href
                }
                alt="Contact Us"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  borderRadius: "12px",
                }}
              />
            </Box>

            {/* Right Side - Contact Form */}
            <Box
              sx={{
                flex: { xs: "1", md: "1" },
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography variant="h4" gutterBottom>
                Send us a Message
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                Fill out the form below and we'll get back to you as soon as
                possible.
              </Typography>

              <Box component="form" onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Full Name"
                      variant="outlined"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Email"
                      type="email"
                      variant="outlined"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Contact Number"
                      type="tel"
                      variant="outlined"
                      name="contactNumber"
                      value={formData.contactNumber}
                      onChange={handleInputChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Subject"
                      variant="outlined"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
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
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      startIcon={<Send />}
                      disabled={loading}
                      sx={{ px: 4, py: 1.5, width: "100%" }}
                    >
                      {loading ? "Sending..." : "Send Message"}
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Box>
        </Paper>
      </Container>

      {/* Common Notification Component */}
      <Notification
        open={notification.open}
        onClose={handleCloseNotification}
        title={notification.title}
        description={notification.description}
        type={notification.type}
        origin={{ vertical: "top", horizontal: "center" }}
        hideOutTime={6000}
      />
    </Box>
  );
};

export default Contact;
