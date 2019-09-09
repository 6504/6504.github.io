import 'dart:html';

import 'package:fchs_robotics/elements/NavBar.dart';
import 'package:fchs_robotics/pages/portal/DashboardPage.dart';
import 'package:fchs_robotics/utilities/Defaults.dart';
import 'package:flutter/material.dart';

class LoginPage extends StatelessWidget {

  TextEditingController _email = TextEditingController();
  TextEditingController _password = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white10,
      body: Stack(
        children: <Widget>[
          Align(
            alignment: Alignment.center,
            child: ListView(
              children: <Widget>[
                Padding(padding: EdgeInsets.only(top: 60.0),),
                Padding(padding: EdgeInsets.only(top: 60.0),),
                Text('Welcome! Please login...', style: getTextStyle().copyWith(fontSize: 20.0), textAlign: TextAlign.center,),
                Card(
                  margin: EdgeInsets.all(100.0).copyWith(left: MediaQuery.of(context).size.width >= 850 ? 300 : 0).copyWith(right: MediaQuery.of(context).size.width >= 850 ? 300 : 0),
                  child: Padding(
                    padding: EdgeInsets.all(20.0),
                    child: Column(
                      children: <Widget>[
                        TextField(
                          controller: _email,
                          enableInteractiveSelection: true,
                          keyboardType: TextInputType.emailAddress,
                          decoration: InputDecoration(hintText: "E-mail", hintStyle: getTextStyle()),
                          style: getTextStyle(),
                        ),
                        TextField(
                          controller: _password,
                          enableInteractiveSelection: true,
                          obscureText: true,
                          keyboardType: TextInputType.text,
                          decoration: InputDecoration(hintText: "Password", hintStyle: getTextStyle()),
                          style: getTextStyle(),
                        ),
                        Row(
                          children: <Widget>[
                            MaterialButton(
                              onPressed: () => {
                                window.localStorage['email'] = _email.text,
                                window.localStorage['password'] = _password.text,
                                Navigator.push(context, MaterialPageRoute(builder: (context) {return DashboardPage();}))
                              },
                              child: Text("LOGIN", style: getTextStyle().copyWith(color: Colors.white),),
                              color: Colors.blue,
                            ),
                            Padding(padding: EdgeInsets.symmetric(horizontal: 10.0),),
                            MaterialButton(
                              onPressed: () => {

                              },
                              child: Text("REGISTER", style: getTextStyle().copyWith(color: Colors.white),),
                              color: Colors.orangeAccent,
                            )
                          ],
                        ),
                      ],
                    ),
                  )
                ),
                Padding(padding: EdgeInsets.only(bottom: MediaQuery
                    .of(context)
                    .size
                    .width >= 850 ? 70.0 : 130.0))
              ],
            ),
          ),
          NavBar(),
        ],
      )
    );
  }

}