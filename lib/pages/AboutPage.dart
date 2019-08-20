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
                            decoration: BoxDecoration(boxShadow: [BoxShadow(blurRadius: 10.0)], color: Colors.white, borderRadius: BorderRadius.circular(7.0)),
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
                          Text("2014", style: getTextStyle().copyWith(fontFamily: 'ConcertOne', fontSize: 30.0),),
                          Card(
                            color: Colors.white,
                            child: Padding(
                              padding: EdgeInsets.all(20.0),
                              child: GridView.count(
                                shrinkWrap: true,
                                crossAxisCount: 1,
                                childAspectRatio: MediaQuery.of(context).size.width >= 850 ? 50 : 7,
                                children: <Widget>[
                                  Text("Founding of the Club", style: getTextStyle().copyWith(fontWeight: FontWeight.bold, fontSize: 20.0),),
                                  Text("The founding of the club. The primordial club was run by Dan Tra, Ralph Albrecht, Anhtuan Nguyen, and Danielle Kaldmaa. Our first robots were built, but they weren't great...", style: getTextStyle(),),
                                  Text("September 2014", style: getTextStyle().copyWith(fontWeight: FontWeight.w100),)
                                ],
                              ),
                            )
                          ),
                          Card(
                            color: Colors.white,
                            child: Padding(
                              padding: EdgeInsets.all(20.0),
                              child: GridView.count(
                                shrinkWrap: true,
                                crossAxisCount: 1,
                                childAspectRatio: MediaQuery.of(context).size.width >= 850 ? 50 : 7,
                                children: <Widget>[
                                  Text("Rookie competitions for VEX and FTC", style: getTextStyle().copyWith(fontWeight: FontWeight.bold, fontSize: 20.0),),
                                  Text("Our rookie year for competing in VEX Robotics and the FIRST Tech Challenge. One of our VEX teams even advanced to the Virginia State Tournament.", style: getTextStyle(),),
                                  Text("December 2014 - January 2015", style: getTextStyle().copyWith(fontWeight: FontWeight.w100),)
                                ],
                              ),
                            )
                          ),
                          Text("2015", style: getTextStyle().copyWith(fontFamily: 'ConcertOne', fontSize: 30.0),),
                          Card(
                            color: Colors.white,
                            child: Padding(
                              padding: EdgeInsets.all(20.0),
                              child: GridView.count(
                                shrinkWrap: true,
                                crossAxisCount: 1,
                                childAspectRatio: MediaQuery.of(context).size.width >= 850 ? 50 : 7,
                                children: <Widget>[
                                  Text("Creation of FCHS NXT Challenge", style: getTextStyle().copyWith(fontWeight: FontWeight.bold, fontSize: 20.0),),
                                  Text("We and GiTech (Girls in Technology) co-hosted the First Annual FCHS Sumobot Tournament.", style: getTextStyle(),),
                                  Text("January 2015", style: getTextStyle().copyWith(fontWeight: FontWeight.w100),)
                                ],
                              ),
                            )
                          ),
                          Card(
                            color: Colors.white,
                            child: Padding(
                              padding: EdgeInsets.all(20.0),
                              child: GridView.count(
                                shrinkWrap: true,
                                crossAxisCount: 1,
                                childAspectRatio: MediaQuery.of(context).size.width >= 850 ? 50 : 7,
                                children: <Widget>[
                                  Text("NOVA Maker-Faire", style: getTextStyle().copyWith(fontWeight: FontWeight.bold, fontSize: 20.0),),
                                  Text("We attended the NOVA Maker-Faire at George Mason university and participated in live demos.", style: getTextStyle(),),
                                  Text("", style: getTextStyle().copyWith(fontWeight: FontWeight.w100),)
                                ],
                              ),
                            )
                          ),
                          Card(
                            color: Colors.white,
                            child: Padding(
                              padding: EdgeInsets.all(20.0),
                              child: GridView.count(
                                shrinkWrap: true,
                                crossAxisCount: 1,
                                childAspectRatio: MediaQuery.of(context).size.width >= 850 ? 50 : 7,
                                children: <Widget>[
                                  Text("Jr. FLL Expo at TJ Public Library", style: getTextStyle().copyWith(fontWeight: FontWeight.bold, fontSize: 20.0),),
                                  Text("Hosted at Thomas Jefferson Public Libarary in Falls Church, we volunteered and helped host the event while promoting STEM Education to schoolchildren in the Falls Church Region.", style: getTextStyle(),),
                                  Text("April 2016", style: getTextStyle().copyWith(fontWeight: FontWeight.w100),)
                                ],
                              ),
                            )
                          ),
                          Text("2016", style: getTextStyle().copyWith(fontFamily: 'ConcertOne', fontSize: 30.0),),
                          Card(
                            color: Colors.white,
                            child: Padding(
                              padding: EdgeInsets.all(20.0),
                              child: GridView.count(
                                shrinkWrap: true,
                                crossAxisCount: 1,
                                childAspectRatio: MediaQuery.of(context).size.width >= 850 ? 50 : 7,
                                children: <Widget>[
                                  Text("Founding of the FRC Team", style: getTextStyle().copyWith(fontWeight: FontWeight.bold, fontSize: 20.0),),
                                  Text("This was the year in which we founded our FRC team and began to prepare for FIRST Steamworks.", style: getTextStyle(),),
                                  Text("April 2016", style: getTextStyle().copyWith(fontWeight: FontWeight.w100),)
                                ],
                              ),
                            )
                          ),
                          Text("2017", style: getTextStyle().copyWith(fontFamily: 'ConcertOne', fontSize: 30.0),),
                          Card(
                            color: Colors.white,
                            child: Padding(
                              padding: EdgeInsets.all(20.0),
                              child: GridView.count(
                                shrinkWrap: true,
                                crossAxisCount: 1,
                                childAspectRatio: MediaQuery.of(context).size.width >= 850 ? 50 : 7,
                                children: <Widget>[
                                  Text("First FRC Competition", style: getTextStyle().copyWith(fontWeight: FontWeight.bold, fontSize: 20.0),),
                                  Text("We did fairly well for our rookie year and recieved several awards for our school.", style: getTextStyle(),),
                                  Text("April 2017", style: getTextStyle().copyWith(fontWeight: FontWeight.w100),)
                                ],
                              ),
                            )
                          ),
                          Card(
                            color: Colors.white,
                            child: Padding(
                              padding: EdgeInsets.all(20.0),
                              child: GridView.count(
                                shrinkWrap: true,
                                crossAxisCount: 1,
                                childAspectRatio: MediaQuery.of(context).size.width >= 850 ? 50 : 7,
                                children: <Widget>[
                                  Text("Congressman Don Beyers' Visit", style: getTextStyle().copyWith(fontWeight: FontWeight.bold, fontSize: 20.0),),
                                  Text("Hosted in our classroom at Falls Church High School, Congressman Don Beyer paid a visit and discussed the future of STEM.", style: getTextStyle(),),
                                  Text("April 2017", style: getTextStyle().copyWith(fontWeight: FontWeight.w100),)
                                ],
                              ),
                            )
                          ),
                          Card(
                            color: Colors.white,
                            child: Padding(
                              padding: EdgeInsets.all(20.0),
                              child: GridView.count(
                                shrinkWrap: true,
                                crossAxisCount: 1,
                                childAspectRatio: MediaQuery.of(context).size.width >= 850 ? 50 : 7,
                                children: <Widget>[
                                  Text("Website Developed", style: getTextStyle().copyWith(fontWeight: FontWeight.bold, fontSize: 20.0),),
                                  Text("All credit goes to Chandi and Anhtuan. Took about a month and was programmed from scratch using Github Pages and some Bootstrap framework.", style: getTextStyle(),),
                                  Text("April 2017", style: getTextStyle().copyWith(fontWeight: FontWeight.w100),)
                                ],
                              ),
                            )
                          ),
                          Text("2018", style: getTextStyle().copyWith(fontFamily: 'ConcertOne', fontSize: 30.0),),
                          Card(
                              color: Colors.white,
                              child: Padding(
                                padding: EdgeInsets.all(20.0),
                                child: GridView.count(
                                  shrinkWrap: true,
                                  crossAxisCount: 1,
                                  childAspectRatio: MediaQuery.of(context).size.width >= 850 ? 50 : 7,
                                  children: <Widget>[
                                    Text("FIRST Power-UP FRC Competition", style: getTextStyle().copyWith(fontWeight: FontWeight.bold, fontSize: 20.0),),
                                    Text("During our second year competing in FRC, we suprised ourselves by placing as finalists at Battlefield High School and making it to the District Championship at the Xfinity Center.", style: getTextStyle(),),
                                    Text("March 2018", style: getTextStyle().copyWith(fontWeight: FontWeight.w100),)
                                  ],
                                ),
                              )
                          ),
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