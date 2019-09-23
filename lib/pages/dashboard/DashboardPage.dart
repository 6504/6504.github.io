import 'package:auto_size_text/auto_size_text.dart';
import 'package:fchs_robotics/elements/DashboardKit.dart';
import 'package:fchs_robotics/elements/NavBar.dart';
import 'package:fchs_robotics/pages/dashboard/LoginPage.dart';
import 'package:fchs_robotics/utilities/Defaults.dart';
import 'package:firebase/firebase.dart';
import 'package:flutter/material.dart';
import 'package:page_transition/page_transition.dart';

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
                    childAspectRatio: MediaQuery.of(context).size.width >= 850 ? 2.5 : 2.5,
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
                          child: Column(
                            children: <Widget>[
                              Row(
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
                              Row(
                                children: <Widget>[
                                  MaterialButton(
                                    onPressed: () {},
                                    color: Colors.blue,
                                    child: AutoSizeText("SETTINGS", style: getTextStyle().copyWith(color: Colors.white)),
                                  ),
                                  Padding(padding: EdgeInsets.only(left: 10.0),),
                                  MaterialButton(
                                    onPressed: () {
                                      auth().signOut().then((temp) => {
                                        Scaffold.of(context).showSnackBar(SnackBar(content: Text("You've been signed out successfully!", style: getTextStyle().copyWith(color: Colors.white),),)),
                                        Navigator.push(context, PageTransition(type: PageTransitionType.leftToRight, child: LoginPage()))
                                      });
                                    },
                                    color: Colors.orangeAccent,
                                    child: AutoSizeText("LOG OUT", style: getTextStyle().copyWith(color: Colors.white)),
                                  ),
                                ],
                              ),
                            ],
                          )
                        ),
                      ),
                      DashboardChecklistElement(widget._userData),
                      DashboardAddMemberElement(widget._userData),
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