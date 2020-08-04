import 'dart:html';

import 'package:flutter/material.dart';

class Style {
//Make a cool theme here, for now there's just some colors
  static const Color navbarUpper = Color.fromRGBO(8, 87, 33, 1.0);
  static const Color navbarUpperText = Colors.white;
  static const Color navbarLower = Color.fromRGBO(44, 119, 68, 1.0);
  static const Color navbarLowerText = Colors.black;
  static const Color navbarButton = Colors.white;

  static const Color mainArea = Colors.white;
  static const Color cardBackground = Colors.white;
  static const Color mainText = Colors.black;
}

//Just fonts in the theme right now
ThemeData mainTheme() {
  return ThemeData(
    fontFamily: 'Nunito',
    textTheme: TextTheme(
      headline4: TextStyle(fontFamily: 'ConcertOne', fontSize: 30.0),
      headline5: TextStyle(fontFamily: 'ConcertOne', fontSize: 20.0),
      headline6: TextStyle(fontSize: 20.0, fontWeight: FontWeight.bold),
      bodyText1: TextStyle(fontSize: 15.0, fontWeight: FontWeight.w100),
      bodyText2: TextStyle(fontSize: 15.0, height: 1.5),
      button: TextStyle(fontSize: 15.0, height: 1.5),
      overline: TextStyle(fontWeight: FontWeight.w100, fontSize: 13.0),
    ),
    buttonTheme: mainButton(),
    //ExpansionTile colors
    dividerColor: Colors.transparent,
    unselectedWidgetColor: Style.navbarButton,
    accentColor: Style.navbarButton,
    //woo uncomment next line for dark theme
    //brightness: Brightness.dark,
  );
}

//Button Theme data (mainly forces the buttons to be a minimum width so they are all the same size)
//Keeps navbar buttons properly spaced
ButtonThemeData mainButton() {
  return ButtonThemeData(
    alignedDropdown: false,
    textTheme: ButtonTextTheme.normal,
    minWidth: 100.0,
    layoutBehavior: ButtonBarLayoutBehavior.constrained,
  );
}
