define(['dart_sdk', 'packages/flutter_web/src/animation/animation'], function(dart_sdk, animation) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__painting__text_style = animation.src__painting__text_style;
  const utilities__Defaults = Object.create(dart.library);
  utilities__Defaults.getTextStyle = function() {
    return new src__painting__text_style.TextStyle.new({fontSize: 15.0, fontFamily: "Nunito"});
  };
  dart.trackLibraries("packages/fchs_robotics/utilities/Defaults", {
    "package:fchs_robotics/utilities/Defaults.dart": utilities__Defaults
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/fchs_robotics/utilities/Defaults.dart"],"names":[],"mappings":";;;;;;;;AAGE,UAAO,wDAAoB,kBAAkB;EAC/C","file":"Defaults.ddc.js"}');
  // Exports:
  return {
    utilities__Defaults: utilities__Defaults
  };
});

//# sourceMappingURL=Defaults.ddc.js.map
