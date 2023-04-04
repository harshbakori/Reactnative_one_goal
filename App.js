import { Button, FlatList, StyleSheet, View } from 'react-native';
import { useState } from 'react';
import GoalItems from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';

export default function App() {

  const [modelIsVisible,setModelIsVisible] = useState(false);
  const [courceGoalsstate, setCourceGoalsstate] = useState([]);


  function startAddGoalHandler(){
    setModelIsVisible(true);
  };

  function endAddGoalHandler(){
    setModelIsVisible(false);
    
  };


  function deleteGoalHandler(id){
    setCourceGoalsstate(currentCourceGoals => {
      return courceGoalsstate.filter((goal)=>goal.id !== id);
    })
    // console.log("deded");
  };

  function addgoalhandler(enteredGoalTextstate) {
    // console.log(enteredGoalTextstate);
    setCourceGoalsstate(currentCourceGoals => [...currentCourceGoals,
    { text: enteredGoalTextstate, id: Math.random().toString() },
    // enteredGoalTextstate
  ]);
  endAddGoalHandler();
  };

  return (
    <>
    <StatusBar style='light'/>
    <View style={styles.appContainer}>
      <Button title='Add New Goal' color='#5e0acc' onPress={startAddGoalHandler}/>
      <GoalInput onAddGoal={addgoalhandler} visible={modelIsVisible} onCancle={endAddGoalHandler}/>
      <View style={styles.goalsContainer}>
        <FlatList
          data={courceGoalsstate}
          renderItem={(ItemData) => {
            return <GoalItems id={ItemData.item.id} text={ItemData.item.text} onDeleteItem={deleteGoalHandler}/>
          }
          }
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false} />
        {/* {courceGoalsstate.map((goal)=> <Text style={styles.goalitems} key={goal} >{goal}</Text>)} */}
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 70,
    padding: 30,
    paddingHorizontal: 16,
    flex: 1,
  },
  goalsContainer: {
    flex: 4,
  },
});
