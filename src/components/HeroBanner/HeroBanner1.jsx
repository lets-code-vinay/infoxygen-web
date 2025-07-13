import React, { useEffect, useRef } from 'react';
import { Box, Container, Typography, styled } from '@mui/material';

const HeroContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  position: 'relative',
  overflow: 'hidden',
}));

const AnimationContainer = styled(Box)({
  position: 'relative',
  width: '100%',
  height: '600px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '2px solid rgba(255, 255, 255, 0.2)',
  borderRadius: '10px',
  margin: '20px 0',
});

const Fox = styled('svg')({
  position: 'absolute',
  width: '200px',
  height: '200px',
  zIndex: 10,
  animation: 'foxRun 3s ease-in-out infinite',
  left: '0',
  top: '50%',
  transform: 'translateY(-50%)',
  filter: 'drop-shadow(4px 4px 8px rgba(0, 0, 0, 0.4))',
});

const Circle = styled('div')(({ theme }) => ({
  position: 'absolute',
  width: '120px',
  height: '120px',
  borderRadius: '50%',
  background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  zIndex: 5,
  animation: 'circleRoll 3s ease-in-out infinite',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
  left: '0',
  top: '50%',
  transform: 'translateY(-50%)',
  border: '4px solid white',
}));

const LogoReveal = styled('div')(({ theme }) => ({
  position: 'absolute',
  fontSize: '6rem',
  fontWeight: 'bold',
  color: 'white',
  opacity: 0,
  animation: 'logoReveal 3s ease-in-out infinite',
  textShadow: '4px 4px 8px rgba(0, 0, 0, 0.6)',
  zIndex: 15,
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
}));

const ContentContainer = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  color: 'white',
  zIndex: 20,
  position: 'relative',
  marginTop: '200px',
}));

const HeroBanner1 = () => {
  const animationRef = useRef(null);

  useEffect(() => {
    // Add CSS animations dynamically
    const style = document.createElement('style');
    style.textContent = `
      @keyframes foxRun {
        0% {
          transform: translateX(100vw) translateY(-50%);
        }
        40% {
          transform: translateX(50vw) translateY(-50%) translateY(-20px);
        }
        60% {
          transform: translateX(50vw) translateY(-50%) translateY(-20px);
        }
        100% {
          transform: translateX(-100px) translateY(-50%);
        }
      }

      @keyframes circleRoll {
        0% {
          transform: translateX(-100px) translateY(-50%) rotate(0deg);
        }
        40% {
          transform: translateX(50vw) translateY(-50%) rotate(360deg);
        }
        60% {
          transform: translateX(50vw) translateY(-50%) rotate(720deg);
        }
        100% {
          transform: translateX(100vw) translateY(-50%) rotate(1080deg);
        }
      }

      @keyframes logoReveal {
        0%, 50% {
          opacity: 0;
          transform: translate(-50%, -50%) scale(0.5) rotate(-180deg);
        }
        60% {
          opacity: 1;
          transform: translate(-50%, -50%) scale(1.2) rotate(0deg);
        }
        70% {
          transform: translate(-50%, -50%) scale(1) rotate(0deg);
        }
        100% {
          opacity: 1;
          transform: translate(-50%, -50%) scale(1) rotate(0deg);
        }
      }

      @keyframes collision {
        0% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.5);
        }
        100% {
          transform: scale(1);
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <HeroContainer>
      <Container maxWidth="lg">
        <AnimationContainer ref={animationRef}>
          {/* Animated Fox */}
          <Fox viewBox="0 0 200 200">
            <defs>
              <linearGradient id="foxGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: '#E67E22', stopOpacity: 1}} />
                <stop offset="50%" style={{stopColor: '#D35400', stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: '#A04000', stopOpacity: 1}} />
              </linearGradient>
              <filter id="foxShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="3" dy="3" stdDeviation="3" floodColor="#000" floodOpacity="0.3"/>
              </filter>
            </defs>
            <g filter="url(#foxShadow)">
              {/* Fox body - more realistic */}
              <ellipse cx="100" cy="120" rx="45" ry="25" fill="url(#foxGradient)" />
              <ellipse cx="100" cy="120" rx="40" ry="20" fill="none" stroke="#8B4513" strokeWidth="1" opacity="0.3" />
              
              {/* Fox head - larger and more detailed */}
              <circle cx="140" cy="90" r="20" fill="url(#foxGradient)" />
              <circle cx="140" cy="90" r="18" fill="none" stroke="#8B4513" strokeWidth="1" opacity="0.3" />
              
              {/* Fox muzzle */}
              <ellipse cx="155" cy="95" rx="8" ry="6" fill="#F39C12" />
              
              {/* Fox ears - more realistic */}
              <path d="M125 75 Q130 60 135 75 Q140 65 145 75" fill="url(#foxGradient)" />
              <path d="M145 75 Q150 60 155 75 Q160 65 165 75" fill="url(#foxGradient)" />
              <path d="M125 75 Q130 60 135 75" fill="none" stroke="#8B4513" strokeWidth="1" opacity="0.3" />
              <path d="M145 75 Q150 60 155 75" fill="none" stroke="#8B4513" strokeWidth="1" opacity="0.3" />
              
              {/* Fox eyes - more realistic */}
              <ellipse cx="133" cy="85" rx="3" ry="4" fill="white" />
              <ellipse cx="147" cy="85" rx="3" ry="4" fill="white" />
              <ellipse cx="133" cy="85" rx="1.5" ry="2" fill="#2C3E50" />
              <ellipse cx="147" cy="85" rx="1.5" ry="2" fill="#2C3E50" />
              <circle cx="133.5" cy="84" r="0.8" fill="white" />
              <circle cx="147.5" cy="84" r="0.8" fill="white" />
              
              {/* Fox nose */}
              <ellipse cx="160" cy="95" rx="1.5" ry="1" fill="#2C3E50" />
              
              {/* Fox whiskers */}
              <line x1="160" y1="93" x2="170" y2="90" stroke="#8B4513" strokeWidth="1" opacity="0.6" />
              <line x1="160" y1="95" x2="170" y2="95" stroke="#8B4513" strokeWidth="1" opacity="0.6" />
              <line x1="160" y1="97" x2="170" y2="100" stroke="#8B4513" strokeWidth="1" opacity="0.6" />
              
              {/* Fox tail - more realistic and fluffy */}
              <path d="M55 120 Q35 100 45 80 Q55 60 75 80 Q85 70 95 80" stroke="url(#foxGradient)" strokeWidth="8" fill="none" strokeLinecap="round" />
              <path d="M55 120 Q35 100 45 80 Q55 60 75 80 Q85 70 95 80" stroke="#8B4513" strokeWidth="2" fill="none" opacity="0.3" />
              
              {/* Fox legs - more realistic */}
              <rect x="80" y="140" width="6" height="15" fill="url(#foxGradient)" rx="3" />
              <rect x="100" y="140" width="6" height="15" fill="url(#foxGradient)" rx="3" />
              <rect x="120" y="140" width="6" height="15" fill="url(#foxGradient)" rx="3" />
              
              {/* Fox paws */}
              <ellipse cx="83" cy="155" rx="4" ry="2" fill="#8B4513" />
              <ellipse cx="103" cy="155" rx="4" ry="2" fill="#8B4513" />
              <ellipse cx="123" cy="155" rx="4" ry="2" fill="#8B4513" />
            </g>
          </Fox>

          {/* Rolling Circle */}
          <Circle />

          {/* Logo Reveal */}
          <LogoReveal>I</LogoReveal>
        </AnimationContainer>

        <ContentContainer>
          <Typography 
            variant="h1" 
            sx={{ 
              fontSize: { xs: '2.5rem', md: '4rem' },
              fontWeight: 700,
              mb: 2,
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
            }}
          >
            Welcome to Infoxygen
          </Typography>
          <Typography 
            variant="h2" 
            sx={{ 
              fontSize: { xs: '1.2rem', md: '1.5rem' },
              fontWeight: 400,
              mb: 4,
              opacity: 0.9,
              maxWidth: '600px',
              mx: 'auto'
            }}
          >
            Where Innovation Meets Vision - Transforming Digital Obstacles Into Possibilities
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              fontSize: { xs: '1rem', md: '1.1rem' },
              opacity: 0.8,
              maxWidth: '500px',
              mx: 'auto',
              lineHeight: 1.6
            }}
          >
            Discover cutting-edge solutions and limitless creativity with our specialized knowledge and technology-based services.
          </Typography>
        </ContentContainer>
      </Container>
    </HeroContainer>
  );
};

export default HeroBanner1; 