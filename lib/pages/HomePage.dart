import 'package:fchs_robotics/elements/NavBar.dart';
import 'package:fchs_robotics/utilities/Defaults.dart';
import 'package:flutter_web/material.dart';

class HomePage extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    var bigBanner = getTextStyle().copyWith(fontSize: 50.0, fontWeight: FontWeight.bold);
    var textBanner = getTextStyle().copyWith(fontSize: 25.0);
    return Scaffold(
      backgroundColor: Colors.white10,
      body: Stack(
        children: <Widget>[
          ListView(
            children: <Widget>[
              Container(
                width: MediaQuery.of(context).size.width,
                height: MediaQuery.of(context).size.width*0.45,
                decoration: BoxDecoration(image: DecorationImage(image: AssetImage('images/team.jpg'), fit: BoxFit.fitWidth, alignment: Alignment.topCenter)),
                child: Align(
                  alignment: Alignment.bottomCenter,
                  child: Container(
                    child: Column(
                      children: <Widget>[
                        Text("CHANGE THE WORLD", style: bigBanner),
                        Padding(padding: EdgeInsets.symmetric(vertical: 10.0),),
                        Wrap(
                            alignment: WrapAlignment.center,
                            spacing: 20.0,
                            children: <Widget>[
                              Text("We are the Falls Church Robotics Team, otherwise known as Team 6504 - JagWires, based in Falls Church, Virginia. We strive to promote STEM education to our peers and our community through various competitions and events. We participate in multiple robotics competitions, namely the FIRST Robotics Challenge (FRC), FIRST Tech Challenge (FTC), and VEX Robotics.", style: textBanner)
                            ]
                        ),
                      ],
                    ),
                    width: MediaQuery.of(context).size.width*0.95,
                    height: 195,
                    decoration: BoxDecoration(
                      color: Colors.white,
                      borderRadius: BorderRadius.all(Radius.circular(6)),
                    ),
                    padding: EdgeInsets.all(10.0),
                  )
                ),
                padding: EdgeInsets.only(bottom: 10.0),
              ),
            ],
          ),
          NavBar(),
        ],
      )
    );
  }

}