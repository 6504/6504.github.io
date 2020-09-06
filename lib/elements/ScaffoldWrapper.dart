// Acts as the main content display system.
import 'package:fallschurchrobotics/pages/About.dart';
import 'package:fallschurchrobotics/pages/Home.dart';
import 'package:fallschurchrobotics/utilities/LocalStorageManager.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:page_transition/page_transition.dart';

class ScaffoldWrapper extends StatefulWidget {
  static int _currentIndex = 0;
  Widget _page;

  @override
  State<StatefulWidget> createState() {
    return ScaffoldWrapperState();
  }
  
  ScaffoldWrapper(this._page);

  static setIndex(int newIndex) {
    _currentIndex = newIndex;
  }

}

class ScaffoldWrapperState extends State<ScaffoldWrapper> {

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Falls Church High School Robotics Club"),
        backgroundColor: Theme.of(context).primaryColor,
      ),
      body: Padding(
        padding: EdgeInsets.all(5),
        child: ListView(children: [widget._page], shrinkWrap: true, ),
      ),
      drawer: Builder(
        builder: (BuildContext context) {
          return Drawer(
            child: ListView(
              shrinkWrap: true,
              children: [
                Divider(),
                Center(child: Text("Change Your Colors", style: TextStyle(fontSize: 20),)),
                Divider(),
                MaterialButton(
                  onPressed: () {
                    LocalStorageManager.getStorageInstance().set("theme", "system");
                    Scaffold.of(context).showSnackBar(new SnackBar(content: Text("Your wish is my command, please reload the page.")));
                  },
                  child: Text("System Theme"),
                ),
                MaterialButton(
                  onPressed: () {
                    LocalStorageManager.getStorageInstance().set("theme", "light");
                    Scaffold.of(context).showSnackBar(new SnackBar(content: Text("Your wish is my command, please reload the page.")));
                  },
                  child: Text("Robotic Light"),
                ),
                MaterialButton(
                  onPressed: () {
                    LocalStorageManager.getStorageInstance().set("theme", "dark");
                    Scaffold.of(context).showSnackBar(new SnackBar(content: Text("Your wish is my command, please reload the page.")));
                  },
                  child: Text("Jaguar Dark"),
                ),
                Divider(),
                Center(child: Text("Diagnostic Data", style: TextStyle(fontSize: 20),)),
                Divider(),
                Center(child: Text("Local Store: "+LocalStorageManager.getStorageInstance().platformName()),),
                Center(child: Text("Remote Store: Cloud Firestore"),),
              ],
            ),
          );
        },
      ),
      bottomNavigationBar: Builder(
        builder: (BuildContext context) {
         return BottomNavigationBar(
            type: BottomNavigationBarType.fixed,
            items: [
              BottomNavigationBarItem(icon: Icon(Icons.home), title: Text("Home")),
              BottomNavigationBarItem(icon: Icon(Icons.info_outline), title: Text("About")),
              BottomNavigationBarItem(icon: Icon(Icons.public), title: Text("Team")),
              BottomNavigationBarItem(icon: Icon(Icons.developer_board), title: Text("Robots")),
              BottomNavigationBarItem(icon: Icon(Icons.account_balance), title: Text("Sponsors")),
              BottomNavigationBarItem(icon: Icon(Icons.library_books), title: Text("Others")),
            ],
            currentIndex: ScaffoldWrapper._currentIndex,
            onTap: (i) {
              int old = ScaffoldWrapper._currentIndex;
              ScaffoldWrapper._currentIndex = i;
              if(i == 0) {
                Navigator.push(context, PageTransition(type: PageTransitionType.fade, child: ScaffoldWrapper(HomePage())));
              } else if(i == 1) {
                Navigator.push(context, PageTransition(type: PageTransitionType.fade, child: ScaffoldWrapper(AboutPage())));
              } else {
                Scaffold.of(context).showSnackBar(new SnackBar(content: Text("Woah there! You're going to a page that doesn't currently exist.")));
                ScaffoldWrapper._currentIndex = old;
              }
              setState(() {

              });
            },
          );
        },
      )
    );
  }

}