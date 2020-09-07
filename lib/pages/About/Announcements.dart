import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:fallschurchrobotics/elements/IconCard.dart';
import 'package:flutter/material.dart';
import 'package:intl/intl.dart';

class AnnouncementPage extends StatefulWidget {

  bool _hasLoaded = false;
  List<Widget> _widgetList = <Widget>[];

  @override
  State<StatefulWidget> createState() {
    return AnnouncementPageState();
  }

}

class AnnouncementPageState extends State<AnnouncementPage> {

  void updateState() {
    setState(() {

    });
  }

  @override
  Widget build(BuildContext context) {
    FirebaseFirestore firestore = FirebaseFirestore.instance;
    if(!widget._hasLoaded) {
      WidgetsBinding.instance.addPostFrameCallback((_) => {
        widget._widgetList.add(MaterialButton(
          onPressed: () {Navigator.pop(context);},
          child: Text("Go Back"),
        )),
        firestore.collection("announcements").orderBy("timestamp", descending: true).get().then((QuerySnapshot querySnapshot) => {
          querySnapshot.docs.asMap().forEach((key, value) {
            if(key > 14) return;
            widget._widgetList.add(IconCard(Icon(Icons.watch_later), value.get("title"), value.get("body")+"\n\n"+DateFormat.yMMMd().format(value.get("timestamp").toDate()).toString(), () {}));
          }),
          widget._hasLoaded = true,
          updateState(),
        }),
      });
    }
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