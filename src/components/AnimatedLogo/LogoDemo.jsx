import React, { useState } from 'react';
import { Box, Button, Typography, Paper, Grid } from '@mui/material';
import { AnimatedLogo, AnimatedLogoAdvanced } from './index';

const LogoDemo = () => {
  const [currentStyle, setCurrentStyle] = useState('explode');
  const [key, setKey] = useState(0);

  // Example logo pieces (replace with your actual pieces)
  const logoPieces = [
    // These are placeholder paths - replace with your actual logo pieces
    '/src/assets/logos/logo-piece-1.png',
    '/src/assets/logos/logo-piece-2.png',
    '/src/assets/logos/logo-piece-3.png',
    '/src/assets/logos/logo-piece-4.png'
  ];

  const finalLogo = '/src/assets/logos/logo.png';

  const animationStyles = [
    { name: 'slide', description: 'Pieces slide in from circular positions' },
    { name: 'explode', description: 'Pieces explode outward then come together' },
    { name: 'spiral', description: 'Pieces follow a spiral pattern' },
    { name: 'random', description: 'Pieces start from random positions' }
  ];

  const handleStyleChange = (style) => {
    setCurrentStyle(style);
    setKey(prev => prev + 1);
  };

  const handleAnimationComplete = () => {
    console.log(`Animation completed with style: ${currentStyle}`);
  };

  return (
    <Box sx={{ p: 4, maxWidth: '1200px', mx: 'auto' }}>
      <Typography variant="h3" sx={{ mb: 4, textAlign: 'center' }}>
        Animated Logo Demo
      </Typography>

      {/* Style Selector */}
      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Choose Animation Style:
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
          {animationStyles.map((style) => (
            <Button
              key={style.name}
              variant={currentStyle === style.name ? 'contained' : 'outlined'}
              onClick={() => handleStyleChange(style.name)}
              sx={{ minWidth: '120px' }}
            >
              {style.name.charAt(0).toUpperCase() + style.name.slice(1)}
            </Button>
          ))}
        </Box>
      </Box>

      {/* Current Animation Display */}
      <Paper sx={{ p: 4, mb: 4, textAlign: 'center' }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Current Style: {currentStyle.toUpperCase()}
        </Typography>
        <Typography variant="body2" sx={{ mb: 3, color: 'text.secondary' }}>
          {animationStyles.find(s => s.name === currentStyle)?.description}
        </Typography>
        
        <AnimatedLogoAdvanced
          key={key}
          pieces={logoPieces}
          finalLogo={finalLogo}
          animationStyle={currentStyle}
          delay={1000}
          pieceDelay={200}
          showAssemblyEffect={true}
          onAnimationComplete={handleAnimationComplete}
        />
      </Paper>

      {/* All Styles Showcase */}
      <Typography variant="h5" sx={{ mb: 3, textAlign: 'center' }}>
        All Animation Styles
      </Typography>
      <Grid container spacing={3}>
        {animationStyles.map((style, index) => (
          <Grid item xs={12} sm={6} md={3} key={style.name}>
            <Paper sx={{ p: 2, textAlign: 'center' }}>
              <Typography variant="h6" sx={{ mb: 1 }}>
                {style.name.toUpperCase()}
              </Typography>
              <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
                {style.description}
              </Typography>
              <AnimatedLogoAdvanced
                pieces={logoPieces}
                finalLogo={finalLogo}
                animationStyle={style.name}
                delay={index * 500}
                pieceDelay={150}
                showAssemblyEffect={false}
              />
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Basic vs Advanced Comparison */}
      <Box sx={{ mt: 6 }}>
        <Typography variant="h5" sx={{ mb: 3, textAlign: 'center' }}>
          Basic vs Advanced Components
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3, textAlign: 'center' }}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Basic AnimatedLogo
              </Typography>
              <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
                Simple slide-in animation with basic effects
              </Typography>
              <AnimatedLogo
                pieces={logoPieces}
                finalLogo={finalLogo}
                delay={1000}
                onAnimationComplete={() => console.log('Basic animation completed')}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3, textAlign: 'center' }}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Advanced AnimatedLogoAdvanced
              </Typography>
              <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
                Multiple animation styles with enhanced effects
              </Typography>
              <AnimatedLogoAdvanced
                pieces={logoPieces}
                finalLogo={finalLogo}
                animationStyle="explode"
                delay={1000}
                pieceDelay={150}
                showAssemblyEffect={true}
                onAnimationComplete={() => console.log('Advanced animation completed')}
              />
            </Paper>
          </Grid>
        </Grid>
      </Box>

      {/* Usage Instructions */}
      <Paper sx={{ p: 4, mt: 4 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          How to Use:
        </Typography>
        <Box component="pre" sx={{ 
          background: '#f5f5f5', 
          p: 2, 
          borderRadius: 1, 
          overflow: 'auto',
          fontSize: '14px'
        }}>
{`// 1. Import the components
import { AnimatedLogo, AnimatedLogoAdvanced } from './components/AnimatedLogo';

// 2. Prepare your logo pieces
const logoPieces = [
  '/path/to/piece1.png',
  '/path/to/piece2.png',
  '/path/to/piece3.png',
  '/path/to/piece4.png'
];

// 3. Use the component
<AnimatedLogoAdvanced
  pieces={logoPieces}
  finalLogo="/path/to/complete-logo.png"
  animationStyle="explode"
  delay={1500}
  pieceDelay={200}
  onAnimationComplete={() => console.log('Done!')}
/>`}
        </Box>
      </Paper>
    </Box>
  );
};

export default LogoDemo; 