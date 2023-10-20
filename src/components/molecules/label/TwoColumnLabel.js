import { StyleSheet, Text, View } from "react-native";
import CText from "../../atoms/Text/CText";

export default function TwoColTextLabel({topText = "23", botText = "Tue"}) {

    const style = StyleSheet.create({
        container: {
            justifyContent: 'center',
            backgroundColor: '#ddd',
            alignItems: 'center',
            alignSelf: 'flex-start',
            borderRadius: 8,
            padding: 8
        }
    })

    return(
        <View style={style.container}>
            <CText>{topText}</CText>
            <CText fontSize={18}>{botText}</CText>
        </View>
    )   
}