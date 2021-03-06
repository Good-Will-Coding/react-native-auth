import React, { Component } from "react";
import { Button, Card, CardSection, Input } from "./common";
import { Text } from 'react-native';
import firebase from "firebase";
class LoginForm extends Component {
  state = {
    email: "",
    password: "",
    error: ""
  };

  onButtonPress = () => {
    const { email, password } = this.state;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .catch(() => {
            this.setState({ error: "Authentication failed" });
          });
      });
  };

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="user@gmail.com"
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>
        <CardSection>
          <Input
            placeholder="password"
            secureTextEntry
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>{this.state.error}</Text>
        <CardSection>
          <Button onPress={this.onButtonPress}>Log in</Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontsize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default LoginForm;
