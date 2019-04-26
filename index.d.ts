declare module "react-native-countdown-component" {
  import React from "react";
  import { StyleProp, ViewStyle, TextStyle } from "react-native";
  interface CountDownProps {
    until: number;
    running?: boolean;
    style?: StyleProp<ViewStyle>;
    digitWidthRatio?: number;
    digitHeightRatio?: number;
    digitStyle?: StyleProp<ViewStyle>;
    digitTxtStyle?: StyleProp<TextStyle>;
    timeLabelStyle?: StyleProp<TextStyle>;
    separatorStyle?: StyleProp<TextStyle>;
    timeToShow?: Array<string>;
    showSeparator?: boolean;
    size?: number;
    onChange?: (seconds: number) => void;
    onPress?: () => void;
    onFinish?: () => void;
    timeLabels?: { [key: string]: string | null };
  }
  export default class CountDown extends React.Component<CountDownProps, any> {}
}
