define(['dart_sdk', 'packages/flutter_web/material', 'packages/flutter_web/animation', 'packages/fchs_robotics/elements/NavBar'], function(dart_sdk, material, animation, NavBar) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__material__scaffold = material.src__material__scaffold;
  const src__material__colors = material.src__material__colors;
  const src__widgets__basic = animation.src__widgets__basic;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__framework = animation.src__widgets__framework;
  const elements__NavBar = NavBar.elements__NavBar;
  const pages__HomePage = Object.create(dart.library);
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(src__widgets__framework.Widget)))();
  let const$;
  let const$0;
  let const$1;
  let const$2;
  let const$3;
  let const$4;
  let const$5;
  let const$6;
  let const$7;
  pages__HomePage.HomePage = class HomePage extends src__widgets__framework.StatelessWidget {
    build(context) {
      return new src__material__scaffold.Scaffold.new({backgroundColor: src__material__colors.Colors.white10, body: new src__widgets__basic.Column.new({children: JSArrayOfWidget().of([new elements__NavBar.NavBar.new({$creationLocationd_0dea112b090073317d4: const$0 || (const$0 = dart.const(new src__widgets__widget_inspector._Location.new({line: 13, column: 11, file: "org-dartlang-app:///packages/fchs_robotics/pages/HomePage.dart", parameterLocations: const$ || (const$ = dart.constList([], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$3 || (const$3 = dart.const(new src__widgets__widget_inspector._Location.new({line: 11, column: 13, file: "org-dartlang-app:///packages/fchs_robotics/pages/HomePage.dart", parameterLocations: const$2 || (const$2 = dart.constList([const$1 || (const$1 = dart.const(new src__widgets__widget_inspector._Location.new({line: 12, column: 9, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$7 || (const$7 = dart.const(new src__widgets__widget_inspector._Location.new({line: 9, column: 12, file: "org-dartlang-app:///packages/fchs_robotics/pages/HomePage.dart", parameterLocations: const$6 || (const$6 = dart.constList([const$4 || (const$4 = dart.const(new src__widgets__widget_inspector._Location.new({line: 10, column: 7, name: "backgroundColor"}))), const$5 || (const$5 = dart.const(new src__widgets__widget_inspector._Location.new({line: 11, column: 7, name: "body"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (pages__HomePage.HomePage.new = function(opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    pages__HomePage.HomePage.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = pages__HomePage.HomePage.prototype;
  dart.addTypeTests(pages__HomePage.HomePage);
  dart.setMethodSignature(pages__HomePage.HomePage, () => ({
    __proto__: dart.getMethods(pages__HomePage.HomePage.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(pages__HomePage.HomePage, "package:fchs_robotics/pages/HomePage.dart");
  dart.trackLibraries("packages/fchs_robotics/pages/HomePage", {
    "package:fchs_robotics/pages/HomePage.dart": pages__HomePage
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/fchs_robotics/pages/HomePage.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;UAO4B;AACxB,YAAO,4DACmB,4CAClB,8CACc,sBAChB;IAIR;;;;;;EAEF","file":"HomePage.ddc.js"}');
  // Exports:
  return {
    pages__HomePage: pages__HomePage
  };
});

//# sourceMappingURL=HomePage.ddc.js.map
