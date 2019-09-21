import 'package:auto_size_text/auto_size_text.dart';
import 'package:fchs_robotics/pages/AboutPage.dart';
import 'package:fchs_robotics/pages/HomePage.dart';
import 'package:fchs_robotics/pages/TeamPage.dart';
import 'package:fchs_robotics/pages/dashboard/LoginPage.dart';
import 'package:fchs_robotics/utilities/Defaults.dart';
import 'dart:html';
import 'package:flutter/material.dart';
import 'package:page_transition/page_transition.dart';

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
          onPressed: () => {Navigator.push(context, PageTransition(type: PageTransitionType.leftToRight, child: HomePage(), duration: Duration(milliseconds: 500)))},
          child: AutoSizeText("Home", style: getTextStyle()),
          color: Colors.white
        ),
        MaterialButton(
            onPressed: () => {Navigator.push(context, PageTransition(type: PageTransitionType.leftToRight, child: AboutPage(), duration: Duration(milliseconds: 500)))},
          child: AutoSizeText("About", style: getTextStyle(),),
          color: Colors.white
        ),
        DropdownButton<String>(
          items: <String>['Our Team', 'Team Portal'].map((String value) {
            return DropdownMenuItem<String>(
              value: value,
              child: AutoSizeText(value, style: getTextStyle(),),
            );
          }).toList(),
          onChanged: (str) {
            if(str == 'Our Team') {
              Navigator.push(context, PageTransition(type: PageTransitionType.leftToRight, child: TeamPage(), duration: Duration(milliseconds: 500)));
            } else if(str == 'Team Portal') {
              Navigator.push(context, PageTransition(type: PageTransitionType.leftToRight, child: LoginPage(), duration: Duration(milliseconds: 500)));
            }
          },
          hint: MaterialButton(
              onPressed: () => {},
              child: AutoSizeText("Team", style: getTextStyle(),),
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
              child: AutoSizeText(value, style: getTextStyle(),),
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
              child: AutoSizeText(value, style: getTextStyle(),),
            );
          }).toList(),
          onChanged: (str) {
            Scaffold.of(context).showSnackBar(SnackBar(content: Text('This page is under construction!')));
          },
          hint: MaterialButton(
              onPressed: () => {},
              child: AutoSizeText("Sponsors", style: getTextStyle(),),
              color: Colors.white
          ),
          iconSize: 0.0,
        ),
        DropdownButton<String>(
          items: <String>['Contact Us', 'Our Calendar', 'Outreach'].map((String value) {
            return DropdownMenuItem<String>(
              value: value,
              child: AutoSizeText(value, style: getTextStyle(),),
            );
          }).toList(),
          onChanged: (str) {
            Scaffold.of(context).showSnackBar(SnackBar(content: Text('This page is under construction!')));
          },
          hint: MaterialButton(
              onPressed: () => {},
              child: AutoSizeText("More", style: getTextStyle(),),
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
                onPressed: () => {Navigator.push(context, PageTransition(type: PageTransitionType.leftToRight, child: HomePage(), duration: Duration(milliseconds: 500)))},
                child: AutoSizeText("Home", style: getTextStyle()),
                color: Colors.white
            ),
            MaterialButton(
                onPressed: () => {Navigator.push(context, PageTransition(type: PageTransitionType.leftToRight, child: AboutPage(), duration: Duration(milliseconds: 500)))},
                child: AutoSizeText("About", style: getTextStyle(),),
                color: Colors.white
            ),
            DropdownButton<String>(
              items: <String>['Our Team', 'Team Portal'].map((String value) {
                return DropdownMenuItem<String>(
                  value: value,
                  child: AutoSizeText(value, style: getTextStyle(),),
                );
              }).toList(),
              onChanged: (str) {
                if(str == 'Our Team') {
                  Navigator.push(context, PageTransition(type: PageTransitionType.leftToRight, child: TeamPage(), duration: Duration(milliseconds: 500)));
                } else if(str == 'Team Portal') {
                  Navigator.push(context, PageTransition(type: PageTransitionType.leftToRight, child: LoginPage(), duration: Duration(milliseconds: 500)));
                }
              },
              hint: MaterialButton(
                  onPressed: () => {},
                  child: AutoSizeText("Team", style: getTextStyle(),),
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
                  child: AutoSizeText(value, style: getTextStyle(),),
                );
              }).toList(),
              onChanged: (str) {
                Scaffold.of(context).showSnackBar(SnackBar(content: Text('This page is under construction!')));
              },
              hint: MaterialButton(
                  onPressed: () => {},
                  child: AutoSizeText("Robots", style: getTextStyle(),),
                  color: Colors.white
              ),
              iconSize: 0.0,
            ),
            DropdownButton<String>(
              items: <String>['Our Sponors', 'Sponsor Us'].map((String value) {
                return DropdownMenuItem<String>(
                  value: value,
                  child: AutoSizeText(value, style: getTextStyle(),),
                );
              }).toList(),
              onChanged: (str) {
                Scaffold.of(context).showSnackBar(SnackBar(content: Text('This page is under construction!')));
              },
              hint: MaterialButton(
                  onPressed: () => {},
                  child: AutoSizeText("Sponsors", style: getTextStyle(),),
                  color: Colors.white
              ),
              iconSize: 0.0,
            ),
            DropdownButton<String>(
              items: <String>['Contact Us', 'Our Calendar', 'Outreach', 'Resources'].map((String value) {
                return DropdownMenuItem<String>(
                  value: value,
                  child: AutoSizeText(value, style: getTextStyle(),),
                );
              }).toList(),
              onChanged: (str) {
                Scaffold.of(context).showSnackBar(SnackBar(content: Text('This page is under construction!')));
              },
              hint: MaterialButton(
                  onPressed: () => {},
                  child: AutoSizeText("More", style: getTextStyle(),),
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