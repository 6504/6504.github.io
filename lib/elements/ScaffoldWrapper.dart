// Acts as the main content display system.
import 'package:fallschurchrobotics/pages/About/About.dart';
import 'package:fallschurchrobotics/pages/Home.dart';
import 'package:fallschurchrobotics/utilities/LocalStorageManager.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:page_transition/page_transition.dart';

class ScaffoldWrapper extends StatefulWidget {
  static int _currentIndex = 0;
  Widget _page;
  User _user;

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

  TextEditingController _email = TextEditingController(text: "");
  TextEditingController _password = TextEditingController(text: "");


  @override
  Widget build(BuildContext context) {
    BuildContext scaffoldContext;
    checkAuthentication();
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
          scaffoldContext = context;
          return Drawer(
            child: ListView(
              shrinkWrap: true,
              children: [
                Divider(),
                Center(child: Text("Account Information", style: TextStyle(fontSize: 20),)),
                Divider(),
                Builder(builder: (context) {
                  if(widget._user == null) {
                    return Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        MaterialButton(onPressed: () {
                          showDialog(
                            context: context,
                            builder: (context) {
                              return AlertDialog(
                                title: Text("Enter Your Credentials"),
                                content: Form(
                                  child: Column(
                                    children: [
                                      TextFormField(
                                        decoration: InputDecoration(
                                          labelText: 'Enter your email',
                                        ),
                                        controller: _email,
                                      ),
                                      TextFormField(
                                        decoration: InputDecoration(
                                          labelText: 'Enter your password',
                                        ),
                                        obscureText: true,
                                        controller: _password,
                                      ),
                                      MaterialButton(onPressed: () {
                                        FirebaseAuth.instance.signInWithEmailAndPassword(email: _email.text, password: _password.text).then((value) => checkAuthentication()).catchError((error) => {
                                          if(error.code == 'user-not-found') {
                                            Navigator.pop(scaffoldContext),
                                            Scaffold.of(scaffoldContext).showSnackBar(SnackBar(content: Text("The credentials you entered don't exist or are invalid.")))
                                          } else if(error.code == 'wrong-password') {
                                            Navigator.pop(scaffoldContext),
                                            Scaffold.of(scaffoldContext).showSnackBar(SnackBar(content: Text("The credentials you entered don't exist or are invalid.")))
                                          } else {
                                            Navigator.pop(scaffoldContext),
                                            Scaffold.of(scaffoldContext).showSnackBar(SnackBar(content: Text("An unexpected authentication error occurred.")))
                                          }
                                        });
                                        Navigator.pop(context);
                                      }, child: Text("Login"),)
                                    ],
                                  ),
                                  autovalidate: true,
                                ),
                              );
                            }
                          );
                        }, child: Text("Login"),),
                        MaterialButton(onPressed: () {
                          showDialog(
                              context: context,
                              builder: (context) {
                                return AlertDialog(
                                  title: Text("Enter Your Email"),
                                  content: Form(
                                    child: Column(
                                      children: [
                                        TextFormField(
                                          decoration: InputDecoration(
                                            labelText: 'Enter your email',
                                          ),
                                          controller: _email,
                                        ),
                                        MaterialButton(onPressed: () {
                                          FirebaseAuth.instance.sendPasswordResetEmail(email: _email.text);
                                          Scaffold.of(scaffoldContext).showSnackBar(SnackBar(content: Text("If that email exists, a password reset request was sent.")));
                                          Navigator.pop(context);
                                        }, child: Text("Request Password Reset"),)
                                      ],
                                    ),
                                    autovalidate: true,
                                  ),
                                );
                              }
                          );
                        }, child: Text("Reset Password"),),
                      ],
                    );
                  } else {
                    return Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        MaterialButton(onPressed: () {
                          FirebaseAuth.instance.signOut().then((value) => checkAuthentication());
                        }, child: Text("Logout"),),
                        MaterialButton(onPressed: () {
                          Scaffold.of(scaffoldContext).showSnackBar(SnackBar(content: Text("There's nothing to manage yet!")));
                        }, child: Text("My Account"),),
                      ],
                    );
                  }
                }),
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

  void checkAuthentication() {
    FirebaseAuth.instance.authStateChanges().listen((user) {
      if (user != null) {
        widget._user = user;
      } else {
        widget._user = null;
      }
    });
    setState(() {

    });
  }

}