define(['dart_sdk', 'packages/flutter_web/animation', 'packages/fchs_robotics/utilities/Defaults', 'packages/fchs_robotics/utilities/Firebase', 'packages/firebase/src/app', 'packages/flutter_web/material', 'packages/fchs_robotics/elements/NavBar'], function(dart_sdk, animation, Defaults, Firebase, app, material, NavBar) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const collection = dart_sdk.collection;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__widgets__text = animation.src__widgets__text;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__basic = animation.src__widgets__basic;
  const src__widgets__framework = animation.src__widgets__framework;
  const utilities__Defaults = Defaults.utilities__Defaults;
  const utilities__Firebase = Firebase.utilities__Firebase;
  const src__auth = app.src__auth;
  const src__material__scaffold = material.src__material__scaffold;
  const src__material__colors = material.src__material__colors;
  const elements__NavBar = NavBar.elements__NavBar;
  const pages__HomePage = Object.create(dart.library);
  const $containsKey = dartx.containsKey;
  const $_get = dartx._get;
  let SetOfText = () => (SetOfText = dart.constFn(core.Set$(src__widgets__text.Text)))();
  let LinkedHashSetOfText = () => (LinkedHashSetOfText = dart.constFn(collection.LinkedHashSet$(src__widgets__text.Text)))();
  let UserCredentialToSetOfText = () => (UserCredentialToSetOfText = dart.constFn(dart.fnType(SetOfText(), [src__auth.UserCredential])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(src__widgets__framework.Widget)))();
  const _val = dart.privateName(pages__HomePage, "_val");
  let const$;
  let const$0;
  let const$1;
  let const$2;
  let const$3;
  let const$4;
  let const$5;
  let const$6;
  let const$7;
  let const$8;
  let const$9;
  let const$10;
  let const$11;
  let const$12;
  let const$13;
  let const$14;
  let const$15;
  pages__HomePage.HomePage = class HomePage extends src__widgets__framework.StatelessWidget {
    build(context) {
      this[_val] = new src__widgets__text.Text.new("NOT LOGGED IN!", {style: utilities__Defaults.getTextStyle(), $creationLocationd_0dea112b090073317d4: const$2 || (const$2 = dart.const(new src__widgets__widget_inspector._Location.new({line: 14, column: 12, file: "org-dartlang-app:///packages/fchs_robotics/pages/HomePage.dart", parameterLocations: const$1 || (const$1 = dart.constList([const$ || (const$ = dart.const(new src__widgets__widget_inspector._Location.new({line: 14, column: 17, name: "data"}))), const$0 || (const$0 = dart.const(new src__widgets__widget_inspector._Location.new({line: 14, column: 35, name: "style"})))], src__widgets__widget_inspector._Location))})))});
      if (dart.test(html.window.localStorage[$containsKey]("email")) && dart.test(html.window.localStorage[$containsKey]("password"))) {
        utilities__Firebase.Firebase.app.auth().signInWithEmailAndPassword(html.window.localStorage[$_get]("email"), html.window.localStorage[$_get]("password")).then(SetOfText(), dart.fn(cred => LinkedHashSetOfText().from([this[_val] = new src__widgets__text.Text.new(cred.user.uid, {style: utilities__Defaults.getTextStyle(), $creationLocationd_0dea112b090073317d4: const$6 || (const$6 = dart.const(new src__widgets__widget_inspector._Location.new({line: 17, column: 16, file: "org-dartlang-app:///packages/fchs_robotics/pages/HomePage.dart", parameterLocations: const$5 || (const$5 = dart.constList([const$3 || (const$3 = dart.const(new src__widgets__widget_inspector._Location.new({line: 17, column: 31, name: "data"}))), const$4 || (const$4 = dart.const(new src__widgets__widget_inspector._Location.new({line: 17, column: 36, name: "style"})))], src__widgets__widget_inspector._Location))})))})]), UserCredentialToSetOfText()));
      }
      return new src__material__scaffold.Scaffold.new({backgroundColor: src__material__colors.Colors.white10, body: new src__widgets__basic.Column.new({children: JSArrayOfWidget().of([new elements__NavBar.NavBar.new({$creationLocationd_0dea112b090073317d4: const$8 || (const$8 = dart.const(new src__widgets__widget_inspector._Location.new({line: 24, column: 11, file: "org-dartlang-app:///packages/fchs_robotics/pages/HomePage.dart", parameterLocations: const$7 || (const$7 = dart.constList([], src__widgets__widget_inspector._Location))})))}), this[_val]]), $creationLocationd_0dea112b090073317d4: const$11 || (const$11 = dart.const(new src__widgets__widget_inspector._Location.new({line: 22, column: 13, file: "org-dartlang-app:///packages/fchs_robotics/pages/HomePage.dart", parameterLocations: const$10 || (const$10 = dart.constList([const$9 || (const$9 = dart.const(new src__widgets__widget_inspector._Location.new({line: 23, column: 9, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$15 || (const$15 = dart.const(new src__widgets__widget_inspector._Location.new({line: 20, column: 12, file: "org-dartlang-app:///packages/fchs_robotics/pages/HomePage.dart", parameterLocations: const$14 || (const$14 = dart.constList([const$12 || (const$12 = dart.const(new src__widgets__widget_inspector._Location.new({line: 21, column: 7, name: "backgroundColor"}))), const$13 || (const$13 = dart.const(new src__widgets__widget_inspector._Location.new({line: 22, column: 7, name: "body"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (pages__HomePage.HomePage.new = function(opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[_val] = null;
    pages__HomePage.HomePage.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = pages__HomePage.HomePage.prototype;
  dart.addTypeTests(pages__HomePage.HomePage);
  dart.setMethodSignature(pages__HomePage.HomePage, () => ({
    __proto__: dart.getMethods(pages__HomePage.HomePage.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(pages__HomePage.HomePage, "package:fchs_robotics/pages/HomePage.dart");
  dart.setFieldSignature(pages__HomePage.HomePage, () => ({
    __proto__: dart.getFields(pages__HomePage.HomePage.__proto__),
    [_val]: dart.fieldType(src__widgets__framework.Widget)
  }));
  dart.trackLibraries("packages/fchs_robotics/pages/HomePage", {
    "package:fchs_robotics/pages/HomePage.dart": pages__HomePage
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/fchs_robotics/pages/HomePage.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAY4B;MACxB,aAAO,gCAAK,0BAAyB;AACrC,oBAAG,AAAO,AAAa,uCAAY,uBAAY,AAAO,AAAa,uCAAY;QACpE,AAAI,AAAO,AAA0F,mEAA/D,AAAO,AAAY,gCAAC,UAAU,AAAO,AAAY,gCAAC,+BAAkB,QAAC,QAAS,4BAC3H,aAAO,gCAAK,AAAK,AAAK,IAAN,mBAAkB;;AAGtC,YAAO,4DACmB,4CAClB,8CACc,sBAChB,yWACA;IAIR;;;;IAnBO;;;EAqBT","file":"HomePage.ddc.js"}');
  // Exports:
  return {
    pages__HomePage: pages__HomePage
  };
});

//# sourceMappingURL=HomePage.ddc.js.map
