import React, { useEffect, useRef, useState, useMemo } from "react";
import { Typography, Box, useTheme } from "@mui/material";

const ANIMATIONS = ["fade", "slide", "typewriter"];

const getRandomAnimation = () => {
  const idx = Math.floor(Math.random() * ANIMATIONS.length);
  return ANIMATIONS[idx];
};

const AnimatedTextSwitcher = ({
  phrases,
  interval = 2000,
  fontSize = "3.2rem",
  isNeonApplied = false,
  ...props
}) => {
  const phrasedInUpperCase = useMemo(
    () => phrases.map((phrase) => phrase.toUpperCase()),
    [phrases]
  );
  const theme = useTheme();
  const [index, setIndex] = useState(0);
  const [animation, setAnimation] = useState(getRandomAnimation());
  const [show, setShow] = useState(true);
  const [displayedText, setDisplayedText] = useState(phrasedInUpperCase[0]);
  const [hover, setHover] = useState(false);
  const typewriterRef = useRef(null);

  useEffect(() => {
    setAnimation(getRandomAnimation());
  }, []);

  useEffect(() => {
    if (animation === "typewriter") {
      let charIdx = 0;
      setDisplayedText("");
      setShow(true);
      typewriterRef.current = setInterval(() => {
        setDisplayedText(phrasedInUpperCase[index].slice(0, charIdx + 1));
        charIdx++;
        if (charIdx === phrasedInUpperCase[index].length) {
          clearInterval(typewriterRef.current);
          setTimeout(() => setShow(false), interval - 500);
        }
      }, 50);
      return () => clearInterval(typewriterRef.current);
    } else {
      setDisplayedText(phrasedInUpperCase[index]);
      setShow(true);
      const hideTimeout = setTimeout(() => setShow(false), interval - 300);
      return () => clearTimeout(hideTimeout);
    }
  }, [index, animation, phrasedInUpperCase, interval]);

  useEffect(() => {
    if (!show) {
      const nextTimeout = setTimeout(() => {
        setIndex((prev) => (prev + 1) % phrasedInUpperCase.length);
        setShow(true);
      }, 300);
      return () => clearTimeout(nextTimeout);
    }
  }, [show, phrasedInUpperCase.length]);

  // Animation styles
  const getAnimationStyle = () => {
    switch (animation) {
      case "fade":
        return {
          transition: "opacity 0.5s",
          opacity: show ? 1 : 0,
        };
      case "slide":
        return {
          transition: "transform 0.5s, opacity 0.5s",
          transform: show ? "translateY(0)" : "translateY(40px)",
          opacity: show ? 1 : 0,
        };
      case "typewriter":
        return {
          fontFamily: "monospace",
          borderRight: "2px solid #fff",
          whiteSpace: "nowrap",
          overflow: "hidden",
          opacity: 1,
        };
      default:
        return {};
    }
  };

  // Color logic for split words
  const getWordColors = () => {
    return {
      first: hover ? theme.palette.secondary.main : theme.palette.primary.main,
      second: hover ? theme.palette.primary.main : theme.palette.secondary.main,
    };
  };

  // Split phrase into two words (by first space)
  const splitWords = (text) => {
    const idx = text.indexOf(" ");
    if (idx === -1) return [text];
    return [text.slice(0, idx), text.slice(idx + 1)];
  };

  const words = splitWords(displayedText);
  const wordColors = getWordColors();

  return (
    <Box
      sx={{
        minHeight: fontSize,
        display: "inline-block",
        ...getAnimationStyle(),
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      {...props}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize,
          fontWeight: 800,
          letterSpacing: "-0.02em",
          color: undefined, // color handled by spans
          textShadow: undefined, // handled by spans
          display: "inline",
        }}
      >
        {words.length === 1 ? (
          <span
            style={{
              color: wordColors.first,
              textShadow: isNeonApplied
                ? `0 0 4px ${wordColors.first}, 0 0 8px ${wordColors.first}`
                : "0 0 10px rgba(255,255,255,0.3)",
              transition: "color 0.3s, text-shadow 0.3s",
              WebkitTextStroke: `1px black, 1px ${wordColors.first}`,
              textStroke: `1px black, 1px ${wordColors.first}`,
            }}
          >
            {words[0]}
          </span>
        ) : (
          <>
            <span
              style={{
                color: wordColors.first,
                textShadow: isNeonApplied
                  ? `0 0 4px ${wordColors.first}, 0 0 8px ${wordColors.first}`
                  : "0 0 10px rgba(255,255,255,0.3)",
                transition: "color 0.3s, text-shadow 0.3s",
                WebkitTextStroke: `1px black, 1px ${wordColors.first}`,
                textStroke: `1px black, 1px ${wordColors.first}`,
              }}
            >
              {words[0]}
            </span>{" "}
            <span
              style={{
                color: wordColors.second,
                textShadow: isNeonApplied
                  ? `0 0 4px ${wordColors.second}, 0 0 8px ${wordColors.second}`
                  : "0 0 10px rgba(255,255,255,0.3)",
                transition: "color 0.3s, text-shadow 0.3s",
                WebkitTextStroke: `1px black, 1px ${wordColors.second}`,
                textStroke: `1px black, 1px ${wordColors.second}`,
              }}
            >
              {words[1]}
            </span>
          </>
        )}
      </Typography>
    </Box>
  );
};

export default AnimatedTextSwitcher;
