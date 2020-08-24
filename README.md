# Team 6504's Website
By FCHS' Robotics Club

This repository contains the non-compiled version of [fallschurchrobotics.com](http://fallschurchrobotics.com/).
We use Github Pages and Google's Flutter for the frontend, while using Google's Firebase as the backend.

## Setting Up Flutter
Firstly, please make sure that `flutter` is available on your PATH.  
Use the following commands to switch to the beta branch (for websupport) and update your installation.  
This is required in order to build or run this website.
```
flutter channel beta
flutter upgrade
flutter config --enable-web
```

## Running With Flutter
Once you've setup flutter, it's quite easy (if using Chrome). Just run `flutter run -d chrome` and it'll automatically open. If you do not have Chrome (or a support Chromium-based browser), run `flutter run -d web`.

## Authors
* [Liam Ryde](https://github.com/xeu100) - Current Maintainer of the 2nd Dart version.
* [Chandi Kanhai](https://github.com/Chandi-95) - Current Maintainer of the 1st Dart version.

## License
This software is protected under the MIT license. Basically, you may do whatever you want as long as you give credit where credit is due and don't hold us liable for anything that happens. More information can be found in [`LICENSE`](LICENSE).
