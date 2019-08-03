define(['dart_sdk', 'packages/firebase/firebase'], function(dart_sdk, firebase) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__top_level = firebase.src__top_level;
  const utilities__Firebase = Object.create(dart.library);
  utilities__Firebase.Firebase = class Firebase extends core.Object {};
  (utilities__Firebase.Firebase.new = function() {
    ;
  }).prototype = utilities__Firebase.Firebase.prototype;
  dart.addTypeTests(utilities__Firebase.Firebase);
  dart.setLibraryUri(utilities__Firebase.Firebase, "package:fchs_robotics/utilities/Firebase.dart");
  dart.defineLazy(utilities__Firebase.Firebase, {
    /*utilities__Firebase.Firebase.app*/get app() {
      return src__top_level.initializeApp({apiKey: "AIzaSyBZk0RC3_xmTKms2_2KzWUDyPMdBhbLehQ", authDomain: "fchs-robotics.firebaseapp.com", databaseURL: "https://fchs-robotics.firebaseio.com", projectId: "fchs-robotics", storageBucket: "", messagingSenderId: "163368391726"});
    },
    set app(_) {}
  });
  dart.trackLibraries("packages/fchs_robotics/utilities/Firebase", {
    "package:fchs_robotics/utilities/Firebase.dart": utilities__Firebase
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/fchs_robotics/utilities/Firebase.dart"],"names":[],"mappings":";;;;;;;;;;EAWA;;;;MARa,gCAAG;YAAG,uCACP,uDACI,8CACC,mDACF,gCACI,uBACI","file":"Firebase.ddc.js"}');
  // Exports:
  return {
    utilities__Firebase: utilities__Firebase
  };
});

//# sourceMappingURL=Firebase.ddc.js.map
