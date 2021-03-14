import React from "react";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  Picker,
  Button
} from "react-native";
import { useTheme } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useRoute } from '@react-navigation/native';
import Question from "./Quiz/Question";



class Questions extends React.Component {
  
  constructor(props, route) {
    super(props);
    

    this.state = {
      loading: false,
      questions: [],
      current: 0,
      correctScore: 5,
      totalScore: 50,
      results: {
        score: 0,
        correctAnswers: 0
      },
      completed: false
    };
  }
  
  
  fetchQuestions = async () => {
    console.log(`Aqui ${this.props.type}`);
    await this.setState({ loading: true });
    const response = await fetch(
      //`https://opentdb.com/api.php?amount=10&difficulty=medium`
      `http://192.168.0.130:3000/quiz/difficulty=${this.props.type}`
    );
    const questions = await response.json();

    const { results } = questions;

    results.forEach(item => {
      item.id = Math.floor(Math.random() * 10000);
    });

    await this.setState({ questions: results, loading: false });
  };

  reset = () => {
    this.setState(
      {
        questions: [],
        current: 0,
        results: {
          score: 0,
          correctAnswers: 0
        },
        completed: false
      },
      () => {
        this.fetchQuestions();
      }
    );
  };

  submitAnswer = (index, answer) => {
    const question = this.state.questions[index];
    const isCorrect = question.correct_answer === answer;
    const results = { ...this.state.results };

    results.score = isCorrect ? results.score + 5 : results.score;
    
    results.correctAnswers = isCorrect
      ? results.correctAnswers + 1
      : results.correctAnswers;

    

    this.setState({
      current: index + 1,
      results,
      completed: index === 9 ? true : false,
    });
    isCorrect ? alert('Correcto'): alert('Incorrecto');
    console.log(isCorrect);
  };

  componentDidMount() {
    this.fetchQuestions();
  }
  
  render() {
    const { colors } = this.props;
    return (
      <View style={styles.container}>
        {!!this.state.loading && (
          <View style={styles.loadingQuestions}>
            <ActivityIndicator size="large" color="#00ff00" />
            <Text>Please wait while we are loading questions for you</Text>
          </View>
        )}

        {!!this.state.questions.length > 0 &&
          this.state.completed === false && (
            <Question
            color = { colors.text } 
              onSelect={answer => {
                !(answer == null) ? (console.log('ok'),
                this.submitAnswer(this.state.current, answer),
                answer = null
                ) :  alert('Constesta algo');
                
              }}
              question={this.state.questions[this.state.current]}
              correctPosition={Math.floor(Math.random() * 3)}
              current={this.state.current}
              
            />
          )}

        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          {this.state.completed === true && (
            <View style={{ alignItems: "center" }}>
              <Text style={{ fontSize: 25 }}>Quiz Completed</Text>
              <Text>Correct Answers: {this.state.results.correctAnswers}</Text>
              <Text>
                Incorrect Answers: {10 - this.state.results.correctAnswers}
              </Text>
              <Text>Total Score: {50}</Text>
              <Text>Obtained Score: {this.state.results.score}</Text>

              <Button title="Restart Quiz" onPress={this.reset} />
            </View>
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },

  loadingQuestions: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default function({ navigation }) {
  const { colors } = useTheme();
  const route = useRoute();
  const { type } = route.params;
  //console.log(`Aqui ${type}`)
  return <Questions colors={colors} type={type}/>;
}