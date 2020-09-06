import 'package:fallschurchrobotics/elements/CompetitionCard.dart';
import 'package:fallschurchrobotics/elements/ScaffoldWrapper.dart';
import 'package:flutter/material.dart';
import 'package:page_transition/page_transition.dart';

import 'About.dart';

class HomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Stack(
          children: [
            Container(
              width: MediaQuery.of(context).size.width,
              height: MediaQuery.of(context).size.width>540 ? 700.0 : 300.0,
              decoration: BoxDecoration(
                image: DecorationImage(
                    image: AssetImage('assets/team.jpg'),
                    fit: BoxFit.cover,
                    alignment: Alignment.center
                ),
              ),
            ),
            Padding(
              padding: EdgeInsets.symmetric(horizontal: MediaQuery.of(context).size.width>540 ? 250.0 : 0),
              child: Padding(
                padding: EdgeInsets.only(top: MediaQuery.of(context).size.width>540 ? 600.0 : 250.0),
                child: Card(
                  child: Column(
                    children: [
                      ListTile(
                        leading: Icon(Icons.developer_board),
                        title: Text("Change the World"),
                        subtitle: Text("We're the Falls Church High Robotics Team, known as team 6504 - the JagWires. Based in Falls Church, Virginia, we strive to promote STEM education to our peers and community through various events and competitions. We participate in many different robotics competitions, being the First Robotics Competition, First Tech Challenge, and VEX Robotics."),
                      )
                    ],
                  ),
                ),
              ),
            )
          ],
        ),
        CompetitionCard(AssetImage('assets/competitions/ftc_logo.png'), "The First Tech Challenge", "The First Tech Challenge is one of our beginning steps into the world of robotics for our members. This is an intermediate-level robotics competition. We began competing in the FTC in 2015, and have won several awards since then.", () {
          Scaffold.of(context).showSnackBar(new SnackBar(content: Text("Woah there! You're going to a page that doesn't currently exist.")));
        }),
        CompetitionCard(AssetImage('assets/competitions/vex_logo.png'), "The VEX Robotics Challenge", "The VEX Robotics Challenge is another one of our beginning steps into the world of robotics for our members. This is an intermediate-level robotics competition. We began competing in VEX in 2014, and have won several distinctions since our many, many robots.", () {
          Scaffold.of(context).showSnackBar(new SnackBar(content: Text("Woah there! You're going to a page that doesn't currently exist.")));
        }),
        CompetitionCard(AssetImage('assets/competitions/frc_logo.png'), "The First Robotics Challenge", "The First Robotics Challenge is the largest competition we compete in. This is an advanced robotics competition aimed at high schoolers specifically, we work with advanced concepts such as industrial tools, CAD electronics, vision programming, and autonomy. It also requires members skilled in business, film, art, and marketing.", () {
          Scaffold.of(context).showSnackBar(new SnackBar(content: Text("Woah there! You're going to a page that doesn't currently exist.")));
        }),
      ],
    );
  }

}