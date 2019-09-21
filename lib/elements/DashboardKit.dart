import 'package:auto_size_text/auto_size_text.dart';
import 'package:fchs_robotics/utilities/Defaults.dart';
import 'package:flutter/material.dart';

class DashboardChecklistElement extends StatelessWidget{

  Map<String, dynamic> _userData;

  @override
  Widget build(BuildContext context) {

    return Card(
      child: Padding(
        padding: EdgeInsets.all(10.0),
        child: Column(
          children: <Widget>[
            AutoSizeText("Checklist:", style: getTextStyle().copyWith(fontSize: 20), minFontSize: 15, maxFontSize: 25,),
            Row(
              children: <Widget>[
                Icon(_userData["hasSignedForms"]?Icons.check_circle_outline:Icons.highlight_off, color: _userData["hasSignedForms"]?Colors.green:Colors.red),
                AutoSizeText(_userData["hasSignedForms"]?"You've submitted all contracts!":"You still need to submit some contracts...", style: getTextStyle(),)
              ],
            ),
            Row(
              children: <Widget>[
                Icon(_userData["hasPaidDues"]?Icons.check_circle_outline:Icons.highlight_off, color: _userData["hasPaidDues"]?Colors.green:Colors.red),
                AutoSizeText(_userData["hasPaidDues"]?"You've paid all club dues!":"You still need to submit some club dues...", style: getTextStyle(),)
              ],
            ),
            Divider(),
            AutoSizeText((_userData["hasSignedForms"]&&_userData["hasPaidDues"])?"You're good to go!":"You have one or more things to get done...", style: getTextStyle().copyWith(fontSize: 15), minFontSize: 10, maxFontSize: 17,),
          ],
        ),
      ),
    );
  }

  DashboardChecklistElement(this._userData);

}