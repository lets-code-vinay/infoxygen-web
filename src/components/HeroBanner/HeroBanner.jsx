import React, { useEffect, useRef } from 'react';
import { Box, Container, Typography, Button, styled } from '@mui/material';
import { AnimatedLogo, AnimatedLogoAdvanced } from '../AnimatedLogo';

const HeroContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #533483 100%)',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.2) 0%, transparent 50%)',
    animation: 'backgroundShift 8s ease-in-out infinite',
  },
}));

const FloatingElements = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  pointerEvents: 'none',
});

const FloatingCircle = styled('div')(({ delay, size, color }) => ({
  position: 'absolute',
  width: size,
  height: size,
  borderRadius: '50%',
  background: color,
  opacity: 0.1,
  animation: `float 6s ease-in-out infinite`,
  animationDelay: `${delay}s`,
  filter: 'blur(1px)',
  boxShadow: `0 0 20px ${color}40`,
}));

const GlowingOrb = styled('div')(({ theme }) => ({
  position: 'absolute',
  width: '300px',
  height: '300px',
  borderRadius: '50%',
  background: `radial-gradient(circle, ${theme.palette.primary.main}20 0%, transparent 70%)`,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  animation: 'pulse 4s ease-in-out infinite',
  zIndex: 1,
  boxShadow: `0 0 60px ${theme.palette.primary.main}30`,
}));

const ContentContainer = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  color: 'white',
  zIndex: 20,
  position: 'relative',
  maxWidth: '800px',
  mx: 'auto',
  px: 3,
}));

const AnimatedTitle = styled(Typography)({
  background: 'linear-gradient(45deg, #fff, #f0f0f0, #fff)',
  backgroundSize: '200% 200%',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  animation: 'shimmer 3s ease-in-out infinite',
  textShadow: '0 0 30px rgba(255, 255, 255, 0.5)',
});

const StatsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: theme.spacing(4),
  marginTop: theme.spacing(6),
  flexWrap: 'wrap',
}));

const StatItem = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(2),
  borderRadius: '12px',
  background: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    background: 'rgba(255, 255, 255, 0.1)',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
  },
}));

const CTAButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(45deg, #667eea 0%, #764ba2 100%)',
  color: 'white',
  padding: '12px 32px',
  borderRadius: '25px',
  fontSize: '1.1rem',
  fontWeight: 600,
  textTransform: 'none',
  boxShadow: '0 8px 25px rgba(102, 126, 234, 0.4)',
  transition: 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  marginTop: theme.spacing(4),
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '-100%',
    width: '100%',
    height: '100%',
    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
    transition: 'left 0.5s',
  },
  '&:hover': {
    transform: 'translateY(-3px) scale(1.05)',
    boxShadow: '0 15px 40px rgba(102, 126, 234, 0.6)',
    background: 'linear-gradient(45deg, #5a6fd8 0%, #6a4190 100%)',
    '&::before': {
      left: '100%',
    },
  },
  '&:active': {
    transform: 'translateY(-1px) scale(1.02)',
  },
}));

const HeroBanner = () => {
  const animationRef = useRef(null);

  useEffect(() => {
    // Add CSS animations dynamically
    const style = document.createElement('style');
    style.textContent = `
      @keyframes backgroundShift {
        0%, 100% {
          opacity: 0.8;
          transform: scale(1) rotate(0deg);
        }
        25% {
          opacity: 1;
          transform: scale(1.05) rotate(1deg);
        }
        50% {
          opacity: 0.9;
          transform: scale(1.1) rotate(-1deg);
        }
        75% {
          opacity: 1;
          transform: scale(1.05) rotate(1deg);
        }
      }

      @keyframes float {
        0% {
          transform: translateY(0px) rotate(0deg) scale(1);
          opacity: 0.1;
        }
        25% {
          transform: translateY(-15px) rotate(90deg) scale(1.1);
          opacity: 0.2;
        }
        50% {
          transform: translateY(-25px) rotate(180deg) scale(1);
          opacity: 0.3;
        }
        75% {
          transform: translateY(-15px) rotate(270deg) scale(1.1);
          opacity: 0.2;
        }
        100% {
          transform: translateY(0px) rotate(360deg) scale(1);
          opacity: 0.1;
        }
      }

      @keyframes pulse {
        0% {
          transform: translate(-50%, -50%) scale(1);
          opacity: 0.3;
        }
        25% {
          transform: translate(-50%, -50%) scale(1.1);
          opacity: 0.5;
        }
        50% {
          transform: translate(-50%, -50%) scale(1.3);
          opacity: 0.7;
        }
        75% {
          transform: translate(-50%, -50%) scale(1.1);
          opacity: 0.5;
        }
        100% {
          transform: translate(-50%, -50%) scale(1);
          opacity: 0.3;
        }
      }

      @keyframes shimmer {
        0% {
          background-position: -200% 0;
        }
        100% {
          background-position: 200% 0;
        }
      }

      @keyframes slideInFromLeft {
        from {
          opacity: 0;
          transform: translateX(-100px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }

      @keyframes slideInFromRight {
        from {
          opacity: 0;
          transform: translateX(100px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }

      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes scaleIn {
        from {
          opacity: 0;
          transform: scale(0.8);
        }
        to {
          opacity: 1;
          transform: scale(1);
        }
      }

      @keyframes bounceIn {
        0% {
          opacity: 0;
          transform: scale(0.3);
        }
        50% {
          opacity: 1;
          transform: scale(1.05);
        }
        70% {
          transform: scale(0.9);
        }
        100% {
          opacity: 1;
          transform: scale(1);
        }
      }

      @keyframes glowPulse {
        0%, 100% {
          box-shadow: 0 0 20px rgba(102, 126, 234, 0.4);
        }
        50% {
          box-shadow: 0 0 40px rgba(102, 126, 234, 0.8), 0 0 60px rgba(118, 75, 162, 0.6);
        }
      }

      .slide-in-left {
        animation: slideInFromLeft 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
      }

      .slide-in-right {
        animation: slideInFromRight 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
      }

      .fade-in-up {
        animation: fadeInUp 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
      }

      .fade-in-up-delay-1 {
        animation: fadeInUp 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.2s forwards;
        opacity: 0;
      }

      .fade-in-up-delay-2 {
        animation: fadeInUp 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.4s forwards;
        opacity: 0;
      }

      .fade-in-up-delay-3 {
        animation: fadeInUp 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.6s forwards;
        opacity: 0;
      }

      .scale-in {
        animation: scaleIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
      }

      .bounce-in {
        animation: bounceIn 1s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
      }

      .glow-pulse {
        animation: glowPulse 2s ease-in-out infinite;
      }

      .stat-item-hover {
        transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      }

      .stat-item-hover:hover {
        transform: translateY(-8px) scale(1.05);
        box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <HeroContainer>
      {/* Background Elements */}
      <FloatingElements>
        <FloatingCircle delay={0} size="60px" color="#667eea" style={{ top: '20%', left: '10%' }} />
        <FloatingCircle delay={2} size="40px" color="#764ba2" style={{ top: '60%', left: '80%' }} />
        <FloatingCircle delay={4} size="80px" color="#667eea" style={{ top: '80%', left: '20%' }} />
        <FloatingCircle delay={1} size="50px" color="#764ba2" style={{ top: '30%', left: '70%' }} />
        <FloatingCircle delay={3} size="70px" color="#667eea" style={{ top: '70%', left: '60%' }} />
        
        {/* Sharp animated lines */}
        <div style={{
          position: 'absolute',
          top: '15%',
          left: '5%',
          width: '2px',
          height: '100px',
          background: 'linear-gradient(to bottom, transparent, #667eea, transparent)',
          animation: 'pulse 3s ease-in-out infinite',
          animationDelay: '1s'
        }} />
        <div style={{
          position: 'absolute',
          top: '25%',
          right: '10%',
          width: '2px',
          height: '80px',
          background: 'linear-gradient(to bottom, transparent, #764ba2, transparent)',
          animation: 'pulse 3s ease-in-out infinite',
          animationDelay: '2s'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '20%',
          left: '15%',
          width: '100px',
          height: '2px',
          background: 'linear-gradient(to right, transparent, #667eea, transparent)',
          animation: 'pulse 4s ease-in-out infinite',
          animationDelay: '0.5s'
        }} />
      </FloatingElements>

      {/* Glowing Orb */}
      <GlowingOrb />

      <Container maxWidth="lg">
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          flexDirection: { xs: 'column', md: 'row' },
          gap: { xs: 4, md: 6 },
          minHeight: '80vh'
        }}>
          {/* Left Side - Content */}
          <Box sx={{ 
            flex: 1, 
            textAlign: { xs: 'center', md: 'left' },
            maxWidth: { xs: '100%', md: '50%' }
          }}>
            <AnimatedTitle 
              variant="h1" 
              className="slide-in-left"
              sx={{ 
                fontSize: { xs: '2.5rem', md: '4rem', lg: '5rem' },
                fontWeight: 800,
                mb: 3,
                letterSpacing: '-0.02em',
              }}
            >
              One-stop access to
              <br />
              <span 
                className="bounce-in"
                style={{ 
                  background: 'linear-gradient(45deg, #667eea, #764ba2)', 
                  WebkitBackgroundClip: 'text', 
                  WebkitTextFillColor: 'transparent', 
                  backgroundClip: 'text',
                  display: 'inline-block',
                  animationDelay: '0.8s'
                }}
              >
                digital innovation
              </span>
            </AnimatedTitle>

            <Typography 
              variant="h2" 
              className="slide-in-right"
              sx={{ 
                fontSize: { xs: '1.2rem', md: '1.5rem', lg: '1.8rem' },
                fontWeight: 400,
                mb: 4,
                opacity: 0.9,
                maxWidth: '600px',
                lineHeight: 1.4,
                color: '#e0e0e0'
              }}
            >
              Amplify business impact with Infoxygen's specialized knowledge and technology-based solutions
            </Typography>

            <CTAButton 
              variant="contained" 
              size="large"
              className="scale-in glow-pulse"
              sx={{ animationDelay: '0.6s' }}
            >
              Launch Platform
            </CTAButton>
          </Box>

          {/* Right Side - Animated Logo */}
          <Box sx={{ 
            flex: 1, 
            display: 'flex', 
            justifyContent: { xs: 'center', md: 'flex-end' },
            alignItems: 'center',
            maxWidth: { xs: '100%', md: '50%' }
          }}>
            <AnimatedLogoAdvanced
              pieces={[
                new URL('/src/assets/logos/logo-piece-1.png', import.meta.url).href,
                new URL('/src/assets/logos/logo-piece-2.png', import.meta.url).href,
                new URL('/src/assets/logos/logo-piece-3.png', import.meta.url).href,
              ]}
              finalLogo={new URL('/src/assets/logos/dark-only-logo.png', import.meta.url).href}
              animationStyle="explode"
              delay={2000}
              pieceDelay={200}
              showAssemblyEffect={true}
              continuous={true}
              onAnimationComplete={() => console.log('Logo assembled!')}
            />
          </Box>
        </Box>

        {/* Stats Section */}
        <StatsContainer className="fade-in-up-delay-3">
          <StatItem className="stat-item-hover">
            <Typography 
              variant="h3" 
              className="bounce-in"
              sx={{ 
                fontSize: '2.5rem', 
                fontWeight: 700, 
                color: '#667eea', 
                mb: 1,
                animationDelay: '1s'
              }}
            >
              200+
            </Typography>
            <Typography variant="body2" sx={{ color: '#b0b0b0', fontSize: '0.9rem' }}>
              Industry & Tech Experts
            </Typography>
          </StatItem>

          <StatItem className="stat-item-hover">
            <Typography 
              variant="h3" 
              className="bounce-in"
              sx={{ 
                fontSize: '2.5rem', 
                fontWeight: 700, 
                color: '#764ba2', 
                mb: 1,
                animationDelay: '1.2s'
              }}
            >
              5
            </Typography>
            <Typography variant="body2" sx={{ color: '#b0b0b0', fontSize: '0.9rem' }}>
              Countries
            </Typography>
          </StatItem>

          <StatItem className="stat-item-hover">
            <Typography 
              variant="h3" 
              className="bounce-in"
              sx={{ 
                fontSize: '2.5rem', 
                fontWeight: 700, 
                color: '#667eea', 
                mb: 1,
                animationDelay: '1.4s'
              }}
            >
              $10.30M
            </Typography>
            <Typography variant="body2" sx={{ color: '#b0b0b0', fontSize: '0.9rem' }}>
              TTM Revenue
            </Typography>
          </StatItem>

          <StatItem className="stat-item-hover">
            <Typography 
              variant="h3" 
              className="bounce-in"
              sx={{ 
                fontSize: '2.5rem', 
                fontWeight: 700, 
                color: '#764ba2', 
                mb: 1,
                animationDelay: '1.6s'
              }}
            >
              50+
            </Typography>
            <Typography variant="body2" sx={{ color: '#b0b0b0', fontSize: '0.9rem' }}>
              Services Clients Annually
            </Typography>
          </StatItem>
        </StatsContainer>
      </Container>
    </HeroContainer>
  );
};

export default HeroBanner; 