import 'package:fchs_robotics/pages/HomePage.dart';
import 'package:fchs_robotics/utilities/Defaults.dart';
import 'dart:html';
import 'package:flutter_web/material.dart';

class NavBar extends StatefulWidget {

  final TextStyle _navBarStyle = getTextStyle().copyWith(color: Colors.white, fontWeight: FontWeight.w100, fontSize: 25.0);
  TextStyle _coreStyle;

  @override
  State<StatefulWidget> createState() {
    return NavBarState();
  }

}

class NavBarState extends State<NavBar> with TickerProviderStateMixin {

  @override
  Widget build(BuildContext context) {
    widget._coreStyle = getTextStyle().copyWith(color: Colors.white, fontSize: MediaQuery.of(context).size.height*0.04, fontFamily: 'ConcertOne');
    return Stack(
      children: <Widget>[
        Container(
          width: MediaQuery.of(context).size.width,
          height: 110.0,
          decoration: BoxDecoration(boxShadow: [BoxShadow(blurRadius: 5.0)], color: Color.fromRGBO(8, 87, 33, 1.0)),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.end,
            children: <Widget>[
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: <Widget>[
                  Wrap(
                    spacing: 260.0,
                    children: <Widget>[
                      Text("FALLS CHURCH", style: widget._coreStyle,),
                      Text("ROBOTICS CLUB", style: widget._coreStyle,)
                    ],
                  ),
                ],
              )
            ],
          ),
        ),
        Container(
          width: MediaQuery.of(context).size.width,
          height: 65.0,
          decoration: BoxDecoration(boxShadow: [BoxShadow(blurRadius: 5.0)], color: Colors.green),
          child: ButtonBar(
            alignment: MainAxisAlignment.center,
            children: <Widget>[
              MaterialButton(
                onPressed: () => {
                  Navigator.push(context, MaterialPageRoute(builder: (context) {
                    return HomePage();
                  }))
                },
                child: Text("HOME", style: widget._navBarStyle,),
              ),
              MaterialButton(
                onPressed: () => {
                  Navigator.push(context, MaterialPageRoute(builder: (context) {
                    return HomePage();
                  }))
                },
                child: Text("ABOUT US", style: widget._navBarStyle,),
              ),
              MaterialButton(
                onPressed: () => {
                  Navigator.push(context, MaterialPageRoute(builder: (context) {
                    return HomePage();
                  }))
                },
                child: Text("TEAM", style: widget._navBarStyle,),
              ),
              Padding(padding: EdgeInsets.symmetric(horizontal: 130.0)),
              MaterialButton(
                onPressed: () => {
                  Navigator.push(context, MaterialPageRoute(builder: (context) {
                    return HomePage();
                  }))
                },
                child: Text("ROBOTS", style: widget._navBarStyle,),
              ),
              MaterialButton(
                onPressed: () => {
                  Navigator.push(context, MaterialPageRoute(builder: (context) {
                    return HomePage();
                  }))
                },
                child: Text("SPONSORS", style: widget._navBarStyle,),
              ),
              MaterialButton(
                onPressed: () => {
                  Navigator.push(context, MaterialPageRoute(builder: (context) {
                    return HomePage();
                  }))
                },
                child: Text("MORE", style: widget._navBarStyle,),
              ),
            ],
          ),
        ),
        Align(
          alignment: Alignment.topCenter,
          child: Container(
            alignment: Alignment.topCenter,
            width: MediaQuery.of(context).size.width*0.1,
            height: MediaQuery.of(context).size.height*0.13,
            decoration: BoxDecoration(boxShadow: [BoxShadow(blurRadius: 5.0)], color: Colors.green),
            child: Image.network('assets/images/main_logo.png'),
          ),
        )
      ],
    );
  }

}