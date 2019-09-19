import 'package:fchs_robotics/elements/NavBar.dart';
import 'package:fchs_robotics/utilities/Defaults.dart';
import 'package:firebase/firebase.dart';
import 'package:firebase/firestore.dart';
import 'package:flutter/material.dart';
import 'package:page_transition/page_transition.dart';

import 'LoginPage.dart';

class DashboardPage extends StatefulWidget {

  User _user;
  Map<String, dynamic> _userData;

  DashboardPage(this._user);

  @override
  State<StatefulWidget> createState() {
    return DashboardPageState();
  }

}

class DashboardPageState extends State<DashboardPage> {


  @override
  void initState() {
    super.initState();
    firestore().collection("users").doc(widget._user.uid).get().then((documentSnapshot) => {
      widget._userData = documentSnapshot.data(),
      setState(() {})
    });
  }

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
                  Row(
                    children: <Widget>[
                      Card(
                        child: Padding(
                          padding: EdgeInsets.all(10.0),
                          child: Row(
                            children: <Widget>[
                              Container(
                                width: 60.0,
                                height: 60.0,
                                decoration: BoxDecoration(
                                  shape: BoxShape.circle,
                                  image: DecorationImage(image: AssetImage('images/members/${widget._userData["avatar"]==null?"nopic.png":widget._userData["avatar"]}'), fit: BoxFit.fill),
                                ),
                              ),
                              Padding(padding: EdgeInsets.only(left: 10.0),),
                              Text("Welcome, ${widget._userData["nickname"]==null?"null":widget._userData["nickname"]}!", style: getTextStyle().copyWith(fontSize: 25.0),)
                            ],
                          ),
                        ),
                      ),
                    ],
                  ),
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