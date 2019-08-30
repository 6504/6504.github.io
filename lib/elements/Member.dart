import 'package:fchs_robotics/utilities/Defaults.dart';
import 'package:flutter_web/material.dart';

class Member extends StatelessWidget {

  String _name;
  String _position;
  String _description;
  String _image_url;

  @override
  Widget build(BuildContext context) {
    return Card(
      child: Padding(
        padding: EdgeInsets.all(10),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Container(
              width: 100.0,
              height: 100.0,
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                image: DecorationImage(image: AssetImage('images/members/$_image_url.png'), fit: BoxFit.fill),
              ),
            ),
            Text("${_name.toUpperCase()}", style: getTextStyle().copyWith(fontWeight: FontWeight.bold, fontSize: 20.0)),
            Text("${_position.toUpperCase()}", style: getTextStyle().copyWith(fontWeight: FontWeight.w100)),
            Text("$_description", style: getTextStyle().copyWith(fontWeight: FontWeight.w100, fontSize: 13.0)),
          ],
        ),
      )
    );
  }

  Member(this._name, this._position, this._description, this._image_url);
  
}