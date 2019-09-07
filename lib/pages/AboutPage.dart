import 'package:fchs_robotics/elements/AboutCard.dart';
import 'package:fchs_robotics/elements/NavBar.dart';
import 'package:fchs_robotics/utilities/Defaults.dart';
import 'package:flutter_web/material.dart';

class AboutPage extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        backgroundColor: Colors.white10,
        body: Stack(
          children: <Widget>[
            ListView(
              children: <Widget>[
                Padding(padding: EdgeInsets.only(top: 60.0),),
                Container(
                  width: MediaQuery.of(context).size.width,
                  height: MediaQuery.of(context).size.height*0.5,
                  decoration: BoxDecoration(color: Colors.green),
                  child: Padding(
                    padding: EdgeInsets.only(bottom: 10.0),
                    child: Align(
                      alignment: Alignment.center,
                      child: Container(
                        width: MediaQuery.of(context).size.width >= 850 ? MediaQuery.of(context).size.width*0.4 : MediaQuery.of(context).size.width*0.95,
                        height: 240,
                        child: Card(
                          child: Padding(
                            padding: EdgeInsets.all(5.0),
                            child: Column(
                              children: <Widget>[
                                Text("Who We Are", style: getTextStyle().copyWith(fontWeight: FontWeight.bold, fontFamily: 'ConcertOne', fontSize: 30.0),),
                                Wrap(
                                  children: <Widget>[
                                    Text("In 2014, two students came together to form a club that would forever change the way their school saw STEM. A freshman, Anhtuan Nguyen; and a Sophomore, Danielle Kaldmaa; came together to form their school's robotics team under the guidance of Dan Tra, the school's Computer Science teacher at the time. With his help, a club consisting of only 7 students built their first robot. Since then, this small club relegated to an empty classroom in the corner of the school has grown into a movement larger than the two young founders could have ever dreamed of.", style: getTextStyle(),)
                                  ],
                                )
                              ],
                            ),
                          ),
                        )
                      )
                    ),
                  )
                ),
                Padding(
                  padding: EdgeInsets.all(20.0).copyWith(left: MediaQuery.of(context).size.width >= 850 ? 100 : 10, right: MediaQuery.of(context).size.width >= 850 ? 100 : 10),
                  child: Column(
                    children: <Widget>[
                      Wrap(
                        alignment: WrapAlignment.center,
                        children: <Widget>[
                          Text("2019", style: getTextStyle().copyWith(fontFamily: 'ConcertOne', fontSize: 30.0),),
                          AboutCard("Major Website Overhaul", "The website was completely re-coded in Flutter, a universal project SDK. The new site, sporting a new color scheme and navigation system, has material design. All the source code has been made available on our GitHub Page. Currently, all credit goes to Liam for the site", "September 2019"),
                          Text("2018", style: getTextStyle().copyWith(fontFamily: 'ConcertOne', fontSize: 30.0),),
                          AboutCard("FIRST Power-UP FRC Competition", "During our second year competing in FRC, we suprised ourselves by placing as finalists at Battlefield High School and making it to the District Championship at the Xfinity Center.", "March 2018"),
                          Text("2017", style: getTextStyle().copyWith(fontFamily: 'ConcertOne', fontSize: 30.0),),
                          AboutCard("Website Developed", "All credit goes to Chandi and Anhtuan. Took about a month and was programmed from scratch using Github Pages and some Bootstrap framework.", "April 2017"),
                          AboutCard("Congressman Don Beyers' Visit", "Hosted in our classroom at Falls Church High School, Congressman Don Beyer paid a visit and discussed the future of STEM.", "April 2017"),
                          AboutCard("First FRC Competition", "We did fairly well for our rookie year and recieved several awards for our school.", "April 2017"),
                          Text("2016", style: getTextStyle().copyWith(fontFamily: 'ConcertOne', fontSize: 30.0),),
                          AboutCard("Founding of the FRC Team", "This was the year in which we founded our FRC team and began to prepare for FIRST Steamworks.", "April 2016"),
                          Text("2015", style: getTextStyle().copyWith(fontFamily: 'ConcertOne', fontSize: 30.0),),
                          AboutCard("Jr. FLL Expo at TJ Public Library", "Hosted at Thomas Jefferson Public Libarary in Falls Church, we volunteered and helped host the event while promoting STEM Education to schoolchildren in the Falls Church Region.", "April 2016"),
                          AboutCard("NOVA Maker-Faire", "We attended the NOVA Maker-Faire at George Mason university and participated in live demos.", ""),
                          AboutCard("Creation of FCHS NXT Challenge", "We and GiTech (Girls in Technology) co-hosted the First Annual FCHS Sumobot Tournament.", "January 2015"),
                          Text("2014", style: getTextStyle().copyWith(fontFamily: 'ConcertOne', fontSize: 30.0),),
                          AboutCard("Rookie competitions for VEX and FTC", "Our rookie year for competing in VEX Robotics and the FIRST Tech Challenge. One of our VEX teams even advanced to the Virginia State Tournament.", "December 2014 - January 2015"),
                          AboutCard("Founding of the Club", "The founding of the club. The primordial club was run by Dan Tra, Ralph Albrecht, Anhtuan Nguyen, and Danielle Kaldmaa. Our first robots were built, but they weren't great...", "September 2014"),
                        ],
                      ),
                    ],
                  )
                ),
                Padding(padding: EdgeInsets.only(bottom: MediaQuery.of(context).size.width >= 850 ? 70.0 : 130.0))
              ],
            ),
            NavBar(),
          ],
        )
    );
  }

}