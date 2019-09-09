import 'package:flutter/material.dart';
import 'dart:html';

import 'package:fchs_robotics/pages/HomePage.dart';
import 'package:fchs_robotics/pages/AboutPage.dart';
import 'package:fchs_robotics/pages/TeamPage.dart';


Future main() async {
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