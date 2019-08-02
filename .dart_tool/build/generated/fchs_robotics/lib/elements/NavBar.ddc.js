define(['dart_sdk', 'packages/fchs_robotics/utilities/Defaults', 'packages/flutter_web/material', 'packages/flutter_web/animation', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web_ui/ui'], function(dart_sdk, Defaults, material, animation, animation$, ui) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utilities__Defaults = Defaults.utilities__Defaults;
  const src__material__colors = material.src__material__colors;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__widgets__media_query = animation.src__widgets__media_query;
  const src__widgets__basic = animation.src__widgets__basic;
  const src__widgets__container = animation.src__widgets__container;
  const src__painting__box_decoration = animation.src__painting__box_decoration;
  const src__rendering__flex = animation.src__rendering__flex;
  const src__widgets__text = animation.src__widgets__text;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__ticker_provider = animation.src__widgets__ticker_provider;
  const src__painting__text_style = animation$.src__painting__text_style;
  const src__painting__box_shadow = animation$.src__painting__box_shadow;
  const src__painting__alignment = animation$.src__painting__alignment;
  const ui$ = ui.ui;
  const elements__NavBar = Object.create(dart.library);
  let JSArrayOfBoxShadow = () => (JSArrayOfBoxShadow = dart.constFn(_interceptors.JSArray$(src__painting__box_shadow.BoxShadow)))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(src__widgets__framework.Widget)))();
  const _navBarStyle = dart.privateName(elements__NavBar, "_navBarStyle");
  const _coreStyle = dart.privateName(elements__NavBar, "_coreStyle");
  elements__NavBar.NavBar = class NavBar extends src__widgets__framework.StatefulWidget {
    createState() {
      return new elements__NavBar.NavBarState.new();
    }
  };
  (elements__NavBar.NavBar.new = function(opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[_navBarStyle] = utilities__Defaults.getTextStyle().copyWith({color: src__material__colors.Colors.white});
    this[_coreStyle] = null;
    elements__NavBar.NavBar.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = elements__NavBar.NavBar.prototype;
  dart.addTypeTests(elements__NavBar.NavBar);
  dart.setMethodSignature(elements__NavBar.NavBar, () => ({
    __proto__: dart.getMethods(elements__NavBar.NavBar.__proto__),
    createState: dart.fnType(src__widgets__framework.State$(src__widgets__framework.StatefulWidget), [])
  }));
  dart.setLibraryUri(elements__NavBar.NavBar, "package:fchs_robotics/elements/NavBar.dart");
  dart.setFieldSignature(elements__NavBar.NavBar, () => ({
    __proto__: dart.getFields(elements__NavBar.NavBar.__proto__),
    [_navBarStyle]: dart.finalFieldType(src__painting__text_style.TextStyle),
    [_coreStyle]: dart.fieldType(src__painting__text_style.TextStyle)
  }));
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
  let const$16;
  let const$17;
  let const$18;
  let const$19;
  let const$20;
  let const$21;
  let const$22;
  let const$23;
  let const$24;
  let const$25;
  let const$26;
  let const$27;
  let const$28;
  let const$29;
  let const$30;
  let const$31;
  let const$32;
  let const$33;
  let const$34;
  let const$35;
  let const$36;
  let const$37;
  let const$38;
  let const$39;
  let const$40;
  let const$41;
  let const$42;
  let const$43;
  let const$44;
  let const$45;
  let const$46;
  let const$47;
  let const$48;
  let const$49;
  let const$50;
  let const$51;
  let const$52;
  const State_TickerProviderStateMixin$ = class State_TickerProviderStateMixin extends src__widgets__framework.State$(elements__NavBar.NavBar) {};
  (State_TickerProviderStateMixin$.new = function() {
    src__widgets__ticker_provider.TickerProviderStateMixin$(elements__NavBar.NavBar)[dart.mixinNew].call(this);
    State_TickerProviderStateMixin$.__proto__.new.call(this);
  }).prototype = State_TickerProviderStateMixin$.prototype;
  dart.applyMixin(State_TickerProviderStateMixin$, src__widgets__ticker_provider.TickerProviderStateMixin$(elements__NavBar.NavBar));
  elements__NavBar.NavBarState = class NavBarState extends State_TickerProviderStateMixin$ {
    build(context) {
      this.widget[_coreStyle] = utilities__Defaults.getTextStyle().copyWith({color: src__material__colors.Colors.white, fontSize: dart.notNull(src__widgets__media_query.MediaQuery.of(context).size.height) * 0.04, fontFamily: "ConcertOne"});
      return new src__widgets__basic.Stack.new({children: JSArrayOfWidget().of([new src__widgets__container.Container.new({width: src__widgets__media_query.MediaQuery.of(context).size.width, height: 100.0, decoration: new src__painting__box_decoration.BoxDecoration.new({boxShadow: JSArrayOfBoxShadow().of([new src__painting__box_shadow.BoxShadow.new({blurRadius: 5.0})]), color: new ui$.Color.fromRGBO(8, 87, 33, 1.0)}), child: new src__widgets__basic.Column.new({mainAxisAlignment: src__rendering__flex.MainAxisAlignment.end, children: JSArrayOfWidget().of([new src__widgets__basic.Row.new({mainAxisAlignment: src__rendering__flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new src__widgets__basic.Wrap.new({spacing: 260.0, children: JSArrayOfWidget().of([new src__widgets__text.Text.new("FALLS CHURCH", {style: this.widget[_coreStyle], $creationLocationd_0dea112b090073317d4: const$2 || (const$2 = dart.const(new src__widgets__widget_inspector._Location.new({line: 36, column: 23, file: "org-dartlang-app:///packages/fchs_robotics/elements/NavBar.dart", parameterLocations: const$1 || (const$1 = dart.constList([const$ || (const$ = dart.const(new src__widgets__widget_inspector._Location.new({line: 36, column: 28, name: "data"}))), const$0 || (const$0 = dart.const(new src__widgets__widget_inspector._Location.new({line: 36, column: 44, name: "style"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__text.Text.new("ROBOTICS CLUB", {style: this.widget[_coreStyle], $creationLocationd_0dea112b090073317d4: const$6 || (const$6 = dart.const(new src__widgets__widget_inspector._Location.new({line: 37, column: 23, file: "org-dartlang-app:///packages/fchs_robotics/elements/NavBar.dart", parameterLocations: const$5 || (const$5 = dart.constList([const$3 || (const$3 = dart.const(new src__widgets__widget_inspector._Location.new({line: 37, column: 28, name: "data"}))), const$4 || (const$4 = dart.const(new src__widgets__widget_inspector._Location.new({line: 37, column: 45, name: "style"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$10 || (const$10 = dart.const(new src__widgets__widget_inspector._Location.new({line: 33, column: 19, file: "org-dartlang-app:///packages/fchs_robotics/elements/NavBar.dart", parameterLocations: const$9 || (const$9 = dart.constList([const$7 || (const$7 = dart.const(new src__widgets__widget_inspector._Location.new({line: 34, column: 21, name: "spacing"}))), const$8 || (const$8 = dart.const(new src__widgets__widget_inspector._Location.new({line: 35, column: 21, name: "children"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$14 || (const$14 = dart.const(new src__widgets__widget_inspector._Location.new({line: 30, column: 15, file: "org-dartlang-app:///packages/fchs_robotics/elements/NavBar.dart", parameterLocations: const$13 || (const$13 = dart.constList([const$11 || (const$11 = dart.const(new src__widgets__widget_inspector._Location.new({line: 31, column: 17, name: "mainAxisAlignment"}))), const$12 || (const$12 = dart.const(new src__widgets__widget_inspector._Location.new({line: 32, column: 17, name: "children"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$18 || (const$18 = dart.const(new src__widgets__widget_inspector._Location.new({line: 27, column: 18, file: "org-dartlang-app:///packages/fchs_robotics/elements/NavBar.dart", parameterLocations: const$17 || (const$17 = dart.constList([const$15 || (const$15 = dart.const(new src__widgets__widget_inspector._Location.new({line: 28, column: 13, name: "mainAxisAlignment"}))), const$16 || (const$16 = dart.const(new src__widgets__widget_inspector._Location.new({line: 29, column: 13, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$24 || (const$24 = dart.const(new src__widgets__widget_inspector._Location.new({line: 23, column: 9, file: "org-dartlang-app:///packages/fchs_robotics/elements/NavBar.dart", parameterLocations: const$23 || (const$23 = dart.constList([const$19 || (const$19 = dart.const(new src__widgets__widget_inspector._Location.new({line: 24, column: 11, name: "width"}))), const$20 || (const$20 = dart.const(new src__widgets__widget_inspector._Location.new({line: 25, column: 11, name: "height"}))), const$21 || (const$21 = dart.const(new src__widgets__widget_inspector._Location.new({line: 26, column: 11, name: "decoration"}))), const$22 || (const$22 = dart.const(new src__widgets__widget_inspector._Location.new({line: 27, column: 11, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__container.Container.new({width: src__widgets__media_query.MediaQuery.of(context).size.width, height: 55.0, decoration: new src__painting__box_decoration.BoxDecoration.new({boxShadow: JSArrayOfBoxShadow().of([new src__painting__box_shadow.BoxShadow.new({blurRadius: 5.0})]), color: src__material__colors.Colors.green}), child: new src__widgets__text.Text.new("Navbar here", {style: this.widget[_navBarStyle], $creationLocationd_0dea112b090073317d4: const$28 || (const$28 = dart.const(new src__widgets__widget_inspector._Location.new({line: 49, column: 18, file: "org-dartlang-app:///packages/fchs_robotics/elements/NavBar.dart", parameterLocations: const$27 || (const$27 = dart.constList([const$25 || (const$25 = dart.const(new src__widgets__widget_inspector._Location.new({line: 49, column: 23, name: "data"}))), const$26 || (const$26 = dart.const(new src__widgets__widget_inspector._Location.new({line: 49, column: 38, name: "style"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$34 || (const$34 = dart.const(new src__widgets__widget_inspector._Location.new({line: 45, column: 9, file: "org-dartlang-app:///packages/fchs_robotics/elements/NavBar.dart", parameterLocations: const$33 || (const$33 = dart.constList([const$29 || (const$29 = dart.const(new src__widgets__widget_inspector._Location.new({line: 46, column: 11, name: "width"}))), const$30 || (const$30 = dart.const(new src__widgets__widget_inspector._Location.new({line: 47, column: 11, name: "height"}))), const$31 || (const$31 = dart.const(new src__widgets__widget_inspector._Location.new({line: 48, column: 11, name: "decoration"}))), const$32 || (const$32 = dart.const(new src__widgets__widget_inspector._Location.new({line: 49, column: 11, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.Align.new({alignment: src__painting__alignment.Alignment.topCenter, child: new src__widgets__container.Container.new({alignment: src__painting__alignment.Alignment.topCenter, width: dart.notNull(src__widgets__media_query.MediaQuery.of(context).size.width) * 0.1, height: dart.notNull(src__widgets__media_query.MediaQuery.of(context).size.height) * 0.13, decoration: new src__painting__box_decoration.BoxDecoration.new({boxShadow: JSArrayOfBoxShadow().of([new src__painting__box_shadow.BoxShadow.new({blurRadius: 5.0})]), color: src__material__colors.Colors.green}), child: new src__widgets__text.Text.new("Navbar here", {style: this.widget[_navBarStyle], $creationLocationd_0dea112b090073317d4: const$38 || (const$38 = dart.const(new src__widgets__widget_inspector._Location.new({line: 58, column: 20, file: "org-dartlang-app:///packages/fchs_robotics/elements/NavBar.dart", parameterLocations: const$37 || (const$37 = dart.constList([const$35 || (const$35 = dart.const(new src__widgets__widget_inspector._Location.new({line: 58, column: 25, name: "data"}))), const$36 || (const$36 = dart.const(new src__widgets__widget_inspector._Location.new({line: 58, column: 40, name: "style"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$45 || (const$45 = dart.const(new src__widgets__widget_inspector._Location.new({line: 53, column: 18, file: "org-dartlang-app:///packages/fchs_robotics/elements/NavBar.dart", parameterLocations: const$44 || (const$44 = dart.constList([const$39 || (const$39 = dart.const(new src__widgets__widget_inspector._Location.new({line: 54, column: 13, name: "alignment"}))), const$40 || (const$40 = dart.const(new src__widgets__widget_inspector._Location.new({line: 55, column: 13, name: "width"}))), const$41 || (const$41 = dart.const(new src__widgets__widget_inspector._Location.new({line: 56, column: 13, name: "height"}))), const$42 || (const$42 = dart.const(new src__widgets__widget_inspector._Location.new({line: 57, column: 13, name: "decoration"}))), const$43 || (const$43 = dart.const(new src__widgets__widget_inspector._Location.new({line: 58, column: 13, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$49 || (const$49 = dart.const(new src__widgets__widget_inspector._Location.new({line: 51, column: 9, file: "org-dartlang-app:///packages/fchs_robotics/elements/NavBar.dart", parameterLocations: const$48 || (const$48 = dart.constList([const$46 || (const$46 = dart.const(new src__widgets__widget_inspector._Location.new({line: 52, column: 11, name: "alignment"}))), const$47 || (const$47 = dart.const(new src__widgets__widget_inspector._Location.new({line: 53, column: 11, name: "child"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$52 || (const$52 = dart.const(new src__widgets__widget_inspector._Location.new({line: 21, column: 12, file: "org-dartlang-app:///packages/fchs_robotics/elements/NavBar.dart", parameterLocations: const$51 || (const$51 = dart.constList([const$50 || (const$50 = dart.const(new src__widgets__widget_inspector._Location.new({line: 22, column: 7, name: "children"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (elements__NavBar.NavBarState.new = function() {
    elements__NavBar.NavBarState.__proto__.new.call(this);
    ;
  }).prototype = elements__NavBar.NavBarState.prototype;
  dart.addTypeTests(elements__NavBar.NavBarState);
  dart.setMethodSignature(elements__NavBar.NavBarState, () => ({
    __proto__: dart.getMethods(elements__NavBar.NavBarState.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(elements__NavBar.NavBarState, "package:fchs_robotics/elements/NavBar.dart");
  dart.trackLibraries("packages/fchs_robotics/elements/NavBar", {
    "package:fchs_robotics/elements/NavBar.dart": elements__NavBar
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/fchs_robotics/elements/NavBar.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;AAUI,YAAO;IACT;;;;IANgB,qBAAe,AAAe,oDAAuB;IAC3D;;;EAOZ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAK4B;MACxB,AAAO,0BAAa,AAAe,oDAAuB,8CAAmD,aAAvB,AAAY,AAAK,wCAAd,OAAO,iBAAc,kBAAkB;AAChI,YAAO,8CACa,sBAChB,kDACoB,AAAY,AAAK,wCAAd,OAAO,sBACpB,mBACI,gEAAyB,yBAAC,yDAAsB,gBAAoB,uBAAS,GAAG,IAAI,IAAI,eAC7F,uDACgC,sDACnB,sBAChB,oDACuC,yDACnB,sBAChB,2CACW,iBACS,sBAChB,gCAAK,wBAAuB,AAAO,qlBACnC,gCAAK,yBAAwB,AAAO,upGAQlD,kDACoB,AAAY,AAAK,wCAAd,OAAO,sBACpB,kBACI,gEAAyB,yBAAC,yDAAsB,gBAAqB,6CAC1E,gCAAK,uBAAsB,AAAO,y6CAE3C,8CACuB,qDACd,sDACgB,qDACmB,aAAtB,AAAY,AAAK,wCAAd,OAAO,gBAAa,aACC,aAAvB,AAAY,AAAK,wCAAd,OAAO,iBAAc,kBAC/B,gEAAyB,yBAAC,yDAAsB,gBAAqB,6CAC1E,gCAAK,uBAAsB,AAAO;IAKnD;;;;;EAEF","file":"NavBar.ddc.js"}');
  // Exports:
  return {
    elements__NavBar: elements__NavBar
  };
});

//# sourceMappingURL=NavBar.ddc.js.map
