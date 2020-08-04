import 'dart:html';
import 'package:flutter/material.dart';
import 'package:fchs_robotics/themes/style.dart';

class NavBarHeader extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
        width: MediaQuery.of(context).size.width,
        height: 60.0,
        decoration: BoxDecoration(
          boxShadow: [BoxShadow(blurRadius: 5.0)],
          color: Style.navbarUpper,
        ),
        child: Align(
          alignment: Alignment.center,
          child: Wrap(
            spacing: 170.0,
            children: <Widget>[
              Text(
                'FALLS CHURCH HIGH SCHOOL ROBOTICS CLUB',
                style: Theme.of(context).textTheme.headline5.copyWith(color: Style.navbarUpperText),
                textAlign: TextAlign.center,
              ),
            ],
          ),
        ));
  }
}
