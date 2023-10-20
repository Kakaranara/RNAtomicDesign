import { useState } from "react"
import { StyleSheet, TextInput } from "react-native"

export default function TextField({value = "dsadas", placeHolder = "Nothing", onChange = (text) => {}}) {

    const [number, onChangeNumber] = useState(value)

    const styles = StyleSheet.create({
        container : {
            borderRadius: 12,
            borderWidth: 1,
            padding: 10,
        }
    })

    return(
        <TextInput placeholder={placeHolder} onChangeText={(text) => {
            onChangeNumber(),
            onChange(text)
        }} value={number} style={StyleSheet.flatten([styles.container])}/>
    )
}
