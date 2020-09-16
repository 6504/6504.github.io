//Code for the card that goes in front of the bakground image on the jumbotron
import 'package:auto_size_text/auto_size_text.dart';
import 'package:flutter/material.dart';
import 'package:fchs_robotics/themes/style.dart';

Container JumbotronCard(
    double width, double height, Orientation orientation, String title, String mainText) {
  var cardHeight = 0.0;
  var cardWidth = 0.0;

  //Changing the size of the card and max lines based on the device orientation
  //Phones in portrait mode
  if (width < 568) {
    cardHeight = width * 0.65;
    cardWidth = width * 0.97;
    return Container(
      height: cardHeight,
      width: cardWidth,
      child: Card(
        child: Padding(
          padding: EdgeInsets.all(5.0),
          child: Column(
            children: <Widget>[
              Text(title, style: mainTheme().textTheme.headline6),
              Wrap(
                children: <Widget>[
                  AutoSizeText(
                    mainText,
                    minFontSize: 10.0,
                    maxLines: 8,
                  ),
                ],
              ),
            ],
          ),
        ),
      ),
    );
    //Landscape phones and portrait tablets
  } else if (width >= 568 && width < 992) {
    cardHeight = width * 0.23;
    cardWidth = width * 0.97;
    return Container(
      height: cardHeight,
      width: cardWidth,
      child: Card(
        child: Padding(
          padding: EdgeInsets.all(5.0),
          child: Column(
            children: <Widget>[
              Text(title, style: mainTheme().textTheme.headline6),
              Wrap(
                children: <Widget>[
                  AutoSizeText(
                    mainText,
                    minFontSize: 10.0,
                    maxLines: 4,
                  ),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }
  //Tablet view - landscape (768-1024 pixels)
  else if (width >= 768 && width <= 1024 && orientation == Orientation.landscape) {
    cardHeight = height * 0.25;
    cardWidth = width * 0.55;
    return Container(
      height: cardHeight,
      width: cardWidth,
      child: Card(
        child: Padding(
          padding: EdgeInsets.all(5.0),
          child: Column(
            children: <Widget>[
              Text(title, style: mainTheme().textTheme.headline6),
              Wrap(
                children: <Widget>[
                  AutoSizeText(
                    mainText,
                    minFontSize: 10.0,
                    maxLines: 7,
                  ),
                ],
              ),
            ],
          ),
        ),
      ),
    );
    //Large screen view (1024 pixels and up)
  } else {
    cardHeight = height * 0.20;
    cardWidth = width * 0.55;
    return Container(
      height: cardHeight,
      width: cardWidth,
      child: Card(
        child: Padding(
          padding: EdgeInsets.all(5.0),
          child: Column(
            children: <Widget>[
              Text(title, style: mainTheme().textTheme.headline6),
              Wrap(
                children: <Widget>[
                  AutoSizeText(
                    mainText,
                    minFontSize: 10.0,
                    maxLines: 5,
                  ),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }
}
