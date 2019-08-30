import 'package:fchs_robotics/elements/Member.dart';
import 'package:fchs_robotics/elements/NavBar.dart';
import 'package:fchs_robotics/utilities/Defaults.dart';
import 'package:flutter_web/material.dart';

class TeamPage extends StatelessWidget {

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
                              height: 250,
                              decoration: BoxDecoration(boxShadow: [BoxShadow(blurRadius: 10.0)], color: Colors.white, borderRadius: BorderRadius.circular(7.0)),
                              child: Padding(
                                padding: EdgeInsets.all(5.0),
                                child: Column(
                                  children: <Widget>[
                                    Text("Meet the Team", style: getTextStyle().copyWith(fontWeight: FontWeight.bold, fontFamily: 'ConcertOne', fontSize: 30.0),),
                                    Wrap(
                                      children: <Widget>[
                                        Text("We are thankful to have so many wonderful students and mentors on our team to push our once-small club to even greater heights. In recognition of our students and coaches alike, we have a complete profile of our current and past members who have all built our team to where it is today.", style: getTextStyle().copyWith(fontSize: 20.0),)
                                      ],
                                    )
                                  ],
                                ),
                              )
                          )
                      ),
                    )
                ),
                Padding(padding: EdgeInsets.only(bottom: 20.0)),
                Text("MENTORS", textAlign: TextAlign.center, style: getTextStyle().copyWith(fontSize: 30.0),),
                Padding(padding: EdgeInsets.only(bottom: 20.0)),
                GridView.count(
                  crossAxisCount: MediaQuery.of(context).size.width >= 850 ? 3 : 1,
                  shrinkWrap: true,
                  childAspectRatio: MediaQuery.of(context).size.width >= 850 ? 2.5 : 1.5,
                  padding: EdgeInsets.all(MediaQuery.of(context).size.width >= 850 ? 40.0 : 10.0),
                  children: <Widget>[
                    Member("Test Mentor", "Test Position", "I'm a Test Mentor!", "nopic"),
                    Member("Test Mentor", "Test Position", "I'm a Test Mentor!", "nopic"),
                    Member("Test Mentor", "Test Position", "I'm a Test Mentor!", "nopic"),
                    Member("Test Mentor", "Test Position", "I'm a Test Mentor!", "nopic"),
                    Member("Test Mentor", "Test Position", "I'm a Test Mentor!", "nopic"),
                    Member("Test Mentor", "Test Position", "I'm a Test Mentor!", "nopic"),
                  ],
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