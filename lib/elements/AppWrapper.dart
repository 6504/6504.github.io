// Acts as the wrapper for all MaterialApp interactions, before rendering other elements for compatibility.
import 'package:fallschurchrobotics/pages/Home.dart';
import 'package:fallschurchrobotics/utilities/StorageManager.dart';
import 'package:flutter/material.dart';

import 'ScaffoldWrapper.dart';

class AppWrapper extends StatelessWidget {

  static ThemeMode mode;

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "Falls Church Robotics",
      theme: ThemeData.light().copyWith(
        primaryColor: Color.fromRGBO(8, 87, 33, 1),
        accentColor: Color.fromRGBO(44, 119,68, 1)
      ),
      darkTheme: ThemeData.dark().copyWith(
          primaryColor: Color.fromRGBO(1, 50, 32, 1),
          accentColor: Color.fromRGBO(44, 119,68, 1)
      ),
      themeMode: mode,
      home: ScaffoldWrapper(HomePage())
    );
  }

}