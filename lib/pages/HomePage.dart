import 'package:fchs_robotics/elements/NavBar.dart';
import 'package:fchs_robotics/utilities/Defaults.dart';
import 'package:flutter_web/material.dart';
import 'package:flutter_web_ui/ui.dart';
import 'dart:html' as html;

class HomePage extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    html.document.title = "Falls Church Robotics Club";
    return Scaffold(
      backgroundColor: Colors.white10,
      body: Stack(
        children: <Widget>[
          ListView(
            children: <Widget>[
              Padding(padding: EdgeInsets.only(top: 60.0),),
              Container(
                width: MediaQuery.of(context).size.width,
                height: MediaQuery.of(context).size.height*0.79,
                decoration: BoxDecoration(image: DecorationImage(image: AssetImage('images/team.jpg'), alignment: Alignment.center, fit: BoxFit.cover)),
                child: Padding(
                  padding: EdgeInsets.only(bottom: 10.0),
                  child: Align(
                    alignment: Alignment.bottomCenter,
                    child: Container(
                      width: MediaQuery.of(context).size.width >= 850 ? MediaQuery.of(context).size.width*0.4 : MediaQuery.of(context).size.width*0.95,
                      height: 135,
                      decoration: BoxDecoration(boxShadow: [BoxShadow(blurRadius: 10.0)], color: Colors.white, borderRadius: BorderRadius.circular(7.0)),
                      child: Padding(
                        padding: EdgeInsets.all(5.0),
                        child: Column(
                          children: <Widget>[
                            Text("Change the World!", style: getTextStyle().copyWith(fontWeight: FontWeight.bold),),
                            Wrap(
                              children: <Widget>[
                                Text("We are the Falls Church Robotics Team, otherwise known as Team 6504 - JagWires, based in Falls Church, Virginia. We strive to promote STEM education to our peers and our community through various competitions and events. We participate in multiple robotics competitions, namely the FIRST Robotics Challenge (FRC), FIRST Tech Challenge (FTC), and VEX Robotics.", style: getTextStyle(),)
                              ],
                            )
                          ],
                        ),
                      )
                    )
                  ),
                )
              ),
              GridView.count(
                shrinkWrap: true,
                crossAxisCount: MediaQuery.of(context).size.width >= 850 ? 3 : 1,
                crossAxisSpacing: 20,
                padding: EdgeInsets.symmetric(horizontal: 10.0).copyWith(top: 10.0),
                mainAxisSpacing: 20,
                scrollDirection: Axis.vertical,
                childAspectRatio: 1.5,
                physics: ScrollPhysics(),
                children: <Widget>[
                  Container(
                    decoration: BoxDecoration(boxShadow: [BoxShadow(blurRadius: 10.0)], color: Colors.white, borderRadius: BorderRadius.circular(7.0)),
                  ),
                  Container(
                    decoration: BoxDecoration(boxShadow: [BoxShadow(blurRadius: 10.0)], color: Colors.white, borderRadius: BorderRadius.circular(7.0)),
                  ),
                  Container(
                    decoration: BoxDecoration(boxShadow: [BoxShadow(blurRadius: 10.0)], color: Colors.white, borderRadius: BorderRadius.circular(7.0)),
                  ),
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