import 'package:fchs_robotics/elements/NavBar.dart';
import 'package:fchs_robotics/utilities/Defaults.dart';
import 'package:flutter_web/material.dart';

class HomePage extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white10,
      body: Stack(
        children: <Widget>[
          ListView(
            children: <Widget>[
              Container(
                width: MediaQuery.of(context).size.width,
                height: MediaQuery.of(context).size.height*0.8,
                decoration: BoxDecoration(image: DecorationImage(image: AssetImage('images/team.jpg'), alignment: Alignment.center, fit: BoxFit.cover)),
              )
            ],
          ),
          NavBar(),
        ],
      )
    );
  }

}