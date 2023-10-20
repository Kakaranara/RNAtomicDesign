import { Pressable, StyleSheet, Text, TouchableNativeFeedback, View } from "react-native";
import CText from "../../atoms/Text/CText";

export default function TextLabel({ text = "Not set", onPress = null }) {
    const style = StyleSheet.create({
        container: {
            paddingVertical: 6,
            paddingHorizontal: 18,
            borderRadius: 12,
            borderRadius: 12,
            alignSelf: 'baseline',
            backgroundColor: '#FFF',
        },
        shadowProp: {
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.8,
            shadowRadius: 2,
            elevation: 2
        },
    })
    return (
        <View style={{borderRadius: 12, overflow: 'hidden'}}>
            <TouchableNativeFeedback onPress={onPress} disabled = {!onPress}>
                <View style={StyleSheet.flatten([style.container, style.shadowProp])}>
                    <CText fontSize={12}>{text}</CText>
                </View>
            </TouchableNativeFeedback>
        </View>
    )
}