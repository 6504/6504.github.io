import 'package:fallschurchrobotics/utilities/StorageManager.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';

class AndroidStore extends StorageInstance {

  FlutterSecureStorage _storage;

  @override
  String platformName() {
    return "Android Keystore Storage";
  }

  @override
  void register() {
    _storage = new FlutterSecureStorage();
  }

  @override
  Future<String> get(String key) async {
    return await _storage.read(key: key);
  }

  @override
  void set(String key, String value) {
    _storage.write(key: key, value: value);
  }

  @override
  void delete(String key) {
    _storage.delete(key: key);
  }

}