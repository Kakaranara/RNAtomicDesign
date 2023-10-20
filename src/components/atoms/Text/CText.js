import { StyleSheet, Text } from "react-native";

export default function CText({children, fontSize = 16, CStyle = {}}) {
    
    const style = getStyle(fontSize)

    return(
        <Text style={StyleSheet.flatten([style.fontStyle, CStyle])}>
            {children}
        </Text>
    )
}

function getStyle(fontSize){

    return StyleSheet.create({
        fontStyle : {
            fontSize: fontSize,
        }
    })
}

