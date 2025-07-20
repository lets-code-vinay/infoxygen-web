import React from "react";
import { Box, Container, Typography, styled, useTheme } from "@mui/material";

const StyledFooter = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: 'white',
  padding: theme.spacing(3, 0),
  boxShadow: 'inset 0 4px 8px rgba(0, 0, 0, 0.2)',
  marginTop: 'auto',
}));

const Footer = () => {
  const theme = useTheme();
  
  return (
    <StyledFooter component="footer">
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="body2" sx={{ color: 'white' }}>
            &copy; {new Date().getFullYear()} Infoxygen. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
