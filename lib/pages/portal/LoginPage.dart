import 'package:fchs_robotics/elements/NavBar.dart';
import 'package:fchs_robotics/utilities/Defaults.dart';
import 'package:flutter_web/material.dart';

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
                Text('Welcome! Please login...', style: getTextStyle().copyWith(fontSize: 20.0), textAlign: TextAlign.center,),
                Card(
                  margin: EdgeInsets.all(20.0),
                  child: Column(
                    children: <Widget>[
                      TextField(
                        controller: _email,
                        enableInteractiveSelection: true,
                        decoration: InputDecoration(hintText: "E-mail", hintStyle: getTextStyle()),
                        style: getTextStyle(),
                      )
                    ],
                  ),
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