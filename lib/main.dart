import 'package:fchs_robotics/pages/portal/DashboardPage.dart';
import 'package:flutter_web/material.dart';
import 'dart:html';

import 'package:fchs_robotics/pages/HomePage.dart';
import 'package:fchs_robotics/pages/AboutPage.dart';
import 'package:fchs_robotics/pages/TeamPage.dart';


void main() {
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
  } else if(hash == "/dashboard") {
    return DashboardPage();
  } else {
    return HomePage();
  }
}