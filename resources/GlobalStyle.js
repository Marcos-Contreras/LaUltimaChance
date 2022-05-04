import { StyleSheet } from "react-native";

export default StyleSheet.create({
    largeButton: {
        
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: 24,
        paddingVertical: 12,
        backgroundColor: '#002171',
        shadowOpacity: 0.15,
        shadowRadius: 4,
        shadowOffset:{
            width: 0,
            height: 2
        },
        elevation: 2,
        margin: 5
        },
    smallButton: {
        width: 150,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: 24,
        paddingVertical: 12,
        backgroundColor: '#002171',
        shadowOpacity: 30,
        shadowRadius: 4,
        shadowOffset:{
            width: 0,
            height: 2
        },
        elevation: 2,
        margin: 5
        },
    largeButtonText: {
            color: 'white',
            fontSize: 18,
            fontWeight: 'bold'
        },
    smallButtonText: {
            color: 'white',
            fontSize: 14,
            fontWeight: 'bold'
        },
    logo: {
        marginBottom: 5,
        height: 300, 
        width: 400, 
        resizeMode : 'stretch'
    },
    largeLabelText: {
        color: 'black',
        fontSize: 22,
        fontWeight: 'bold',
    },
    smallLabelText: {
        color: 'black',
        fontSize: 15,
    },
    input: {
        
    },
});