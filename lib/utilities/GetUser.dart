import 'dart:html';

import 'package:fchs_robotics/pages/HomePage.dart';
import 'package:firebase/firebase.dart';
import 'package:firebase/firestore.dart';
import 'package:flutter_web/material.dart';

Future<DocumentSnapshot> getUser(App app, BuildContext context) async {
  if(window.localStorage.containsKey('email') && window.localStorage.containsKey('password')) {
    UserCredential credentials = await app.auth().signInWithEmailAndPassword(window.localStorage['email'], window.localStorage['password']);
    if(credentials == null) return null;
    DocumentSnapshot snapshot = await app.firestore().collection("users").doc(credentials.user.uid).get();
    if(snapshot == null) return null;
    return snapshot;
  } else {
    window.localStorage.clear();
    return null;
  }
}

void navigateLogin(BuildContext context) {
  window.localStorage.clear();
  Navigator.push(context, MaterialPageRoute(builder: (context) {return HomePage();}));
}

Map<String, dynamic> getUserDataBase() {
  return {"nickname":"LOADING"};
}