import 'package:fallschurchrobotics/elements/AppWrapper.dart';
import 'package:fallschurchrobotics/utilities/LocalStorageManager.dart';
import 'package:flutter/material.dart';
import 'package:firebase_core/firebase_core.dart';

void main() {
  WidgetsFlutterBinding.ensureInitialized();
  LocalStorageManager.register(); // Register the Local Storage Instance, themes and user preferences
  LocalStorageManager.getStorageInstance().get("theme").then((value) async => {
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

    await Firebase.initializeApp(),

    runApp(AppWrapper()),
  });
}