import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const SectionContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(4, 0),
  overflow: 'hidden',
  background: theme.palette.background.default,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center', // vertical align center
  justifyContent: 'center',
}));

export const TitleRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center', // center horizontally
  marginBottom: theme.spacing(2),
  flexWrap: 'wrap',
  width: '100%',
  gap: theme.spacing(2),
}));

export const CoreTitle = styled('span')(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 700,
  fontSize: '2.2rem',
  marginRight: theme.spacing(1),
}));
export const IndustriesTitle = styled('span')(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontWeight: 700,
  fontSize: '2.2rem',
}));

export const AnimatedSliderBar = styled(Box)(({ theme }) => ({
  width: '240px',
  height: '6px',
  margin: '0 auto',
  borderRadius: '3px',
  background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
  overflow: 'hidden',
  position: 'relative',
  marginBottom: theme.spacing(2),
  '::before': {
    content: '""',
    position: 'absolute',
    left: '-40%',
    top: 0,
    width: '60%',
    height: '100%',
    background: `linear-gradient(90deg, transparent 0%, ${theme.palette.primary.light} 50%, transparent 100%)`,
    animation: 'sliderBarMove 1.5s linear infinite',
  },
  '@keyframes sliderBarMove': {
    '0%': { left: '-40%' },
    '100%': { left: '100%' },
  },
}));

export const Description = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  fontSize: '1.1rem',
  textAlign: 'center',
  marginBottom: theme.spacing(3),
  color: theme.palette.secondary.main, // match AiPartners description
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.95rem',
  },
}));

export const SliderContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  height: '140px',
  position: 'relative',
}));

export const SlidingTrack = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  animation: 'coreSlider 30s linear infinite',
  '@keyframes coreSlider': {
    '0%': { transform: 'translateX(0)' },
    '100%': { transform: 'translateX(-50%)' },
  },
}));

export const IndustryCard = styled(Box)(({ theme }) => ({
  width: 220,
  height: 80,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  border: `1px solid ${theme.palette.primary.main}`,
  borderRadius: 5,
  background: theme.palette.background.paper,
  margin: theme.spacing(0, 2),
  padding: theme.spacing(2),
  boxSizing: 'border-box',
  transition: 'box-shadow 0.3s',
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',
  zIndex: 1,
  '&:hover': {
    boxShadow: theme.shadows[4],
  },
  // Animated background sweep
  '&::before': {
    content: '""',
    position: 'absolute',
    left: 0,
    top: 0,
    height: '100%',
    width: 0,
    backgroundColor: theme.palette.primary.main,
    zIndex: 0,
    transition: 'width 1.2s cubic-bezier(0.4,0,0.2,1)',
  },
  '&:hover::before': {
    width: '100%',
  },
  // Ensure content is above the animated bg
  '& > *': {
    position: 'relative',
    zIndex: 1,
    transition: 'color 0.2s cubic-bezier(0.4,0,0.2,1) 0s',
  },
  // On hover, set all text color to theme.palette.accent.light immediately
  '&:hover, &:hover *': {
    color: theme.palette.accent.light + ' !important',
    transition: 'color 0.2s cubic-bezier(0.4,0,0.2,1) 0s',
  },
  // On hover out, delay text color transition to match background
  '&:not(:hover) > *': {
    transition: 'color 0.2s cubic-bezier(0.4,0,0.2,1) 1s',
  },
}));

export const IndustryTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: '1.1rem',
  color: theme.palette.text.primary,
  flex: 1,
  zIndex: 2,
}));

export const IconWrapper = styled(Box)(({ theme }) => ({
  width: 50,
  height: 50,
  borderRadius: '10%',
//   border: `1px solid ${theme.palette.primary.main}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
//   background: theme.palette.background.paper,
  background:'#ffffff88',
  zIndex: 2,
  transition: 'background 0.3s',
  // On hover, parent IndustryCard changes bg, but this stays the same
}));

export const IconImage = styled('img')({
  width: 40,
  height: 40,
//   objectFit: 'contain',
}); 