import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx,scss}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx,scss}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx,scss}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',

        /* Text */
        primaryText: 'var(--primary-text-color)',
        secondaryText: 'var(--secondary-text-color)',
        primaryAccentText: 'var(--primary-accent-text-color)',
        secondaryAccent: 'var(--secondary-accent-color)',

        /* Buttons */
        btnBg: 'var(--btn-bg-color)',

        /* Cards */
        cardBg: 'var(--card-bg-color)',

        /* Header */
        headerBg: 'var(--header-bg-color)',

        /* Sections */
        meetMagnusBg: 'var(--meet-magnus-bg-color)',
        followMagnusBg: 'var(--follow-magnus-bg-color)',
        tokenomicsBg: 'var(--tokenomics-bg-color)',

        /* Footer */
        footerBg: 'var(--footer-bg-color)',
      },
      fontFamily: {
        radioCanada: ['Radio Canada', 'sans-serif'],
        radioCanadaBig: ['Radio Canada Big', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
