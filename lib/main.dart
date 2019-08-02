import 'package:fchs_robotics/pages/HomePage.dart';
import 'package:firebase/firebase.dart';
import 'package:flutter_web/material.dart';

void main() {
  // TODO: Fix the broken libs, they were included in the web/index.html and pubspec.yaml, however, will not register as valid.
  initializeApp(
    apiKey: "AIzaSyBZk0RC3_xmTKms2_2KzWUDyPMdBhbLehQ",
    authDomain: "fchs-robotics.firebaseapp.com",
    databaseURL: "https://fchs-robotics.firebaseio.com",
    projectId: "fchs-robotics",
    storageBucket: "",
    messagingSenderId: "163368391726",
  );
  database().ref('/a').set({"hia":"hi"});
  runApp(
    MaterialApp(
      home: HomePage(),
    )
  );
}