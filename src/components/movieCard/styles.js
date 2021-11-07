import { StyleSheet } from "react-native";
import { COLORS } from "../../common";

export default StyleSheet.create({
    Card : {
        width : "90%",
        height : 300,
        borderRadius : 10,
        backgroundColor: COLORS.spaceCadet,
        position:"relative",
        marginTop : 80,
        padding : 20,

    },
    imgCard : {
        width: "35%",
        height : 200,
        position : "absolute",
        bottom : 150,
        backgroundColor : COLORS.sun,
        borderRadius : 10
    },
    txtCard:{
        width : "65%",
        justifyContent:"center",
        alignItems : "center",
        backgroundColor: COLORS.spaceCadet,
    },
    title:{
        fontSize:50,
        color:COLORS.white

    },
    subtitle:{
        fontSize:25,
        color:COLORS.white
    }
})