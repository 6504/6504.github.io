import 'package:flutter/material.dart';

class ImageCard extends StatelessWidget {

  AssetImage _assetImage;
  String _title;
  String _subtitle;
  GestureTapCallback _onTap;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.symmetric(horizontal: MediaQuery.of(context).size.width>1000 ? 250.0 : 0),
      child: Card(
        child: Column(
          children: [
            ListTile(
              leading: Image(image: _assetImage,),
              title: Text(_title),
              subtitle: Text(_subtitle),
              onTap: _onTap,
            )
          ],
        ),
      ),
    );
  }

  ImageCard(this._assetImage, this._title, this._subtitle, this._onTap);

}