import { StyleSheet, TextInput, Button, View, Modal, Image } from "react-native";
import { useState } from "react";

function GoalInput(props) {

  const [enteredGoalTextstate, setEnteredGoal] = useState('');

  function inputHandler(enteredText) {
    // console.log(enteredText);
    setEnteredGoal(enteredText);
  };

  function addgoalhandler() {
    props.onAddGoal(enteredGoalTextstate);
    setEnteredGoal('');
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image source={require('../assets/images/loc.png') } style={styles.imageStyle} />
        <TextInput
          style={styles.Textinput}
          placeholder='Your goal'
          onChangeText={inputHandler}
          value={enteredGoalTextstate}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.buttonstyle}>
          <Button title='Add Goal' onPress={addgoalhandler} />
          </View>
          <View style={styles.buttonstyle}>
          <Button title='Cancle' onPress={props.onCancle}/>
          </View>
        </View>
      </View>
    </Modal>
  );
};



export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding:8,
    backgroundColor:'#255b6b',
  },
  Textinput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor:'#e4d0ff',
    color:'#120438',
    width: '90%',
    borderRadius:6,
    padding: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop:8,
  },
  buttonstyle:{
    width:'30%',
    marginHorizontal:4,
  },
  imageStyle:{
    width:100,
    height:100,
    margin:10,
  },
});