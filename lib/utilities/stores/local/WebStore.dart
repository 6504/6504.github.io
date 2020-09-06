import 'package:fallschurchrobotics/utilities/LocalStorageManager.dart';
import 'dart:html' as html;

class WebStore extends LocalStorageInstance {
  @override
  String platformName() {
    return "Web Local Storage";
  }

  @override
  void register() {
    // No registration required
  }

  @override
  Future<String> get(String key) async {
    return html.window.localStorage[key];
  }

  @override
  void set(String key, String value) {
    html.window.localStorage[key] = value;
  }

  @override
  void delete(String key) {
    html.window.localStorage.remove(key);
  }

}