import 'dart:async';

import 'package:fchs_robotics/elements/NavBar.dart';
import 'package:fchs_robotics/pages/dashboard/DashboardPage.dart';
import 'package:fchs_robotics/utilities/Defaults.dart';
import 'package:firebase/firebase.dart';
import 'package:flutter/material.dart';
import 'package:page_transition/page_transition.dart';

class LoginPage extends StatelessWidget {

  TextEditingController _email = TextEditingController();
  TextEditingController _password = TextEditingController();
  StreamSubscription<User> _authState;

  @override
  Widget build(BuildContext context) {
    _authState = auth().onAuthStateChanged.listen((user) => {
      print("User Information: "+user.toString()),
      if(user!=null) {
        _authState.cancel(),
        Navigator.push(context, PageTransition(type: PageTransitionType.leftToRight, child: DashboardPage(user)))
      }
    });
    _authState.onError((error) => {
      print("Error Information: "+error)
    });
    return Scaffold(
      backgroundColor: Colors.white10,
      body: Builder(builder: (context) {
        return Stack(
          children: <Widget>[
            ListView(
              children: <Widget>[
                Padding(padding: EdgeInsets.only(top: 60.0),),
                Align(
                  alignment: Alignment.center,
                  child: Card(
                    margin: EdgeInsets.all(MediaQuery.of(context).size.width >= 850 ? 300 : 5),
                    child: Padding(
                      padding: EdgeInsets.all(10.0),
                      child: Column(
                        children: <Widget>[
                          Text("ENTER CREDENTIALS", style: getTextStyle().copyWith(fontFamily: 'ConcertOne', fontSize: 20.0), textAlign: TextAlign.start,),
                          Form(
                            autovalidate: true,
                            child: Column(
                              children: <Widget>[
                                TextFormField(style: getTextStyle(), decoration: InputDecoration(hintText: "e-mail", hintStyle: getTextStyle()), controller: _email,),
                                TextFormField(style: getTextStyle(), decoration: InputDecoration(hintText: "passowrd", hintStyle: getTextStyle()), obscureText: true, controller: _password,)
                              ],
                            ),
                          ),
                          Padding(padding: EdgeInsets.only(top: 10.0),),
                          Row(
                            children: <Widget>[
                              MaterialButton(
                                onPressed: () => {
                                  auth().signInWithEmailAndPassword(_email.text, _password.text).then((credential) => {
                                    Scaffold.of(context).showSnackBar(SnackBar(content: Text("Signed in, please wait while content loads.", style: getTextStyle().copyWith(color: Colors.white),),))
                                  }).catchError((err) => {
                                    Scaffold.of(context).showSnackBar(SnackBar(content: Text("Invalid Credentials or Other Error, Please consult console.", style: getTextStyle().copyWith(color: Colors.white),),))
                                  })
                                },
                                color: Colors.green,
                                child: Text("LOGIN", style: getTextStyle().copyWith(color: Colors.white),),
                              ),
                              Padding(padding: EdgeInsets.only(left: 10.0),),
                              MaterialButton(
                                onPressed: () => {},
                                color: Colors.orange,
                                child: Text("RESET PASSWORD", style: getTextStyle().copyWith(color: Colors.white),),
                              ),
                            ],
                          ),
                        ],
                      ),
                    )
                  )
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