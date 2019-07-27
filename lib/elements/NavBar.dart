import 'package:fchs_robotics/utilities/Defaults.dart';
import 'package:flutter_web/material.dart';

class NavBar extends StatefulWidget {

  final TextStyle _navBarStyle = getTextStyle().copyWith(color: Colors.white);
  TextStyle _coreStyle;

  @override
  State<StatefulWidget> createState() {
    return NavBarState();
  }

}

class NavBarState extends State<NavBar> with TickerProviderStateMixin {

  @override
  Widget build(BuildContext context) {
    widget._coreStyle = getTextStyle().copyWith(color: Colors.white, fontSize: MediaQuery.of(context).size.height*0.04, fontFamily: 'ConcertOne');
    return Stack(
      children: <Widget>[
        Container(
          width: MediaQuery.of(context).size.width,
          height: 100.0,
          decoration: BoxDecoration(boxShadow: [BoxShadow(blurRadius: 5.0)], color: Color.fromRGBO(8, 87, 33, 1.0)),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.end,
            children: <Widget>[
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: <Widget>[
                  Wrap(
                    spacing: 260.0,
                    children: <Widget>[
                      Text("FALLS CHURCH", style: widget._coreStyle,),
                      Text("ROBOTICS CLUB", style: widget._coreStyle,)
                    ],
                  ),
                ],
              )
            ],
          ),
        ),
        Container(
          width: MediaQuery.of(context).size.width,
          height: 55.0,
          decoration: BoxDecoration(boxShadow: [BoxShadow(blurRadius: 5.0)], color: Colors.green),
          child: Text("Navbar here", style: widget._navBarStyle,),
        ),
        Align(
          alignment: Alignment.topCenter,
          child: Container(
            alignment: Alignment.topCenter,
            width: MediaQuery.of(context).size.width*0.1,
            height: MediaQuery.of(context).size.height*0.13,
            decoration: BoxDecoration(boxShadow: [BoxShadow(blurRadius: 5.0)], color: Colors.green),
            child: Text("Navbar here", style: widget._navBarStyle,),
          ),
        )
      ],
    );
  }

}