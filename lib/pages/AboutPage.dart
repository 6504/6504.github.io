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
                Padding(padding: EdgeInsets.only(bottom: MediaQuery.of(context).size.width >= 850 ? 70.0 : 130.0))
              ],
            ),
            NavBar(),
          ],
        )
    );
  }

}