import 'package:fchs_robotics/pages/HomePage.dart';
import 'package:fchs_robotics/utilities/Defaults.dart';
import 'dart:html';
import 'package:flutter_web/material.dart';

class NavBar extends StatefulWidget {

  @override
  State<StatefulWidget> createState() {
    return NavBarState();
  }

}

class NavBarState extends State<NavBar> with TickerProviderStateMixin {

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: <Widget>[
        Container(
            width: MediaQuery.of(context).size.width,
            height: 60.0,
            decoration: BoxDecoration(boxShadow: [BoxShadow(blurRadius: 5.0)], color: Color.fromRGBO(8, 87, 33, 1.0),),
            child: Align(
              alignment: Alignment.center,
              child: Wrap(
                spacing: 170.0,
                children: <Widget>[
                  Text("FALLS CHURCH HIGH SCHOOL ROBOTICS CLUB", style: getTextStyle().copyWith(color: Colors.white, fontSize: 20.0, fontFamily: 'ConcertOne'), textAlign: TextAlign.center,),
                ],
              ),
            )
        ),
        Align(
          alignment: Alignment.bottomCenter,
          child: Container(
            width: MediaQuery.of(context).size.width,
            height: MediaQuery.of(context).size.width >= 850 ? 60.0 : 120.0,
            decoration: BoxDecoration(boxShadow: [BoxShadow(blurRadius: 5.0)], color: Color.fromRGBO(44, 119, 68, 1.0),),
            child: MediaQuery.of(context).size.width >= 850 ? LargeNavBarElement() : SmallNavBarElement(),
          ),
        ),
        Align(
          alignment: Alignment.bottomCenter,
          child: Container(
            width: 130,
            height: MediaQuery.of(context).size.width >= 850 ? 130 : 0,
            decoration: BoxDecoration(boxShadow: [BoxShadow(blurRadius: 5.0)], color: Color.fromRGBO(44, 119, 68, 1.0), borderRadius: BorderRadius.vertical(top: Radius.circular(10.0)), image: DecorationImage(image: AssetImage('images/main_logo.png'))),
          ),
        ),
      ],
    );
  }

}

class LargeNavBarElement extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    return Wrap(
      spacing: 20.0,
      alignment: WrapAlignment.center,
      children: <Widget>[
        MaterialButton(
          onPressed: () => {Navigator.push(context, MaterialPageRoute(builder: (context) {return HomePage();}))},
          child: Text("Home", style: getTextStyle()),
          color: Colors.white
        ),
        MaterialButton(
          onPressed: () => {Scaffold.of(context).showSnackBar(SnackBar(content: Text('This page is under construction!')))},
          child: Text("About", style: getTextStyle(),),
          color: Colors.white
        ),
        MaterialButton(
            onPressed: () => {Scaffold.of(context).showSnackBar(SnackBar(content: Text('This page is under construction!')))},
            child: Text("Team", style: getTextStyle(),),
            color: Colors.white
        ),
        Padding(
          padding: EdgeInsets.symmetric(horizontal: 70.0),
        ),
        MaterialButton(
            onPressed: () => {Scaffold.of(context).showSnackBar(SnackBar(content: Text('This page is under construction!')))},
            child: Text("Robots", style: getTextStyle(),),
            color: Colors.white
        ),
        MaterialButton(
            onPressed: () => {Scaffold.of(context).showSnackBar(SnackBar(content: Text('This page is under construction!')))},
            child: Text("Sponors", style: getTextStyle(),),
            color: Colors.white
        ),
        MaterialButton(
            onPressed: () => {Scaffold.of(context).showSnackBar(SnackBar(content: Text('This page is under construction!')))},
            child: Text("More", style: getTextStyle(),),
            color: Colors.white
        ),
      ],
    );
  }

}

class SmallNavBarElement extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: <Widget>[
        Wrap(
          spacing: 20.0,
          children: <Widget>[
            MaterialButton(
                onPressed: () => {Navigator.push(context, MaterialPageRoute(builder: (context) {return HomePage();}))},
                child: Text("Home", style: getTextStyle()),
                color: Colors.white
            ),
            MaterialButton(
                onPressed: () => {Scaffold.of(context).showSnackBar(SnackBar(content: Text('This page is under construction!')))},
                child: Text("About", style: getTextStyle(),),
                color: Colors.white
            ),
            MaterialButton(
                onPressed: () => {Scaffold.of(context).showSnackBar(SnackBar(content: Text('This page is under construction!')))},
                child: Text("Team", style: getTextStyle(),),
                color: Colors.white
            ),
          ],
        ),
        Wrap(
          spacing: 20.0,
          children: <Widget>[
            MaterialButton(
                onPressed: () => {Scaffold.of(context).showSnackBar(SnackBar(content: Text('This page is under construction!')))},
                child: Text("Robots", style: getTextStyle(),),
                color: Colors.white
            ),
            MaterialButton(
                onPressed: () => {Scaffold.of(context).showSnackBar(SnackBar(content: Text('This page is under construction!')))},
                child: Text("Sponors", style: getTextStyle(),),
                color: Colors.white
            ),
            MaterialButton(
                onPressed: () => {Scaffold.of(context).showSnackBar(SnackBar(content: Text('This page is under construction!')))},
                child: Text("More", style: getTextStyle(),),
                color: Colors.white
            ),
          ],
        ),
      ],
    );
  }

}