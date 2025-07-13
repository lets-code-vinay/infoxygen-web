// Import logos using direct imports since SVG files now use raw transformer
import ClaudeAI from '../assets/logos/AIPartners/Claude_AI_logo.svg';
import Augment from '../assets/logos/AIPartners/augment.svg';
import Nvidia from '../assets/logos/AIPartners/Nvidia.svg';
import Meta from '../assets/logos/AIPartners/meta.svg';
import Anthropic from '../assets/logos/AIPartners/anthropic_logo.svg';
import DeepSeek from '../assets/logos/AIPartners/deepseek.svg';
import Snowflake from '../assets/logos/AIPartners/snowflake.svg';
import OpenAI from '../assets/logos/AIPartners/OpenAI.svg';
import Gemini from '../assets/logos/AIPartners/gemini.svg';
import CharacterAI from '../assets/logos/AIPartners/Character-ai.svg';

// Base array of logos
const baseLogos = [
  {
    name: "Claude AI",
    image: ClaudeAI,
    alt: "Claude AI logo",
  },
  {
    name: "Augment",
    image: Augment,
    alt: "Augment logo",
  },
  {
    name: "NVIDIA",
    image: Nvidia,
    alt: "NVIDIA logo",
  },
  {
    name: "Meta",
    image: Meta,
    alt: "Meta logo",
  },
  {
    name: "Anthropic",
    image: Anthropic,
    alt: "Anthropic logo",
  },
  {
    name: "DeepSeek",
    image: DeepSeek,
    alt: "DeepSeek logo",
  },
  {
    name: "Snowflake",
    image: Snowflake,
    alt: "Snowflake logo",
  },
  {
    name: "OpenAI",
    image: OpenAI,
    alt: "OpenAI logo",
  },
  {
    name: "Gemini",
    image: Gemini,
    alt: "Gemini logo",
  },
  {
    name: "Character.ai",
    image: CharacterAI,
    alt: "Character.ai logo",
  },
];

// Function to shuffle array (Fisher-Yates algorithm)
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Create shuffled arrays for infinite scrolling effect
const createShuffledArray = () => {
  const shuffled = shuffleArray(baseLogos);
  return [...shuffled, ...shuffled]; // Duplicate for seamless loop
};

export const INFINITY_SLIDER_CONTENTS = createShuffledArray();

export const INFINITY_SLIDER_CONTENTS_BOTTOM = createShuffledArray();