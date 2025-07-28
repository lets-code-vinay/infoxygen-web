# Montserrat Font Setup

This folder contains the Montserrat font files for the Infoxygen website.

## Current Status

The font files in the `montserrat/` folder are placeholders. You need to download the actual font files.

## How to Download Montserrat Fonts

### Option 1: Download from Google Fonts

1. Go to https://fonts.google.com/specimen/Montserrat
2. Click "Download family"
3. Extract the downloaded ZIP file
4. Copy the following files to `src/assets/fonts/montserrat/`:
   - `Montserrat-Regular.ttf`
   - `Montserrat-Medium.ttf`
   - `Montserrat-SemiBold.ttf`
   - `Montserrat-Bold.ttf`
   - `Montserrat-ExtraBold.ttf`

### Option 2: Direct Download Links

You can download individual files from:

- Regular: https://github.com/google/fonts/raw/main/ofl/montserrat/Montserrat-Regular.ttf
- Medium: https://github.com/google/fonts/raw/main/ofl/montserrat/Montserrat-Medium.ttf
- SemiBold: https://github.com/google/fonts/raw/main/ofl/montserrat/Montserrat-SemiBold.ttf
- Bold: https://github.com/google/fonts/raw/main/ofl/montserrat/Montserrat-Bold.ttf
- ExtraBold: https://github.com/google/fonts/raw/main/ofl/montserrat/Montserrat-ExtraBold.ttf

## Font Weights Used in Project

- 400 (Regular) - Default body text
- 500 (Medium) - Buttons and some headings
- 600 (SemiBold) - h2, h3 headings
- 700 (Bold) - h1, h4, h5, h6, and styled components
- 800 (ExtraBold) - Hero titles and animated text

## Configuration

The fonts are configured in:

- `src/assets/fonts/montserrat.css` - Font face declarations
- `src/index.css` - Global import and font-family rule
- `src/theme.js` - Material-UI theme configuration

Once you replace the placeholder files with actual font files, Montserrat will be used throughout the entire project.
