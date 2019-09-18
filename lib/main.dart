import 'package:flutter/material.dart';
import 'package:firebase/firebase.dart';
import 'dart:html';

import 'package:fchs_robotics/pages/HomePage.dart';
import 'package:fchs_robotics/pages/AboutPage.dart';
import 'package:fchs_robotics/pages/TeamPage.dart';


Future main() async {
  initializeApp(
    apiKey: "AIzaSyBZk0RC3_xmTKms2_2KzWUDyPMdBhbLehQ",
    authDomain: "fchs-robotics.firebaseapp.com",
    databaseURL: "https://fchs-robotics.firebaseio.com",
    projectId: "fchs-robotics",
    storageBucket: "fchs-robotics.appspot.com",
    messagingSenderId: "163368391726",
  );
  runApp(
    MaterialApp(
      home: getPage(window.location.hash.substring(1)),
    )
  );
}

Widget getPage(hash) {
  if(hash == "/about") {
    return AboutPage();
  } else if(hash == "/team") {
    return TeamPage();
  } else {
    return HomePage();
  }
}