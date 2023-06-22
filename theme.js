import { useColorScheme } from "react-native";

export const colors = {
    primary: "#46738",
    accent: "#D5A26A",
    warn: "#A7373F",
    white: "#fff",
    black: "#000",
}

export const colorsTheme = {
    light: {
        backgroundColor: colors.white,
        textColor: colors.black
    },
    dark: {
        backgroundColor: '#111',
        textColor: colors.white
    }
}

// on retournera les couleurs + le bon index
// enfonction de ce que l'on veut. 
export default () => {
    const nomTheme = useColorScheme();
    return {
        ...colors, ...colorsTheme[nomTheme]
    }
}
