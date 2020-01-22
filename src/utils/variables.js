// 選單背景
export const headerBg = "#DB7290"; //btn primary
export const secondaryBg = "#fff7fa";
export const smallBtnBg = "#faf0f1"; //btn small

// 漸層背景
export const gradientBg = "linear-gradient(to left, #F1AD56, #DB7290)";

export const mainBg = "#f5e9ec";

//font-color
export const fcTable = "#7d7778";
export const fcTableTitle = "#523e43";
export const fcLight = "#999";

//font-size
export const fsNormal = "1.4rem";
export const fsMiddle = "1.6rem";

// input
export const disabledColor = "#f8f8f8";

// rwd
export const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  tabletL: "990px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px"
};
export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktopL})`,
  unMobileS: `(max-width: ${size.mobileS})`,
  unMobileM: `(max-width: ${size.mobileM})`,
  unMobileL: `(max-width: ${size.mobileL})`,
  unTablet: `(max-width: ${size.tablet})`,
  unLaptop: `(max-width: ${size.laptop})`
};
