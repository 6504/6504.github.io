import 'package:flutter/material.dart';


Future main() async {
  runApp(
      MaterialApp(
        home: Material(
          child: Card(
            child: Padding(
              padding: EdgeInsets.all(10.0),
              child: Column(
                children: <Widget>[
                  Text("Checklist:", style: getTextStyle().copyWith(fontSize: 20)),
                  Row(
                    children: <Widget>[
                      Icon(Icons.check_circle_outline, color: Colors.green),
                      Text("You've submitted all contracts!", style: getTextStyle(),)
                    ],
                  ),
                  Row(
                    children: <Widget>[
                      Icon(Icons.check_circle_outline, color: Colors.green),
                      Text("You've paid all club dues!", style: getTextStyle(),)
                    ],
                  ),
                  Divider(),
                  Text("You're good to go!", style: getTextStyle().copyWith(fontSize: 15)),
                ],
              ),
            ),
          ),
        )
      )
  );
}

// changed Nunito font to Roboto, font doesn't matter in issue
TextStyle getTextStyle() {
  return TextStyle(fontSize: 15.0);
}
