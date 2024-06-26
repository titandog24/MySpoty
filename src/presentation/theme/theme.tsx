import { StyleSheet } from "react-native";

export interface ThemeColors {
  primary: string;
  text: string;
  background: string;
  cardBackground: string;
  buttonTextColor: string;
  basic: string;
  extra: string;
  gold: string;
}

export const colors: ThemeColors = {
  primary: "#141D2C",
  text: "white",

  background: "#141D2C",
  cardBackground: "white",
  buttonTextColor: "white",
  basic: '#0d645a',
  extra: '#015886',
  gold: 'hsla(51, 100.00%, 50.00%, 0.86)'
};

export const lightColors: ThemeColors = {
  primary: "#5856D6",
  text: "black",

  background: "rgb(242, 242, 242)",
  cardBackground: "#d3cdcd",
  buttonTextColor: "white",
  basic: '#0d645a',
  extra: '#015886',
  gold: 'hsla(51, 100.00%, 50.00%, 0.86)'
};

export const darkColors: ThemeColors = {
  primary: "#5856D6",
  text: "white",

  background: "#090909",
  cardBackground: "#2d2d2d",
  buttonTextColor: "white",
  basic: '#0d645a',
  extra: '#015886',
  gold: 'hsla(51, 100.00%, 50.00%, 0.86)'
};


export const globalStyles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    // color: colors.text,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "bold",
    // color: colors.text,
  },

  mainContainer: {
    flex: 1,
    // backgroundColor: colors.background,
  },
  globalMargin: {
    paddingHorizontal: 20,
    flex: 1,
  },

  btnPrimary: {
    // backgroundColor: colors.primary,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
  },
  btnPrimaryText: {
    // color: colors.text,
    fontSize: 16,
  },
  input: {
    height: 40,
    margin: 20,
    borderWidth: 1,
    padding: 10,
    borderColor: 'rgba(0,0,0,0.3)',
    // color: colors.text
  }
});