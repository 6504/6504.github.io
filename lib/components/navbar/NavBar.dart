import 'package:auto_size_text/auto_size_text.dart';
import 'package:fchs_robotics/components/navbar/components/NavBarDesktop.dart';
import 'package:fchs_robotics/components/navbar/components/NavBarHeader.dart';
import 'package:fchs_robotics/components/navbar/components/NavBarMobile.dart';
import 'package:fchs_robotics/utilities/Defaults.dart';
import 'dart:html';
import 'package:flutter/material.dart';
import 'package:page_transition/page_transition.dart';

class NavBar extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    return NavBarState();
  }
}

class NavBarState extends State<NavBar> with TickerProviderStateMixin {
  @override
  Widget build(BuildContext context) {
    return Stack(
      children: <Widget>[
        NavBarHeader(),
        //Putting the container here because for some reason can't put shadows on BottomAppBar
        Align(
          alignment: Alignment.bottomCenter,
          child: Container(
            width: MediaQuery.of(context).size.width,
            height: 60.0,
            decoration: BoxDecoration(
              boxShadow: [BoxShadow(blurRadius: 5.0)],
              color: Color.fromRGBO(44, 119, 68, 1.0),
            ),
            //Rendering different navbars based on device width
            child: MediaQuery.of(context).size.width >= 992 ? NavBarDesktop() : NavBarMobile(),
          ),
        ),
        Align(
          alignment: Alignment.bottomCenter,
          child: NavBarMiddle(),
        ),
      ],
    );
  }
}
