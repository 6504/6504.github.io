import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:fallschurchrobotics/elements/IconCard.dart';
import 'package:fallschurchrobotics/elements/ScaffoldWrapper.dart';
import 'package:fallschurchrobotics/pages/About/Announcements.dart';
import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
import 'package:page_transition/page_transition.dart';

class AboutPage extends StatefulWidget {

  String _title = "Loading...";
  String _body = "We're fetching the latest from the server.";
  dynamic _timestamp = "";
  bool _hasLoaded = false;

  @override
  State<StatefulWidget> createState() {
    return AboutPageState();
  }

}

class AboutPageState extends State<AboutPage> {

  void updateState() {
    setState(() {

    });
  }

  @override
  Widget build(BuildContext context) {
    FirebaseFirestore firestore = FirebaseFirestore.instance;
    if(!widget._hasLoaded) {
      WidgetsBinding.instance.addPostFrameCallback((_) => {
        firestore.collection("announcements").orderBy("timestamp", descending: true).get().then((QuerySnapshot querySnapshot) => {
          widget._title = querySnapshot.docs.first.get("title"),
          widget._body = querySnapshot.docs.first.get("body"),
          widget._timestamp = DateFormat.yMMMd().format(querySnapshot.docs.first.get("timestamp").toDate()),
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
              height: MediaQuery.of(context).size.width>540 ? 500.0 : 200.0,
              decoration: BoxDecoration(
                image: DecorationImage(
                    image: AssetImage('assets/we_are.jpg'),
                    fit: BoxFit.cover,
                    alignment: Alignment.center
                ),
              ),
            ),
            Padding(
              padding: EdgeInsets.symmetric(horizontal: MediaQuery.of(context).size.width>1000 ? 250.0 : 0),
              child: Padding(
                padding: EdgeInsets.only(top: MediaQuery.of(context).size.width>540 ? 400.0 : 150.0),
                child: Card(
                  child: Column(
                    children: [
                      ListTile(
                        leading: Icon(Icons.all_inclusive),
                        title: Text("Who We Are"),
                        subtitle: Text("In 2014, two students came together to form a club that would forever change the way their school saw STEM. A freshmen, Anhtuan Nguyen; and a Sophmore, Danielle Kaldmaa; came together to form their school's robotics team under the guidance of Dan Tra, the school's computer science teacher at the time. With his help, the club consisting of only 7 people built their first robot. Since then, this small club relegated to an empty classroom in the corner of the school has grown into a movement larger than the two young founders could ever imagine."),
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
            children: [
              Text("Latest Announcement", style: TextStyle(fontSize: 20),),
              IconCard(Icon(Icons.watch_later), widget._title, widget._body+"\n\n"+widget._timestamp.toString(), () {}),
              MaterialButton(
              onPressed: () {Navigator.push(context, PageTransition(type: PageTransitionType.fade, child: ScaffoldWrapper(AnnouncementPage())));},
                child: Text("See More Announcements"),
              ),
              Divider(),
              Text("Our Timeline", style: TextStyle(fontSize: 20),),
              Text("2020-2019", style: TextStyle(fontSize: 15),),
              IconCard(Icon(Icons.web),
                  "Yet Another Overhaul",
                  "We're keeping the overall design aesthetic we previously had while modernizing certain parts of the site. We're happy to say that things should be running more smoothly now.\n\n"
                      "September 2020", () {}),
              Text("2019-2020", style: TextStyle(fontSize: 15),),
              IconCard(Icon(Icons.web),
                  "Major Website Overhaul",
                  "The website was completely re-coded in Flutter, a universal project SDK. The new site, sporting a new color scheme and navigation system, has material design. All the source code has been made available on our GitHub Page. Currently, all credit goes to Liam for the site.\n\n"
                      "September 2019", () {}),
              Text("2018-2019", style: TextStyle(fontSize: 15),),
              IconCard(Icon(Icons.developer_board),
                  "FIRST Power-UP FRC Competition",
                  "During our second year competing in FRC, we surprised ourselves by placing as finalists at Battlefield High School and making it to the District Championship at the Xfinity Center.\n\n"
                      "March 2018", () {}),
              Text("2017-2018", style: TextStyle(fontSize: 15),),
              IconCard(Icon(Icons.web),
                  "Website Developed",
                  "All credit goes to Chandi and Anhtuan. Took about a month and was programmed from scratch using Github Pages and some Bootstrap framework.\n\n"
                      "April 2017", () {}),
              IconCard(Icon(Icons.policy),
                  "Congressman Don Beyers' Visit",
                  "Hosted in our classroom at Falls Church High School, Congressman Don Beyer paid a visit and discussed the future of STEM.\n\n"
                      "April 2017", () {}),
              IconCard(Icon(Icons.developer_board),
                  "First FRC Competition",
                  "We did fairly well for our rookie year and recieved several awards for our school.\n\n"
                      "April 2017", () {}),
              Text("2016-2017", style: TextStyle(fontSize: 15),),
              IconCard(Icon(Icons.flag),
                  "Founding of the FRC Team",
                  "This was the year in which we founded our FRC team and began to prepare for FIRST Steamworks.\n\n"
                      "April 2016", () {
                    showDialog(
                      context: context,
                      builder: (BuildContext context) {
                        return AlertDialog(
                          title: Text("Wow!"),
                          content: Text("How'd you find this place?"),
                          actions: [
                            new MaterialButton(onPressed: () { Navigator.pop(context);}, child: Text("Leave..."),),
                            new MaterialButton(onPressed: () { Navigator.pop(context);}, child: Text("Leave..."),),
                          ],
                        );
                      }
                    );
                  }),
              Text("2015-2016", style: TextStyle(fontSize: 15),),
              IconCard(Icon(Icons.event),
                  "Jr. FLL Expo at TJ Public Library",
                  "Hosted at Thomas Jefferson Public Libarary in Falls Church, we volunteered and helped host the event while promoting STEM Education to schoolchildren in the Falls Church Region.\n\n"
                      "April 2016", () {}),
              IconCard(Icon(Icons.event),
                  "NOVA Maker-Faire",
                  "We attended the NOVA Maker-Faire at George Mason university and participated in live demos.\n\n"
                      "", () {}),
              IconCard(Icon(Icons.event),
                  "Creation of FCHS NXT Challenge",
                  "We and GiTech (Girls in Technology) co-hosted the First Annual FCHS Sumobot Tournament.\n\n"
                      "January 2015", () {}),
              Text("2014-2015", style: TextStyle(fontSize: 15),),
              IconCard(Icon(Icons.developer_board),
                  "Rookie competitions for VEX and FTC",
                  "Our rookie year for competing in VEX Robotics and the FIRST Tech Challenge. One of our VEX teams even advanced to the Virginia State Tournament.\n\n"
                      "December 2014 - January 2015", () {}),
              IconCard(Icon(Icons.flag),
                  "Founding of the Club",
                  "The founding of the club. The primordial club was run by Dan Tra, Ralph Albrecht, Anhtuan Nguyen, and Danielle Kaldmaa. Our first robots were built, but they weren't great...\n\n"
                      "September 2014", () {}),
            ],
          ),
        ),
      ],
    );
  }

}