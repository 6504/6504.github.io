//Jumbotron code for each page
//If the screensize is too small don't show an image
import 'package:fchs_robotics/components/jumbotron/components/JumbotronCard.dart';
import 'package:flutter/material.dart';

class Jumbotron extends StatelessWidget {
  final String _title;
  final String _content;
  final String _filepath;

  @override
  Widget build(BuildContext context) {
    return Container(
      width: MediaQuery.of(context).size.width,
      //Sizing the height of the jumbotron to look better on devices that don't show the picture (mobile portrait)
      height: MediaQuery.of(context).orientation == Orientation.landscape
          ? MediaQuery.of(context).size.width * 0.50
          : MediaQuery.of(context).size.width * 0.70,
      //Making the background either an image or a green rectangle based on screen size
      decoration: JumbotronBackground(
          MediaQuery.of(context).orientation, MediaQuery.of(context).size.width, _filepath),
      child: Padding(
          padding: EdgeInsets.only(bottom: 10.0),
          child: Align(
              alignment: Alignment.bottomCenter,
              //Card with all the text
              child: JumbotronCard(
                  MediaQuery.of(context).size.width,
                  MediaQuery.of(context).size.height,
                  MediaQuery.of(context).orientation,
                  _title,
                  _content))),
    );
  }

  Jumbotron(this._title, this._content, this._filepath);
}

BoxDecoration JumbotronBackground(Orientation orientation, double width, String imagepath) {
  //Only show image if the screen is wide enough (landscape or just wide enough) and there is an image to be shown (landscape devices)
  if ((orientation == Orientation.landscape || width >= 768) && imagepath.isNotEmpty) {
    return BoxDecoration(
        image: DecorationImage(
      image: AssetImage('images/$imagepath'),
      alignment: Alignment.center,
      fit: BoxFit.cover,
    ));
    //Otherwise return a green screen
  } else {
    return BoxDecoration(
      color: Colors.green,
    );
  }
}
