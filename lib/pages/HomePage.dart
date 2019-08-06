import 'package:fchs_robotics/elements/NavBar.dart';
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
                height: MediaQuery.of(context).size.width*0.42,
                decoration: BoxDecoration(image: DecorationImage(image: AssetImage('images/team.jpg'), fit: BoxFit.fitWidth, alignment: Alignment.topCenter)),
                child: Text("hi"),
              )
            ],
          ),
          NavBar(),
        ],
      )
    );
  }

}