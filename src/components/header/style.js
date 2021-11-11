import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../common';

export default StyleSheet.create({
  container: {
    marginTop: 25,
  },
  headerTxt: {
    fontFamily: FONTS.bold,
    fontSize: 18,
    color: COLORS.white,
  },
  line: {
    width: 180,
    height: 2,
    backgroundColor: COLORS.sun,
    marginTop: 16,
  },
});
