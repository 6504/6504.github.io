import 'package:fchs_robotics/utilities/Defaults.dart';
import 'package:flutter/material.dart';

class AboutCard extends StatelessWidget {

  String _title;
  String _content;
  String _date;

  @override
  Widget build(BuildContext context) {

    return Card(
      color: Colors.white,
      child: Padding(
        padding: EdgeInsets.all(20.0),
        child: GridView.count(
          shrinkWrap: true,
          physics: NeverScrollableScrollPhysics(),
          crossAxisCount: 1,
          childAspectRatio: MediaQuery.of(context).size.width >= 850 ? 50 : 7,
          children: <Widget>[
            Text(_title, style: getTextStyle().copyWith(fontWeight: FontWeight.bold, fontSize: 20.0),),
            Wrap(
              children: <Widget>[
                Text(_content, style: getTextStyle(),),
              ],
            ),
            Text(_date, style: getTextStyle().copyWith(fontWeight: FontWeight.w100),)
          ],
        ),
      )
    );

  }

  AboutCard(this._title, this._content, this._date);

}