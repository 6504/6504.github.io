import 'package:auto_size_text/auto_size_text.dart';
import 'package:fchs_robotics/elements/DashboardKit.dart';
import 'package:fchs_robotics/elements/NavBar.dart';
import 'package:fchs_robotics/utilities/Defaults.dart';
import 'package:firebase/firebase.dart';
import 'package:flutter/material.dart';

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
                  GridView.count(
                    crossAxisCount: MediaQuery.of(context).size.width >= 850 ? 5 : 1,
                    childAspectRatio: MediaQuery.of(context).size.width >= 850 ? 2.5 : 3,
                    physics: NeverScrollableScrollPhysics(),
                    crossAxisSpacing: 10.0,
                    mainAxisSpacing: 10.0,
                    padding: EdgeInsets.all(10.0),
                    shrinkWrap: true,
                    scrollDirection: Axis.vertical,
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
                              AutoSizeText("Welcome, ${widget._userData["nickname"]==null?"null":widget._userData["nickname"]}!", style: getTextStyle(), minFontSize: 12, maxFontSize: 30.0,),
                              Padding(padding: EdgeInsets.only(left: 10.0),),
                            ],
                          ),
                        ),
                      ),
                      DashboardChecklistElement(widget._userData),
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