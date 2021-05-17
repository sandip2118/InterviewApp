import { StyleSheet, Dimensions } from "react-native";
import cs from '../appConfig/CommonStyle';
import Color from '../appConfig/colors';
import Font from '../appConfig/fonts';
const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    backImg: { width: width - 120, height: 168, resizeMode: 'stretch' },
    prfImg: { width: 91, height: 91, resizeMode: 'cover' },
    iconImg: { width: 27, height: 27, resizeMode: 'cover' },
    nameTxt: { ...Font.fs16SB, color: Color.white },
    emailTxt: { ...cs.mt5, ...Font.fs12, color: Color.white },
})

export default styles;