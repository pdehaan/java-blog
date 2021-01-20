
module.exports = {
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      fontFamily: {
        sans: ['Palanquin', 'sans-serif'],
        serif: ['Bitter', 'serif'],
    },
    typography: {
      DEFAULT: {
        css: {
          color: '#333',
          a: {
            background: '#FFFBEB',
            fontWeight: '700',
            color: '#6B7280',
            transition: '1s',
            borderRadius: '5px',
            padding:'3px 6px',
            '&:hover': {
            background: '#FEF2F2',
            color: '#EF4444',
            },
          },
          blockquote: {
            borderLeftColor: '#F59E0B',
            borderLeftWidth: '4px',
            padding: '10px',
            color: '#4B5563',
            backgroundColor: '#FFFBEB',
            borderRadius: '10px',
           },
           code: {
             backgroundColor: '#E5E7EB',
             borderRadius: '5px',
             padding:'3px 6px',
           },
           pre: {
           code: {
            backgroundColor: 'transparent',
            borderRadius: '5px',
            padding:'none',
          },
        },
        },
      },
    },
    },
  },
  
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
  purge: ["./src/**/*.js", "./src/**/*.html", "./src/**/*.svg"],
};