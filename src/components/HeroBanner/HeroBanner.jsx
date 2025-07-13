import React, { useEffect, useRef, useState } from 'react';
import { Box, Container, Typography, Button, styled } from '@mui/material';
import { AnimatedLogo, AnimatedLogoAdvanced } from '../AnimatedLogo';
import ActionButton from '../CustomButtons/ActionButton/ActionButton';

const HeroContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'linear-gradient(135deg, #0a0a0a 0%, #0f0f0f 25%, #0a0a0a 50%, #0f0f0f 75%, #0a0a0a 100%)',
  position: 'relative',
  overflow: 'hidden',
  marginTop: '-64px', // Compensate for the fixed header
  paddingTop: '64px', // Add padding to account for header height
  [theme.breakpoints.down('sm')]: {
    marginTop: '-56px',
    paddingTop: '56px',
  },
  [theme.breakpoints.up('lg')]: {
    marginTop: '-72px',
    paddingTop: '72px',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(circle at 20% 80%, rgba(0, 60, 79, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(56, 142, 60, 0.15) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(0, 60, 79, 0.1) 0%, transparent 50%)',
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
  opacity: 0.25,
  animation: `float 6s ease-in-out infinite`,
  animationDelay: `${delay}s`,
  filter: 'blur(0.5px)',
  boxShadow: `0 0 30px ${color}60, 0 0 60px ${color}40`,
}));

const GlowingOrb = styled('div')(({ theme }) => ({
  position: 'absolute',
  width: '300px',
  height: '300px',
  borderRadius: '50%',
  background: `radial-gradient(circle, ${theme.palette.primary.main}15 0%, transparent 70%)`,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  animation: 'pulse 4s ease-in-out infinite',
  zIndex: 1,
  boxShadow: `0 0 60px ${theme.palette.primary.main}20`,
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

const HeroBanner = () => {
  const animationRef = useRef(null);
  const [circlePositions, setCirclePositions] = useState([]);

  useEffect(() => {
    // Generate random positions for floating circles
    const generateRandomPositions = () => {
      const positions = [];
      for (let i = 0; i < 5; i++) {
        positions.push({
          top: Math.random() * 80 + 10, // 10% to 90%
          left: Math.random() * 80 + 10, // 10% to 90%
        });
      }
      return positions;
    };

    setCirclePositions(generateRandomPositions());
  }, []);

  useEffect(() => {
    // Add CSS animations dynamically
    const style = document.createElement('style');
    style.textContent = `
      @keyframes backgroundShift {
        0%, 100% {
          opacity: 0.6;
          transform: scale(1) rotate(0deg);
        }
        25% {
          opacity: 0.8;
          transform: scale(1.05) rotate(1deg);
        }
        50% {
          opacity: 0.7;
          transform: scale(1.1) rotate(-1deg);
        }
        75% {
          opacity: 0.8;
          transform: scale(1.05) rotate(1deg);
        }
      }

      @keyframes float {
        0% {
          transform: translateY(0px) rotate(0deg) scale(1);
          opacity: 0.25;
        }
        25% {
          transform: translateY(-20px) rotate(90deg) scale(1.15);
          opacity: 0.4;
        }
        50% {
          transform: translateY(-35px) rotate(180deg) scale(1);
          opacity: 0.5;
        }
        75% {
          transform: translateY(-20px) rotate(270deg) scale(1.15);
          opacity: 0.4;
        }
        100% {
          transform: translateY(0px) rotate(360deg) scale(1);
          opacity: 0.25;
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
        {circlePositions.length > 0 && (
          <>
            <FloatingCircle 
              delay={0} 
              size="80px" 
              color="#003c4f" 
              style={{ 
                top: `${circlePositions[0]?.top}%`, 
                left: `${circlePositions[0]?.left}%` 
              }} 
            />
            <FloatingCircle 
              delay={2} 
              size="60px" 
              color="#388e3c" 
              style={{ 
                top: `${circlePositions[1]?.top}%`, 
                left: `${circlePositions[1]?.left}%` 
              }} 
            />
            <FloatingCircle 
              delay={4} 
              size="100px" 
              color="#003c4f" 
              style={{ 
                top: `${circlePositions[2]?.top}%`, 
                left: `${circlePositions[2]?.left}%` 
              }} 
            />
            <FloatingCircle 
              delay={1} 
              size="70px" 
              color="#388e3c" 
              style={{ 
                top: `${circlePositions[3]?.top}%`, 
                left: `${circlePositions[3]?.left}%` 
              }} 
            />
            <FloatingCircle 
              delay={3} 
              size="90px" 
              color="#003c4f" 
              style={{ 
                top: `${circlePositions[4]?.top}%`, 
                left: `${circlePositions[4]?.left}%` 
              }} 
            />
          </>
        )}
        
        {/* Sharp animated lines */}
        <div style={{
          position: 'absolute',
          top: '15%',
          left: '5%',
          width: '3px',
          height: '120px',
          background: 'linear-gradient(to bottom, transparent, #003c4f, transparent)',
          animation: 'pulse 3s ease-in-out infinite',
          animationDelay: '1s',
          opacity: 0.6
        }} />
        <div style={{
          position: 'absolute',
          top: '25%',
          right: '10%',
          width: '3px',
          height: '100px',
          background: 'linear-gradient(to bottom, transparent, #388e3c, transparent)',
          animation: 'pulse 3s ease-in-out infinite',
          animationDelay: '2s',
          opacity: 0.6
        }} />
        <div style={{
          position: 'absolute',
          bottom: '20%',
          left: '15%',
          width: '120px',
          height: '3px',
          background: 'linear-gradient(to right, transparent, #003c4f, transparent)',
          animation: 'pulse 4s ease-in-out infinite',
          animationDelay: '0.5s',
          opacity: 0.6
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
                fontSize: { xs: '2rem', md: '3rem', lg: '3.5rem' },
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
                  background: 'linear-gradient(45deg, #388e3c, #4caf50, #2e7d32)', 
                  WebkitBackgroundClip: 'text', 
                  WebkitTextFillColor: 'transparent', 
                  backgroundClip: 'text',
                  display: 'inline-block',
                  animationDelay: '0.8s',
                  textShadow: '0 0 20px rgba(56, 142, 60, 0.3)'
                }}
              >
                digital innovation
              </span>
            </AnimatedTitle>

            <Typography 
              variant="h2" 
              className="slide-in-right"
              sx={{ 
                fontSize: { xs: '1rem', md: '1.2rem', lg: '1.4rem' },
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

            <ActionButton colorVariant='secondary' text="Launch Platform" direction="left" radius={10} />

          </Box>

          {/* Right Side - Animated Logo */}
          <Box sx={{ 
            flex: 1, 
            display: 'flex', 
            justifyContent: { xs: 'center', md: 'flex-end' },
            alignItems: 'center',
            maxWidth: { xs: '100%', md: '50%' },
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '400px',
              height: '400px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(255, 255, 255, 0.02) 0%, transparent 70%)',
              zIndex: 0,
            }
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
        <StatsContainer className="fade-in-up-delay-3" mb={2} mt={0}>
          <StatItem className="stat-item-hover">
            <Typography 
              variant="h3" 
              className="bounce-in"
              sx={{ 
                fontSize: '2.5rem', 
                fontWeight: 700, 
                color: '#003c4f', 
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
                color: '#388e3c', 
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
                color: '#003c4f', 
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
                color: '#388e3c', 
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