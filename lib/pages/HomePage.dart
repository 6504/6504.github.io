import 'package:auto_size_text/auto_size_text.dart';
import 'package:fchs_robotics/elements/NavBar.dart';
import 'package:fchs_robotics/utilities/Defaults.dart';
import 'package:flutter/material.dart';
import 'package:flutter/material.dart' as m;
import 'dart:ui';
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
                      height: 170,
                      child: Card(
                        child: Padding(
                          padding: EdgeInsets.all(5.0),
                          child: Column(
                            children: <Widget>[
                              Text("Change the World!", style: getTextStyle().copyWith(fontWeight: FontWeight.bold),),
                              Wrap(
                                children: <Widget>[
                                  AutoSizeText(
                                    "We are the Falls Church Robotics Team, otherwise known as Team 6504 - JagWires, based in Falls Church, Virginia. We strive to promote STEM education to our peers and our community through various competitions and events. We participate in multiple robotics competitions, namely the FIRST Robotics Challenge (FRC), FIRST Tech Challenge (FTC), and VEX Robotics.",
                                    style: getTextStyle(),
                                    minFontSize: 12.0,
                                    maxLines: 12,
                                  )
                                ],
                              )
                            ],
                          ),
                        ),
                      ),
                    )
                  ),
                )
              ),
              ListView(
                shrinkWrap: true,
                padding: EdgeInsets.symmetric(horizontal: MediaQuery.of(context).size.width >= 850 ? 200 : 10).copyWith(top: 10.0),
                scrollDirection: Axis.vertical,
                physics: ScrollPhysics(),
                children: <Widget>[
                  Card(
                    child: Padding(
                      padding: EdgeInsets.all(10),
                      child: Align(
                        alignment: Alignment.topCenter,
                        child: Column(
                          children: <Widget>[
                            m.Image.asset('images/frc_logo.png', width: 200,),
                            AutoSizeText(
                              "The FIRST Robotics Challenge, also known as FRC, is the largest competition we compete in. Aimed for high schoolers, students work with advanced machinery, large industrial tools, computer aided design (CAD), electronics, programming, vision processing, and robotics autonomy. FRC also challenges students in other fields, such as business, film, art/animation, and marketing.",
                              style: getTextStyle(),
                              minFontSize: 13.0,
                              maxLines: 6,
                            ),
                            MaterialButton(
                              onPressed: () => {},
                              color: Colors.blue,
                              child: Text("See FRC Info", style: getTextStyle().copyWith(color: Colors.white),),
                            )
                          ],
                        ),
                      ),
                    )
                  ),
                  Card(
                    child: Padding(
                      padding: EdgeInsets.all(10),
                      child: Align(
                        alignment: Alignment.topCenter,
                        child: Column(
                          children: <Widget>[
                            m.Image.asset('images/ftc_logo.png', width: 200,),
                            AutoSizeText(
                              "The alternate beginning step into the world of robotics, the FIRST Tech Challenge (aka FTC) is an intermediate level robotics competition. We began competing in FTC in 2015 and since then have won several awards with our robots.",
                              style: getTextStyle(),
                              minFontSize: 13.0,
                              maxLines: 6,
                            ),
                            MaterialButton(
                              onPressed: () => {},
                              color: Colors.orange,
                              child: Text("See FTC Info", style: getTextStyle().copyWith(color: Colors.white),),
                            )
                          ],
                        ),
                      ),
                    )
                  ),
                  Card(
                    child: Padding(
                      padding: EdgeInsets.all(10),
                      child: Align(
                        alignment: Alignment.topCenter,
                        child: Column(
                          children: <Widget>[
                            m.Image.asset('images/vex_logo.png', width: 200,),
                            AutoSizeText(
                              "One of the beginning stepping stones into robotics, the VEX Robotics Competition is an intermediate level robotics competition and was the first competition we competed in. Since our first VEX Competition in 2014, we have won several distinctions with our robots; our many, many robots.",
                              style: getTextStyle(),
                              minFontSize: 13.0,
                              maxLines: 6,
                            ),
                            MaterialButton(
                              onPressed: () => {},
                              color: Colors.red,
                              child: Text("See VEX Info", style: getTextStyle().copyWith(color: Colors.white),),
                            )
                          ],
                        ),
                      ),
                    )
                  ),
                ],
              ),
              Padding(padding: EdgeInsets.only(bottom: MediaQuery.of(context).size.width >= 850 ? 130.0 : 200.0))
            ],
          ),
          NavBar(),
        ],
      )
    );
  }

}