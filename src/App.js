import React, { Component } from "react";
import { View } from "react-native";
import firebase from "firebase";

import { Header } from "./components/common";
import LoginForm from './components/LoginForm';

class App extends Component {
  componentDidMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyBoW52cJTQzky9qsKPN3I3NiyZIfJSSm-g",
      authDomain: "authnative-3e589.firebaseapp.com",
      databaseURL: "https://authnative-3e589.firebaseio.com",
      projectId: "authnative-3e589",
      storageBucket: "authnative-3e589.appspot.com",
      messagingSenderId: "952041897244"
    });
  }
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
