import 'dart:io' as io;

import 'package:fallschurchrobotics/utilities/stores/AndroidStore.dart';
import 'package:fallschurchrobotics/utilities/stores/WebStoreNoImport.dart'
  if (dart.library.js) 'package:fallschurchrobotics/utilities/stores/WebStore.dart';
import 'package:flutter/foundation.dart';

class StorageManager {

  static StorageInstance _instance;

  static void register() {
    if(kIsWeb) {
      _instance = new WebStore();
    } else if(io.Platform.isAndroid) {
      _instance = new AndroidStore();
    } else {
      print("No store is registered, the current platform is unsupported and may not be functional.");
    }
    _instance.register();
    print("The current store is "+_instance.platformName()+" and it was registered.");
  }

  static StorageInstance getStorageInstance() {
    return _instance;
  }

}

abstract class StorageInstance {
  String platformName();
  void register();
  Future<String> get(String key);
  void set(String key, String value);
  void delete(String key);
}
