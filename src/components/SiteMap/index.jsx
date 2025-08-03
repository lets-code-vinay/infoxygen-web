import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import sitemapImg from "../../assets/images/sitemap.png";
import sitemapLightImg from "../../assets/images/sitemap-light-mode.png";

// Sitemap data with routing information
const menuLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Careers", path: "/career" },
  { name: "Contact", path: "/contact" },
];

const services = [
  { name: "Web Development", path: "/services/web-development" },
  { name: "Mobile App Development", path: "/services/mobile-app-development" },
  { name: "Cloud Solutions", path: "/services/cloud-solutions" },
];

const support = [
  { name: "Help Center", path: "/help-center" },
  { name: "FAQs", path: "/coming-soon?title=FAQs&category=support" },
  {
    name: "Live Chat",
    path: "/coming-soon?title=Live%20Chat&category=support",
  },
];

const industries = [
  { name: "Healthcare", path: "/industries/healthcare" },
  { name: "Finance", path: "/industries/banking-financial-services" },
  { name: "Retail", path: "/coming-soon?title=Retail&category=industry" },
];

const blog = [
  {
    name: "Latest Posts",
    path: "/coming-soon?title=Latest%20Posts&category=blog",
  },
  { name: "Tech News", path: "/coming-soon?title=Tech%20News&category=blog" },
  {
    name: "Case Studies",
    path: "/coming-soon?title=Case%20Studies&category=blog",
  },
];

const contact = [
  { name: "Email: info@infoxygen.com", path: "mailto:info@infoxygen.com" },
  { name: "Phone: +91-7307805030", path: "tel:+917307805030" },
  { name: "Address: India", path: "#" },
];

const sections = [
  { title: "Menu", items: menuLinks },
  { title: "Services", items: services },
  { title: "Support", items: support },
  { title: "Industries", items: industries },
  { title: "Blog", items: blog },
  { title: "Contact Us", items: contact },
];

const SiteMap = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: 400,
        background:
          theme.palette.mode === "light"
            ? theme.palette.background.lightBg
            : theme.palette.darkBg,
        position: "relative",
        py: 6,
        overflow: "hidden",
        px: { xs: 2, md: 0 },
      }}
    >
      {/* Background image, right aligned   */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: { xs: "auto", md: 0 },
          left: { xs: 0, md: "auto" },
          bottom: 0,
          width: { xs: "120%", md: "50%" },
          height: "100%",
          background:
            theme.palette.mode === "light"
              ? {
                  xs: `url(${sitemapLightImg}) right center / cover no-repeat`,
                  md: `url(${sitemapLightImg}) right center / cover no-repeat`,
                }
              : {
                  xs: `url(${sitemapImg}) right center / cover no-repeat`,
                  md: `url(${sitemapImg}) right center / cover no-repeat`,
                },
          opacity: 0.18,
          zIndex: 1,
          pointerEvents: "none",
        }}
      />
      {/* Content overlay */}
      <Box
        sx={{
          width: { xs: "100%", sm: "80%", md: "80%" },
          margin: "0 auto",
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexWrap: "wrap",
          gap: { xs: 2, sm: 4, md: 4 },
          justifyContent: "center",
          px: { xs: 1, sm: 0, md: 0 }, // 4px padding on mobile (1 * 8px = 8px, but we want 4px each side)
        }}
      >
        {sections.map((section) => (
          <Box
            key={section.title}
            sx={{
              flex: {
                xs: "1 1 calc(50% - 8px)",
                sm: "1 1 calc(50% - 16px)",
                md: "1 1 auto",
              },
              minWidth: {
                xs: "calc(50% - 8px)",
                sm: "calc(50% - 16px)",
                md:
                  section.title === "Contact Us" || section.title === "Services"
                    ? "30%"
                    : "20%",
              },
              maxWidth: {
                xs: "calc(50% - 8px)",
                sm: "calc(50% - 16px)",
                md:
                  section.title === "Contact Us" || section.title === "Services"
                    ? "30%"
                    : "20%",
              },
            }}
          >
            <Box sx={{ width: "100%" }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  color:
                    theme.palette.mode === "light"
                      ? theme.palette.primary.main
                      : "#fff",
                }}
              >
                {section.title}
              </Typography>
              <List dense sx={{ width: "100%" }}>
                {section.items.map((item, idx) => (
                  <ListItem
                    key={idx}
                    disableGutters
                    sx={{ py: 0.5, width: "100%" }}
                  >
                    <ListItemButton
                      component={Link}
                      to={item.path}
                      sx={{
                        p: 0,
                        "&:hover": {
                          backgroundColor: "transparent",
                          textDecoration: "underline",
                          textDecorationColor: theme.palette.secondary.main,
                          textUnderlineOffset: "4px",
                          color: theme.palette.secondary.main,
                          "& .MuiListItemText-primary": {
                            color: theme.palette.secondary.main,
                          },
                        },
                      }}
                    >
                      <ListItemText
                        primary={item.name}
                        primaryTypographyProps={{
                          fontSize: 15,
                          color:
                            theme.palette.mode === "light"
                              ? theme.palette.primary.main
                              : theme.palette.accent?.light,
                          cursor: "pointer",
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default SiteMap;
