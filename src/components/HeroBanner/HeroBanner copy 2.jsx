import React, { useEffect, useRef } from 'react';
import { Box, Container, Typography, Button, styled } from '@mui/material';

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
  transition: 'all 0.3s ease',
  marginTop: theme.spacing(4),
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 12px 35px rgba(102, 126, 234, 0.6)',
    background: 'linear-gradient(45deg, #5a6fd8 0%, #6a4190 100%)',
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
          transform: scale(1);
        }
        50% {
          opacity: 1;
          transform: scale(1.1);
        }
      }

      @keyframes float {
        0%, 100% {
          transform: translateY(0px) rotate(0deg);
          opacity: 0.1;
        }
        50% {
          transform: translateY(-20px) rotate(180deg);
          opacity: 0.3;
        }
      }

      @keyframes pulse {
        0%, 100% {
          transform: translate(-50%, -50%) scale(1);
          opacity: 0.3;
        }
        50% {
          transform: translate(-50%, -50%) scale(1.2);
          opacity: 0.6;
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

      .fade-in-up {
        animation: fadeInUp 0.8s ease-out forwards;
      }

      .fade-in-up-delay-1 {
        animation: fadeInUp 0.8s ease-out 0.2s forwards;
        opacity: 0;
      }

      .fade-in-up-delay-2 {
        animation: fadeInUp 0.8s ease-out 0.4s forwards;
        opacity: 0;
      }

      .fade-in-up-delay-3 {
        animation: fadeInUp 0.8s ease-out 0.6s forwards;
        opacity: 0;
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
      </FloatingElements>

      {/* Glowing Orb */}
      <GlowingOrb />

      <Container maxWidth="lg">
        <ContentContainer>
          <AnimatedTitle 
            variant="h1" 
            className="fade-in-up"
            sx={{ 
              fontSize: { xs: '3rem', md: '5rem' },
              fontWeight: 800,
              mb: 3,
              letterSpacing: '-0.02em',
            }}
          >
            One-stop access to
            <br />
            <span style={{ background: 'linear-gradient(45deg, #667eea, #764ba2)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              digital innovation
            </span>
          </AnimatedTitle>

          <Typography 
            variant="h2" 
            className="fade-in-up-delay-1"
            sx={{ 
              fontSize: { xs: '1.3rem', md: '1.8rem' },
              fontWeight: 400,
              mb: 4,
              opacity: 0.9,
              maxWidth: '700px',
              mx: 'auto',
              lineHeight: 1.4,
              color: '#e0e0e0'
            }}
          >
            Amplify business impact with Infoxygen's specialized knowledge and technology-based solutions
          </Typography>

          <CTAButton 
            variant="contained" 
            size="large"
            className="fade-in-up-delay-2"
          >
            Launch Platform
          </CTAButton>

          <StatsContainer className="fade-in-up-delay-3">
            <StatItem>
              <Typography variant="h3" sx={{ fontSize: '2.5rem', fontWeight: 700, color: '#667eea', mb: 1 }}>
                200+
              </Typography>
              <Typography variant="body2" sx={{ color: '#b0b0b0', fontSize: '0.9rem' }}>
                Industry & Tech Experts
              </Typography>
            </StatItem>

            <StatItem>
              <Typography variant="h3" sx={{ fontSize: '2.5rem', fontWeight: 700, color: '#764ba2', mb: 1 }}>
                5
              </Typography>
              <Typography variant="body2" sx={{ color: '#b0b0b0', fontSize: '0.9rem' }}>
                Countries
              </Typography>
            </StatItem>

            <StatItem>
              <Typography variant="h3" sx={{ fontSize: '2.5rem', fontWeight: 700, color: '#667eea', mb: 1 }}>
                $10.30M
              </Typography>
              <Typography variant="body2" sx={{ color: '#b0b0b0', fontSize: '0.9rem' }}>
                TTM Revenue
              </Typography>
            </StatItem>

            <StatItem>
              <Typography variant="h3" sx={{ fontSize: '2.5rem', fontWeight: 700, color: '#764ba2', mb: 1 }}>
                50+
              </Typography>
              <Typography variant="body2" sx={{ color: '#b0b0b0', fontSize: '0.9rem' }}>
                Services Clients Annually
              </Typography>
            </StatItem>
          </StatsContainer>
        </ContentContainer>
      </Container>
    </HeroContainer>
  );
};

export default HeroBanner; 