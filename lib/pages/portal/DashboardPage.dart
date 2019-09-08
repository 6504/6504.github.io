import 'package:fchs_robotics/elements/NavBar.dart';
import 'package:fchs_robotics/utilities/Defaults.dart';
import 'package:fchs_robotics/utilities/Firebase.dart';
import 'package:fchs_robotics/utilities/GetUser.dart';
import 'package:flutter_web/material.dart';

class DashboardPage extends StatefulWidget {

  Map<String, dynamic> _userdata = getUserDataBase();

  @override
  State<StatefulWidget> createState() {
    return DashboardPageState();
  }

}

class DashboardPageState extends State<DashboardPage> {

  @override
  void initState() {
    super.initState();
    setupUserData();
  }

  void setupUserData() async {
     await getUser(Firebase.app, context).then((snapshot) => {
       if(snapshot == null) {
         navigateLogin(context)
       } else {
         setState(() {
           widget._userdata = snapshot.data();
         })
       }
    });
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
              Text('Welcome, ${widget._userdata["nickname"]}!', style: getTextStyle().copyWith(fontSize: 20.0),),
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