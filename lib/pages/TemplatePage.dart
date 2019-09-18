import 'package:fchs_robotics/elements/NavBar.dart';
import 'package:flutter/material.dart';

class HomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        backgroundColor: Colors.white10,
        body: Builder(builder: (context) {
          return Stack(
            children: <Widget>[
              ListView(
                children: <Widget>[
                  Padding(padding: EdgeInsets.only(top: 60.0),),

                  Padding(padding: EdgeInsets.only(bottom: MediaQuery
                      .of(context)
                      .size
                      .width >= 850 ? 70.0 : 130.0))
                ],
              ),
              NavBar(),
            ],
          );
        },)
    );
  }

}