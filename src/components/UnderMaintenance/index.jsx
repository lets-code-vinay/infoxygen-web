import React from "react";
import { Box, Container, Typography, styled, useTheme } from "@mui/material";

const StyledContainer = styled(Box)(({ theme }) => ({
  minHeight: 'calc(100vh - 171px)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  backgroundColor: `${theme.palette.secondary.main}1c`,
  padding: theme.spacing(2.5),
  fontFamily: 'Arial, sans-serif',
}));

const StyledImage = styled('img')({
  width: '44%',
  maxWidth: '500px',
  height: 'auto',
});

const UnderMaintenance = () => {
  const theme = useTheme();
  
  return (
    <StyledContainer>
      <StyledImage
        src={new URL("../../assets/images/maintenance-in-png.png", import.meta.url).href}
        alt="maintenance-page"
      />

      <Typography
        variant="h2"
        sx={{
          fontSize: '2.5rem',
          color: theme.palette.text.primary,
          mb: 1,
          fontWeight: 'bold',
        }}
      >
        We'll Be Back Soon!
      </Typography>
      
      <Typography
        variant="body1"
        sx={{
          fontSize: '1.2rem',
          color: theme.palette.text.secondary,
          mb: 2.5,
          maxWidth: '500px',
          lineHeight: 1.6,
        }}
      >
        Our website is currently undergoing scheduled maintenance.
        <br />
        We'll be back online shortly. Thank you for your patience!
      </Typography>
      
      <Typography
        variant="body2"
        sx={{
          fontSize: '1rem',
          color: theme.palette.text.secondary,
        }}
      >
        Contact us at:{' '}
        <a 
          href="mailto:hr@infoxygen.com"
          style={{
            color: theme.palette.primary.main,
            textDecoration: 'none',
            '&:hover': {
              textDecoration: 'underline',
            },
          }}
        >
          hr@infoxygen.com
        </a>
      </Typography>
    </StyledContainer>
  );
};

export default UnderMaintenance;
