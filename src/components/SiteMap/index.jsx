import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useTheme } from "@mui/material/styles";
import sitemapImg from "../../assets/images/sitemap.png";

// Dummy data arrays (replace with your real data later)
const menuLinks = ["Home", "About", "Careers", "Contact"];
const services = [
  "Web Development",
  "Mobile App Development",
  "Cloud Solutions",
];
const support = ["Help Center", "FAQs", "Live Chat"];
const industries = ["Healthcare", "Finance", "Retail"];
const blog = ["Latest Posts", "Tech News", "Case Studies"];
const contact = [
  "Email: info@infoxygen.com",
  "Phone: +91-7307805030",
  "Address: India",
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
        background: `${theme.palette.darkBg}`,
        position: "relative",
        py: 6,
        overflow: "hidden",
      }}
    >
      {/* Background image, right aligned */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          width: { xs: "60%", md: "50%" },
          background: `url(${sitemapImg}) right center / cover no-repeat`,
          opacity: 0.18,
          zIndex: 1,
          pointerEvents: "none",
        }}
      />
      {/* Content overlay */}
      <Grid
        container
        spacing={4}
        justifyContent="center"
        sx={{ width: "80%", margin: "0 auto", position: "relative", zIndex: 2 }}
      >
        {sections.map((section) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={2}
            key={section.title}
            sx={{ width: "auto", minWidth: 0 }}
          >
            <Box sx={{ width: "100%" }}>
              <Typography
                variant="h6"
                sx={{ fontWeight: 700, mb: 2, color: "#fff" }}
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
                    <ListItemText
                      primary={item}
                      primaryTypographyProps={{ fontSize: 15, color: "#fff" }}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SiteMap;
