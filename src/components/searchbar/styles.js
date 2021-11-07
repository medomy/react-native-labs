import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../common";

export default StyleSheet.create({
    container : {
        borderRadius : 6,
        width : '90%',
        height : 40,
        borderColor: COLORS.white,
        borderWidth : 4,
        marginTop : 50,
        flexDirection: 'row',
        backgroundColor:COLORS.spaceCadet,
        overflow : 'hidden'
    },

    textInput : {
        width : "80%",
        height : '100%',
        paddingStart : 12,
        marginHorizontal : 5,
        fontFamily : FONTS.medium,

    },
    iconContainer :{
        width : '20%',
        borderStartWidth : 4,
        borderStartColor : COLORS.sun,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : COLORS.cloudBurst,

    }

})