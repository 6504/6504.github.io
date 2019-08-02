define(['dart_sdk', 'packages/firebase/src/app'], function(dart_sdk, app) {
  'use strict';
  const core = dart_sdk.core;
  const js_util = dart_sdk.js_util;
  const async = dart_sdk.async;
  const js = dart_sdk.js;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__app = app.src__app;
  const src__auth = app.src__auth;
  const src__database = app.src__database;
  const src__storage = app.src__storage;
  const src__firestore = app.src__firestore;
  const src__utils = app.src__utils;
  const src__js = app.src__js;
  const src__top_level = Object.create(dart.library);
  const src__messaging = Object.create(dart.library);
  const firebase = Object.create(dart.library);
  const $map = dartx.map;
  const $toList = dartx.toList;
  let dynamicToApp = () => (dynamicToApp = dart.constFn(dart.fnType(src__app.App, [dart.dynamic])))();
  let ObjectTodynamic = () => (ObjectTodynamic = dart.constFn(dart.fnType(dart.dynamic, [core.Object])))();
  let StreamControllerOfPayload = () => (StreamControllerOfPayload = dart.constFn(async.StreamController$(src__messaging.Payload)))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let StreamControllerOfNull = () => (StreamControllerOfNull = dart.constFn(async.StreamController$(core.Null)))();
  let StreamOfNull = () => (StreamOfNull = dart.constFn(async.Stream$(core.Null)))();
  let ExpandoOfMessaging = () => (ExpandoOfMessaging = dart.constFn(core.Expando$(src__messaging.Messaging)))();
  let MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  src__top_level.FirebaseJsNotLoadedException = class FirebaseJsNotLoadedException extends core.Object {
    get message() {
      return this[message$];
    }
    set message(value) {
      super.message = value;
    }
    toString() {
      return "FirebaseJsNotLoadedException: " + dart.str(this.message);
    }
  };
  (src__top_level.FirebaseJsNotLoadedException.new = function(message) {
    this[message$] = message;
    ;
  }).prototype = src__top_level.FirebaseJsNotLoadedException.prototype;
  dart.addTypeTests(src__top_level.FirebaseJsNotLoadedException);
  const message$ = Symbol("FirebaseJsNotLoadedException.message");
  src__top_level.FirebaseJsNotLoadedException[dart.implements] = () => [core.Exception];
  dart.setLibraryUri(src__top_level.FirebaseJsNotLoadedException, "package:firebase/src/top_level.dart");
  dart.setFieldSignature(src__top_level.FirebaseJsNotLoadedException, () => ({
    __proto__: dart.getFields(src__top_level.FirebaseJsNotLoadedException.__proto__),
    message: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(src__top_level.FirebaseJsNotLoadedException, ['toString']);
  src__top_level.initializeApp = function(opts) {
    let apiKey = opts && 'apiKey' in opts ? opts.apiKey : null;
    let authDomain = opts && 'authDomain' in opts ? opts.authDomain : null;
    let databaseURL = opts && 'databaseURL' in opts ? opts.databaseURL : null;
    let projectId = opts && 'projectId' in opts ? opts.projectId : null;
    let storageBucket = opts && 'storageBucket' in opts ? opts.storageBucket : null;
    let messagingSenderId = opts && 'messagingSenderId' in opts ? opts.messagingSenderId : null;
    let name = opts && 'name' in opts ? opts.name : null;
    name == null ? name = src__top_level._defaultAppName : null;
    try {
      return src__app.App.getInstance(dart.global.firebase.initializeApp({apiKey: apiKey, authDomain: authDomain, databaseURL: databaseURL, projectId: projectId, storageBucket: storageBucket, messagingSenderId: messagingSenderId}, name));
    } catch (e$) {
      let e = dart.getThrown(e$);
      if (dart.test(src__top_level._firebaseNotLoaded(e))) {
        dart.throw(new src__top_level.FirebaseJsNotLoadedException.new("firebase.js must be loaded."));
      }
      dart.rethrow(e$);
    }
  };
  src__top_level.app = function(name) {
    if (name === void 0) name = null;
    let jsObject = name != null ? dart.global.firebase.app(name) : dart.global.firebase.app();
    return src__app.App.getInstance(jsObject);
  };
  src__top_level.auth = function(app) {
    if (app === void 0) app = null;
    let jsObject = app != null ? dart.global.firebase.auth(app.jsObject) : dart.global.firebase.auth();
    return src__auth.Auth.getInstance(jsObject);
  };
  src__top_level.database = function(app) {
    if (app === void 0) app = null;
    let jsObject = app != null ? dart.global.firebase.database(app.jsObject) : dart.global.firebase.database();
    return src__database.Database.getInstance(jsObject);
  };
  src__top_level.storage = function(app) {
    if (app === void 0) app = null;
    let jsObject = app != null ? dart.global.firebase.storage(app.jsObject) : dart.global.firebase.storage();
    return src__storage.Storage.getInstance(jsObject);
  };
  src__top_level.firestore = function(app) {
    if (app === void 0) app = null;
    let jsObject = app != null ? dart.global.firebase.firestore(app.jsObject) : dart.global.firebase.firestore();
    return src__firestore.Firestore.getInstance(jsObject);
  };
  src__top_level.messaging = function(app) {
    if (app === void 0) app = null;
    let jsObject = app != null ? dart.global.firebase.messaging(app.jsObject) : dart.global.firebase.messaging();
    return src__messaging.Messaging.getInstance(jsObject);
  };
  src__top_level._firebaseNotLoaded = function(error) {
    if (core.NoSuchMethodError.is(error)) {
      return true;
    }
    if (dart.dtest(js_util.hasProperty(error, "message"))) {
      let message = js_util.getProperty(error, "message");
      return dart.equals(message, "firebase is not defined") || dart.equals(message, "Can't find variable: firebase");
    }
    return false;
  };
  dart.copyProperties(src__top_level, {
    get apps() {
      return dart.global.firebase.apps[$map](src__app.App, dart.fn(e => src__app.App.getInstance(dart.lazyJSType(() => dart.global.firebase.app.App, "firebase.app.App")._check(e)), dynamicToApp()))[$toList]();
    }
  });
  dart.defineLazy(src__top_level, {
    /*src__top_level._defaultAppName*/get _defaultAppName() {
      return "[DEFAULT]";
    }
  });
  const _onMessageController = dart.privateName(src__messaging, "_onMessageController");
  const _onTokenRefresh = dart.privateName(src__messaging, "_onTokenRefresh");
  const _onBackgroundMessage = dart.privateName(src__messaging, "_onBackgroundMessage");
  const _createOnMessageStream = dart.privateName(src__messaging, "_createOnMessageStream");
  const _createBackgroundMessagedStream = dart.privateName(src__messaging, "_createBackgroundMessagedStream");
  const _createNullStream = dart.privateName(src__messaging, "_createNullStream");
  src__messaging.Messaging = class Messaging extends src__js.JsObjectWrapper$(dart.lazyJSType(() => dart.global.firebase.messaging.Messaging, "firebase.messaging.Messaging")) {
    static getInstance(jsObject) {
      let t4, t3, t2, t1;
      if (jsObject == null) {
        return null;
      }
      t1 = src__messaging.Messaging._expando;
      t2 = jsObject;
      t3 = t1._get(t2);
      return t3 == null ? (t4 = new src__messaging.Messaging._fromJsObject(jsObject), t1._set(t2, t4), t4) : t3;
    }
    usePublicVapidKey(key) {
      this.jsObject.usePublicVapidKey(key);
    }
    useServiceWorker(registration) {
      this.jsObject.useServiceWorker(registration);
    }
    deleteToken(token) {
      this.jsObject.deleteToken(token);
    }
    requestPermission() {
      return async.async(dart.dynamic, (function* requestPermission() {
        yield src__utils.handleThenable(dart.dynamic, this.jsObject.requestPermission()).then(dart.dynamic, dart.fn(src__utils.dartify, ObjectTodynamic()));
      }).bind(this));
    }
    getToken() {
      return src__utils.handleThenable(core.String, this.jsObject.getToken());
    }
    get onMessage() {
      return this[_createOnMessageStream](this[_onMessageController]);
    }
    get onBackgroundMessage() {
      return this[_createBackgroundMessagedStream](this[_onBackgroundMessage]);
    }
    get onTokenRefresh() {
      return this[_createNullStream](this[_onTokenRefresh]);
    }
    [_createOnMessageStream](controller) {
      if (controller == null) {
        controller = StreamControllerOfPayload().broadcast({sync: true});
        let nextWrapper = js.allowInterop(dynamicToNull(), dart.fn(payload => {
          controller.add(new src__messaging.Payload._fromJsObject(dart.anonymousJSType("PayloadJsImpl")._check(payload)));
        }, dynamicToNull()));
        let errorWrapper = js.allowInterop(dynamicToNull(), dart.fn(e => {
          controller.addError(e);
        }, dynamicToNull()));
        this.jsObject.onMessage(nextWrapper, errorWrapper);
      }
      return controller.stream;
    }
    [_createBackgroundMessagedStream](controller) {
      if (controller == null) {
        controller = StreamControllerOfPayload().broadcast({sync: true});
        let nextWrapper = js.allowInterop(dynamicToNull(), dart.fn(payload => {
          controller.add(new src__messaging.Payload._fromJsObject(dart.anonymousJSType("PayloadJsImpl")._check(payload)));
        }, dynamicToNull()));
        this.jsObject.setBackgroundMessageHandler(nextWrapper);
      }
      return controller.stream;
    }
    [_createNullStream](controller) {
      if (controller == null) {
        let nextWrapper = js.allowInterop(dynamicToNull(), dart.fn(_ => null, dynamicToNull()));
        let errorWrapper = js.allowInterop(dynamicToNull(), dart.fn(e => {
          controller.addError(e);
        }, dynamicToNull()));
        let onSnapshotUnsubscribe = null;
        const startListen = () => {
          onSnapshotUnsubscribe = this.jsObject.onTokenRefresh(nextWrapper, errorWrapper);
        };
        dart.fn(startListen, VoidTovoid());
        function stopListen() {
          onSnapshotUnsubscribe();
          onSnapshotUnsubscribe = null;
        }
        dart.fn(stopListen, VoidTovoid());
        controller = StreamControllerOfNull().broadcast({onListen: startListen, onCancel: stopListen, sync: true});
      }
      return StreamOfNull()._check(controller.stream);
    }
  };
  (src__messaging.Messaging._fromJsObject = function(jsObject) {
    this[_onMessageController] = null;
    this[_onTokenRefresh] = null;
    this[_onBackgroundMessage] = null;
    src__messaging.Messaging.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = src__messaging.Messaging.prototype;
  dart.addTypeTests(src__messaging.Messaging);
  dart.setMethodSignature(src__messaging.Messaging, () => ({
    __proto__: dart.getMethods(src__messaging.Messaging.__proto__),
    usePublicVapidKey: dart.fnType(dart.void, [core.String]),
    useServiceWorker: dart.fnType(dart.void, [dart.dynamic]),
    deleteToken: dart.fnType(dart.void, [core.String]),
    requestPermission: dart.fnType(async.Future, []),
    getToken: dart.fnType(async.Future$(core.String), []),
    [_createOnMessageStream]: dart.fnType(async.Stream$(src__messaging.Payload), [async.StreamController$(src__messaging.Payload)]),
    [_createBackgroundMessagedStream]: dart.fnType(async.Stream$(src__messaging.Payload), [async.StreamController$(src__messaging.Payload)]),
    [_createNullStream]: dart.fnType(async.Stream$(core.Null), [async.StreamController])
  }));
  dart.setGetterSignature(src__messaging.Messaging, () => ({
    __proto__: dart.getGetters(src__messaging.Messaging.__proto__),
    onMessage: async.Stream$(src__messaging.Payload),
    onBackgroundMessage: async.Stream$(src__messaging.Payload),
    onTokenRefresh: async.Stream$(core.Null)
  }));
  dart.setLibraryUri(src__messaging.Messaging, "package:firebase/src/messaging.dart");
  dart.setFieldSignature(src__messaging.Messaging, () => ({
    __proto__: dart.getFields(src__messaging.Messaging.__proto__),
    [_onMessageController]: dart.fieldType(async.StreamController$(src__messaging.Payload)),
    [_onTokenRefresh]: dart.fieldType(async.StreamController$(core.Null)),
    [_onBackgroundMessage]: dart.fieldType(async.StreamController$(src__messaging.Payload))
  }));
  dart.defineLazy(src__messaging.Messaging, {
    /*src__messaging.Messaging._expando*/get _expando() {
      return new (ExpandoOfMessaging()).new();
    }
  });
  src__messaging.Notification = class Notification extends src__js.JsObjectWrapper$(dart.anonymousJSType("NotificationJsImpl")) {
    get title() {
      return this.jsObject.title;
    }
    get body() {
      return this.jsObject.body;
    }
    get clickAction() {
      return this.jsObject.click_action;
    }
    get icon() {
      return this.jsObject.icon;
    }
  };
  (src__messaging.Notification._fromJsObject = function(jsObject) {
    src__messaging.Notification.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = src__messaging.Notification.prototype;
  dart.addTypeTests(src__messaging.Notification);
  dart.setGetterSignature(src__messaging.Notification, () => ({
    __proto__: dart.getGetters(src__messaging.Notification.__proto__),
    title: core.String,
    body: core.String,
    clickAction: core.String,
    icon: core.String
  }));
  dart.setLibraryUri(src__messaging.Notification, "package:firebase/src/messaging.dart");
  src__messaging.Payload = class Payload extends src__js.JsObjectWrapper$(dart.anonymousJSType("PayloadJsImpl")) {
    get notification() {
      return new src__messaging.Notification._fromJsObject(this.jsObject.notification);
    }
    get collapseKey() {
      return this.jsObject.collapse_key;
    }
    get from() {
      return this.jsObject.from;
    }
    get data() {
      return MapOfString$dynamic()._check(src__utils.dartify(this.jsObject.data));
    }
  };
  (src__messaging.Payload._fromJsObject = function(jsObject) {
    src__messaging.Payload.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = src__messaging.Payload.prototype;
  dart.addTypeTests(src__messaging.Payload);
  dart.setGetterSignature(src__messaging.Payload, () => ({
    __proto__: dart.getGetters(src__messaging.Payload.__proto__),
    notification: src__messaging.Notification,
    collapseKey: core.String,
    from: core.String,
    data: core.Map$(core.String, dart.dynamic)
  }));
  dart.setLibraryUri(src__messaging.Payload, "package:firebase/src/messaging.dart");
  dart.trackLibraries("packages/firebase/firebase", {
    "package:firebase/src/top_level.dart": src__top_level,
    "package:firebase/src/messaging.dart": src__messaging,
    "package:firebase/firebase.dart": firebase
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/firebase/src/top_level.dart","org-dartlang-app:///packages/firebase/src/messaging.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA8He;;;;;;;AAIQ,YAAA,AAAwC,6CAAR;IAAQ;;;IAH3B;;EAAQ;;;;;;;;;;;QAlGhC;QACD;QACA;QACA;QACA;QACA;QACA;IACT,AAAK,IAAD,IAAC,OAAL,OAAS,iCAAJ;;AAGH,YAAW,0BAAY,mCACV,SACG,MAAM,cACF,UAAU,eACT,WAAW,aACb,SAAS,iBACL,aAAa,qBACT,iBAAiB,GACxC,IAAI;;UACD;AACP,oBAAI,kCAAmB,CAAC;QACtB,WAAM,oDAA6B;;MAGrC;;EAEJ;gCAWgB;;AACV,mBAAY,AAAc,IAAV,IAAI,OAAQ,yBAAa,IAAI,IAAI;AAErD,UAAW,0BAAY,QAAQ;EACjC;iCAKe;;AACT,mBAAY,AAAa,GAAV,IAAI,OAAQ,0BAAc,AAAI,GAAD,aAAa;AAE7D,UAAY,4BAAY,QAAQ;EAClC;qCAQuB;;AACjB,mBACC,AAAa,GAAV,IAAI,OAAQ,8BAAkB,AAAI,GAAD,aAAa;AAEtD,UAAgB,oCAAY,QAAQ;EACtC;oCAQqB;;AACf,mBACC,AAAa,GAAV,IAAI,OAAQ,6BAAiB,AAAI,GAAD,aAAa;AAErD,UAAe,kCAAY,QAAQ;EACrC;sCAKyB;;AACnB,mBACC,AAAa,GAAV,IAAI,OAAQ,+BAAmB,AAAI,GAAD,aAAa;AAEvD,UAAiB,sCAAY,QAAQ;EACvC;sCAEyB;;AACnB,mBACC,AAAa,GAAV,IAAI,OAAQ,+BAAmB,AAAI,GAAD,aAAa;AAEvD,UAAiB,sCAAY,QAAQ;EACvC;+CAWwB;AACtB,QAAU,0BAAN,KAAK;AACP,YAAO;;AAGT,mBAAI,oBAAe,KAAK,EAAE;AACpB,oBAAU,oBAAe,KAAK,EAAE;AACpC,YAAe,AAA6B,aAArC,OAAO,EAAI,8BACN,YAAR,OAAO,EAAI;;AAGjB,UAAO;EACT;;;AAlIsB,YAAS,AAI1B,AACA,+CADI,QAAS,KAAU,wGAAY,CAAC;IAC5B;;;MAEA,8BAAe;YAAG;;;;;;;;;;uBCXkC;;AAC7D,UAAI,AAAS,QAAD,IAAI;AACd,cAAO;;AAET,WAAO;WAAS,QAAQ;WAAT;mBAAW,aAAc,2CAAc,QAAQ,GAA/C;IACjB;sBAO8B;MAC5B,AAAS,gCAAkB,GAAG;IAChC;qBAIsB;MACpB,AAAS,+BAAiB,YAAY;IACxC;gBAIwB;MACtB,AAAS,0BAAY,KAAK;IAC5B;;AAIwB;QACtB,MAAM,AAA6C,wCAA9B,AAAS,sDAA0B;MAC1D;;;AAI6B,oDAAe,AAAS;IAAW;;AAQ/B,0CAAuB;IAAqB;;AAKzE,mDAAgC;IAAqB;;AAItB,qCAAkB;IAAgB;6BAEJ;AAC/D,UAAI,AAAW,UAAD,IAAI;QAChB,aAA8B,6CAAgB;AACxC,0BAAc,iCAAa,QAAC;UAChC,AAAW,UAAD,KAAa,sFAAc,OAAO;;AAExC,2BAAe,iCAAa,QAAC;UACjC,AAAW,UAAD,UAAU,CAAC;;QAEvB,AAAS,wBAAU,WAAW,EAAE,YAAY;;AAE9C,YAAO,AAAW,WAAD;IACnB;sCAG8B;AAC5B,UAAI,AAAW,UAAD,IAAI;QAChB,aAA8B,6CAAgB;AACxC,0BAAc,iCAAa,QAAC;UAChC,AAAW,UAAD,KAAa,sFAAc,OAAO;;QAE9C,AAAS,0CAA4B,WAAW;;AAElD,YAAO,AAAW,WAAD;IACnB;wBAEgD;AAC9C,UAAI,AAAW,UAAD,IAAI;AACV,0BAAc,iCAAa,QAAC,KAAM;AAClC,2BAAe,iCAAa,QAAC;UACjC,AAAW,UAAD,UAAU,CAAC;;AAEV;AAEb,cAAK;UACH,wBACI,AAAS,6BAAe,WAAW,EAAE,YAAY;;;AAGvD,iBAAK;UACH,AAAqB,qBAAA;UACrB,wBAAwB;;;QAG1B,aAAW,8CACG,WAAW,YAAY,UAAU,QAAQ;;AAEzD,mCAAO,AAAW,UAAD;IACnB;;qDAhG0D;IA+BhC;IACH;IACG;AAhCd,+DAAa,QAAQ;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;MAVrB,iCAAQ;YAAG;;;;;AAiHJ,YAAA,AAAS;IAAK;;AACf,YAAA,AAAS;IAAI;;AACN,YAAA,AAAS;IAAY;;AAC5B,YAAA,AAAS;IAAI;;wDANgC;AACpD,kEAAa,QAAQ;;EAAC;;;;;;;;;;;;AAa9B,YAAa,+CAAc,AAAS;IAAa;;AAC3B,YAAA,AAAS;IAAY;;AAC5B,YAAA,AAAS;IAAI;;AACC,6DAAQ,AAAS;IAAK;;mDAPD;AAC1C,6DAAa,QAAQ;;EAAC","file":"firebase.ddc.js"}');
  // Exports:
  return {
    src__top_level: src__top_level,
    src__messaging: src__messaging,
    firebase: firebase
  };
});

//# sourceMappingURL=firebase.ddc.js.map
