import 'package:fallschurchrobotics/elements/AppWrapper.dart';
import 'package:fallschurchrobotics/utilities/StorageManager.dart';
import 'package:flutter/material.dart';

void main() {
  StorageManager.register();
  StorageManager.getStorageInstance().get("theme").then((value) => {
    if(value == null) {
      AppWrapper.mode = ThemeMode.system,
      StorageManager.getStorageInstance().set("theme", "system"),
    } else if(value.toLowerCase() == "light") {
      AppWrapper.mode = ThemeMode.light,
    } else if(value.toLowerCase() == "dark") {
      AppWrapper.mode = ThemeMode.dark,
    } else if(value.toLowerCase() == "system") {
      AppWrapper.mode = ThemeMode.system,
    } else {
      AppWrapper.mode = ThemeMode.system,
      StorageManager.getStorageInstance().set("theme", "system"),
    },

    runApp(AppWrapper()),
  });
}