import 'package:fallschurchrobotics/elements/AppWrapper.dart';
import 'package:fallschurchrobotics/utilities/StorageManager.dart';
import 'package:flutter/material.dart';
import 'package:firebase/firebase.dart';
import 'package:firebase/firestore.dart' as fs;

void main() {
  WidgetsFlutterBinding.ensureInitialized();
  LocalStorageManager.register(); // Register the Local Storage Instance, themes and user preferences
  LocalStorageManager.getStorageInstance().get("theme").then((value) => {
    if(value == null) {
      AppWrapper.mode = ThemeMode.system,
      LocalStorageManager.getStorageInstance().set("theme", "system"),
    } else if(value.toLowerCase() == "light") {
      AppWrapper.mode = ThemeMode.light,
    } else if(value.toLowerCase() == "dark") {
      AppWrapper.mode = ThemeMode.dark,
    } else if(value.toLowerCase() == "system") {
      AppWrapper.mode = ThemeMode.system,
    } else {
      AppWrapper.mode = ThemeMode.system,
      LocalStorageManager.getStorageInstance().set("theme", "system"),
    },

    if(apps.length == null) {
      initializeApp(
        apiKey: "AIzaSyAdjBK8mk-9jh4lKhbP4-SEF7uoH2bqHS4",
        authDomain: "fchs-robotics-f9fb7.firebaseapp.com",
        databaseURL: "https://fchs-robotics-f9fb7.firebaseio.com",
        projectId: "fchs-robotics-f9fb7",
        storageBucket: "fchs-robotics-f9fb7.appspot.com",
        messagingSenderId: "698434717620",
        appId: "1:698434717620:web:4e946580776d13949694e1",
        measurementId: "G-WMHLWETW89",
      ),
    },

    runApp(AppWrapper()),
  });
}