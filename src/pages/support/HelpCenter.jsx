import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { ExpandMore, Help, Search, ContactSupport } from "@mui/icons-material";

const HelpCenter = () => {
  const faqs = [
    {
      question: "How do I get started with your services?",
      answer:
        "Getting started is easy! Simply contact us through our contact form or call us directly. Our team will schedule a consultation to understand your needs and provide a customized solution.",
    },
    {
      question: "What technologies do you specialize in?",
      answer:
        "We specialize in modern web technologies including React, Angular, Vue.js, Node.js, Python, Java, and cloud platforms like AWS, Azure, and Google Cloud.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary depending on complexity and scope. A simple website might take 2-4 weeks, while complex applications can take 3-6 months. We'll provide a detailed timeline during our initial consultation.",
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer:
        "Yes, we offer comprehensive support and maintenance packages to ensure your applications continue to perform optimally and stay up-to-date with the latest technologies.",
    },
    {
      question: "What is your pricing structure?",
      answer:
        "Our pricing is project-based and depends on the scope, complexity, and timeline. We provide detailed quotes after understanding your requirements and can work with various budget ranges.",
    },
  ];

  const helpCategories = [
    {
      title: "Getting Started",
      description: "Learn how to begin your project with us",
      icon: <Help sx={{ fontSize: 40, color: "primary.main" }} />,
    },
    {
      title: "Services Guide",
      description: "Detailed information about our services",
      icon: <Search sx={{ fontSize: 40, color: "primary.main" }} />,
    },
    {
      title: "Contact Support",
      description: "Get in touch with our support team",
      icon: <ContactSupport sx={{ fontSize: 40, color: "primary.main" }} />,
    },
  ];

  return (
    <Box sx={{ flex: 1, py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h1" gutterBottom>
          Help Center
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          Find answers to your questions and get the support you need
        </Typography>

        <Grid container spacing={4} sx={{ mb: 6 }}>
          {helpCategories.map((category, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ height: "100%", p: 3 }}>
                <CardContent>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    {category.icon}
                    <Typography variant="h6" sx={{ ml: 2 }}>
                      {category.title}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    {category.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Typography variant="h4" gutterBottom sx={{ mb: 3 }}>
          Frequently Asked Questions
        </Typography>

        {faqs.map((faq, index) => (
          <Accordion key={index} sx={{ mb: 2 }}>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography variant="h6">{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" color="text.secondary">
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Box>
  );
};

export default HelpCenter;
