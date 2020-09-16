import 'dart:html';
import 'package:flutter/material.dart';
import 'package:auto_size_text/auto_size_text.dart';
import 'package:fchs_robotics/themes/style.dart';
import 'package:page_transition/page_transition.dart';

//Middle part of the navbar
class NavBarMiddle extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      width: 130,
      height: MediaQuery.of(context).size.width >= 992 ? 130 : 0,
      decoration: BoxDecoration(
          boxShadow: [BoxShadow(blurRadius: 5.0)],
          color: Color.fromRGBO(44, 119, 68, 1.0),
          borderRadius: BorderRadius.vertical(top: Radius.circular(10.0)),
          image: DecorationImage(image: AssetImage('images/main_logo.png'))),
    );
  }
}

//Desktop view for navbar
class NavBarDesktop extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Wrap(
      spacing: 20.0,
      alignment: WrapAlignment.center,
      //All the buttons that represent links
      children: <Widget>[
        RaisedButton(
          child: AutoSizeText('Home'),
          color: Style.navbarButton,
          onPressed: () => {Navigator.of(context).pushNamed('/')},
        ),
        RaisedButton(
          child: AutoSizeText('About'),
          color: Style.navbarButton,
          onPressed: () => {Navigator.of(context).pushNamed('/about')},
        ),
        //Start of dropdown menus
        DropdownButton<String>(
          hint: RaisedButton(
            child: AutoSizeText('Team'),
            color: Style.navbarButton,
            onPressed: () {},
          ),
          iconSize: 0.0,
          items: <String>['Our Team', 'Team Portal'].map<DropdownMenuItem<String>>((String value) {
            return DropdownMenuItem<String>(
              value: value,
              child: AutoSizeText(value),
            );
          }).toList(),
          onChanged: (str) {
            if (str == 'Our Team') {
              Navigator.of(context).pushNamed('/team');
            } else if (str == 'Team Portal') {
              Navigator.of(context).pushNamed('/login');
            }
          },
        ),
        //Padding between dropdowns for the Jagwire icon
        Padding(
          padding: EdgeInsets.symmetric(horizontal: 70.0),
        ),
        DropdownButton<String>(
          hint: RaisedButton(
            child: AutoSizeText('Robots'),
            color: Style.navbarButton,
            onPressed: () {},
          ),
          iconSize: 0.0,
          items: <String>['All Robots', 'FTC Robots', 'VEX Robots', 'FRC Robots']
              .map<DropdownMenuItem<String>>((String value) {
            return DropdownMenuItem<String>(
              value: value,
              child: AutoSizeText(value),
            );
          }).toList(),
          onChanged: (str) {
            Scaffold.of(context)
                .showSnackBar(SnackBar(content: Text('This page is under construction!')));
          },
        ),
        DropdownButton<String>(
          hint: RaisedButton(
            child: AutoSizeText('Sponsors'),
            color: Style.navbarButton,
            onPressed: () {},
          ),
          iconSize: 0.0,
          items:
              <String>['Our Sponors', 'Sponsor Us'].map<DropdownMenuItem<String>>((String value) {
            return DropdownMenuItem<String>(
              value: value,
              child: AutoSizeText(value),
            );
          }).toList(),
          onChanged: (str) {
            Scaffold.of(context)
                .showSnackBar(SnackBar(content: Text('This page is under construction!')));
          },
        ),
        DropdownButton<String>(
          hint: RaisedButton(
            child: AutoSizeText('More'),
            color: Style.navbarButton,
            onPressed: () {},
          ),
          iconSize: 0.0,
          items: <String>['Contact Us', 'Our Calendar', 'Outreach']
              .map<DropdownMenuItem<String>>((String value) {
            return DropdownMenuItem<String>(
              value: value,
              child: AutoSizeText(value),
            );
          }).toList(),
          onChanged: (str) {
            Scaffold.of(context)
                .showSnackBar(SnackBar(content: Text('This page is under construction!')));
          },
        ),
      ],
    );
  }
}
