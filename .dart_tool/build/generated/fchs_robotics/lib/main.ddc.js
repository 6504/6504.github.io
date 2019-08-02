define(['dart_sdk', 'packages/firebase/firebase', 'packages/flutter_web/animation', 'packages/flutter_web/material', 'packages/fchs_robotics/pages/HomePage'], function(dart_sdk, firebase, animation, material, HomePage) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__top_level = firebase.src__top_level;
  const src__widgets__binding = animation.src__widgets__binding;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__material__app = material.src__material__app;
  const pages__HomePage = HomePage.pages__HomePage;
  const main = Object.create(dart.library);
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  let const$;
  let const$0;
  let const$1;
  let const$2;
  let const$3;
  main.main = function() {
    src__top_level.initializeApp({apiKey: "AIzaSyBZk0RC3_xmTKms2_2KzWUDyPMdBhbLehQ", authDomain: "fchs-robotics.firebaseapp.com", databaseURL: "https://fchs-robotics.firebaseio.com", projectId: "fchs-robotics", storageBucket: "", messagingSenderId: "163368391726"});
    src__top_level.database().ref("/a").set(new (IdentityMapOfString$String()).from(["hia", "hi"]));
    src__widgets__binding.runApp(new src__material__app.MaterialApp.new({home: new pages__HomePage.HomePage.new({$creationLocationd_0dea112b090073317d4: const$0 || (const$0 = dart.const(new src__widgets__widget_inspector._Location.new({line: 17, column: 13, file: "org-dartlang-app:///packages/fchs_robotics/main.dart", parameterLocations: const$ || (const$ = dart.constList([], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$3 || (const$3 = dart.const(new src__widgets__widget_inspector._Location.new({line: 16, column: 5, file: "org-dartlang-app:///packages/fchs_robotics/main.dart", parameterLocations: const$2 || (const$2 = dart.constList([const$1 || (const$1 = dart.const(new src__widgets__widget_inspector._Location.new({line: 17, column: 7, name: "home"})))], src__widgets__widget_inspector._Location))})))}));
  };
  dart.trackLibraries("packages/fchs_robotics/main", {
    "package:fchs_robotics/main.dart": main
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/fchs_robotics/main.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;IAKE,sCACU,uDACI,8CACC,mDACF,gCACI,uBACI;IAErB,AAAW,AAAU,8BAAN,UAAU,yCAAC,OAAM;IAChC,6BACE,8CACQ;EAGZ","file":"main.ddc.js"}');
  // Exports:
  return {
    main: main
  };
});

//# sourceMappingURL=main.ddc.js.map
