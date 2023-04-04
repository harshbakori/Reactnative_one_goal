import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItems(props) {
    return (
        <View style={styles.goalitems} >
                <Pressable 
                android_ripple={{color:'#dddddd'}}
                 onPress={props.onDeleteItem.bind(this, props.id)}
                 style={({pressed}) => pressed && styles.pressedItem }
                 >
                
                <Text style={styles.goaltext}>{props.text}</Text>
        </Pressable>
            </View>
    );

};

export default GoalItems;

const styles = StyleSheet.create({
    goalitems: {
        margin: 4,
        borderRadius: 4,
        backgroundColor: '#5e0acc',
    },
    pressedItem:{
        opacity:0.5,
    },
    goaltext: {
        padding: 4,
        color: '#fff',
    },
});