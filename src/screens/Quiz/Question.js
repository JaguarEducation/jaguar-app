import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity,withTheme } from "react-native";
import { RadioGroup, RadioButton } from "react-native-flexi-radio-button";

class Question extends React.Component {
  constructor(props) {
    super(props);
    

    this.state = {
      answer: null
    };

}
  renderOptions = question => {
    //console.log(this.props.color)
    //styles({color : this.props.color}).radioText;
    if (question.type === "boolean") {
      return [
        <RadioButton value={"True"} key={1}>
          <Text style={this.props.styles.radioText}>True</Text>
        </RadioButton>,

        <RadioButton value={"False"} key={2}>
          <Text style={this.props.styles.radioText}>False</Text>
        </RadioButton>
      ];
    } else {
      const result = [];

      question.incorrect_answers.forEach((item, index) => {
        let key = `${question.id}-${index}`;

        if (index === this.props.correctPosition) {
          let key2 = `${question.id}-100`;
          result.push(
            <RadioButton value={question.correct_answer} key={key2}>
              <Text style={this.props.styles.radioText}>{question.correct_answer}</Text>
            </RadioButton>
          );
        }

        result.push(
          <RadioButton value={item} key={key}>
            <Text style={this.props.styles.radioText}>{item}</Text>
          </RadioButton>
        );
        result
      });

      return result;
    }
  };

  render() {
    
    return (
      <View style={{ flexDirection: "column", paddingHorizontal:20, paddingVertical:10 }}>
        <Text style={{ fontSize: 16, color: "#666", textAlign: "right" }}>
          {this.props.current + 1} de 10
        </Text>

        <Text style={{ fontSize: 24, fontWeight: "bold", color: "#3498db" }}>
          {this.props.question.question}
        </Text>
        <RadioGroup
          onSelect={(index, answer) => this.setState({ answer })}
          selectedIndex= {this.state.answer }
        >
          {this.renderOptions(this.props.question)}
        </RadioGroup>
        <View style={this.props.styles.box}>
        
        <Button
          title="Contestar"
          onPress={() => {
            
            this.props.onSelect(this.state.answer);
            this.state.answer = null;
            
          }}
        ></Button>
        </View>
      </View>
    );
  }
}




export default function(props) {
  const styles = StyleSheet.create({
    radioText: {
      fontSize: 18,
      color: props.color
    },
    box : {
        marginTop: 30,
    }
  });
  return <Question {...props} styles={styles}/>;
}