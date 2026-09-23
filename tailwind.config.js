module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: [
          '"JetBrains Mono"',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'monospace',
        ],
      },
      colors: {
        vsc: {
          bg: "var(--vsc-bg)",
          editor: "var(--vsc-editor)",
          sidebar: "var(--vsc-sidebar)",
          titlebar: "var(--vsc-titlebar)",
          activitybar: "var(--vsc-activitybar)",
          tabbar: "var(--vsc-tabbar)",
          tabactive: "var(--vsc-tabactive)",
          statusbar: "var(--vsc-accent)",
          border: "var(--vsc-border)",
          line: "var(--vsc-line)",
          hover: "var(--vsc-hover)",
          text: "var(--vsc-text)",
          muted: "var(--vsc-muted)",
          comment: "var(--vsc-comment)",
          string: "var(--vsc-string)",
          keyword: "var(--vsc-keyword)",
          func: "var(--vsc-func)",
          type: "var(--vsc-type)",
          number: "var(--vsc-number)",
          variable: "var(--vsc-variable)",
          accent: "var(--vsc-accent)",
          green: "var(--vsc-type)",
        },
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: 1 },
          "50%, 100%": { opacity: 0 },
        },
        pulse2: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(20,168,0,0.55)" },
          "50%": { boxShadow: "0 0 0 8px rgba(20,168,0,0)" },
        },
      },
      animation: {
        blink: "blink 1s step-start infinite",
        pulse2: "pulse2 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
