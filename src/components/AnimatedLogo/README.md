# Animated Logo Components Usage Guide

## 🎯 Quick Start

### 1. Import the Components
```jsx
import { AnimatedLogo, AnimatedLogoAdvanced } from './components/AnimatedLogo';
```

### 2. Basic Usage
```jsx
<AnimatedLogo
  pieces={['piece1.png', 'piece2.png', 'piece3.png']}
  finalLogo="complete-logo.png"
/>
```

### 3. Advanced Usage
```jsx
<AnimatedLogoAdvanced
  pieces={['piece1.png', 'piece2.png', 'piece3.png', 'piece4.png']}
  finalLogo="complete-logo.png"
  animationStyle="explode"
  delay={1500}
  pieceDelay={150}
/>
```

## 📋 Props Reference

### AnimatedLogo Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `pieces` | `string[]` | `[]` | Array of image URLs for logo pieces |
| `finalLogo` | `string` | `''` | URL of the complete assembled logo |
| `onAnimationComplete` | `function` | `() => {}` | Callback when animation finishes |
| `autoStart` | `boolean` | `true` | Whether to start animation automatically |
| `delay` | `number` | `1000` | Delay before animation starts (ms) |

### AnimatedLogoAdvanced Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `pieces` | `string[]` | `[]` | Array of image URLs for logo pieces |
| `finalLogo` | `string` | `''` | URL of the complete assembled logo |
| `animationStyle` | `string` | `'slide'` | Animation style: 'slide', 'explode', 'spiral', 'random' |
| `onAnimationComplete` | `function` | `() => {}` | Callback when animation finishes |
| `autoStart` | `boolean` | `true` | Whether to start animation automatically |
| `delay` | `number` | `1500` | Delay before animation starts (ms) |
| `showAssemblyEffect` | `boolean` | `true` | Show glow effect when assembled |
| `pieceDelay` | `number` | `150` | Delay between each piece animation (ms) |

## 🎨 Animation Styles

### 1. Slide (Default)
```jsx
<AnimatedLogoAdvanced animationStyle="slide" />
```
- Pieces slide in from circular positions around the center
- Smooth, predictable animation

### 2. Explode
```jsx
<AnimatedLogoAdvanced animationStyle="explode" />
```
- Pieces start far apart and explode outward, then come together
- Dramatic, eye-catching effect

### 3. Spiral
```jsx
<AnimatedLogoAdvanced animationStyle="spiral" />
```
- Pieces follow a spiral pattern as they move to center
- Elegant, flowing animation

### 4. Random
```jsx
<AnimatedLogoAdvanced animationStyle="random" />
```
- Pieces start from random positions and orientations
- Chaotic, dynamic effect

## 📁 File Structure Setup

### 1. Create Logo Assets Folder
```
src/
  assets/
    logos/
      logo-piece-1.png
      logo-piece-2.png
      logo-piece-3.png
      logo-piece-4.png
      logo-complete.png
```

### 2. Import in Component
```jsx
// Using relative paths
const logoPieces = [
  '/src/assets/logos/logo-piece-1.png',
  '/src/assets/logos/logo-piece-2.png',
  '/src/assets/logos/logo-piece-3.png',
  '/src/assets/logos/logo-piece-4.png'
];

const finalLogo = '/src/assets/logos/logo-complete.png';
```

## 🎯 Usage Examples

### Example 1: Simple Logo Animation
```jsx
import { AnimatedLogo } from './components/AnimatedLogo';

function MyComponent() {
  return (
    <div>
      <h1>Welcome to Our Company</h1>
      <AnimatedLogo
        pieces={['piece1.png', 'piece2.png', 'piece3.png']}
        finalLogo="complete-logo.png"
        delay={1000}
        onAnimationComplete={() => console.log('Logo ready!')}
      />
    </div>
  );
}
```

### Example 2: Advanced Animation with Different Styles
```jsx
import { AnimatedLogoAdvanced } from './components/AnimatedLogo';

function HeroSection() {
  const handleLogoComplete = () => {
    // Trigger other animations or actions
    console.log('Logo assembled, starting next animation...');
  };

  return (
    <div>
      <AnimatedLogoAdvanced
        pieces={['piece1.png', 'piece2.png', 'piece3.png', 'piece4.png']}
        finalLogo="complete-logo.png"
        animationStyle="explode"
        delay={2000}
        pieceDelay={200}
        showAssemblyEffect={true}
        onAnimationComplete={handleLogoComplete}
      />
    </div>
  );
}
```

### Example 3: Multiple Animation Styles
```jsx
import { AnimatedLogoAdvanced } from './components/AnimatedLogo';

function AnimationShowcase() {
  const styles = ['slide', 'explode', 'spiral', 'random'];
  
  return (
    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
      {styles.map((style, index) => (
        <div key={style}>
          <h3>{style.toUpperCase()}</h3>
          <AnimatedLogoAdvanced
            pieces={['piece1.png', 'piece2.png', 'piece3.png']}
            finalLogo="complete-logo.png"
            animationStyle={style}
            delay={index * 1000}
            autoStart={true}
          />
        </div>
      ))}
    </div>
  );
}
```

### Example 4: Manual Trigger
```jsx
import { useState } from 'react';
import { AnimatedLogoAdvanced } from './components/AnimatedLogo';

function InteractiveLogo() {
  const [key, setKey] = useState(0);

  const triggerAnimation = () => {
    setKey(prev => prev + 1);
  };

  return (
    <div>
      <button onClick={triggerAnimation}>Replay Animation</button>
      <AnimatedLogoAdvanced
        key={key}
        pieces={['piece1.png', 'piece2.png', 'piece3.png']}
        finalLogo="complete-logo.png"
        animationStyle="explode"
        autoStart={true}
      />
    </div>
  );
}
```

## 🎨 Customization

### Custom Styling
```jsx
<Box sx={{ 
  width: '300px', 
  height: '300px',
  margin: '0 auto',
  position: 'relative'
}}>
  <AnimatedLogoAdvanced
    pieces={logoPieces}
    finalLogo={finalLogo}
    animationStyle="explode"
  />
</Box>
```

### Integration with Theme
```jsx
const StyledLogoContainer = styled(Box)(({ theme }) => ({
  width: '250px',
  height: '250px',
  margin: '0 auto',
  padding: theme.spacing(2),
  borderRadius: theme.spacing(1),
  background: theme.palette.background.paper,
  boxShadow: theme.shadows[3],
}));

<StyledLogoContainer>
  <AnimatedLogoAdvanced
    pieces={logoPieces}
    finalLogo={finalLogo}
    animationStyle="spiral"
  />
</StyledLogoContainer>
```

## 🔧 Troubleshooting

### Common Issues:

1. **Images not loading**
   - Check file paths are correct
   - Ensure images are in the public folder or properly imported
   - Use absolute paths for public folder: `/images/logo-piece-1.png`

2. **Animation not starting**
   - Check `autoStart` prop is `true`
   - Verify `delay` is not too long
   - Ensure component is mounted

3. **Pieces not aligning**
   - Make sure all pieces are the same size
   - Check that final logo matches the assembled pieces
   - Verify piece order in the array

### Debug Mode:
```jsx
<AnimatedLogoAdvanced
  pieces={logoPieces}
  finalLogo={finalLogo}
  onAnimationComplete={() => console.log('Animation completed')}
  // Add console.log to see animation progress
/>
```

## 🎯 Best Practices

1. **Image Optimization**: Use optimized PNG/SVG files for better performance
2. **Consistent Sizing**: Ensure all pieces and final logo have consistent dimensions
3. **Loading States**: Add loading indicators while images load
4. **Accessibility**: Provide alt text for screen readers
5. **Performance**: Use `React.memo` for components that don't need frequent re-renders

## 🚀 Advanced Features

### Custom Animation Timing
```jsx
<AnimatedLogoAdvanced
  pieces={logoPieces}
  finalLogo={finalLogo}
  delay={3000}        // 3 seconds before starting
  pieceDelay={300}    // 300ms between each piece
  onAnimationComplete={() => {
    // Custom completion logic
    startNextAnimation();
  }}
/>
```

### Integration with Page Transitions
```jsx
useEffect(() => {
  // Start logo animation when page loads
  const timer = setTimeout(() => {
    setShowLogo(true);
  }, 1000);

  return () => clearTimeout(timer);
}, []);

{showLogo && (
  <AnimatedLogoAdvanced
    pieces={logoPieces}
    finalLogo={finalLogo}
    animationStyle="explode"
  />
)}
``` 