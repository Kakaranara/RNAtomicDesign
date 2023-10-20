import { Button, ScrollView, StyleSheet, TextInput, View } from "react-native";
import CircleImage from "../components/atoms/image/CircleImage";

import img from "./../assets/image/random_image.jpg"
import CText from "../components/atoms/Text/CText";
import TextField from "../components/atoms/form/TextField";
import CButton from "../components/atoms/button/CButton";
import TextLabel from "../components/molecules/label/TextLabel";
import { showToast } from "../util/showToast";
import LabelList from "../components/organism/list/labelList";
import TwoColTextLabel from "../components/molecules/label/TwoColumnLabel";
import TextIcon from "../components/molecules/TextIcon/TextIcon";
import ActivityCard from "../components/organism/card/ActivityCard";

export default function HomeScreen({ navigation }) {

    const labelList = [
        { name: "Sunday", key: 1, onPress: () => { showToast("Sunday") } },
        { name: "Monday", key: 2, onPress: () => { showToast("Monday") } },
        { name: "Tuesday", key: 3, onPress: () => { showToast("Tuesday") } },
        { name: "Wednesday", key: 4, onPress: () => { showToast("Wednesday") } },
        { name: "Thursday", key: 5, onPress: () => { showToast("Thursday") } },
        { name: "Friday", key: 6, onPress: () => { showToast("Friday") } },
        { name: "Saturday", key: 7, onPress: () => { showToast("Saturday") } },
    ]

    return (
        <View>
            <ScrollView>
                <CircleImage image={img} size={120} />
                <CText fontSize={24}>Hello</CText>
                <TextField placeHolder="Make your good here" value="apa" onChange={(item) => { console.log(item); }} />
                <CButton />
                <LabelList data={labelList} />
                <View style={{ flexDirection: 'row', gap: 12 }}>
                    <TwoColTextLabel />
                    <TwoColTextLabel />
                    <TwoColTextLabel />
                    <TwoColTextLabel />

                </View>
                <ActivityCard />
                <Button title="Go to Page A" onPress={() => {
                    navigation.push("PageA")
                }} />
            </ScrollView>
        </View>
    )
}

const style = StyleSheet.create({
    testStyle: {
        borderRadius: 12
    }
})