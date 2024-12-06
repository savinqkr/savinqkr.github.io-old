import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: { small: "490px", pc: "961px" },
    colors: {
      transparent: "transparent",
      black: "#131313",
      white: "#ffffff",
      point: "#6f57a9",
      error: "#FF2E00",
      complete: "#00A3FF",
      gray15: "#171717",
      gray14: "#242424",
      gray13: "#333",
      gray12: "#3D3D3D",
      gray11: "#555",
      gray10: "#6F6F6F",
      gray09: "#8B8B8B",
      gray08: "#A5A5A5",
      gray07: "#C1C1C1",
      gray06: "#DFDFDF",
      gray05: "#ECECEC",
      gray04: "#EFEFEF",
      gray03: "#F5F4F3",
      gray02: "#F7F7F7",
      gray01: "#FBFBFB",
      footer: "#FBFAF9",
      beige: "#DAD299",
    },
    fontSize: {
      display_bold_48: [
        "48px",
        {
          letterSpacing: "-0.288px",
          fontWeight: 700,
        },
      ],
      display_bold_40: [
        "40px",
        {
          letterSpacing: "-0.24px",
          fontWeight: 700,
        },
      ],
      display_bold_32: [
        "32px",
        {
          letterSpacing: "-0.192px",
          fontWeight: 700,
        },
      ],
      display_bold_24: [
        "24px",
        {
          letterSpacing: "-0.144px",
          fontWeight: 700,
        },
      ],
      // Subtitle
      subtitle_bold_20: [
        "20px",
        {
          lineHeight: "24px",
          letterSpacing: "-0.12px",
          fontWeight: 700,
        },
      ],
      subtitle_bold_18: [
        "18px",
        {
          lineHeight: "22px",
          letterSpacing: "-0.108px",
          fontWeight: 700,
        },
      ],
      subtitle_bold_16: [
        "16px",
        {
          lineHeight: "20px",
          letterSpacing: "-0.096px",
          fontWeight: 700,
        },
      ],
      subtitle_bold_14: [
        "14px",
        {
          lineHeight: "18px",
          letterSpacing: "-0.084px",
          fontWeight: 700,
        },
      ],
      subtitle_bold_12: [
        "12px",
        {
          lineHeight: "14px",
          letterSpacing: "-0.072px",
          fontWeight: 700,
        },
      ],
      subtitle_medium_20: [
        "20px",
        {
          lineHeight: "24px",
          letterSpacing: "-0.12px",
          fontWeight: 500,
        },
      ],
      subtitle_medium_18: [
        "18px",
        {
          lineHeight: "22px",
          letterSpacing: "-0.108px",
          fontWeight: 500,
        },
      ],
      subtitle_medium_16: [
        "16px",
        {
          lineHeight: "20px",
          letterSpacing: "-0.096px",
          fontWeight: 500,
        },
      ],
      subtitle_medium_14: [
        "14px",
        {
          lineHeight: "18px",
          letterSpacing: "-0.084px",
          fontWeight: 500,
        },
      ],
      subtitle_medium_12: [
        "12px",
        {
          lineHeight: "14px",
          letterSpacing: "-0.072px",
          fontWeight: 500,
        },
      ],
      // Body
      body_bold_20: [
        "20px",
        {
          lineHeight: "30px",
          letterSpacing: "-0.12px",
          fontWeight: 700,
        },
      ],
      body_bold_18: [
        "18px",
        {
          lineHeight: "32.4px",
          letterSpacing: "-0.108px",
          fontWeight: 700,
        },
      ],
      body_bold_16: [
        "16px",
        {
          lineHeight: "28.8px",
          letterSpacing: "-0.096px",
          fontWeight: 700,
        },
      ],
      body_bold_14: [
        "14px",
        {
          lineHeight: "25.2px",
          letterSpacing: "-0.084px",
          fontWeight: 700,
        },
      ],
      body_bold_12: [
        "12px",
        {
          lineHeight: "21.6px",
          letterSpacing: "-0.072px",
          fontWeight: 700,
        },
      ],
      body_medium_18: [
        "18px",
        {
          lineHeight: "32.4px",
          letterSpacing: "-0.108px",
          fontWeight: 500,
        },
      ],
      body_medium_16: [
        "16px",
        {
          lineHeight: "28.8px",
          letterSpacing: "-0.096px",
          fontWeight: 500,
        },
      ],
      body_medium_14: [
        "14px",
        {
          lineHeight: "25.2px",
          letterSpacing: "-0.084px",
          fontWeight: 500,
        },
      ],
      body_medium_12: [
        "12px",
        {
          lineHeight: "21.6px",
          letterSpacing: "-0.072px",
          fontWeight: 500,
        },
      ],
    },
    extend: {
      fontFamily: {
        pretendard: ["var(--font-pretendard)"],
      },
      boxShadow: {
        "x0_y4_b4_0.05": "0px 4px 4px rgba(0, 0, 0, 0.05)",
        "x0_y2_b2_0.1": "0px 2px 2px rgba(0, 0, 0, 0.1)",
      },
      keyframes: {
        slideIn: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideOut: {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(-100%)", opacity: "0" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        blowUp: {
          "0%": { transform: "scale(0)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        blowUpTwo: {
          "0%": { transform: "scale(1)", opacity: "1" },
          "100%": { transform: "scale(0)", opacity: "0" },
        },
        pulse: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        slideIn: "slideIn 1s forwards",
        slideOut: "slideOut 1s forwards",
        "fade-in": "fadeIn 0.5s forwards",
        "fade-out": "fadeOut 0.5s forwards",
        "blow-up": "blowUp 0.5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards",
        "blow-up-two": "blowUpTwo 0.5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards",
        pulse: "pulse 2s ease-in-out infinite", // skeleton animation
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    function ({ addUtilities }: { addUtilities: any }) {
      addUtilities({
        /* 스크롤바 숨기기 */
        ".scrollbar-hide": {
          "-ms-overflow-style": "none" /* IE 및 Edge */,
          "scrollbar-width": "none" /* Firefox */,
          "&::-webkit-scrollbar": {
            display: "none" /* Chrome, Safari, Opera */,
          },
        },
      });
    },
  ],
} satisfies Config;
