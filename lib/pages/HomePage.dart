import 'package:fchs_robotics/elements/NavBar.dart';
import 'package:flutter_web/material.dart';

class HomePage extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white10,
      body: Column(
        children: <Widget>[
          NavBar(),
        ],
      )
    );
  }

}