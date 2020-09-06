import 'dart:io' as io;

import 'package:fallschurchrobotics/utilities/stores/local/AndroidStore.dart';
import 'package:fallschurchrobotics/utilities/stores/local/WebStoreNoImport.dart'
  if (dart.library.js) 'package:fallschurchrobotics/utilities/stores/local/WebStore.dart';
import 'package:flutter/foundation.dart';

class LocalStorageManager {

  static LocalStorageInstance _instance;

  static void register() {
    if(kIsWeb) {
      _instance = new WebStore();
    } else if(io.Platform.isAndroid) {
      _instance = new AndroidStore();
    } else {
      print("No local store is registered, the current platform is unsupported and may not be functional.");
    }
    _instance.register();
    print("The current local store is "+_instance.platformName()+" and it was registered.");
  }

  static LocalStorageInstance getStorageInstance() {
    return _instance;
  }

}

abstract class LocalStorageInstance {
  String platformName();
  void register();
  Future<String> get(String key);
  void set(String key, String value);
  void delete(String key);
}
