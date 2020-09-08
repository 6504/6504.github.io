import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:fallschurchrobotics/elements/IconCard.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:intl/intl.dart';

class EventsPage extends StatefulWidget {

  bool _hasLoaded = false;
  List<Widget> _widgetList = <Widget>[];
  User _user;

  @override
  State<StatefulWidget> createState() {
    return EventsPageState();
  }

}

class EventsPageState extends State<EventsPage> {

  void updateState() {
    setState(() {

    });
  }

  @override
  Widget build(BuildContext context) {
    FirebaseFirestore firestore = FirebaseFirestore.instance;
    checkAuthentication();
    if(!widget._hasLoaded) {
      widget._widgetList.clear();
      WidgetsBinding.instance.addPostFrameCallback((_) => {
        widget._widgetList.add(MaterialButton(
          onPressed: () {Navigator.pop(context);},
          child: Text("Go Back"),
        )),

        firestore.collection("events").orderBy("timestamp", descending: true).get().then((QuerySnapshot querySnapshot) => {
          querySnapshot.docs.asMap().forEach((key, value) {
            if(key > 14) return;
            if(DateTime.now().isAfter(value.get("timestamp").toDate())) return;
            Widget possibleAction;
            List<Widget> participants = <Widget>[];
            List participantList = value.get("participants");
            participants.add(Text("So far, these people are going:"));
            if(widget._user != null) {
              participantList.forEach((dynamic participant) {
                firestore.collection("users").doc(participant.toString()).get().then((DocumentSnapshot snapshot) => {
                  participants.add(Text("» "+snapshot.data()["firstName"]+" "+snapshot.data()["lastName"])),
                });
              });
            }
            widget._widgetList.add(IconCard(Icon(Icons.watch_later), value.get("title"), value.get("description")+"\n\n"+DateFormat.yMMMd().format(value.get("timestamp").toDate()).toString(), () async {
              if(widget._user != null) {
                showDialog(context: context, builder: (context) {
                  if(value.get("participants").contains(widget._user.uid)) {
                    possibleAction = MaterialButton(onPressed: () {
                      participantList.remove(widget._user.uid);
                      firestore.collection("events").doc(value.id).update({"participants": participantList}).then((value) => {
                        widget._hasLoaded = false,
                        updateState(),
                        Navigator.pop(context),
                      });
                    }, child: Text("Leave Event"),);
                  } else {
                    possibleAction = MaterialButton(onPressed: () {
                      participantList.add(widget._user.uid);
                      firestore.collection("events").doc(value.id).update({"participants": participantList}).then((value) => {
                        widget._hasLoaded = false,
                        updateState(),
                        Navigator.pop(context),
                      });
                    }, child: Text("Join Event"),);
                  }
                  return AlertDialog(
                    title: Text("Event Viewer"),
                    content: Column(
                      children: participants,
                      mainAxisSize: MainAxisSize.min,
                    ),
                    actions: [
                      possibleAction,
                      MaterialButton(onPressed: () {Navigator.pop(context);}, child: Text("Close"),)
                    ],
                  );
                });
              }
            }));
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
                        title: Text("Upcoming Events"),
                        subtitle: Text("See where we're going and more!\n\nIf you're signed in, click an event to see more information."),
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

  void checkAuthentication() {
    FirebaseAuth.instance.authStateChanges().listen((user) {
      if (user != null) {
        widget._user = user;
      } else {
        widget._user = null;
      }
    });
    setState(() {

    });
  }

}