import 'dart:html';
import 'package:flutter/material.dart';
import 'package:fchs_robotics/themes/style.dart';
import 'package:flutter/rendering.dart';
import 'package:page_transition/page_transition.dart';

class NavBarMobile extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        bottomNavigationBar: BottomAppBar(
            color: Color.fromRGBO(44, 119, 68, 1.0),
            //Put everything in a row
            child: Row(
              mainAxisSize: MainAxisSize.max,
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: <Widget>[
                //Put padding around everything to make bar original height (60) and for spacing
                Padding(
                    padding: const EdgeInsets.all(8.0),
                    //Put the team logo on the left
                    child: SizedBox(
                      height: 50.0,
                      width: 60.0,
                      child: Image.asset('images/main_logo.png'),
                    )),
                Padding(
                    padding: const EdgeInsets.all(8.0),
                    //Put the hamburger icon on the right
                    child: Container(
                      child: IconButton(
                          icon: Icon(Icons.menu),
                          color: Colors.white,
                          //Show the bottom sheet
                          onPressed: () {
                            //Bottom sheet that displays all links
                            showBottomSheet(
                                context: context,
                                //Stack all of the links vertically
                                builder: (context) => Stack(
                                      children: <Widget>[
                                        Container(
                                            height: MediaQuery.of(context).size.height - 55.0,
                                            color: Color.fromRGBO(8, 87, 33, 1.0),
                                            //Put a close button in the bottom right
                                            child: Align(
                                              alignment: Alignment.bottomRight,
                                              child: Padding(
                                                  padding: const EdgeInsets.symmetric(
                                                      vertical: 7.0, horizontal: 8.0),
                                                  child: CloseButton(
                                                    color: Colors.white,
                                                    onPressed: () {
                                                      Navigator.pop(context);
                                                    },
                                                  )),
                                            )),
                                        Container(
                                          color: Color.fromRGBO(8, 87, 33, 1.0),
                                          //Forcing bottom sheet to not expand past header
                                          height: MediaQuery.of(context).size.height - 115.0,
                                          //Actually listing out all of the links/dropdowns
                                          child: Links(),
                                        ),
                                      ],
                                    ));
                          }),
                      decoration: BoxDecoration(
                        border: Border.all(
                          color: Colors.white,
                        ),
                        borderRadius: BorderRadius.circular(10.0),
                      ),
                    ))
              ],
            )));
  }
}

class Links extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return ListView(
      padding: EdgeInsets.zero,
      children: <Widget>[
        ListTile(
            title: Text('Home',
                style:
                    Theme.of(context).textTheme.headline6.copyWith(color: Style.navbarUpperText)),
            onTap: () {
              Navigator.of(context).pushNamed('/');
            }),
        ListTile(
          title: Text('About',
              style: Theme.of(context).textTheme.headline6.copyWith(color: Style.navbarUpperText)),
          onTap: () {
            Navigator.of(context).pushNamed('/about');
          },
        ),
        ExpansionTile(
          title: Text('Team',
              style: Theme.of(context).textTheme.headline6.copyWith(color: Style.navbarUpperText)),
          children: <Widget>[
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 32.0),
              child: ListTile(
                title: Text('Our Team',
                    style: Theme.of(context)
                        .textTheme
                        .bodyText2
                        .copyWith(color: Style.navbarUpperText)),
                onTap: () {
                  Navigator.of(context).pushNamed('/team');
                },
              ),
            ),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 32.0),
              child: ListTile(
                title: Text('Team Portal',
                    style: Theme.of(context)
                        .textTheme
                        .bodyText2
                        .copyWith(color: Style.navbarUpperText)),
                onTap: () {
                  Navigator.of(context).pushNamed('/login');
                },
              ),
            ),
          ],
        ),
        ExpansionTile(
          title: Text('Robots',
              style: Theme.of(context).textTheme.headline6.copyWith(color: Style.navbarUpperText)),
          children: <Widget>[
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 32.0),
              child: ListTile(
                title: Text('VEX Robots',
                    style: Theme.of(context)
                        .textTheme
                        .bodyText2
                        .copyWith(color: Style.navbarUpperText)),
                onTap: () {},
              ),
            ),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 32.0),
              child: ListTile(
                title: Text('FTC Robots',
                    style: Theme.of(context)
                        .textTheme
                        .bodyText2
                        .copyWith(color: Style.navbarUpperText)),
                onTap: () {},
              ),
            ),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 32.0),
              child: ListTile(
                title: Text('FRC Robots',
                    style: Theme.of(context)
                        .textTheme
                        .bodyText2
                        .copyWith(color: Style.navbarUpperText)),
                onTap: () {},
              ),
            ),
          ],
        ),
        ExpansionTile(
          title: Text('Sponsors',
              style: Theme.of(context).textTheme.headline6.copyWith(color: Style.navbarUpperText)),
          children: <Widget>[
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 32.0),
              child: ListTile(
                title: Text('Our Sponsors',
                    style: Theme.of(context)
                        .textTheme
                        .bodyText2
                        .copyWith(color: Style.navbarUpperText)),
                onTap: () {},
              ),
            ),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 32.0),
              child: ListTile(
                title: Text('Sponsor Us',
                    style: Theme.of(context)
                        .textTheme
                        .bodyText2
                        .copyWith(color: Style.navbarUpperText)),
                onTap: () {},
              ),
            ),
          ],
        ),
        ExpansionTile(
          title: Text('More',
              style: Theme.of(context).textTheme.headline6.copyWith(color: Style.navbarUpperText)),
          children: <Widget>[
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 32.0),
              child: ListTile(
                title: Text('Contact Us',
                    style: Theme.of(context)
                        .textTheme
                        .bodyText2
                        .copyWith(color: Style.navbarUpperText)),
                onTap: () {},
              ),
            ),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 32.0),
              child: ListTile(
                title: Text('Our Calendar',
                    style: Theme.of(context)
                        .textTheme
                        .bodyText2
                        .copyWith(color: Style.navbarUpperText)),
                onTap: () {},
              ),
            ),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 32.0),
              child: ListTile(
                title: Text('Outreach',
                    style: Theme.of(context)
                        .textTheme
                        .bodyText2
                        .copyWith(color: Style.navbarUpperText)),
                onTap: () {},
              ),
            ),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 32.0),
              child: ListTile(
                title: Text('Resources',
                    style: Theme.of(context)
                        .textTheme
                        .bodyText2
                        .copyWith(color: Style.navbarUpperText)),
                onTap: () {},
              ),
            ),
          ],
        ),
      ],
    );
  }
}
