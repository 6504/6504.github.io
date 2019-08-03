define(['dart_sdk', 'packages/fchs_robotics/utilities/Defaults', 'packages/flutter_web/material', 'packages/flutter_web/animation', 'packages/flutter_web/src/animation/animation', 'packages/fchs_robotics/utilities/Firebase', 'packages/firebase/src/app', 'packages/flutter_web_ui/ui', 'packages/flutter_web/src/services/clipboard'], function(dart_sdk, Defaults, material, animation, animation$, Firebase, app, ui, clipboard) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const collection = dart_sdk.collection;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utilities__Defaults = Defaults.utilities__Defaults;
  const src__material__colors = material.src__material__colors;
  const src__material__material_button = material.src__material__material_button;
  const src__material__page = material.src__material__page;
  const src__material__scaffold = material.src__material__scaffold;
  const src__material__text_field = material.src__material__text_field;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__widgets__media_query = animation.src__widgets__media_query;
  const src__widgets__text = animation.src__widgets__text;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__navigator = animation.src__widgets__navigator;
  const src__widgets__basic = animation.src__widgets__basic;
  const src__widgets__container = animation.src__widgets__container;
  const src__painting__box_decoration = animation.src__painting__box_decoration;
  const src__rendering__flex = animation.src__rendering__flex;
  const src__widgets__ticker_provider = animation.src__widgets__ticker_provider;
  const src__widgets__editable_text = animation.src__widgets__editable_text;
  const src__painting__text_style = animation$.src__painting__text_style;
  const src__painting__box_shadow = animation$.src__painting__box_shadow;
  const src__painting__alignment = animation$.src__painting__alignment;
  const utilities__Firebase = Firebase.utilities__Firebase;
  const src__auth = app.src__auth;
  const ui$ = ui.ui;
  const src__services__text_input = clipboard.src__services__text_input;
  const elements__NavBar = Object.create(dart.library);
  const pages__LoginPage = Object.create(dart.library);
  const $containsKey = dartx.containsKey;
  const $_get = dartx._get;
  const $_set = dartx._set;
  let SetOfMaterialButton = () => (SetOfMaterialButton = dart.constFn(core.Set$(src__material__material_button.MaterialButton)))();
  let LinkedHashSetOfMaterialButton = () => (LinkedHashSetOfMaterialButton = dart.constFn(collection.LinkedHashSet$(src__material__material_button.MaterialButton)))();
  let LinkedHashSetOfvoid = () => (LinkedHashSetOfvoid = dart.constFn(collection.LinkedHashSet$(dart.void)))();
  let SetOfvoid = () => (SetOfvoid = dart.constFn(core.Set$(dart.void)))();
  let VoidToSetOfvoid = () => (VoidToSetOfvoid = dart.constFn(dart.fnType(SetOfvoid(), [])))();
  let UserCredentialToSetOfMaterialButton = () => (UserCredentialToSetOfMaterialButton = dart.constFn(dart.fnType(SetOfMaterialButton(), [src__auth.UserCredential])))();
  let LinkedHashSetOfFuture = () => (LinkedHashSetOfFuture = dart.constFn(collection.LinkedHashSet$(async.Future)))();
  let BuildContextToLoginPage = () => (BuildContextToLoginPage = dart.constFn(dart.fnType(pages__LoginPage.LoginPage, [src__widgets__framework.BuildContext])))();
  let SetOfFuture = () => (SetOfFuture = dart.constFn(core.Set$(async.Future)))();
  let VoidToSetOfFuture = () => (VoidToSetOfFuture = dart.constFn(dart.fnType(SetOfFuture(), [])))();
  let dynamicToSetOfvoid = () => (dynamicToSetOfvoid = dart.constFn(dart.fnType(SetOfvoid(), [dart.dynamic])))();
  let JSArrayOfBoxShadow = () => (JSArrayOfBoxShadow = dart.constFn(_interceptors.JSArray$(src__painting__box_shadow.BoxShadow)))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(src__widgets__framework.Widget)))();
  let SetOfString = () => (SetOfString = dart.constFn(core.Set$(core.String)))();
  let FutureOfSetOfString = () => (FutureOfSetOfString = dart.constFn(async.Future$(SetOfString())))();
  let LinkedHashSetOfFutureOfSetOfString = () => (LinkedHashSetOfFutureOfSetOfString = dart.constFn(collection.LinkedHashSet$(FutureOfSetOfString())))();
  let LinkedHashSetOfString = () => (LinkedHashSetOfString = dart.constFn(collection.LinkedHashSet$(core.String)))();
  let UserCredentialToSetOfString = () => (UserCredentialToSetOfString = dart.constFn(dart.fnType(SetOfString(), [src__auth.UserCredential])))();
  let SetOfFutureOfSetOfString = () => (SetOfFutureOfSetOfString = dart.constFn(core.Set$(FutureOfSetOfString())))();
  let VoidToSetOfFutureOfSetOfString = () => (VoidToSetOfFutureOfSetOfString = dart.constFn(dart.fnType(SetOfFutureOfSetOfString(), [])))();
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
  const _loggedIn = dart.privateName(elements__NavBar, "_loggedIn");
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
  let const$53;
  let const$54;
  let const$55;
  let const$56;
  let const$57;
  let const$58;
  let const$59;
  let const$60;
  let const$61;
  let const$62;
  let const$63;
  let const$64;
  let const$65;
  let const$66;
  let const$67;
  let const$68;
  let const$69;
  let const$70;
  let const$71;
  let const$72;
  let const$73;
  let const$74;
  let const$75;
  let const$76;
  let const$77;
  let const$78;
  let const$79;
  const State_TickerProviderStateMixin$ = class State_TickerProviderStateMixin extends src__widgets__framework.State$(elements__NavBar.NavBar) {};
  (State_TickerProviderStateMixin$.new = function() {
    src__widgets__ticker_provider.TickerProviderStateMixin$(elements__NavBar.NavBar)[dart.mixinNew].call(this);
    State_TickerProviderStateMixin$.__proto__.new.call(this);
  }).prototype = State_TickerProviderStateMixin$.prototype;
  dart.applyMixin(State_TickerProviderStateMixin$, src__widgets__ticker_provider.TickerProviderStateMixin$(elements__NavBar.NavBar));
  elements__NavBar.NavBarState = class NavBarState extends State_TickerProviderStateMixin$ {
    build(context) {
      this.widget[_coreStyle] = utilities__Defaults.getTextStyle().copyWith({color: src__material__colors.Colors.white, fontSize: dart.notNull(src__widgets__media_query.MediaQuery.of(context).size.height) * 0.04, fontFamily: "ConcertOne"});
      if (dart.test(html.window.localStorage[$containsKey]("email")) && dart.test(html.window.localStorage[$containsKey]("password"))) {
        utilities__Firebase.Firebase.app.auth().signInWithEmailAndPassword(html.window.localStorage[$_get]("email"), html.window.localStorage[$_get]("password")).then(SetOfMaterialButton(), dart.fn(cred => LinkedHashSetOfMaterialButton().from([this[_loggedIn] = new src__material__material_button.MaterialButton.new({onPressed: dart.fn(() => LinkedHashSetOfvoid().from([core.print("ye")]), VoidToSetOfvoid()), child: new src__widgets__text.Text.new("HI, " + dart.str(cred.user.email), {style: this.widget[_navBarStyle], $creationLocationd_0dea112b090073317d4: const$2 || (const$2 = dart.const(new src__widgets__widget_inspector._Location.new({line: 32, column: 18, file: "org-dartlang-app:///packages/fchs_robotics/elements/NavBar.dart", parameterLocations: const$1 || (const$1 = dart.constList([const$ || (const$ = dart.const(new src__widgets__widget_inspector._Location.new({line: 33, column: 37, name: "data"}))), const$0 || (const$0 = dart.const(new src__widgets__widget_inspector._Location.new({line: 34, column: 13, name: "style"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$6 || (const$6 = dart.const(new src__widgets__widget_inspector._Location.new({line: 28, column: 21, file: "org-dartlang-app:///packages/fchs_robotics/elements/NavBar.dart", parameterLocations: const$5 || (const$5 = dart.constList([const$3 || (const$3 = dart.const(new src__widgets__widget_inspector._Location.new({line: 29, column: 11, name: "onPressed"}))), const$4 || (const$4 = dart.const(new src__widgets__widget_inspector._Location.new({line: 32, column: 11, name: "child"})))], src__widgets__widget_inspector._Location))})))})]), UserCredentialToSetOfMaterialButton())).catchError(dart.fn(err => LinkedHashSetOfvoid().from([core.print(err), this[_loggedIn] = new src__material__material_button.MaterialButton.new({onPressed: dart.fn(() => LinkedHashSetOfFuture().from([src__widgets__navigator.Navigator.push(dart.dynamic, context, new src__material__page.MaterialPageRoute.new({builder: dart.fn(context => new pages__LoginPage.LoginPage.new({$creationLocationd_0dea112b090073317d4: const$8 || (const$8 = dart.const(new src__widgets__widget_inspector._Location.new({line: 42, column: 22, file: "org-dartlang-app:///packages/fchs_robotics/elements/NavBar.dart", parameterLocations: const$7 || (const$7 = dart.constList([], src__widgets__widget_inspector._Location))})))}), BuildContextToLoginPage())}))]), VoidToSetOfFuture()), child: new src__widgets__text.Text.new("LOG IN", {style: this.widget[_navBarStyle], $creationLocationd_0dea112b090073317d4: const$12 || (const$12 = dart.const(new src__widgets__widget_inspector._Location.new({line: 45, column: 18, file: "org-dartlang-app:///packages/fchs_robotics/elements/NavBar.dart", parameterLocations: const$11 || (const$11 = dart.constList([const$9 || (const$9 = dart.const(new src__widgets__widget_inspector._Location.new({line: 46, column: 13, name: "data"}))), const$10 || (const$10 = dart.const(new src__widgets__widget_inspector._Location.new({line: 47, column: 13, name: "style"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$16 || (const$16 = dart.const(new src__widgets__widget_inspector._Location.new({line: 39, column: 21, file: "org-dartlang-app:///packages/fchs_robotics/elements/NavBar.dart", parameterLocations: const$15 || (const$15 = dart.constList([const$13 || (const$13 = dart.const(new src__widgets__widget_inspector._Location.new({line: 40, column: 11, name: "onPressed"}))), const$14 || (const$14 = dart.const(new src__widgets__widget_inspector._Location.new({line: 45, column: 11, name: "child"})))], src__widgets__widget_inspector._Location))})))})]), dynamicToSetOfvoid()));
      } else {
        this[_loggedIn] = new src__material__material_button.MaterialButton.new({onPressed: dart.fn(() => LinkedHashSetOfFuture().from([src__widgets__navigator.Navigator.push(dart.dynamic, context, new src__material__page.MaterialPageRoute.new({builder: dart.fn(context => new pages__LoginPage.LoginPage.new({$creationLocationd_0dea112b090073317d4: const$18 || (const$18 = dart.const(new src__widgets__widget_inspector._Location.new({line: 55, column: 20, file: "org-dartlang-app:///packages/fchs_robotics/elements/NavBar.dart", parameterLocations: const$17 || (const$17 = dart.constList([], src__widgets__widget_inspector._Location))})))}), BuildContextToLoginPage())}))]), VoidToSetOfFuture()), child: new src__widgets__text.Text.new("LOG IN", {style: this.widget[_navBarStyle], $creationLocationd_0dea112b090073317d4: const$22 || (const$22 = dart.const(new src__widgets__widget_inspector._Location.new({line: 58, column: 16, file: "org-dartlang-app:///packages/fchs_robotics/elements/NavBar.dart", parameterLocations: const$21 || (const$21 = dart.constList([const$19 || (const$19 = dart.const(new src__widgets__widget_inspector._Location.new({line: 59, column: 11, name: "data"}))), const$20 || (const$20 = dart.const(new src__widgets__widget_inspector._Location.new({line: 60, column: 11, name: "style"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$26 || (const$26 = dart.const(new src__widgets__widget_inspector._Location.new({line: 52, column: 19, file: "org-dartlang-app:///packages/fchs_robotics/elements/NavBar.dart", parameterLocations: const$25 || (const$25 = dart.constList([const$23 || (const$23 = dart.const(new src__widgets__widget_inspector._Location.new({line: 53, column: 9, name: "onPressed"}))), const$24 || (const$24 = dart.const(new src__widgets__widget_inspector._Location.new({line: 58, column: 9, name: "child"})))], src__widgets__widget_inspector._Location))})))});
      }
      return new src__widgets__basic.Stack.new({children: JSArrayOfWidget().of([new src__widgets__container.Container.new({width: src__widgets__media_query.MediaQuery.of(context).size.width, height: 100.0, decoration: new src__painting__box_decoration.BoxDecoration.new({boxShadow: JSArrayOfBoxShadow().of([new src__painting__box_shadow.BoxShadow.new({blurRadius: 5.0})]), color: new ui$.Color.fromRGBO(8, 87, 33, 1.0)}), child: new src__widgets__basic.Column.new({mainAxisAlignment: src__rendering__flex.MainAxisAlignment.end, children: JSArrayOfWidget().of([new src__widgets__basic.Row.new({mainAxisAlignment: src__rendering__flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new src__widgets__basic.Wrap.new({spacing: 260.0, children: JSArrayOfWidget().of([new src__widgets__text.Text.new("FALLS CHURCH", {style: this.widget[_coreStyle], $creationLocationd_0dea112b090073317d4: const$30 || (const$30 = dart.const(new src__widgets__widget_inspector._Location.new({line: 79, column: 23, file: "org-dartlang-app:///packages/fchs_robotics/elements/NavBar.dart", parameterLocations: const$29 || (const$29 = dart.constList([const$27 || (const$27 = dart.const(new src__widgets__widget_inspector._Location.new({line: 79, column: 28, name: "data"}))), const$28 || (const$28 = dart.const(new src__widgets__widget_inspector._Location.new({line: 79, column: 44, name: "style"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__text.Text.new("ROBOTICS CLUB", {style: this.widget[_coreStyle], $creationLocationd_0dea112b090073317d4: const$34 || (const$34 = dart.const(new src__widgets__widget_inspector._Location.new({line: 80, column: 23, file: "org-dartlang-app:///packages/fchs_robotics/elements/NavBar.dart", parameterLocations: const$33 || (const$33 = dart.constList([const$31 || (const$31 = dart.const(new src__widgets__widget_inspector._Location.new({line: 80, column: 28, name: "data"}))), const$32 || (const$32 = dart.const(new src__widgets__widget_inspector._Location.new({line: 80, column: 45, name: "style"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$38 || (const$38 = dart.const(new src__widgets__widget_inspector._Location.new({line: 76, column: 19, file: "org-dartlang-app:///packages/fchs_robotics/elements/NavBar.dart", parameterLocations: const$37 || (const$37 = dart.constList([const$35 || (const$35 = dart.const(new src__widgets__widget_inspector._Location.new({line: 77, column: 21, name: "spacing"}))), const$36 || (const$36 = dart.const(new src__widgets__widget_inspector._Location.new({line: 78, column: 21, name: "children"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$42 || (const$42 = dart.const(new src__widgets__widget_inspector._Location.new({line: 73, column: 15, file: "org-dartlang-app:///packages/fchs_robotics/elements/NavBar.dart", parameterLocations: const$41 || (const$41 = dart.constList([const$39 || (const$39 = dart.const(new src__widgets__widget_inspector._Location.new({line: 74, column: 17, name: "mainAxisAlignment"}))), const$40 || (const$40 = dart.const(new src__widgets__widget_inspector._Location.new({line: 75, column: 17, name: "children"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$46 || (const$46 = dart.const(new src__widgets__widget_inspector._Location.new({line: 70, column: 18, file: "org-dartlang-app:///packages/fchs_robotics/elements/NavBar.dart", parameterLocations: const$45 || (const$45 = dart.constList([const$43 || (const$43 = dart.const(new src__widgets__widget_inspector._Location.new({line: 71, column: 13, name: "mainAxisAlignment"}))), const$44 || (const$44 = dart.const(new src__widgets__widget_inspector._Location.new({line: 72, column: 13, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$52 || (const$52 = dart.const(new src__widgets__widget_inspector._Location.new({line: 66, column: 9, file: "org-dartlang-app:///packages/fchs_robotics/elements/NavBar.dart", parameterLocations: const$51 || (const$51 = dart.constList([const$47 || (const$47 = dart.const(new src__widgets__widget_inspector._Location.new({line: 67, column: 11, name: "width"}))), const$48 || (const$48 = dart.const(new src__widgets__widget_inspector._Location.new({line: 68, column: 11, name: "height"}))), const$49 || (const$49 = dart.const(new src__widgets__widget_inspector._Location.new({line: 69, column: 11, name: "decoration"}))), const$50 || (const$50 = dart.const(new src__widgets__widget_inspector._Location.new({line: 70, column: 11, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__container.Container.new({width: src__widgets__media_query.MediaQuery.of(context).size.width, height: 55.0, decoration: new src__painting__box_decoration.BoxDecoration.new({boxShadow: JSArrayOfBoxShadow().of([new src__painting__box_shadow.BoxShadow.new({blurRadius: 5.0})]), color: src__material__colors.Colors.green}), child: new src__widgets__basic.Row.new({children: JSArrayOfWidget().of([this[_loggedIn]]), $creationLocationd_0dea112b090073317d4: const$55 || (const$55 = dart.const(new src__widgets__widget_inspector._Location.new({line: 92, column: 18, file: "org-dartlang-app:///packages/fchs_robotics/elements/NavBar.dart", parameterLocations: const$54 || (const$54 = dart.constList([const$53 || (const$53 = dart.const(new src__widgets__widget_inspector._Location.new({line: 93, column: 13, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$61 || (const$61 = dart.const(new src__widgets__widget_inspector._Location.new({line: 88, column: 9, file: "org-dartlang-app:///packages/fchs_robotics/elements/NavBar.dart", parameterLocations: const$60 || (const$60 = dart.constList([const$56 || (const$56 = dart.const(new src__widgets__widget_inspector._Location.new({line: 89, column: 11, name: "width"}))), const$57 || (const$57 = dart.const(new src__widgets__widget_inspector._Location.new({line: 90, column: 11, name: "height"}))), const$58 || (const$58 = dart.const(new src__widgets__widget_inspector._Location.new({line: 91, column: 11, name: "decoration"}))), const$59 || (const$59 = dart.const(new src__widgets__widget_inspector._Location.new({line: 92, column: 11, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.Align.new({alignment: src__painting__alignment.Alignment.topCenter, child: new src__widgets__container.Container.new({alignment: src__painting__alignment.Alignment.topCenter, width: dart.notNull(src__widgets__media_query.MediaQuery.of(context).size.width) * 0.1, height: dart.notNull(src__widgets__media_query.MediaQuery.of(context).size.height) * 0.13, decoration: new src__painting__box_decoration.BoxDecoration.new({boxShadow: JSArrayOfBoxShadow().of([new src__painting__box_shadow.BoxShadow.new({blurRadius: 5.0})]), color: src__material__colors.Colors.green}), child: new src__widgets__text.Text.new("Navbar here", {style: this.widget[_navBarStyle], $creationLocationd_0dea112b090073317d4: const$65 || (const$65 = dart.const(new src__widgets__widget_inspector._Location.new({line: 105, column: 20, file: "org-dartlang-app:///packages/fchs_robotics/elements/NavBar.dart", parameterLocations: const$64 || (const$64 = dart.constList([const$62 || (const$62 = dart.const(new src__widgets__widget_inspector._Location.new({line: 105, column: 25, name: "data"}))), const$63 || (const$63 = dart.const(new src__widgets__widget_inspector._Location.new({line: 105, column: 40, name: "style"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$72 || (const$72 = dart.const(new src__widgets__widget_inspector._Location.new({line: 100, column: 18, file: "org-dartlang-app:///packages/fchs_robotics/elements/NavBar.dart", parameterLocations: const$71 || (const$71 = dart.constList([const$66 || (const$66 = dart.const(new src__widgets__widget_inspector._Location.new({line: 101, column: 13, name: "alignment"}))), const$67 || (const$67 = dart.const(new src__widgets__widget_inspector._Location.new({line: 102, column: 13, name: "width"}))), const$68 || (const$68 = dart.const(new src__widgets__widget_inspector._Location.new({line: 103, column: 13, name: "height"}))), const$69 || (const$69 = dart.const(new src__widgets__widget_inspector._Location.new({line: 104, column: 13, name: "decoration"}))), const$70 || (const$70 = dart.const(new src__widgets__widget_inspector._Location.new({line: 105, column: 13, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$76 || (const$76 = dart.const(new src__widgets__widget_inspector._Location.new({line: 98, column: 9, file: "org-dartlang-app:///packages/fchs_robotics/elements/NavBar.dart", parameterLocations: const$75 || (const$75 = dart.constList([const$73 || (const$73 = dart.const(new src__widgets__widget_inspector._Location.new({line: 99, column: 11, name: "alignment"}))), const$74 || (const$74 = dart.const(new src__widgets__widget_inspector._Location.new({line: 100, column: 11, name: "child"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$79 || (const$79 = dart.const(new src__widgets__widget_inspector._Location.new({line: 64, column: 12, file: "org-dartlang-app:///packages/fchs_robotics/elements/NavBar.dart", parameterLocations: const$78 || (const$78 = dart.constList([const$77 || (const$77 = dart.const(new src__widgets__widget_inspector._Location.new({line: 65, column: 7, name: "children"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (elements__NavBar.NavBarState.new = function() {
    this[_loggedIn] = null;
    elements__NavBar.NavBarState.__proto__.new.call(this);
    ;
  }).prototype = elements__NavBar.NavBarState.prototype;
  dart.addTypeTests(elements__NavBar.NavBarState);
  dart.setMethodSignature(elements__NavBar.NavBarState, () => ({
    __proto__: dart.getMethods(elements__NavBar.NavBarState.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(elements__NavBar.NavBarState, "package:fchs_robotics/elements/NavBar.dart");
  dart.setFieldSignature(elements__NavBar.NavBarState, () => ({
    __proto__: dart.getFields(elements__NavBar.NavBarState.__proto__),
    [_loggedIn]: dart.fieldType(src__widgets__framework.Widget)
  }));
  const _c1 = dart.privateName(pages__LoginPage, "_c1");
  const _c2 = dart.privateName(pages__LoginPage, "_c2");
  let const$80;
  let const$81;
  let const$82;
  let const$83;
  let const$84;
  let const$85;
  let const$86;
  let const$87;
  let const$88;
  let const$89;
  let const$90;
  let const$91;
  let const$92;
  let const$93;
  let const$94;
  let const$95;
  let const$96;
  let const$97;
  let const$98;
  let const$99;
  let const$100;
  let const$101;
  let const$102;
  let const$103;
  let const$104;
  let const$105;
  let const$106;
  let const$107;
  let const$108;
  let const$109;
  let const$110;
  pages__LoginPage.LoginPage = class LoginPage extends src__widgets__framework.StatelessWidget {
    build(context) {
      return new src__material__scaffold.Scaffold.new({backgroundColor: src__material__colors.Colors.white10, body: new src__widgets__basic.Column.new({children: JSArrayOfWidget().of([new elements__NavBar.NavBar.new({$creationLocationd_0dea112b090073317d4: const$81 || (const$81 = dart.const(new src__widgets__widget_inspector._Location.new({line: 19, column: 13, file: "org-dartlang-app:///packages/fchs_robotics/pages/LoginPage.dart", parameterLocations: const$80 || (const$80 = dart.constList([], src__widgets__widget_inspector._Location))})))}), new src__widgets__text.Text.new("LOGIN:", {$creationLocationd_0dea112b090073317d4: const$84 || (const$84 = dart.const(new src__widgets__widget_inspector._Location.new({line: 20, column: 13, file: "org-dartlang-app:///packages/fchs_robotics/pages/LoginPage.dart", parameterLocations: const$83 || (const$83 = dart.constList([const$82 || (const$82 = dart.const(new src__widgets__widget_inspector._Location.new({line: 20, column: 18, name: "data"})))], src__widgets__widget_inspector._Location))})))}), new src__material__text_field.TextField.new({style: utilities__Defaults.getTextStyle(), controller: this[_c1], enableInteractiveSelection: true, keyboardType: src__services__text_input.TextInputType.emailAddress, $creationLocationd_0dea112b090073317d4: const$90 || (const$90 = dart.const(new src__widgets__widget_inspector._Location.new({line: 21, column: 13, file: "org-dartlang-app:///packages/fchs_robotics/pages/LoginPage.dart", parameterLocations: const$89 || (const$89 = dart.constList([const$85 || (const$85 = dart.const(new src__widgets__widget_inspector._Location.new({line: 21, column: 23, name: "style"}))), const$86 || (const$86 = dart.const(new src__widgets__widget_inspector._Location.new({line: 21, column: 45, name: "controller"}))), const$87 || (const$87 = dart.const(new src__widgets__widget_inspector._Location.new({line: 21, column: 61, name: "enableInteractiveSelection"}))), const$88 || (const$88 = dart.const(new src__widgets__widget_inspector._Location.new({line: 21, column: 95, name: "keyboardType"})))], src__widgets__widget_inspector._Location))})))}), new src__material__text_field.TextField.new({style: utilities__Defaults.getTextStyle(), controller: this[_c2], enableInteractiveSelection: true, $creationLocationd_0dea112b090073317d4: const$95 || (const$95 = dart.const(new src__widgets__widget_inspector._Location.new({line: 22, column: 13, file: "org-dartlang-app:///packages/fchs_robotics/pages/LoginPage.dart", parameterLocations: const$94 || (const$94 = dart.constList([const$91 || (const$91 = dart.const(new src__widgets__widget_inspector._Location.new({line: 22, column: 23, name: "style"}))), const$92 || (const$92 = dart.const(new src__widgets__widget_inspector._Location.new({line: 22, column: 45, name: "controller"}))), const$93 || (const$93 = dart.const(new src__widgets__widget_inspector._Location.new({line: 22, column: 61, name: "enableInteractiveSelection"})))], src__widgets__widget_inspector._Location))})))}), new src__material__material_button.MaterialButton.new({onPressed: dart.fn(() => LinkedHashSetOfFutureOfSetOfString().from([utilities__Firebase.Firebase.app.auth().signInWithEmailAndPassword(this[_c1].value.text, this[_c2].value.text).then(SetOfString(), dart.fn(cred => {
                  let t2, t1, t0, t2$, t1$, t0$;
                  return LinkedHashSetOfString().from([(t0 = html.window.localStorage, t1 = "email", t2 = this[_c1].value.text, t0[$_set](t1, t2), t2), (t0$ = html.window.localStorage, t1$ = "password", t2$ = this[_c2].value.text, t0$[$_set](t1$, t2$), t2$)]);
                }, UserCredentialToSetOfString()))]), VoidToSetOfFutureOfSetOfString()), child: new src__widgets__text.Text.new("LOGIN", {style: utilities__Defaults.getTextStyle(), $creationLocationd_0dea112b090073317d4: const$99 || (const$99 = dart.const(new src__widgets__widget_inspector._Location.new({line: 30, column: 22, file: "org-dartlang-app:///packages/fchs_robotics/pages/LoginPage.dart", parameterLocations: const$98 || (const$98 = dart.constList([const$96 || (const$96 = dart.const(new src__widgets__widget_inspector._Location.new({line: 30, column: 27, name: "data"}))), const$97 || (const$97 = dart.const(new src__widgets__widget_inspector._Location.new({line: 30, column: 36, name: "style"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$103 || (const$103 = dart.const(new src__widgets__widget_inspector._Location.new({line: 23, column: 13, file: "org-dartlang-app:///packages/fchs_robotics/pages/LoginPage.dart", parameterLocations: const$102 || (const$102 = dart.constList([const$100 || (const$100 = dart.const(new src__widgets__widget_inspector._Location.new({line: 24, column: 15, name: "onPressed"}))), const$101 || (const$101 = dart.const(new src__widgets__widget_inspector._Location.new({line: 30, column: 15, name: "child"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$106 || (const$106 = dart.const(new src__widgets__widget_inspector._Location.new({line: 17, column: 15, file: "org-dartlang-app:///packages/fchs_robotics/pages/LoginPage.dart", parameterLocations: const$105 || (const$105 = dart.constList([const$104 || (const$104 = dart.const(new src__widgets__widget_inspector._Location.new({line: 18, column: 11, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$110 || (const$110 = dart.const(new src__widgets__widget_inspector._Location.new({line: 15, column: 12, file: "org-dartlang-app:///packages/fchs_robotics/pages/LoginPage.dart", parameterLocations: const$109 || (const$109 = dart.constList([const$107 || (const$107 = dart.const(new src__widgets__widget_inspector._Location.new({line: 16, column: 9, name: "backgroundColor"}))), const$108 || (const$108 = dart.const(new src__widgets__widget_inspector._Location.new({line: 17, column: 9, name: "body"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (pages__LoginPage.LoginPage.new = function(opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[_c1] = new src__widgets__editable_text.TextEditingController.new();
    this[_c2] = new src__widgets__editable_text.TextEditingController.new();
    pages__LoginPage.LoginPage.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = pages__LoginPage.LoginPage.prototype;
  dart.addTypeTests(pages__LoginPage.LoginPage);
  dart.setMethodSignature(pages__LoginPage.LoginPage, () => ({
    __proto__: dart.getMethods(pages__LoginPage.LoginPage.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(pages__LoginPage.LoginPage, "package:fchs_robotics/pages/LoginPage.dart");
  dart.setFieldSignature(pages__LoginPage.LoginPage, () => ({
    __proto__: dart.getFields(pages__LoginPage.LoginPage.__proto__),
    [_c1]: dart.fieldType(src__widgets__editable_text.TextEditingController),
    [_c2]: dart.fieldType(src__widgets__editable_text.TextEditingController)
  }));
  dart.trackLibraries("packages/fchs_robotics/elements/NavBar", {
    "package:fchs_robotics/elements/NavBar.dart": elements__NavBar,
    "package:fchs_robotics/pages/LoginPage.dart": pages__LoginPage
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/fchs_robotics/elements/NavBar.dart","org-dartlang-app:///packages/fchs_robotics/pages/LoginPage.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAaI,YAAO;IACT;;;;IANgB,qBAAe,AAAe,oDAAuB;IAC3D;;;EAOZ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAO4B;MACxB,AAAO,0BAAa,AAAe,oDAAuB,8CAAmD,aAAvB,AAAY,AAAK,wCAAd,OAAO,iBAAc,kBAAkB;AAChI,oBAAG,AAAO,AAAa,uCAAY,uBAAY,AAAO,AAAa,uCAAY;QACpE,AAAI,AAAO,AAA0F,AAU3G,mEAV4C,AAAO,AAAY,gCAAC,UAAU,AAAO,AAAY,gCAAC,yCAAkB,QAAC,QAAS,sCAC3H,kBAAY,kEACC,cAAM,4BACf,WAAM,oCAED,gCACL,AAAwB,kBAAjB,AAAK,AAAK,IAAN,sBACH,AAAO,+sCAGP,QAAC,OAAQ,4BACrB,WAAM,GAAG,GACT,kBAAY,kEACC,cAAM,8BACL,qDAAK,OAAO,EAAE,wDAA2B,QAAC,WAC3C,2aAGJ,gCACL,kBACQ,AAAO;;QAKrB,kBAAY,kEACC,cAAM,8BACL,qDAAK,OAAO,EAAE,wDAA2B,QAAC,WAC3C,+aAGJ,gCACL,kBACQ,AAAO;;AAIrB,YAAO,8CACa,sBAChB,kDACoB,AAAY,AAAK,wCAAd,OAAO,sBACpB,mBACI,gEAAyB,yBAAC,yDAAsB,gBAAoB,uBAAS,GAAG,IAAI,IAAI,eAC7F,uDACgC,sDACnB,sBAChB,oDACuC,yDACnB,sBAChB,2CACW,iBACS,sBAChB,gCAAK,wBAAuB,AAAO,+lBACnC,gCAAK,yBAAwB,AAAO,qqGAQlD,kDACoB,AAAY,AAAK,wCAAd,OAAO,sBACpB,kBACI,gEAAyB,yBAAC,yDAAsB,gBAAqB,6CAC1E,2CACa,sBAChB,uyCAIN,8CACuB,qDACd,sDACgB,qDACmB,aAAtB,AAAY,AAAK,wCAAd,OAAO,gBAAa,aACC,aAAvB,AAAY,AAAK,wCAAd,OAAO,iBAAc,kBAC/B,gEAAyB,yBAAC,yDAAsB,gBAAqB,6CAC1E,gCAAK,uBAAsB,AAAO;IAKnD;;;IAzFO;;;EA2FT;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UClG4B;AACxB,YAAO,4DACqB,4CAClB,8CACc,sBAChB,8WACA,gCAAK,mdACL,oDAAiB,gDAA2B,uCAAgC,oBAAkC,05BAC9G,oDAAiB,gDAA2B,uCAAgC,quBAC5E,kEACa,cAAM,2CACN,AAAI,AAAO,AAA2D,mEAAhC,AAAI,AAAM,sBAAM,AAAI,AAAM,0CAAW,QAAC;;AAAS,wDACzE,KAAnB,AAAO,0BAAY,KAAC,cAAW,AAAI,AAAM,sBAAtB,yBACA,MAAnB,AAAO,0BAAY,MAAC,kBAAc,AAAI,AAAM,sBAAzB;gGAGhB,gCAAK,iBAAgB;IAKxC;;;;IAzBsB,YAAM;IACN,YAAM;;;EA0B9B","file":"NavBar.ddc.js"}');
  // Exports:
  return {
    elements__NavBar: elements__NavBar,
    pages__LoginPage: pages__LoginPage
  };
});

//# sourceMappingURL=NavBar.ddc.js.map
