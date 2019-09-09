import 'package:fchs_robotics/pages/AboutPage.dart';
import 'package:fchs_robotics/pages/HomePage.dart';
import 'package:fchs_robotics/pages/TeamPage.dart';
import 'package:fchs_robotics/pages/portal/DashboardPage.dart';
import 'package:fchs_robotics/utilities/Defaults.dart';
import 'dart:html';
import 'package:flutter/material.dart';

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
          onPressed: () => {Navigator.push(context, MaterialPageRoute(builder: (context) {return AboutPage();}))},
          child: Text("About", style: getTextStyle(),),
          color: Colors.white
        ),
        DropdownButton<String>(
          items: <String>['Our Team', 'Team Portal'].map((String value) {
            return DropdownMenuItem<String>(
              value: value,
              child: Text(value, style: getTextStyle(),),
            );
          }).toList(),
          onChanged: (str) {
            if(str == 'Our Team') {
              Navigator.push(context, MaterialPageRoute(builder: (context) {return TeamPage();}));
            } else if(str == 'Team Portal') {
              Scaffold.of(context).showSnackBar(SnackBar(content: Text('This page is under construction!')));
            }
          },
          hint: MaterialButton(
              onPressed: () => {},
              child: Text("Team", style: getTextStyle(),),
              color: Colors.white
          ),
          iconSize: 0.0,
        ),
        Padding(
          padding: EdgeInsets.symmetric(horizontal: 70.0),
        ),
        DropdownButton<String>(
          items: <String>['All Robots', 'FTC Robots', 'VEX Robots', 'FRC Robots'].map((String value) {
            return DropdownMenuItem<String>(
              value: value,
              child: Text(value, style: getTextStyle(),),
            );
          }).toList(),
          onChanged: (str) {
            Scaffold.of(context).showSnackBar(SnackBar(content: Text('This page is under construction!')));
          },
          hint: MaterialButton(
              onPressed: () => {},
              child: Text("Robots", style: getTextStyle(),),
              color: Colors.white
          ),
          iconSize: 0.0,
        ),
        DropdownButton<String>(
          items: <String>['Our Sponors', 'Sponsor Us'].map((String value) {
            return DropdownMenuItem<String>(
              value: value,
              child: Text(value, style: getTextStyle(),),
            );
          }).toList(),
          onChanged: (str) {
            Scaffold.of(context).showSnackBar(SnackBar(content: Text('This page is under construction!')));
          },
          hint: MaterialButton(
              onPressed: () => {},
              child: Text("Sponsors", style: getTextStyle(),),
              color: Colors.white
          ),
          iconSize: 0.0,
        ),
        DropdownButton<String>(
          items: <String>['Contact Us', 'Our Calendar', 'Outreach'].map((String value) {
            return DropdownMenuItem<String>(
              value: value,
              child: Text(value, style: getTextStyle(),),
            );
          }).toList(),
          onChanged: (str) {
            Scaffold.of(context).showSnackBar(SnackBar(content: Text('This page is under construction!')));
          },
          hint: MaterialButton(
              onPressed: () => {},
              child: Text("More", style: getTextStyle(),),
              color: Colors.white
          ),
          iconSize: 0.0,
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
                onPressed: () => {Navigator.push(context, MaterialPageRoute(builder: (context) {return AboutPage();}))},
                child: Text("About", style: getTextStyle(),),
                color: Colors.white
            ),
            DropdownButton<String>(
              items: <String>['Our Team', 'Team Portal'].map((String value) {
                return DropdownMenuItem<String>(
                  value: value,
                  child: Text(value, style: getTextStyle(),),
                );
              }).toList(),
              onChanged: (str) {
                if(str == 'Our Team') {
                  Navigator.push(context, MaterialPageRoute(builder: (context) {return TeamPage();}));
                } else if(str == 'Team Portal') {
                  Scaffold.of(context).showSnackBar(SnackBar(content: Text('This page is under construction!')));
                }
              },
              hint: MaterialButton(
                  onPressed: () => {},
                  child: Text("Team", style: getTextStyle(),),
                  color: Colors.white
              ),
              iconSize: 0.0,
            ),
          ],
        ),
        Wrap(
          spacing: 20.0,
          children: <Widget>[
            DropdownButton<String>(
              items: <String>['All Robots', 'FTC Robots', 'VEX Robots', 'FRC Robots'].map((String value) {
                return DropdownMenuItem<String>(
                  value: value,
                  child: Text(value, style: getTextStyle(),),
                );
              }).toList(),
              onChanged: (str) {
                Scaffold.of(context).showSnackBar(SnackBar(content: Text('This page is under construction!')));
              },
              hint: MaterialButton(
                  onPressed: () => {},
                  child: Text("Robots", style: getTextStyle(),),
                  color: Colors.white
              ),
              iconSize: 0.0,
            ),
            DropdownButton<String>(
              items: <String>['Our Sponors', 'Sponsor Us'].map((String value) {
                return DropdownMenuItem<String>(
                  value: value,
                  child: Text(value, style: getTextStyle(),),
                );
              }).toList(),
              onChanged: (str) {
                Scaffold.of(context).showSnackBar(SnackBar(content: Text('This page is under construction!')));
              },
              hint: MaterialButton(
                  onPressed: () => {},
                  child: Text("Sponsors", style: getTextStyle(),),
                  color: Colors.white
              ),
              iconSize: 0.0,
            ),
            DropdownButton<String>(
              items: <String>['Contact Us', 'Our Calendar', 'Outreach', 'Resources'].map((String value) {
                return DropdownMenuItem<String>(
                  value: value,
                  child: Text(value, style: getTextStyle(),),
                );
              }).toList(),
              onChanged: (str) {
                Scaffold.of(context).showSnackBar(SnackBar(content: Text('This page is under construction!')));
              },
              hint: MaterialButton(
                  onPressed: () => {},
                  child: Text("More", style: getTextStyle(),),
                  color: Colors.white
              ),
              iconSize: 0.0,
            ),
          ],
        ),
      ],
    );
  }

}