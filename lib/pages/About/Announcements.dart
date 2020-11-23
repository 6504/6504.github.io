import 'package:flutter/material.dart';

class AnnouncementPage extends StatefulWidget {

  List<Widget> _widgetList = <Widget>[];

  @override
  State<StatefulWidget> createState() {
    return AnnouncementPageState();
  }

}

class AnnouncementPageState extends State<AnnouncementPage> {

  void updateState() {
    setState(() {});
  }

  @override
  Widget build(BuildContext context) {
    widget._widgetList.add(MaterialButton(
      onPressed: () {Navigator.pop(context);},
      child: Text("Go Back"),
    ));
    return Column(
      children: [
        Stack(
          children: [
            Container(
              width: MediaQuery.of(context).size.width,
              height: MediaQuery.of(context).size.width>540 ? 200.0 : 100.0,
              decoration: BoxDecoration(
                  color: Color.fromRGBO(44, 119,68, 1)
              ),
            ),
            Padding(
              padding: EdgeInsets.symmetric(horizontal: MediaQuery.of(context).size.width>1000 ? 250.0 : 0),
              child: Padding(
                padding: EdgeInsets.only(top: MediaQuery.of(context).size.width>540 ? 100.0 : 50.0),
                child: Card(
                  child: Column(
                    children: [
                      ListTile(
                        leading: Icon(Icons.add),
                        title: Text("Latest Announcements"),
                        subtitle: Text("To keep posted, make sure to check here frequently!"),
                      )
                    ],
                  ),
                ),
              ),
            ),
          ],
        ),
        Center(
          child: Column(
            children: widget._widgetList,
          ),
        ),
      ],
    );
  }

}