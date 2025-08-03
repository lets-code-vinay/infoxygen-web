import React from "react";
import { Box, Typography, Container } from "@mui/material";

const Career = () => {
  return (
    <Box sx={{ flex: 1, py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h1" gutterBottom>
          Career Opportunities
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          Join our team and be part of the future of technology
        </Typography>
        <Typography variant="body1" paragraph>
          We are always looking for talented individuals who are passionate
          about technology and innovation. Explore our current openings and find
          your next career opportunity with Infoxygen.
        </Typography>
        {/* Add more career content here */}
      </Container>
    </Box>
  );
};

export default Career;
