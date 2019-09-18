import 'package:fchs_robotics/elements/NavBar.dart';
import 'package:firebase/firebase.dart';
import 'package:flutter/material.dart';
import 'package:page_transition/page_transition.dart';

import 'LoginPage.dart';

class DashboardPage extends StatelessWidget {

  User _user;

  DashboardPage(this._user);

  @override
  Widget build(BuildContext context) {
    auth().onAuthStateChanged.listen((user) => {
      print("User Information: "+user.toString()),
      if(user==null) {
        Navigator.push(context, MaterialPageRoute(builder: (context) { return LoginPage(); }))
      },
      _user = user,
    }).onError((err) => {
      print("Error Information: "+err),
      Navigator.push(context, MaterialPageRoute(builder: (context) { return LoginPage(); }))
    });
    return Scaffold(
      backgroundColor: Colors.white10,
      body: Builder(builder: (context) {
        return Stack(
          children: <Widget>[
            ListView(
              children: <Widget>[
                Padding(padding: EdgeInsets.only(top: 60.0),),
                Text(_user.email),
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