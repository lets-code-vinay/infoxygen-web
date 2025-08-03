import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
} from "@mui/material";

const Blog = () => {
  return (
    <Box sx={{ flex: 1, py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h1" gutterBottom>
          Blog & Insights
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          Stay updated with the latest trends and insights in technology
        </Typography>

        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={12} md={6} lg={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  The Future of AI in Healthcare
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Exploring how artificial intelligence is revolutionizing the
                  healthcare industry...
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Sustainable Technology Solutions
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  How we're building eco-friendly technology solutions for a
                  better future...
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Digital Transformation Strategies
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Key strategies for successful digital transformation in modern
                  businesses...
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Blog;
