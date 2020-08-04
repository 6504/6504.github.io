import 'package:flutter/widgets.dart';
import 'package:fchs_robotics/screens/AboutPage.dart';
import 'package:fchs_robotics/screens/home/HomePage.dart';
import 'package:fchs_robotics/screens/TeamPage.dart';
import 'package:fchs_robotics/screens/dashboard/LoginPage.dart';

final Map<String, WidgetBuilder> routes = <String, WidgetBuilder>{
  '/': (BuildContext context) => HomePage(),
  '/about': (context) => AboutPage(),
  '/team': (context) => TeamPage(),
  '/login': (context) => LoginPage(),
};
