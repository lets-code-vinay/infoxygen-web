import React from "react";
import { Box, Typography, Container, Paper, useTheme } from "@mui/material";
import { Construction } from "@mui/icons-material";
import { Link } from "react-router-dom";
import ActionButton from "../CustomButtons/ActionButton/ActionButton";

const ComingSoon = ({ title, description, category }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        flex: 1,
        py: 8,
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="md">
        <Paper
          elevation={3}
          sx={{
            p: 6,
            textAlign: "center",
            background:
              theme.palette.mode === "light"
                ? `linear-gradient(135deg, ${theme.palette.primary.main}20 0%, ${theme.palette.secondary.main}20 50%, ${theme.palette.primary.light}20 100%)`
                : `linear-gradient(135deg, ${theme.palette.primary.main}15 0%, ${theme.palette.secondary.main}15 50%, ${theme.palette.primary.light}15 100%)`,
            color:
              theme.palette.mode === "light"
                ? theme.palette.text.primary
                : "#fff",
            borderRadius: 3,
            position: "relative",
            overflow: "hidden",
            border: `1px solid ${
              theme.palette.mode === "light"
                ? `${theme.palette.primary.main}30`
                : `${theme.palette.primary.main}20`
            }`,
            backdropFilter: "blur(10px)",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background:
                theme.palette.mode === "light"
                  ? `linear-gradient(135deg, ${theme.palette.primary.main}10 0%, ${theme.palette.secondary.main}10 50%, ${theme.palette.primary.light}10 100%)`
                  : `linear-gradient(135deg, ${theme.palette.primary.main}05 0%, ${theme.palette.secondary.main}05 50%, ${theme.palette.primary.light}05 100%)`,
              zIndex: 1,
            },
          }}
        >
          {/* Background Pattern */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              opacity: 0.1,
              background:
                "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
              zIndex: 2,
            }}
          />

          {/* Construction Icon */}
          <Box
            sx={{
              mb: 4,
              display: "flex",
              justifyContent: "center",
              position: "relative",
              zIndex: 3,
            }}
          >
            <Construction
              sx={{
                fontSize: 80,
                color:
                  theme.palette.mode === "light"
                    ? theme.palette.primary.main
                    : "#fff",
                animation: "pulse 2s infinite",
                filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.3))",
              }}
            />
          </Box>

          {/* Title */}
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 700,
              mb: 2,
              position: "relative",
              zIndex: 3,
              "--gradient-color-1": theme.palette.primary.main,
              "--gradient-color-2": theme.palette.secondary.main,
              "--gradient-color-3": theme.palette.primary.light,
              background:
                "linear-gradient(135deg, var(--gradient-color-1) 0%, var(--gradient-color-2) 50%, var(--gradient-color-3) 100%)",
              backgroundSize: "200% 200%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation:
                "gradient-shift 3s ease-in-out infinite alternate, gradient-color-shift 4s ease-in-out infinite",
              textShadow: "none",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                "--gradient-color-1": theme.palette.primary.main,
                "--gradient-color-2": theme.palette.secondary.main,
                "--gradient-color-3": theme.palette.primary.light,
                background:
                  "linear-gradient(135deg, var(--gradient-color-1) 0%, var(--gradient-color-2) 50%, var(--gradient-color-3) 100%)",
                backgroundSize: "200% 200%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animation:
                  "gradient-shift 3s ease-in-out infinite alternate, gradient-color-shift 4s ease-in-out infinite",
                filter: "blur(8px)",
                opacity: 0.3,
                zIndex: -1,
              },
            }}
          >
            Coming Soon
          </Typography>

          {/* Service/Industry Name */}
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{
              fontWeight: 600,
              mb: 3,
              color: "#fff",
              position: "relative",
              zIndex: 3,
              textShadow: "0 2px 4px rgba(0,0,0,0.3)",
            }}
          >
            {title}
          </Typography>

          {/* Description */}
          <Typography
            variant="h6"
            paragraph
            sx={{
              mb: 4,
              color: "rgba(255,255,255,0.9)",
              maxWidth: "600px",
              mx: "auto",
              position: "relative",
              zIndex: 3,
              textShadow: "0 1px 2px rgba(0,0,0,0.2)",
            }}
          >
            We're working hard to bring you amazing {category} solutions. This
            page is under construction and will be available soon.
          </Typography>

          {/* Progress Bar */}
          <Box sx={{ mb: 4, position: "relative", zIndex: 3 }}>
            <Box
              sx={{
                width: "100%",
                height: 8,
                backgroundColor: "rgba(255,255,255,0.2)",
                borderRadius: 4,
                overflow: "hidden",
                position: "relative",
                backdropFilter: "blur(10px)",
              }}
            >
              <Box
                sx={{
                  width: "75%",
                  height: "100%",
                  background: "linear-gradient(90deg, #fff 0%, #f0f0f0 100%)",
                  borderRadius: 4,
                  animation: "progress 2s ease-in-out infinite",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                }}
              />
            </Box>
            <Typography
              variant="body2"
              sx={{
                mt: 1,
                color: "rgba(255,255,255,0.9)",
                textShadow: "0 1px 2px rgba(0,0,0,0.2)",
              }}
            >
              75% Complete
            </Typography>
          </Box>

          {/* Back Button */}
          <Box sx={{ position: "relative", zIndex: 3 }}>
            <ActionButton
              text="BACK TO HOME"
              direction="left"
              radius={0}
              colorVariant="accent"
              component={Link}
              to="/"
            />
          </Box>
        </Paper>

        {/* CSS Animations */}
        <style>
          {`
            @keyframes pulse {
              0%, 100% { transform: scale(1); }
              50% { transform: scale(1.1); }
            }
            @keyframes progress {
              0%, 100% { width: 75%; }
              50% { width: 85%; }
            }
            @keyframes gradient-shift {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
            @keyframes gradient-color-shift {
              0% { 
                --gradient-color-1: ${theme.palette.primary.main};
                --gradient-color-2: ${theme.palette.secondary.main};
                --gradient-color-3: ${theme.palette.primary.light};
              }
              50% { 
                --gradient-color-1: ${theme.palette.secondary.main};
                --gradient-color-2: ${theme.palette.primary.light};
                --gradient-color-3: ${theme.palette.primary.main};
              }
              100% { 
                --gradient-color-1: ${theme.palette.primary.main};
                --gradient-color-2: ${theme.palette.secondary.main};
                --gradient-color-3: ${theme.palette.primary.light};
              }
            }
          `}
        </style>
      </Container>
    </Box>
  );
};

export default ComingSoon;
