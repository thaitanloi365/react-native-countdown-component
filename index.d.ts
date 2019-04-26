import { StyleProp, ViewStyle, TextStyle } from "react-native";
declare module "react-native-countdown-component" {
  interface CountdownProps {
    until: number;
    style?: StyleProp<ViewStyle>;
    digitWidthRatio?: number;
    digitHeightRatio?: number;
    digitStyle?: StyleProp<ViewStyle>;
    digitTxtStyle?: StyleProp<TextStyle>;
    timeLabelStyle?: StyleProp<TextStyle>;
    separatorStyle?: StyleProp<ViewStyle>;
    timeToShow?: Array<string>;
    showSeparator?: boolean;
    size?: number;
    onChange?: (seconds: number) => void;
    onPress?: () => void;
    onFinish?: () => void;
  }
}
