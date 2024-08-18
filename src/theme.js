// theme.js
const typePlatform = (() => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if (/android/i.test(userAgent)) {
    return "Roboto";
  }

  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return "Arial";
  }

  return "System";
})();

const theme = {
  colors: {
    textPrimary: "#24292e",
    textSecondary: "#586069",
    textLight: "#ffffff",
    primary: "#0366d6",
    backgroundColor: "#24292e",
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: typePlatform,
  },
  fontWeights: {
    normal: "400",
    bold: "700",
  },
};

export default theme;
