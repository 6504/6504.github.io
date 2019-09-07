import 'package:fchs_robotics/elements/NavBar.dart';
import 'package:fchs_robotics/pages/HomePage.dart';
import 'package:fchs_robotics/utilities/Defaults.dart';
import 'package:fchs_robotics/utilities/Firebase.dart';
import 'package:flutter_web/material.dart';
import 'package:flutter_web_ui/ui.dart';
import 'dart:html' as html;

class DashboardPage extends StatefulWidget {

  String _username = "UNAUTHENTICATED";

  @override
  State<StatefulWidget> createState() {
    return DashboardPageState();
  }

}

class DashboardPageState extends State<DashboardPage> {

  @override
  void initState() {
    super.initState();
    setVisibleData();
  }

  void setVisibleData() async {
    if(html.window.localStorage.containsKey('email') && html.window.localStorage.containsKey('password')) {
      await Firebase.app.auth().signInWithEmailAndPassword(html.window.localStorage['email'], html.window.localStorage['password']).then((cred) async => {
        await Firebase.app.firestore().collection("users").doc(cred.user.uid).get().then((snapshot) async => {
          setState(() {
            widget._username = snapshot.data()["nickname"];
          })
        })
      }).catchError((err) => {
        html.window.localStorage.clear(),
        Navigator.push(context, MaterialPageRoute(builder: (context) {return HomePage();})),
    });
    } else {
      await Navigator.push(context, MaterialPageRoute(builder: (context) {return HomePage();}));
    }

  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white10,
      body: Stack(
        children: <Widget>[
          ListView(
            children: <Widget>[
              Padding(padding: EdgeInsets.only(top: 60.0),),
              Text("Welcome, ${widget._username}!", style: getTextStyle().copyWith(fontSize: 20.0),),
              Padding(padding: EdgeInsets.only(bottom: MediaQuery
                  .of(context)
                  .size
                  .width >= 850 ? 70.0 : 130.0))
            ],
          ),
          NavBar(),
        ],
      )
    );
  }

}