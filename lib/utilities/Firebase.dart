import 'dart:html';

import 'package:firebase/firebase.dart';

class Firebase {

  //TODO: Add authentication stuff

  static App app = initializeApp(
    apiKey: "AIzaSyBZk0RC3_xmTKms2_2KzWUDyPMdBhbLehQ",
    authDomain: "fchs-robotics.firebaseapp.com",
    databaseURL: "https://fchs-robotics.firebaseio.com",
    projectId: "fchs-robotics",
    storageBucket: "",
    messagingSenderId: "163368391726",
  );

  Future<UserCredential> authenticateUser() async {
    if(!window.localStorage.containsKey('email') && !window.localStorage.containsKey('password')) {
      return null;
    }
    var email = window.localStorage['email'];
    var password = window.localStorage['password'];
    UserCredential cred = await app.auth().signInWithEmailAndPassword(email, password);
    return cred;
  }
}