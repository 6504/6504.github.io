define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const js_util = dart_sdk.js_util;
  const async = dart_sdk.async;
  const js = dart_sdk.js;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__interop__js_interop = Object.create(dart.library);
  const src__interop__messaging_interop = Object.create(dart.library);
  const src__interop__firebase_interop = Object.create(dart.library);
  const src__interop__storage_interop = Object.create(dart.library);
  const src__interop__app_interop = Object.create(dart.library);
  const src__interop__firestore_interop = Object.create(dart.library);
  const src__func = Object.create(dart.library);
  const src__interop__database_interop = Object.create(dart.library);
  const src__interop__auth_interop = Object.create(dart.library);
  const src__auth = Object.create(dart.library);
  const src__utils = Object.create(dart.library);
  const src__firestore = Object.create(dart.library);
  const src__js = Object.create(dart.library);
  const src__app = Object.create(dart.library);
  const src__storage = Object.create(dart.library);
  const src__database = Object.create(dart.library);
  const $map = dartx.map;
  const $toList = dartx.toList;
  const $length = dartx.length;
  const $_set = dartx._set;
  const $forEach = dartx.forEach;
  const $insert = dartx.insert;
  const $cast = dartx.cast;
  let UserInfoOfUserInfoJsImpl = () => (UserInfoOfUserInfoJsImpl = dart.constFn(src__auth.UserInfo$(dart.anonymousJSType("UserInfoJsImpl"))))();
  let dynamicToUserInfoOfUserInfoJsImpl = () => (dynamicToUserInfoOfUserInfoJsImpl = dart.constFn(dart.fnType(UserInfoOfUserInfoJsImpl(), [dart.dynamic])))();
  let UserCredentialJsImplToUserCredential = () => (UserCredentialJsImplToUserCredential = dart.constFn(dart.fnType(src__auth.UserCredential, [dart.anonymousJSType("UserCredentialJsImpl")])))();
  let UserJsImplToUser = () => (UserJsImplToUser = dart.constFn(dart.fnType(src__auth.User, [dart.anonymousJSType("UserJsImpl")])))();
  let ConfirmationResultJsImplToConfirmationResult = () => (ConfirmationResultJsImplToConfirmationResult = dart.constFn(dart.fnType(src__auth.ConfirmationResult, [dart.lazyJSType(() => dart.global.firebase.auth.ConfirmationResult, "firebase.auth.ConfirmationResult")])))();
  let dynamicToUserCredential = () => (dynamicToUserCredential = dart.constFn(dart.fnType(src__auth.UserCredential, [dart.dynamic])))();
  let MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  let ExpandoOfUser = () => (ExpandoOfUser = dart.constFn(core.Expando$(src__auth.User)))();
  let UserJsImplToNull = () => (UserJsImplToNull = dart.constFn(dart.fnType(core.Null, [dart.anonymousJSType("UserJsImpl")])))();
  let dynamicTovoid = () => (dynamicTovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let StreamControllerOfUser = () => (StreamControllerOfUser = dart.constFn(async.StreamController$(src__auth.User)))();
  let ListOfString = () => (ListOfString = dart.constFn(core.List$(core.String)))();
  let ExpandoOfAuth = () => (ExpandoOfAuth = dart.constFn(core.Expando$(src__auth.Auth)))();
  let ObjectTodynamic = () => (ObjectTodynamic = dart.constFn(dart.fnType(dart.dynamic, [core.Object])))();
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let dynamicAnddynamicToNull = () => (dynamicAnddynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic, dart.dynamic])))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let FnAndFnToNull = () => (FnAndFnToNull = dart.constFn(dart.fnType(core.Null, [dynamicTovoid(), dynamicTovoid()])))();
  let dynamicToPromiseJsImpl = () => (dynamicToPromiseJsImpl = dart.constFn(dart.fnType(dart.lazyJSType(() => dart.global.firebase.Promise, "firebase.Promise"), [dart.dynamic])))();
  let FutureOfObject = () => (FutureOfObject = dart.constFn(async.Future$(core.Object)))();
  let ExpandoOfFirestore = () => (ExpandoOfFirestore = dart.constFn(core.Expando$(src__firestore.Firestore)))();
  let dynamicTodynamic = () => (dynamicTodynamic = dart.constFn(dart.fnType(dart.dynamic, [dart.dynamic])))();
  let ExpandoOfWriteBatch = () => (ExpandoOfWriteBatch = dart.constFn(core.Expando$(src__firestore.WriteBatch)))();
  let DocumentSnapshotJsImplToDocumentSnapshot = () => (DocumentSnapshotJsImplToDocumentSnapshot = dart.constFn(dart.fnType(src__firestore.DocumentSnapshot, [dart.lazyJSType(() => dart.global.firebase.firestore.DocumentSnapshot, "firebase.firestore.DocumentSnapshot")])))();
  let DocumentSnapshotJsImplToNull = () => (DocumentSnapshotJsImplToNull = dart.constFn(dart.fnType(core.Null, [dart.lazyJSType(() => dart.global.firebase.firestore.DocumentSnapshot, "firebase.firestore.DocumentSnapshot")])))();
  let StreamControllerOfDocumentSnapshot = () => (StreamControllerOfDocumentSnapshot = dart.constFn(async.StreamController$(src__firestore.DocumentSnapshot)))();
  let ExpandoOfDocumentReference = () => (ExpandoOfDocumentReference = dart.constFn(core.Expando$(src__firestore.DocumentReference)))();
  let QueryOfQueryJsImpl = () => (QueryOfQueryJsImpl = dart.constFn(src__firestore.Query$(dart.lazyJSType(() => dart.global.firebase.firestore.Query, "firebase.firestore.Query"))))();
  let QuerySnapshotJsImplToQuerySnapshot = () => (QuerySnapshotJsImplToQuerySnapshot = dart.constFn(dart.fnType(src__firestore.QuerySnapshot, [dart.lazyJSType(() => dart.global.firebase.firestore.QuerySnapshot, "firebase.firestore.QuerySnapshot")])))();
  let QuerySnapshotJsImplToNull = () => (QuerySnapshotJsImplToNull = dart.constFn(dart.fnType(core.Null, [dart.lazyJSType(() => dart.global.firebase.firestore.QuerySnapshot, "firebase.firestore.QuerySnapshot")])))();
  let StreamControllerOfQuerySnapshot = () => (StreamControllerOfQuerySnapshot = dart.constFn(async.StreamController$(src__firestore.QuerySnapshot)))();
  let JSArrayOfDocumentSnapshotJsImpl = () => (JSArrayOfDocumentSnapshotJsImpl = dart.constFn(_interceptors.JSArray$(dart.lazyJSType(() => dart.global.firebase.firestore.DocumentSnapshot, "firebase.firestore.DocumentSnapshot"))))();
  let CollectionReferenceOfCollectionReferenceJsImpl = () => (CollectionReferenceOfCollectionReferenceJsImpl = dart.constFn(src__firestore.CollectionReference$(dart.lazyJSType(() => dart.global.firebase.firestore.CollectionReference, "firebase.firestore.CollectionReference"))))();
  let DocumentReferenceJsImplToDocumentReference = () => (DocumentReferenceJsImplToDocumentReference = dart.constFn(dart.fnType(src__firestore.DocumentReference, [dart.lazyJSType(() => dart.global.firebase.firestore.DocumentReference, "firebase.firestore.DocumentReference")])))();
  let ExpandoOfCollectionReferenceOfCollectionReferenceJsImpl = () => (ExpandoOfCollectionReferenceOfCollectionReferenceJsImpl = dart.constFn(core.Expando$(CollectionReferenceOfCollectionReferenceJsImpl())))();
  let ExpandoOfDocumentChange = () => (ExpandoOfDocumentChange = dart.constFn(core.Expando$(src__firestore.DocumentChange)))();
  let ExpandoOfDocumentSnapshot = () => (ExpandoOfDocumentSnapshot = dart.constFn(core.Expando$(src__firestore.DocumentSnapshot)))();
  let dynamicToDocumentChange = () => (dynamicToDocumentChange = dart.constFn(dart.fnType(src__firestore.DocumentChange, [dart.dynamic])))();
  let dynamicToDocumentSnapshot = () => (dynamicToDocumentSnapshot = dart.constFn(dart.fnType(src__firestore.DocumentSnapshot, [dart.dynamic])))();
  let ExpandoOfQuerySnapshot = () => (ExpandoOfQuerySnapshot = dart.constFn(core.Expando$(src__firestore.QuerySnapshot)))();
  let ExpandoOfTransaction = () => (ExpandoOfTransaction = dart.constFn(core.Expando$(src__firestore.Transaction)))();
  let ExpandoOfApp = () => (ExpandoOfApp = dart.constFn(core.Expando$(src__app.App)))();
  let ExpandoOfStorage = () => (ExpandoOfStorage = dart.constFn(core.Expando$(src__storage.Storage)))();
  let dynamicToFullMetadata = () => (dynamicToFullMetadata = dart.constFn(dart.fnType(src__storage.FullMetadata, [dart.dynamic])))();
  let ExpandoOfStorageReference = () => (ExpandoOfStorageReference = dart.constFn(core.Expando$(src__storage.StorageReference)))();
  let ExpandoOfFullMetadata = () => (ExpandoOfFullMetadata = dart.constFn(core.Expando$(src__storage.FullMetadata)))();
  let UploadTaskSnapshotJsImplToUploadTaskSnapshot = () => (UploadTaskSnapshotJsImplToUploadTaskSnapshot = dart.constFn(dart.fnType(src__storage.UploadTaskSnapshot, [dart.anonymousJSType("UploadTaskSnapshotJsImpl")])))();
  let UploadTaskSnapshotJsImplToNull = () => (UploadTaskSnapshotJsImplToNull = dart.constFn(dart.fnType(core.Null, [dart.anonymousJSType("UploadTaskSnapshotJsImpl")])))();
  let VoidToFuture = () => (VoidToFuture = dart.constFn(dart.fnType(async.Future, [])))();
  let StreamControllerOfUploadTaskSnapshot = () => (StreamControllerOfUploadTaskSnapshot = dart.constFn(async.StreamController$(src__storage.UploadTaskSnapshot)))();
  let ExpandoOfUploadTask = () => (ExpandoOfUploadTask = dart.constFn(core.Expando$(src__storage.UploadTask)))();
  let ExpandoOfUploadTaskSnapshot = () => (ExpandoOfUploadTaskSnapshot = dart.constFn(core.Expando$(src__storage.UploadTaskSnapshot)))();
  let ExpandoOfDatabase = () => (ExpandoOfDatabase = dart.constFn(core.Expando$(src__database.Database)))();
  let DatabaseReferenceOfReferenceJsImpl = () => (DatabaseReferenceOfReferenceJsImpl = dart.constFn(src__database.DatabaseReference$(dart.lazyJSType(() => dart.global.firebase.database.Reference, "firebase.database.Reference"))))();
  let CompleterOfTransaction = () => (CompleterOfTransaction = dart.constFn(async.Completer$(src__database.Transaction)))();
  let dynamicAndboolAndDataSnapshotJsImplToNull = () => (dynamicAndboolAndDataSnapshotJsImplToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic, core.bool, dart.anonymousJSType("DataSnapshotJsImpl")])))();
  let QueryOfQueryJsImpl$ = () => (QueryOfQueryJsImpl$ = dart.constFn(src__database.Query$(dart.lazyJSType(() => dart.global.firebase.database.Query, "firebase.database.Query"))))();
  let DataSnapshotJsImplAndStringToNull = () => (DataSnapshotJsImplAndStringToNull = dart.constFn(dart.fnType(core.Null, [dart.anonymousJSType("DataSnapshotJsImpl")], [core.String])))();
  let StreamControllerOfQueryEvent = () => (StreamControllerOfQueryEvent = dart.constFn(async.StreamController$(src__database.QueryEvent)))();
  let CompleterOfQueryEvent = () => (CompleterOfQueryEvent = dart.constFn(async.Completer$(src__database.QueryEvent)))();
  let ExpandoOfDatabaseReferenceOfReferenceJsImpl = () => (ExpandoOfDatabaseReferenceOfReferenceJsImpl = dart.constFn(core.Expando$(DatabaseReferenceOfReferenceJsImpl())))();
  let ExpandoOfDataSnapshot = () => (ExpandoOfDataSnapshot = dart.constFn(core.Expando$(src__database.DataSnapshot)))();
  let ReferenceJsImplToDatabaseReferenceOfReferenceJsImpl = () => (ReferenceJsImplToDatabaseReferenceOfReferenceJsImpl = dart.constFn(dart.fnType(DatabaseReferenceOfReferenceJsImpl(), [dart.lazyJSType(() => dart.global.firebase.database.Reference, "firebase.database.Reference")])))();
  src__interop__js_interop.dartifyDate = function(jsObject) {
    if (dart.dtest(js_util.hasProperty(jsObject, "toDateString"))) {
      try {
        let date = jsObject;
        return new core.DateTime.fromMillisecondsSinceEpoch(core.int._check(dart.dsend(date, 'getTime', [])));
      } catch (e) {
        let ex = dart.getThrown(e);
        if (core.NoSuchMethodError.is(ex)) {
          return null;
        } else
          throw e;
      }
    }
    return null;
  };
  const _is_JsObjectWrapper_default = Symbol('_is_JsObjectWrapper_default');
  src__js.JsObjectWrapper$ = dart.generic(T => {
    class JsObjectWrapper extends core.Object {
      get jsObject() {
        return this[jsObject$];
      }
      set jsObject(value) {
        super.jsObject = value;
      }
    }
    (JsObjectWrapper.fromJsObject = function(jsObject) {
      this[jsObject$] = jsObject;
      ;
    }).prototype = JsObjectWrapper.prototype;
    dart.addTypeTests(JsObjectWrapper);
    JsObjectWrapper.prototype[_is_JsObjectWrapper_default] = true;
    const jsObject$ = Symbol("JsObjectWrapper.jsObject");
    dart.setLibraryUri(JsObjectWrapper, "package:firebase/src/js.dart");
    dart.setFieldSignature(JsObjectWrapper, () => ({
      __proto__: dart.getFields(JsObjectWrapper.__proto__),
      jsObject: dart.finalFieldType(T)
    }));
    return JsObjectWrapper;
  });
  src__js.JsObjectWrapper = src__js.JsObjectWrapper$();
  dart.addTypeTests(src__js.JsObjectWrapper, _is_JsObjectWrapper_default);
  const _is_UserInfo_default = Symbol('_is_UserInfo_default');
  src__auth.UserInfo$ = dart.generic(T => {
    class UserInfo extends src__js.JsObjectWrapper$(T) {
      get displayName() {
        return this.jsObject.displayName;
      }
      get email() {
        return this.jsObject.email;
      }
      get phoneNumber() {
        return this.jsObject.phoneNumber;
      }
      get photoURL() {
        return this.jsObject.photoURL;
      }
      get providerId() {
        return this.jsObject.providerId;
      }
      get uid() {
        return this.jsObject.uid;
      }
    }
    (UserInfo.fromJsObject = function(jsObject) {
      UserInfo.__proto__.fromJsObject.call(this, jsObject);
      ;
    }).prototype = UserInfo.prototype;
    dart.addTypeTests(UserInfo);
    UserInfo.prototype[_is_UserInfo_default] = true;
    dart.setGetterSignature(UserInfo, () => ({
      __proto__: dart.getGetters(UserInfo.__proto__),
      displayName: core.String,
      email: core.String,
      phoneNumber: core.String,
      photoURL: core.String,
      providerId: core.String,
      uid: core.String
    }));
    dart.setLibraryUri(UserInfo, "package:firebase/src/auth.dart");
    return UserInfo;
  });
  src__auth.UserInfo = src__auth.UserInfo$();
  dart.addTypeTests(src__auth.UserInfo, _is_UserInfo_default);
  src__auth.User = class User extends src__auth.UserInfo$(dart.anonymousJSType("UserJsImpl")) {
    get emailVerified() {
      return this.jsObject.emailVerified;
    }
    get isAnonymous() {
      return this.jsObject.isAnonymous;
    }
    get metadata() {
      return this.jsObject.metadata;
    }
    get providerData() {
      return this.jsObject.providerData[$map](UserInfoOfUserInfoJsImpl(), dart.fn(data => new (UserInfoOfUserInfoJsImpl()).fromJsObject(dart.anonymousJSType("UserInfoJsImpl")._check(data)), dynamicToUserInfoOfUserInfoJsImpl()))[$toList]();
    }
    get refreshToken() {
      return this.jsObject.refreshToken;
    }
    static getInstance(jsObject) {
      let t5, t4, t3, t2;
      if (jsObject == null) {
        return null;
      }
      t2 = src__auth.User._expando;
      t3 = jsObject;
      t4 = t2._get(t3);
      return t4 == null ? (t5 = new src__auth.User._fromJsObject(jsObject), t2._set(t3, t5), t5) : t4;
    }
    delete() {
      return src__utils.handleThenable(dart.dynamic, this.jsObject.delete());
    }
    getIdToken(forceRefresh) {
      if (forceRefresh === void 0) forceRefresh = false;
      return src__utils.handleThenable(core.String, this.jsObject.getIdToken(forceRefresh));
    }
    linkAndRetrieveDataWithCredential(credential) {
      return src__utils.handleThenable(dart.anonymousJSType("UserCredentialJsImpl"), this.jsObject.linkAndRetrieveDataWithCredential(credential)).then(src__auth.UserCredential, dart.fn(u => new src__auth.UserCredential.fromJsObject(u), UserCredentialJsImplToUserCredential()));
    }
    linkWithCredential(credential) {
      return src__utils.handleThenable(dart.anonymousJSType("UserJsImpl"), this.jsObject.linkWithCredential(credential)).then(src__auth.User, dart.fn(src__auth.User.getInstance, UserJsImplToUser()));
    }
    linkWithPhoneNumber(phoneNumber, applicationVerifier) {
      return src__utils.handleThenable(dart.lazyJSType(() => dart.global.firebase.auth.ConfirmationResult, "firebase.auth.ConfirmationResult"), this.jsObject.linkWithPhoneNumber(phoneNumber, applicationVerifier.jsObject)).then(src__auth.ConfirmationResult, dart.fn(c => new src__auth.ConfirmationResult.fromJsObject(c), ConfirmationResultJsImplToConfirmationResult()));
    }
    linkWithPopup(provider) {
      return src__utils.handleThenable(dart.anonymousJSType("UserCredentialJsImpl"), this.jsObject.linkWithPopup(provider.jsObject)).then(src__auth.UserCredential, dart.fn(u => new src__auth.UserCredential.fromJsObject(u), UserCredentialJsImplToUserCredential()));
    }
    linkWithRedirect(provider) {
      return src__utils.handleThenable(dart.dynamic, this.jsObject.linkWithRedirect(provider.jsObject));
    }
    reauthenticateAndRetrieveDataWithCredential(credential) {
      return src__utils.handleThenable(dart.dynamic, this.jsObject.reauthenticateAndRetrieveDataWithCredential(credential)).then(src__auth.UserCredential, dart.fn(o => new src__auth.UserCredential.fromJsObject(dart.anonymousJSType("UserCredentialJsImpl")._check(o)), dynamicToUserCredential()));
    }
    reauthenticateWithPhoneNumber(phoneNumber, applicationVerifier) {
      return src__utils.handleThenable(dart.lazyJSType(() => dart.global.firebase.auth.ConfirmationResult, "firebase.auth.ConfirmationResult"), this.jsObject.reauthenticateWithPhoneNumber(phoneNumber, applicationVerifier.jsObject)).then(src__auth.ConfirmationResult, dart.fn(c => new src__auth.ConfirmationResult.fromJsObject(c), ConfirmationResultJsImplToConfirmationResult()));
    }
    reauthenticateWithCredential(credential) {
      return src__utils.handleThenable(dart.dynamic, this.jsObject.reauthenticateWithCredential(credential));
    }
    reauthenticateWithPopup(provider) {
      return src__utils.handleThenable(dart.anonymousJSType("UserCredentialJsImpl"), this.jsObject.reauthenticateWithPopup(provider.jsObject)).then(src__auth.UserCredential, dart.fn(u => new src__auth.UserCredential.fromJsObject(u), UserCredentialJsImplToUserCredential()));
    }
    reauthenticateWithRedirect(provider) {
      return src__utils.handleThenable(dart.dynamic, this.jsObject.reauthenticateWithRedirect(provider.jsObject));
    }
    reload() {
      return src__utils.handleThenable(dart.dynamic, this.jsObject.reload());
    }
    sendEmailVerification(actionCodeSettings) {
      if (actionCodeSettings === void 0) actionCodeSettings = null;
      return src__utils.handleThenable(dart.dynamic, this.jsObject.sendEmailVerification(actionCodeSettings));
    }
    unlink(providerId) {
      return src__utils.handleThenable(dart.anonymousJSType("UserJsImpl"), this.jsObject.unlink(providerId)).then(src__auth.User, dart.fn(src__auth.User.getInstance, UserJsImplToUser()));
    }
    updateEmail(newEmail) {
      return src__utils.handleThenable(dart.dynamic, this.jsObject.updateEmail(newEmail));
    }
    updatePassword(newPassword) {
      return src__utils.handleThenable(dart.dynamic, this.jsObject.updatePassword(newPassword));
    }
    updatePhoneNumber(phoneCredential) {
      return src__utils.handleThenable(dart.dynamic, this.jsObject.updatePhoneNumber(phoneCredential));
    }
    updateProfile(profile) {
      return src__utils.handleThenable(dart.dynamic, this.jsObject.updateProfile(profile));
    }
    toJson() {
      return MapOfString$dynamic()._check(src__utils.dartify(this.jsObject.toJSON()));
    }
    toString() {
      return "User: " + dart.str(this.uid);
    }
  };
  (src__auth.User._fromJsObject = function(jsObject) {
    src__auth.User.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = src__auth.User.prototype;
  dart.addTypeTests(src__auth.User);
  dart.setMethodSignature(src__auth.User, () => ({
    __proto__: dart.getMethods(src__auth.User.__proto__),
    delete: dart.fnType(async.Future, []),
    getIdToken: dart.fnType(async.Future$(core.String), [], [core.bool]),
    linkAndRetrieveDataWithCredential: dart.fnType(async.Future$(src__auth.UserCredential), [dart.lazyJSType(() => dart.global.firebase.auth.AuthCredential, "firebase.auth.AuthCredential")]),
    linkWithCredential: dart.fnType(async.Future$(src__auth.User), [dart.lazyJSType(() => dart.global.firebase.auth.AuthCredential, "firebase.auth.AuthCredential")]),
    linkWithPhoneNumber: dart.fnType(async.Future$(src__auth.ConfirmationResult), [core.String, src__auth.ApplicationVerifier$(dart.lazyJSType(() => dart.global.firebase.auth.ApplicationVerifier, "firebase.auth.ApplicationVerifier"))]),
    linkWithPopup: dart.fnType(async.Future$(src__auth.UserCredential), [src__auth.AuthProvider$(dart.lazyJSType(() => dart.global.firebase.auth.AuthProvider, "firebase.auth.AuthProvider"))]),
    linkWithRedirect: dart.fnType(async.Future, [src__auth.AuthProvider$(dart.lazyJSType(() => dart.global.firebase.auth.AuthProvider, "firebase.auth.AuthProvider"))]),
    reauthenticateAndRetrieveDataWithCredential: dart.fnType(async.Future$(src__auth.UserCredential), [dart.lazyJSType(() => dart.global.firebase.auth.AuthCredential, "firebase.auth.AuthCredential")]),
    reauthenticateWithPhoneNumber: dart.fnType(async.Future$(src__auth.ConfirmationResult), [core.String, src__auth.ApplicationVerifier$(dart.lazyJSType(() => dart.global.firebase.auth.ApplicationVerifier, "firebase.auth.ApplicationVerifier"))]),
    reauthenticateWithCredential: dart.fnType(async.Future, [dart.lazyJSType(() => dart.global.firebase.auth.AuthCredential, "firebase.auth.AuthCredential")]),
    reauthenticateWithPopup: dart.fnType(async.Future$(src__auth.UserCredential), [src__auth.AuthProvider$(dart.lazyJSType(() => dart.global.firebase.auth.AuthProvider, "firebase.auth.AuthProvider"))]),
    reauthenticateWithRedirect: dart.fnType(async.Future, [src__auth.AuthProvider$(dart.lazyJSType(() => dart.global.firebase.auth.AuthProvider, "firebase.auth.AuthProvider"))]),
    reload: dart.fnType(async.Future, []),
    sendEmailVerification: dart.fnType(async.Future, [], [dart.anonymousJSType("ActionCodeSettings")]),
    unlink: dart.fnType(async.Future$(src__auth.User), [core.String]),
    updateEmail: dart.fnType(async.Future, [core.String]),
    updatePassword: dart.fnType(async.Future, [core.String]),
    updatePhoneNumber: dart.fnType(async.Future, [dart.lazyJSType(() => dart.global.firebase.auth.AuthCredential, "firebase.auth.AuthCredential")]),
    updateProfile: dart.fnType(async.Future, [dart.anonymousJSType("UserProfile")]),
    toJson: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setGetterSignature(src__auth.User, () => ({
    __proto__: dart.getGetters(src__auth.User.__proto__),
    emailVerified: core.bool,
    isAnonymous: core.bool,
    metadata: dart.lazyJSType(() => dart.global.firebase.auth.UserMetadata, "firebase.auth.UserMetadata"),
    providerData: core.List$(src__auth.UserInfo$(dart.anonymousJSType("UserInfoJsImpl"))),
    refreshToken: core.String
  }));
  dart.setLibraryUri(src__auth.User, "package:firebase/src/auth.dart");
  dart.defineExtensionMethods(src__auth.User, ['toString']);
  dart.defineLazy(src__auth.User, {
    /*src__auth.User._expando*/get _expando() {
      return new (ExpandoOfUser()).new();
    }
  });
  const _onAuthUnsubscribe = dart.privateName(src__auth, "_onAuthUnsubscribe");
  const _changeController = dart.privateName(src__auth, "_changeController");
  const _onIdTokenChangedUnsubscribe = dart.privateName(src__auth, "_onIdTokenChangedUnsubscribe");
  const _idTokenChangedController = dart.privateName(src__auth, "_idTokenChangedController");
  src__auth.Auth = class Auth extends src__js.JsObjectWrapper$(dart.lazyJSType(() => dart.global.firebase.auth.Auth, "firebase.auth.Auth")) {
    get app() {
      return src__app.App.getInstance(this.jsObject.app);
    }
    get currentUser() {
      return src__auth.User.getInstance(this.jsObject.currentUser);
    }
    get languageCode() {
      return this.jsObject.languageCode;
    }
    set languageCode(s) {
      this.jsObject.languageCode = s;
    }
    get onAuthStateChanged() {
      if (this[_changeController] == null) {
        let nextWrapper = js.allowInterop(UserJsImplToNull(), dart.fn(user => {
          this[_changeController].add(src__auth.User.getInstance(user));
        }, UserJsImplToNull()));
        let errorWrapper = js.allowInterop(dynamicTovoid(), dart.fn(e => this[_changeController].addError(e), dynamicTovoid()));
        const startListen = () => {
          if (!(this[_onAuthUnsubscribe] == null)) dart.assertFailed(null, "org-dartlang-app:///packages/firebase/src/auth.dart", 281, 16, "t(_onAuthUnsubscribe == nu");
          this[_onAuthUnsubscribe] = this.jsObject.onAuthStateChanged(nextWrapper, errorWrapper);
        };
        dart.fn(startListen, VoidTovoid());
        const stopListen = () => {
          this[_onAuthUnsubscribe]();
          this[_onAuthUnsubscribe] = null;
        };
        dart.fn(stopListen, VoidTovoid());
        this[_changeController] = StreamControllerOfUser().broadcast({onListen: startListen, onCancel: stopListen, sync: true});
      }
      return this[_changeController].stream;
    }
    get onIdTokenChanged() {
      if (this[_idTokenChangedController] == null) {
        let nextWrapper = js.allowInterop(UserJsImplToNull(), dart.fn(user => {
          this[_idTokenChangedController].add(src__auth.User.getInstance(user));
        }, UserJsImplToNull()));
        let errorWrapper = js.allowInterop(dynamicTovoid(), dart.fn(e => this[_idTokenChangedController].addError(e), dynamicTovoid()));
        const startListen = () => {
          if (!(this[_onIdTokenChangedUnsubscribe] == null)) dart.assertFailed(null, "org-dartlang-app:///packages/firebase/src/auth.dart", 316, 16, "t(_onIdTokenChangedUnsubscribe == nu");
          this[_onIdTokenChangedUnsubscribe] = this.jsObject.onIdTokenChanged(nextWrapper, errorWrapper);
        };
        dart.fn(startListen, VoidTovoid());
        const stopListen = () => {
          this[_onIdTokenChangedUnsubscribe]();
          this[_onIdTokenChangedUnsubscribe] = null;
        };
        dart.fn(stopListen, VoidTovoid());
        this[_idTokenChangedController] = StreamControllerOfUser().broadcast({onListen: startListen, onCancel: stopListen, sync: true});
      }
      return this[_idTokenChangedController].stream;
    }
    static getInstance(jsObject) {
      let t5, t4, t3, t2;
      if (jsObject == null) {
        return null;
      }
      t2 = src__auth.Auth._expando;
      t3 = jsObject;
      t4 = t2._get(t3);
      return t4 == null ? (t5 = new src__auth.Auth._fromJsObject(jsObject), t2._set(t3, t5), t5) : t4;
    }
    applyActionCode(code) {
      return src__utils.handleThenable(dart.dynamic, this.jsObject.applyActionCode(code));
    }
    checkActionCode(code) {
      return src__utils.handleThenable(dart.lazyJSType(() => dart.global.firebase.auth.ActionCodeInfo, "firebase.auth.ActionCodeInfo"), this.jsObject.checkActionCode(code));
    }
    confirmPasswordReset(code, newPassword) {
      return src__utils.handleThenable(dart.dynamic, this.jsObject.confirmPasswordReset(code, newPassword));
    }
    createUserWithEmailAndPassword(email, password) {
      return src__utils.handleThenable(dart.anonymousJSType("UserCredentialJsImpl"), this.jsObject.createUserWithEmailAndPassword(email, password)).then(src__auth.UserCredential, dart.fn(u => new src__auth.UserCredential.fromJsObject(u), UserCredentialJsImplToUserCredential()));
    }
    createUserAndRetrieveDataWithEmailAndPassword(email, password) {
      return src__utils.handleThenable(dart.anonymousJSType("UserCredentialJsImpl"), this.jsObject.createUserAndRetrieveDataWithEmailAndPassword(email, password)).then(src__auth.UserCredential, dart.fn(u => new src__auth.UserCredential.fromJsObject(u), UserCredentialJsImplToUserCredential()));
    }
    fetchProvidersForEmail(email) {
      return src__utils.handleThenable(ListOfString(), this.jsObject.fetchProvidersForEmail(email));
    }
    getRedirectResult() {
      return src__utils.handleThenable(dart.anonymousJSType("UserCredentialJsImpl"), this.jsObject.getRedirectResult()).then(src__auth.UserCredential, dart.fn(u => new src__auth.UserCredential.fromJsObject(u), UserCredentialJsImplToUserCredential()));
    }
    sendPasswordResetEmail(email, actionCodeSettings) {
      if (actionCodeSettings === void 0) actionCodeSettings = null;
      return src__utils.handleThenable(dart.dynamic, this.jsObject.sendPasswordResetEmail(email, actionCodeSettings));
    }
    setPersistence(persistence) {
      return src__utils.handleThenable(dart.dynamic, this.jsObject.setPersistence(persistence));
    }
    signInAndRetrieveDataWithCredential(credential) {
      return src__utils.handleThenable(dart.anonymousJSType("UserCredentialJsImpl"), this.jsObject.signInAndRetrieveDataWithCredential(credential)).then(src__auth.UserCredential, dart.fn(u => new src__auth.UserCredential.fromJsObject(u), UserCredentialJsImplToUserCredential()));
    }
    signInAnonymously() {
      return src__utils.handleThenable(dart.anonymousJSType("UserCredentialJsImpl"), this.jsObject.signInAnonymously()).then(src__auth.UserCredential, dart.fn(u => new src__auth.UserCredential.fromJsObject(u), UserCredentialJsImplToUserCredential()));
    }
    signInAnonymouslyAndRetrieveData() {
      return src__utils.handleThenable(dart.anonymousJSType("UserCredentialJsImpl"), this.jsObject.signInAnonymouslyAndRetrieveData()).then(src__auth.UserCredential, dart.fn(u => new src__auth.UserCredential.fromJsObject(u), UserCredentialJsImplToUserCredential()));
    }
    signInWithCredential(credential) {
      return src__utils.handleThenable(dart.anonymousJSType("UserJsImpl"), this.jsObject.signInWithCredential(credential)).then(src__auth.User, dart.fn(src__auth.User.getInstance, UserJsImplToUser()));
    }
    signInWithCustomToken(token) {
      return src__utils.handleThenable(dart.anonymousJSType("UserCredentialJsImpl"), this.jsObject.signInWithCustomToken(token)).then(src__auth.UserCredential, dart.fn(u => new src__auth.UserCredential.fromJsObject(u), UserCredentialJsImplToUserCredential()));
    }
    signInAndRetrieveDataWithCustomToken(token) {
      return src__utils.handleThenable(dart.anonymousJSType("UserCredentialJsImpl"), this.jsObject.signInAndRetrieveDataWithCustomToken(token)).then(src__auth.UserCredential, dart.fn(u => new src__auth.UserCredential.fromJsObject(u), UserCredentialJsImplToUserCredential()));
    }
    signInWithEmailAndPassword(email, password) {
      return src__utils.handleThenable(dart.anonymousJSType("UserCredentialJsImpl"), this.jsObject.signInWithEmailAndPassword(email, password)).then(src__auth.UserCredential, dart.fn(u => new src__auth.UserCredential.fromJsObject(u), UserCredentialJsImplToUserCredential()));
    }
    signInAndRetrieveDataWithEmailAndPassword(email, password) {
      return src__utils.handleThenable(dart.anonymousJSType("UserCredentialJsImpl"), this.jsObject.signInAndRetrieveDataWithEmailAndPassword(email, password)).then(src__auth.UserCredential, dart.fn(u => new src__auth.UserCredential.fromJsObject(u), UserCredentialJsImplToUserCredential()));
    }
    signInWithPhoneNumber(phoneNumber, applicationVerifier) {
      return src__utils.handleThenable(dart.lazyJSType(() => dart.global.firebase.auth.ConfirmationResult, "firebase.auth.ConfirmationResult"), this.jsObject.signInWithPhoneNumber(phoneNumber, applicationVerifier.jsObject)).then(src__auth.ConfirmationResult, dart.fn(c => new src__auth.ConfirmationResult.fromJsObject(c), ConfirmationResultJsImplToConfirmationResult()));
    }
    signInWithPopup(provider) {
      return src__utils.handleThenable(dart.anonymousJSType("UserCredentialJsImpl"), this.jsObject.signInWithPopup(provider.jsObject)).then(src__auth.UserCredential, dart.fn(u => new src__auth.UserCredential.fromJsObject(u), UserCredentialJsImplToUserCredential()));
    }
    signInWithRedirect(provider) {
      return src__utils.handleThenable(dart.dynamic, this.jsObject.signInWithRedirect(provider.jsObject));
    }
    signOut() {
      return src__utils.handleThenable(dart.dynamic, this.jsObject.signOut());
    }
    useDeviceLanguage() {
      return this.jsObject.useDeviceLanguage();
    }
    verifyPasswordResetCode(code) {
      return src__utils.handleThenable(core.String, this.jsObject.verifyPasswordResetCode(code));
    }
  };
  (src__auth.Auth._fromJsObject = function(jsObject) {
    this[_onAuthUnsubscribe] = null;
    this[_changeController] = null;
    this[_onIdTokenChangedUnsubscribe] = null;
    this[_idTokenChangedController] = null;
    src__auth.Auth.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = src__auth.Auth.prototype;
  dart.addTypeTests(src__auth.Auth);
  dart.setMethodSignature(src__auth.Auth, () => ({
    __proto__: dart.getMethods(src__auth.Auth.__proto__),
    applyActionCode: dart.fnType(async.Future, [core.String]),
    checkActionCode: dart.fnType(async.Future$(dart.lazyJSType(() => dart.global.firebase.auth.ActionCodeInfo, "firebase.auth.ActionCodeInfo")), [core.String]),
    confirmPasswordReset: dart.fnType(async.Future, [core.String, core.String]),
    createUserWithEmailAndPassword: dart.fnType(async.Future$(src__auth.UserCredential), [core.String, core.String]),
    createUserAndRetrieveDataWithEmailAndPassword: dart.fnType(async.Future$(src__auth.UserCredential), [core.String, core.String]),
    fetchProvidersForEmail: dart.fnType(async.Future$(core.List$(core.String)), [core.String]),
    getRedirectResult: dart.fnType(async.Future$(src__auth.UserCredential), []),
    sendPasswordResetEmail: dart.fnType(async.Future, [core.String], [dart.anonymousJSType("ActionCodeSettings")]),
    setPersistence: dart.fnType(async.Future, [core.String]),
    signInAndRetrieveDataWithCredential: dart.fnType(async.Future$(src__auth.UserCredential), [dart.lazyJSType(() => dart.global.firebase.auth.AuthCredential, "firebase.auth.AuthCredential")]),
    signInAnonymously: dart.fnType(async.Future$(src__auth.UserCredential), []),
    signInAnonymouslyAndRetrieveData: dart.fnType(async.Future$(src__auth.UserCredential), []),
    signInWithCredential: dart.fnType(async.Future$(src__auth.User), [dart.lazyJSType(() => dart.global.firebase.auth.AuthCredential, "firebase.auth.AuthCredential")]),
    signInWithCustomToken: dart.fnType(async.Future$(src__auth.UserCredential), [core.String]),
    signInAndRetrieveDataWithCustomToken: dart.fnType(async.Future$(src__auth.UserCredential), [core.String]),
    signInWithEmailAndPassword: dart.fnType(async.Future$(src__auth.UserCredential), [core.String, core.String]),
    signInAndRetrieveDataWithEmailAndPassword: dart.fnType(async.Future$(src__auth.UserCredential), [core.String, core.String]),
    signInWithPhoneNumber: dart.fnType(async.Future$(src__auth.ConfirmationResult), [core.String, src__auth.ApplicationVerifier$(dart.lazyJSType(() => dart.global.firebase.auth.ApplicationVerifier, "firebase.auth.ApplicationVerifier"))]),
    signInWithPopup: dart.fnType(async.Future$(src__auth.UserCredential), [src__auth.AuthProvider$(dart.lazyJSType(() => dart.global.firebase.auth.AuthProvider, "firebase.auth.AuthProvider"))]),
    signInWithRedirect: dart.fnType(async.Future, [src__auth.AuthProvider$(dart.lazyJSType(() => dart.global.firebase.auth.AuthProvider, "firebase.auth.AuthProvider"))]),
    signOut: dart.fnType(async.Future, []),
    useDeviceLanguage: dart.fnType(dart.void, []),
    verifyPasswordResetCode: dart.fnType(async.Future$(core.String), [core.String])
  }));
  dart.setGetterSignature(src__auth.Auth, () => ({
    __proto__: dart.getGetters(src__auth.Auth.__proto__),
    app: src__app.App,
    currentUser: src__auth.User,
    languageCode: core.String,
    onAuthStateChanged: async.Stream$(src__auth.User),
    onIdTokenChanged: async.Stream$(src__auth.User)
  }));
  dart.setSetterSignature(src__auth.Auth, () => ({
    __proto__: dart.getSetters(src__auth.Auth.__proto__),
    languageCode: core.String
  }));
  dart.setLibraryUri(src__auth.Auth, "package:firebase/src/auth.dart");
  dart.setFieldSignature(src__auth.Auth, () => ({
    __proto__: dart.getFields(src__auth.Auth.__proto__),
    [_onAuthUnsubscribe]: dart.fieldType(dart.fnType(dart.dynamic, [])),
    [_changeController]: dart.fieldType(async.StreamController$(src__auth.User)),
    [_onIdTokenChangedUnsubscribe]: dart.fieldType(dart.fnType(dart.dynamic, [])),
    [_idTokenChangedController]: dart.fieldType(async.StreamController$(src__auth.User))
  }));
  dart.defineLazy(src__auth.Auth, {
    /*src__auth.Auth._expando*/get _expando() {
      return new (ExpandoOfAuth()).new();
    }
  });
  const _is_AuthProvider_default = Symbol('_is_AuthProvider_default');
  src__auth.AuthProvider$ = dart.generic(T => {
    class AuthProvider extends src__js.JsObjectWrapper$(T) {
      get providerId() {
        return this.jsObject.providerId;
      }
    }
    (AuthProvider.fromJsObject = function(jsObject) {
      AuthProvider.__proto__.fromJsObject.call(this, jsObject);
      ;
    }).prototype = AuthProvider.prototype;
    dart.addTypeTests(AuthProvider);
    AuthProvider.prototype[_is_AuthProvider_default] = true;
    dart.setGetterSignature(AuthProvider, () => ({
      __proto__: dart.getGetters(AuthProvider.__proto__),
      providerId: core.String
    }));
    dart.setLibraryUri(AuthProvider, "package:firebase/src/auth.dart");
    return AuthProvider;
  });
  src__auth.AuthProvider = src__auth.AuthProvider$();
  dart.addTypeTests(src__auth.AuthProvider, _is_AuthProvider_default);
  src__auth.EmailAuthProvider = class EmailAuthProvider extends src__auth.AuthProvider$(dart.lazyJSType(() => dart.global.firebase.auth.EmailAuthProvider, "firebase.auth.EmailAuthProvider")) {
    static new() {
      return new src__auth.EmailAuthProvider.fromJsObject(new dart.global.firebase.auth.EmailAuthProvider());
    }
    static credential(email, password) {
      return dart.global.firebase.auth.EmailAuthProvider.credential(email, password);
    }
  };
  (src__auth.EmailAuthProvider.fromJsObject = function(jsObject) {
    src__auth.EmailAuthProvider.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = src__auth.EmailAuthProvider.prototype;
  dart.addTypeTests(src__auth.EmailAuthProvider);
  dart.setLibraryUri(src__auth.EmailAuthProvider, "package:firebase/src/auth.dart");
  dart.defineLazy(src__auth.EmailAuthProvider, {
    /*src__auth.EmailAuthProvider.PROVIDER_ID*/get PROVIDER_ID() {
      return dart.global.firebase.auth.EmailAuthProvider.PROVIDER_ID;
    },
    set PROVIDER_ID(_) {}
  });
  src__auth.FacebookAuthProvider = class FacebookAuthProvider extends src__auth.AuthProvider$(dart.lazyJSType(() => dart.global.firebase.auth.FacebookAuthProvider, "firebase.auth.FacebookAuthProvider")) {
    static new() {
      return new src__auth.FacebookAuthProvider.fromJsObject(new dart.global.firebase.auth.FacebookAuthProvider());
    }
    addScope(scope) {
      return new src__auth.FacebookAuthProvider.fromJsObject(this.jsObject.addScope(scope));
    }
    setCustomParameters(customOAuthParameters) {
      return new src__auth.FacebookAuthProvider.fromJsObject(this.jsObject.setCustomParameters(src__utils.jsify(customOAuthParameters)));
    }
    static credential(token) {
      return dart.global.firebase.auth.FacebookAuthProvider.credential(token);
    }
  };
  (src__auth.FacebookAuthProvider.fromJsObject = function(jsObject) {
    src__auth.FacebookAuthProvider.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = src__auth.FacebookAuthProvider.prototype;
  dart.addTypeTests(src__auth.FacebookAuthProvider);
  dart.setMethodSignature(src__auth.FacebookAuthProvider, () => ({
    __proto__: dart.getMethods(src__auth.FacebookAuthProvider.__proto__),
    addScope: dart.fnType(src__auth.FacebookAuthProvider, [core.String]),
    setCustomParameters: dart.fnType(src__auth.FacebookAuthProvider, [core.Map$(core.String, dart.dynamic)])
  }));
  dart.setLibraryUri(src__auth.FacebookAuthProvider, "package:firebase/src/auth.dart");
  dart.defineLazy(src__auth.FacebookAuthProvider, {
    /*src__auth.FacebookAuthProvider.PROVIDER_ID*/get PROVIDER_ID() {
      return dart.global.firebase.auth.FacebookAuthProvider.PROVIDER_ID;
    },
    set PROVIDER_ID(_) {}
  });
  src__auth.GithubAuthProvider = class GithubAuthProvider extends src__auth.AuthProvider$(dart.lazyJSType(() => dart.global.firebase.auth.GithubAuthProvider, "firebase.auth.GithubAuthProvider")) {
    static new() {
      return new src__auth.GithubAuthProvider.fromJsObject(new dart.global.firebase.auth.GithubAuthProvider());
    }
    addScope(scope) {
      return new src__auth.GithubAuthProvider.fromJsObject(this.jsObject.addScope(scope));
    }
    setCustomParameters(customOAuthParameters) {
      return new src__auth.GithubAuthProvider.fromJsObject(this.jsObject.setCustomParameters(src__utils.jsify(customOAuthParameters)));
    }
    static credential(token) {
      return dart.global.firebase.auth.GithubAuthProvider.credential(token);
    }
  };
  (src__auth.GithubAuthProvider.fromJsObject = function(jsObject) {
    src__auth.GithubAuthProvider.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = src__auth.GithubAuthProvider.prototype;
  dart.addTypeTests(src__auth.GithubAuthProvider);
  dart.setMethodSignature(src__auth.GithubAuthProvider, () => ({
    __proto__: dart.getMethods(src__auth.GithubAuthProvider.__proto__),
    addScope: dart.fnType(src__auth.GithubAuthProvider, [core.String]),
    setCustomParameters: dart.fnType(src__auth.GithubAuthProvider, [core.Map$(core.String, dart.dynamic)])
  }));
  dart.setLibraryUri(src__auth.GithubAuthProvider, "package:firebase/src/auth.dart");
  dart.defineLazy(src__auth.GithubAuthProvider, {
    /*src__auth.GithubAuthProvider.PROVIDER_ID*/get PROVIDER_ID() {
      return dart.global.firebase.auth.GithubAuthProvider.PROVIDER_ID;
    },
    set PROVIDER_ID(_) {}
  });
  src__auth.GoogleAuthProvider = class GoogleAuthProvider extends src__auth.AuthProvider$(dart.lazyJSType(() => dart.global.firebase.auth.GoogleAuthProvider, "firebase.auth.GoogleAuthProvider")) {
    static new() {
      return new src__auth.GoogleAuthProvider.fromJsObject(new dart.global.firebase.auth.GoogleAuthProvider());
    }
    addScope(scope) {
      return new src__auth.GoogleAuthProvider.fromJsObject(this.jsObject.addScope(scope));
    }
    setCustomParameters(customOAuthParameters) {
      return new src__auth.GoogleAuthProvider.fromJsObject(this.jsObject.setCustomParameters(src__utils.jsify(customOAuthParameters)));
    }
    static credential(idToken, accessToken) {
      if (idToken === void 0) idToken = null;
      if (accessToken === void 0) accessToken = null;
      return dart.global.firebase.auth.GoogleAuthProvider.credential(idToken, accessToken);
    }
  };
  (src__auth.GoogleAuthProvider.fromJsObject = function(jsObject) {
    src__auth.GoogleAuthProvider.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = src__auth.GoogleAuthProvider.prototype;
  dart.addTypeTests(src__auth.GoogleAuthProvider);
  dart.setMethodSignature(src__auth.GoogleAuthProvider, () => ({
    __proto__: dart.getMethods(src__auth.GoogleAuthProvider.__proto__),
    addScope: dart.fnType(src__auth.GoogleAuthProvider, [core.String]),
    setCustomParameters: dart.fnType(src__auth.GoogleAuthProvider, [core.Map$(core.String, dart.dynamic)])
  }));
  dart.setLibraryUri(src__auth.GoogleAuthProvider, "package:firebase/src/auth.dart");
  dart.defineLazy(src__auth.GoogleAuthProvider, {
    /*src__auth.GoogleAuthProvider.PROVIDER_ID*/get PROVIDER_ID() {
      return dart.global.firebase.auth.GoogleAuthProvider.PROVIDER_ID;
    },
    set PROVIDER_ID(_) {}
  });
  src__auth.TwitterAuthProvider = class TwitterAuthProvider extends src__auth.AuthProvider$(dart.lazyJSType(() => dart.global.firebase.auth.TwitterAuthProvider, "firebase.auth.TwitterAuthProvider")) {
    static new() {
      return new src__auth.TwitterAuthProvider.fromJsObject(new dart.global.firebase.auth.TwitterAuthProvider());
    }
    setCustomParameters(customOAuthParameters) {
      return new src__auth.TwitterAuthProvider.fromJsObject(this.jsObject.setCustomParameters(src__utils.jsify(customOAuthParameters)));
    }
    static credential(token, secret) {
      return dart.global.firebase.auth.TwitterAuthProvider.credential(token, secret);
    }
  };
  (src__auth.TwitterAuthProvider.fromJsObject = function(jsObject) {
    src__auth.TwitterAuthProvider.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = src__auth.TwitterAuthProvider.prototype;
  dart.addTypeTests(src__auth.TwitterAuthProvider);
  dart.setMethodSignature(src__auth.TwitterAuthProvider, () => ({
    __proto__: dart.getMethods(src__auth.TwitterAuthProvider.__proto__),
    setCustomParameters: dart.fnType(src__auth.TwitterAuthProvider, [core.Map$(core.String, dart.dynamic)])
  }));
  dart.setLibraryUri(src__auth.TwitterAuthProvider, "package:firebase/src/auth.dart");
  dart.defineLazy(src__auth.TwitterAuthProvider, {
    /*src__auth.TwitterAuthProvider.PROVIDER_ID*/get PROVIDER_ID() {
      return dart.global.firebase.auth.TwitterAuthProvider.PROVIDER_ID;
    },
    set PROVIDER_ID(_) {}
  });
  src__auth.PhoneAuthProvider = class PhoneAuthProvider extends src__auth.AuthProvider$(dart.lazyJSType(() => dart.global.firebase.auth.PhoneAuthProvider, "firebase.auth.PhoneAuthProvider")) {
    static get PROVIDER_ID() {
      return dart.global.firebase.auth.PhoneAuthProvider.PROVIDER_ID;
    }
    static new(auth) {
      if (auth === void 0) auth = null;
      return new src__auth.PhoneAuthProvider.fromJsObject(auth != null ? new dart.global.firebase.auth.PhoneAuthProvider(auth.jsObject) : new dart.global.firebase.auth.PhoneAuthProvider());
    }
    verifyPhoneNumber(phoneNumber, applicationVerifier) {
      return src__utils.handleThenable(core.String, this.jsObject.verifyPhoneNumber(phoneNumber, applicationVerifier.jsObject));
    }
    static credential(verificationId, verificationCode) {
      return dart.global.firebase.auth.PhoneAuthProvider.credential(verificationId, verificationCode);
    }
  };
  (src__auth.PhoneAuthProvider.fromJsObject = function(jsObject) {
    src__auth.PhoneAuthProvider.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = src__auth.PhoneAuthProvider.prototype;
  dart.addTypeTests(src__auth.PhoneAuthProvider);
  dart.setMethodSignature(src__auth.PhoneAuthProvider, () => ({
    __proto__: dart.getMethods(src__auth.PhoneAuthProvider.__proto__),
    verifyPhoneNumber: dart.fnType(async.Future$(core.String), [core.String, src__auth.ApplicationVerifier$(dart.lazyJSType(() => dart.global.firebase.auth.ApplicationVerifier, "firebase.auth.ApplicationVerifier"))])
  }));
  dart.setLibraryUri(src__auth.PhoneAuthProvider, "package:firebase/src/auth.dart");
  const _is_ApplicationVerifier_default = Symbol('_is_ApplicationVerifier_default');
  src__auth.ApplicationVerifier$ = dart.generic(T => {
    class ApplicationVerifier extends src__js.JsObjectWrapper$(T) {
      get type() {
        return this.jsObject.type;
      }
      verify() {
        return src__utils.handleThenable(core.String, this.jsObject.verify());
      }
    }
    (ApplicationVerifier.fromJsObject = function(jsObject) {
      ApplicationVerifier.__proto__.fromJsObject.call(this, jsObject);
      ;
    }).prototype = ApplicationVerifier.prototype;
    dart.addTypeTests(ApplicationVerifier);
    ApplicationVerifier.prototype[_is_ApplicationVerifier_default] = true;
    dart.setMethodSignature(ApplicationVerifier, () => ({
      __proto__: dart.getMethods(ApplicationVerifier.__proto__),
      verify: dart.fnType(async.Future$(core.String), [])
    }));
    dart.setGetterSignature(ApplicationVerifier, () => ({
      __proto__: dart.getGetters(ApplicationVerifier.__proto__),
      type: core.String
    }));
    dart.setLibraryUri(ApplicationVerifier, "package:firebase/src/auth.dart");
    return ApplicationVerifier;
  });
  src__auth.ApplicationVerifier = src__auth.ApplicationVerifier$();
  dart.addTypeTests(src__auth.ApplicationVerifier, _is_ApplicationVerifier_default);
  src__auth.RecaptchaVerifier = class RecaptchaVerifier extends src__auth.ApplicationVerifier$(dart.lazyJSType(() => dart.global.firebase.auth.RecaptchaVerifier, "firebase.auth.RecaptchaVerifier")) {
    static new(container, parameters, app) {
      if (parameters === void 0) parameters = null;
      if (app === void 0) app = null;
      return parameters != null ? app != null ? new src__auth.RecaptchaVerifier.fromJsObject(new dart.global.firebase.auth.RecaptchaVerifier(container, src__utils.jsify(parameters), app.jsObject)) : new src__auth.RecaptchaVerifier.fromJsObject(new dart.global.firebase.auth.RecaptchaVerifier(container, src__utils.jsify(parameters))) : new src__auth.RecaptchaVerifier.fromJsObject(new dart.global.firebase.auth.RecaptchaVerifier(container));
    }
    clear() {
      return this.jsObject.clear();
    }
    render() {
      return src__utils.handleThenable(core.num, this.jsObject.render());
    }
  };
  (src__auth.RecaptchaVerifier.fromJsObject = function(jsObject) {
    src__auth.RecaptchaVerifier.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = src__auth.RecaptchaVerifier.prototype;
  dart.addTypeTests(src__auth.RecaptchaVerifier);
  dart.setMethodSignature(src__auth.RecaptchaVerifier, () => ({
    __proto__: dart.getMethods(src__auth.RecaptchaVerifier.__proto__),
    clear: dart.fnType(dart.dynamic, []),
    render: dart.fnType(async.Future$(core.num), [])
  }));
  dart.setLibraryUri(src__auth.RecaptchaVerifier, "package:firebase/src/auth.dart");
  src__auth.ConfirmationResult = class ConfirmationResult extends src__js.JsObjectWrapper$(dart.lazyJSType(() => dart.global.firebase.auth.ConfirmationResult, "firebase.auth.ConfirmationResult")) {
    get verificationId() {
      return this.jsObject.verificationId;
    }
    confirm(verificationCode) {
      return src__utils.handleThenable(dart.anonymousJSType("UserCredentialJsImpl"), this.jsObject.confirm(verificationCode)).then(src__auth.UserCredential, dart.fn(u => new src__auth.UserCredential.fromJsObject(u), UserCredentialJsImplToUserCredential()));
    }
  };
  (src__auth.ConfirmationResult.fromJsObject = function(jsObject) {
    src__auth.ConfirmationResult.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = src__auth.ConfirmationResult.prototype;
  dart.addTypeTests(src__auth.ConfirmationResult);
  dart.setMethodSignature(src__auth.ConfirmationResult, () => ({
    __proto__: dart.getMethods(src__auth.ConfirmationResult.__proto__),
    confirm: dart.fnType(async.Future$(src__auth.UserCredential), [core.String])
  }));
  dart.setGetterSignature(src__auth.ConfirmationResult, () => ({
    __proto__: dart.getGetters(src__auth.ConfirmationResult.__proto__),
    verificationId: core.String
  }));
  dart.setLibraryUri(src__auth.ConfirmationResult, "package:firebase/src/auth.dart");
  src__auth.UserCredential = class UserCredential extends src__js.JsObjectWrapper$(dart.anonymousJSType("UserCredentialJsImpl")) {
    get user() {
      return src__auth.User.getInstance(this.jsObject.user);
    }
    get credential() {
      return this.jsObject.credential;
    }
    get operationType() {
      return this.jsObject.operationType;
    }
    get additionalUserInfo() {
      return new src__auth.AdditionalUserInfo.fromJsObject(this.jsObject.additionalUserInfo);
    }
  };
  (src__auth.UserCredential.fromJsObject = function(jsObject) {
    src__auth.UserCredential.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = src__auth.UserCredential.prototype;
  dart.addTypeTests(src__auth.UserCredential);
  dart.setGetterSignature(src__auth.UserCredential, () => ({
    __proto__: dart.getGetters(src__auth.UserCredential.__proto__),
    user: src__auth.User,
    credential: dart.lazyJSType(() => dart.global.firebase.auth.AuthCredential, "firebase.auth.AuthCredential"),
    operationType: core.String,
    additionalUserInfo: src__auth.AdditionalUserInfo
  }));
  dart.setLibraryUri(src__auth.UserCredential, "package:firebase/src/auth.dart");
  src__auth.AdditionalUserInfo = class AdditionalUserInfo extends src__js.JsObjectWrapper$(dart.anonymousJSType("AdditionalUserInfoJsImpl")) {
    get providerId() {
      return this.jsObject.providerId;
    }
    get profile() {
      return MapOfString$dynamic()._check(src__utils.dartify(this.jsObject.profile));
    }
    get username() {
      return this.jsObject.username;
    }
    get isNewUser() {
      return this.jsObject.isNewUser;
    }
  };
  (src__auth.AdditionalUserInfo.fromJsObject = function(jsObject) {
    src__auth.AdditionalUserInfo.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = src__auth.AdditionalUserInfo.prototype;
  dart.addTypeTests(src__auth.AdditionalUserInfo);
  dart.setGetterSignature(src__auth.AdditionalUserInfo, () => ({
    __proto__: dart.getGetters(src__auth.AdditionalUserInfo.__proto__),
    providerId: core.String,
    profile: core.Map$(core.String, dart.dynamic),
    username: core.String,
    isNewUser: core.bool
  }));
  dart.setLibraryUri(src__auth.AdditionalUserInfo, "package:firebase/src/auth.dart");
  src__utils.dartify = function(jsObject) {
    if (dart.test(src__utils._isBasicType(jsObject))) {
      return jsObject;
    }
    if (core.Iterable.is(jsObject)) {
      return jsObject[$map](dart.dynamic, dart.fn(src__utils.dartify, ObjectTodynamic()))[$toList]();
    }
    let jsDate = src__interop__js_interop.dartifyDate(jsObject);
    if (jsDate != null) {
      return jsDate;
    }
    if (dart.dtest(js_util.hasProperty(jsObject, "firestore")) && dart.dtest(js_util.hasProperty(jsObject, "id")) && dart.dtest(js_util.hasProperty(jsObject, "parent"))) {
      return src__firestore.DocumentReference.getInstance(dart.lazyJSType(() => dart.global.firebase.firestore.DocumentReference, "firebase.firestore.DocumentReference")._check(jsObject));
    }
    if (dart.dtest(js_util.hasProperty(jsObject, "latitude")) && dart.dtest(js_util.hasProperty(jsObject, "longitude")) && dart.global.Object.keys(jsObject)[$length] === 2) {
      return dart.lazyJSType(() => dart.global.firebase.firestore.GeoPoint, "firebase.firestore.GeoPoint").as(jsObject);
    }
    let proto = js_util.getProperty(jsObject, "__proto__");
    if (dart.dtest(js_util.hasProperty(proto, "toDate")) && dart.dtest(js_util.hasProperty(proto, "toMillis"))) {
      return new core.DateTime.fromMillisecondsSinceEpoch(dart.lazyJSType(() => dart.global.firebase.firestore.Timestamp, "firebase.firestore.Timestamp").as(jsObject).toMillis());
    }
    if (dart.dtest(js_util.hasProperty(proto, "isEqual")) && dart.dtest(js_util.hasProperty(proto, "toBase64"))) {
      return dart.anonymousJSType("Blob").as(jsObject);
    }
    let keys = dart.global.Object.keys(jsObject);
    let map = new (IdentityMapOfString$dynamic()).new();
    for (let key of keys) {
      map[$_set](key, src__utils.dartify(js_util.getProperty(jsObject, key)));
    }
    return map;
  };
  src__utils.jsifyList = function(list) {
    return dart.global.Array.from(list[$map](dart.dynamic, dart.fn(src__utils.jsify, ObjectTodynamic()))[$toList]());
  };
  src__utils.jsify = function(dartObject) {
    if (dart.test(src__utils._isBasicType(dartObject))) {
      return dartObject;
    }
    if (core.DateTime.is(dartObject)) {
      return dart.global.firebase.firestore.Timestamp.fromMillis(dartObject.millisecondsSinceEpoch);
    }
    if (core.Iterable.is(dartObject)) {
      return src__utils.jsifyList(dartObject);
    }
    if (core.Map.is(dartObject)) {
      let jsMap = js_util.newObject();
      dartObject[$forEach](dart.fn((key, value) => {
        js_util.setProperty(jsMap, key, src__utils.jsify(value));
      }, dynamicAnddynamicToNull()));
      return jsMap;
    }
    if (src__firestore.DocumentReference.is(dartObject)) {
      return dartObject.jsObject;
    }
    if (src__firestore.FieldValue.is(dartObject)) {
      return src__firestore.jsifyFieldValue(dartObject);
    }
    if (dart.anonymousJSType("Blob").is(dartObject)) {
      return dartObject;
    }
    if (dart.lazyJSType(() => dart.global.firebase.firestore.GeoPoint, "firebase.firestore.GeoPoint").is(dartObject)) {
      return dartObject;
    }
    if (core.Function.is(dartObject)) {
      return js.allowInterop(core.Function, dartObject);
    }
    dart.throw(new core.ArgumentError.value(dartObject, "dartObject", "Could not convert"));
  };
  src__utils.callMethod = function(jsObject, method, args) {
    return js_util.callMethod(jsObject, method, args);
  };
  src__utils._isBasicType = function(value) {
    if (value == null || typeof value == 'number' || typeof value == 'boolean' || typeof value == 'string') {
      return true;
    }
    return false;
  };
  src__utils.handleThenable = function(T, thenable) {
    return html.promiseToFuture(T, thenable);
  };
  src__utils.handleFutureWithMapper = function(T, S, future, mapper) {
    return new dart.global.firebase.Promise(js.allowInterop(core.Function, dart.fn((resolve, reject) => {
      future.then(dart.dynamic, dart.fn(value => {
        let mappedValue = mapper(value);
        resolve(mappedValue);
      }, dart.fnType(core.Null, [T]))).catchError(dart.fn(error => {
        reject(error);
      }, dynamicToNull()));
    }, FnAndFnToNull())));
  };
  src__utils.resolveError = function(c) {
    return js.allowInterop(dynamicTovoid(), dart.bind(c, 'completeError'));
  };
  src__firestore.Firestore = class Firestore extends src__js.JsObjectWrapper$(dart.lazyJSType(() => dart.global.firebase.firestore.Firestore, "firebase.firestore.Firestore")) {
    get app() {
      return src__app.App.getInstance(this.jsObject.app);
    }
    static getInstance(jsObject) {
      let t5, t5$, t4, t3, t2;
      if (jsObject == null) {
        return null;
      }
      t2 = src__firestore.Firestore._expando;
      t3 = jsObject;
      t4 = t2._get(t3);
      return t4 == null ? (t5$ = new src__firestore.Firestore._fromJsObject((t5 = jsObject, t5.settings({timestampsInSnapshots: true}), t5)), t2._set(t3, t5$), t5$) : t4;
    }
    batch() {
      return src__firestore.WriteBatch.getInstance(this.jsObject.batch());
    }
    collection(collectionPath) {
      return src__firestore.CollectionReference.getInstance(this.jsObject.collection(collectionPath));
    }
    doc(documentPath) {
      return src__firestore.DocumentReference.getInstance(this.jsObject.doc(documentPath));
    }
    enablePersistence() {
      return src__utils.handleThenable(core.Null, this.jsObject.enablePersistence());
    }
    runTransaction(updateFunction) {
      let updateFunctionWrap = js.allowInterop(dynamicToPromiseJsImpl(), dart.fn(transaction => src__utils.handleFutureWithMapper(core.Object, dart.dynamic, FutureOfObject()._check(updateFunction(src__firestore.Transaction.getInstance(dart.lazyJSType(() => dart.global.firebase.firestore.Transaction, "firebase.firestore.Transaction")._check(transaction)))), dart.fn(src__utils.jsify, ObjectTodynamic())), dynamicToPromiseJsImpl()));
      return src__utils.handleThenable(dart.dynamic, this.jsObject.runTransaction(updateFunctionWrap)).then(dart.dynamic, dart.fn(src__utils.dartify, ObjectTodynamic()));
    }
    settings(settings) {
      return this.jsObject.settings(settings);
    }
    enableNetwork() {
      return src__utils.handleThenable(dart.dynamic, this.jsObject.enableNetwork());
    }
    disableNetwork() {
      return src__utils.handleThenable(dart.dynamic, this.jsObject.disableNetwork());
    }
  };
  (src__firestore.Firestore._fromJsObject = function(jsObject) {
    src__firestore.Firestore.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = src__firestore.Firestore.prototype;
  dart.addTypeTests(src__firestore.Firestore);
  dart.setMethodSignature(src__firestore.Firestore, () => ({
    __proto__: dart.getMethods(src__firestore.Firestore.__proto__),
    batch: dart.fnType(src__firestore.WriteBatch, []),
    collection: dart.fnType(src__firestore.CollectionReference$(dart.lazyJSType(() => dart.global.firebase.firestore.CollectionReference, "firebase.firestore.CollectionReference")), [core.String]),
    doc: dart.fnType(src__firestore.DocumentReference, [core.String]),
    enablePersistence: dart.fnType(async.Future$(core.Null), []),
    runTransaction: dart.fnType(async.Future, [dart.fnType(dart.dynamic, [src__firestore.Transaction])]),
    settings: dart.fnType(dart.void, [dart.anonymousJSType("Settings")]),
    enableNetwork: dart.fnType(async.Future, []),
    disableNetwork: dart.fnType(async.Future, [])
  }));
  dart.setGetterSignature(src__firestore.Firestore, () => ({
    __proto__: dart.getGetters(src__firestore.Firestore.__proto__),
    app: src__app.App
  }));
  dart.setLibraryUri(src__firestore.Firestore, "package:firebase/src/firestore.dart");
  dart.defineLazy(src__firestore.Firestore, {
    /*src__firestore.Firestore._expando*/get _expando() {
      return new (ExpandoOfFirestore()).new();
    }
  });
  const _wrapUpdateFunctionCall = dart.privateName(src__firestore, "_wrapUpdateFunctionCall");
  src__firestore._Updatable = class _Updatable extends core.Object {
    [_wrapUpdateFunctionCall](jsObject, data, fieldsAndValues, documentRef) {
      if (documentRef === void 0) documentRef = null;
      if (data == null && fieldsAndValues == null) {
        dart.throw(new core.ArgumentError.new("Please provide either data or fieldsAndValues parameter."));
      }
      let args = data != null ? [src__utils.jsify(data)] : fieldsAndValues[$map](dart.dynamic, dart.fn(f => dart.lazyJSType(() => dart.global.firebase.firestore.FieldPath, "firebase.firestore.FieldPath").is(f) ? f : src__utils.jsify(f), dynamicTodynamic()))[$toList]();
      if (documentRef != null) {
        args[$insert](0, documentRef.jsObject);
      }
      return src__utils.callMethod(jsObject, "update", args);
    }
  };
  (src__firestore._Updatable.new = function() {
    ;
  }).prototype = src__firestore._Updatable.prototype;
  dart.addTypeTests(src__firestore._Updatable);
  dart.setMethodSignature(src__firestore._Updatable, () => ({
    __proto__: dart.getMethods(src__firestore._Updatable.__proto__),
    [_wrapUpdateFunctionCall]: dart.fnType(dart.dynamic, [dart.dynamic, core.Map$(core.String, dart.dynamic), core.List], [src__firestore.DocumentReference])
  }));
  dart.setLibraryUri(src__firestore._Updatable, "package:firebase/src/firestore.dart");
  const JsObjectWrapper__Updatable$ = class JsObjectWrapper__Updatable extends src__js.JsObjectWrapper$(dart.lazyJSType(() => dart.global.firebase.firestore.WriteBatch, "firebase.firestore.WriteBatch")) {};
  (JsObjectWrapper__Updatable$.fromJsObject = function(jsObject) {
    JsObjectWrapper__Updatable$.__proto__.fromJsObject.call(this, jsObject);
  }).prototype = JsObjectWrapper__Updatable$.prototype;
  dart.applyMixin(JsObjectWrapper__Updatable$, src__firestore._Updatable);
  src__firestore.WriteBatch = class WriteBatch extends JsObjectWrapper__Updatable$ {
    static getInstance(jsObject) {
      let t5, t4, t3, t2;
      if (jsObject == null) {
        return null;
      }
      t2 = src__firestore.WriteBatch._expando;
      t3 = jsObject;
      t4 = t2._get(t3);
      return t4 == null ? (t5 = new src__firestore.WriteBatch._fromJsObject(jsObject), t2._set(t3, t5), t5) : t4;
    }
    commit() {
      return src__utils.handleThenable(core.Null, this.jsObject.commit());
    }
    delete(documentRef) {
      return src__firestore.WriteBatch.getInstance(this.jsObject.delete(documentRef.jsObject));
    }
    set(documentRef, data, options) {
      if (options === void 0) options = null;
      let jsObjectSet = options != null ? this.jsObject.set(documentRef.jsObject, src__utils.jsify(data), options) : this.jsObject.set(documentRef.jsObject, src__utils.jsify(data));
      return src__firestore.WriteBatch.getInstance(jsObjectSet);
    }
    update(documentRef, opts) {
      let data = opts && 'data' in opts ? opts.data : null;
      let fieldsAndValues = opts && 'fieldsAndValues' in opts ? opts.fieldsAndValues : null;
      return src__firestore.WriteBatch.getInstance(dart.lazyJSType(() => dart.global.firebase.firestore.WriteBatch, "firebase.firestore.WriteBatch")._check(this[_wrapUpdateFunctionCall](this.jsObject, data, fieldsAndValues, documentRef)));
    }
  };
  (src__firestore.WriteBatch._fromJsObject = function(jsObject) {
    src__firestore.WriteBatch.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = src__firestore.WriteBatch.prototype;
  dart.addTypeTests(src__firestore.WriteBatch);
  dart.setMethodSignature(src__firestore.WriteBatch, () => ({
    __proto__: dart.getMethods(src__firestore.WriteBatch.__proto__),
    commit: dart.fnType(async.Future$(core.Null), []),
    delete: dart.fnType(src__firestore.WriteBatch, [src__firestore.DocumentReference]),
    set: dart.fnType(src__firestore.WriteBatch, [src__firestore.DocumentReference, core.Map$(core.String, dart.dynamic)], [dart.anonymousJSType("SetOptions")]),
    update: dart.fnType(src__firestore.WriteBatch, [src__firestore.DocumentReference], {data: core.Map$(core.String, dart.dynamic), fieldsAndValues: core.List})
  }));
  dart.setLibraryUri(src__firestore.WriteBatch, "package:firebase/src/firestore.dart");
  dart.defineLazy(src__firestore.WriteBatch, {
    /*src__firestore.WriteBatch._expando*/get _expando() {
      return new (ExpandoOfWriteBatch()).new();
    }
  });
  const _onSnapshotController = dart.privateName(src__firestore, "_onSnapshotController");
  const _onMetadataController = dart.privateName(src__firestore, "_onMetadataController");
  const _createStream = dart.privateName(src__firestore, "_createStream");
  const JsObjectWrapper__Updatable$$ = class JsObjectWrapper__Updatable extends src__js.JsObjectWrapper$(dart.lazyJSType(() => dart.global.firebase.firestore.DocumentReference, "firebase.firestore.DocumentReference")) {};
  (JsObjectWrapper__Updatable$$.fromJsObject = function(jsObject) {
    JsObjectWrapper__Updatable$$.__proto__.fromJsObject.call(this, jsObject);
  }).prototype = JsObjectWrapper__Updatable$$.prototype;
  dart.applyMixin(JsObjectWrapper__Updatable$$, src__firestore._Updatable);
  src__firestore.DocumentReference = class DocumentReference extends JsObjectWrapper__Updatable$$ {
    get firestore() {
      return src__firestore.Firestore.getInstance(this.jsObject.firestore);
    }
    get id() {
      return this.jsObject.id;
    }
    get parent() {
      return src__firestore.CollectionReference.getInstance(this.jsObject.parent);
    }
    get path() {
      return this.jsObject.path;
    }
    static getInstance(jsObject) {
      let t5, t4, t3, t2;
      if (jsObject == null) {
        return null;
      }
      t2 = src__firestore.DocumentReference._expando;
      t3 = jsObject;
      t4 = t2._get(t3);
      return t4 == null ? (t5 = new src__firestore.DocumentReference._fromJsObject(jsObject), t2._set(t3, t5), t5) : t4;
    }
    collection(collectionPath) {
      return src__firestore.CollectionReference.getInstance(this.jsObject.collection(collectionPath));
    }
    delete() {
      return src__utils.handleThenable(core.Null, this.jsObject.delete());
    }
    get() {
      return src__utils.handleThenable(dart.lazyJSType(() => dart.global.firebase.firestore.DocumentSnapshot, "firebase.firestore.DocumentSnapshot"), this.jsObject.get()).then(src__firestore.DocumentSnapshot, dart.fn(src__firestore.DocumentSnapshot.getInstance, DocumentSnapshotJsImplToDocumentSnapshot()));
    }
    get onSnapshot() {
      return this[_createStream](this[_onSnapshotController]);
    }
    get onMetadataChangesSnapshot() {
      return this[_createStream](this[_onMetadataController], {includeMetadataChanges: true});
    }
    [_createStream](controller, options) {
      if (options === void 0) options = null;
      if (controller == null) {
        let nextWrapper = js.allowInterop(DocumentSnapshotJsImplToNull(), dart.fn(snapshot => {
          controller.add(src__firestore.DocumentSnapshot.getInstance(snapshot));
        }, DocumentSnapshotJsImplToNull()));
        let errorWrapper = js.allowInterop(dynamicTovoid(), dart.fn(e => controller.addError(e), dynamicTovoid()));
        let onSnapshotUnsubscribe = null;
        const startListen = () => {
          onSnapshotUnsubscribe = options != null ? this.jsObject.onSnapshot(options, nextWrapper, errorWrapper) : this.jsObject.onSnapshot(nextWrapper, errorWrapper);
        };
        dart.fn(startListen, VoidTovoid());
        function stopListen() {
          onSnapshotUnsubscribe();
          onSnapshotUnsubscribe = null;
        }
        dart.fn(stopListen, VoidTovoid());
        controller = StreamControllerOfDocumentSnapshot().broadcast({onListen: startListen, onCancel: stopListen, sync: true});
      }
      return controller.stream;
    }
    set(data, options) {
      if (options === void 0) options = null;
      let jsObjectSet = options != null ? this.jsObject.set(src__utils.jsify(data), options) : this.jsObject.set(src__utils.jsify(data));
      return src__utils.handleThenable(core.Null, jsObjectSet);
    }
    update(opts) {
      let data = opts && 'data' in opts ? opts.data : null;
      let fieldsAndValues = opts && 'fieldsAndValues' in opts ? opts.fieldsAndValues : null;
      return src__utils.handleThenable(core.Null, dart.anonymousJSType("ThenableJsImpl")._check(this[_wrapUpdateFunctionCall](this.jsObject, data, fieldsAndValues)));
    }
  };
  (src__firestore.DocumentReference._fromJsObject = function(jsObject) {
    this[_onSnapshotController] = null;
    this[_onMetadataController] = null;
    src__firestore.DocumentReference.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = src__firestore.DocumentReference.prototype;
  dart.addTypeTests(src__firestore.DocumentReference);
  dart.setMethodSignature(src__firestore.DocumentReference, () => ({
    __proto__: dart.getMethods(src__firestore.DocumentReference.__proto__),
    collection: dart.fnType(src__firestore.CollectionReference$(dart.lazyJSType(() => dart.global.firebase.firestore.CollectionReference, "firebase.firestore.CollectionReference")), [core.String]),
    delete: dart.fnType(async.Future$(core.Null), []),
    get: dart.fnType(async.Future$(src__firestore.DocumentSnapshot), []),
    [_createStream]: dart.fnType(async.Stream$(src__firestore.DocumentSnapshot), [async.StreamController$(src__firestore.DocumentSnapshot)], [dart.anonymousJSType("DocumentListenOptions")]),
    set: dart.fnType(async.Future$(core.Null), [core.Map$(core.String, dart.dynamic)], [dart.anonymousJSType("SetOptions")]),
    update: dart.fnType(async.Future$(core.Null), [], {data: core.Map$(core.String, dart.dynamic), fieldsAndValues: core.List})
  }));
  dart.setGetterSignature(src__firestore.DocumentReference, () => ({
    __proto__: dart.getGetters(src__firestore.DocumentReference.__proto__),
    firestore: src__firestore.Firestore,
    id: core.String,
    parent: src__firestore.CollectionReference$(dart.lazyJSType(() => dart.global.firebase.firestore.CollectionReference, "firebase.firestore.CollectionReference")),
    path: core.String,
    onSnapshot: async.Stream$(src__firestore.DocumentSnapshot),
    onMetadataChangesSnapshot: async.Stream$(src__firestore.DocumentSnapshot)
  }));
  dart.setLibraryUri(src__firestore.DocumentReference, "package:firebase/src/firestore.dart");
  dart.setFieldSignature(src__firestore.DocumentReference, () => ({
    __proto__: dart.getFields(src__firestore.DocumentReference.__proto__),
    [_onSnapshotController]: dart.fieldType(async.StreamController$(src__firestore.DocumentSnapshot)),
    [_onMetadataController]: dart.fieldType(async.StreamController$(src__firestore.DocumentSnapshot))
  }));
  dart.defineLazy(src__firestore.DocumentReference, {
    /*src__firestore.DocumentReference._expando*/get _expando() {
      return new (ExpandoOfDocumentReference()).new();
    }
  });
  const _onSnapshotMetadataController = dart.privateName(src__firestore, "_onSnapshotMetadataController");
  const _wrapPaginatingFunctionCall = dart.privateName(src__firestore, "_wrapPaginatingFunctionCall");
  const _is_Query_default = Symbol('_is_Query_default');
  src__firestore.Query$ = dart.generic(T => {
    class Query extends src__js.JsObjectWrapper$(T) {
      get firestore() {
        return src__firestore.Firestore.getInstance(this.jsObject.firestore);
      }
      endAt(opts) {
        let snapshot = opts && 'snapshot' in opts ? opts.snapshot : null;
        let fieldValues = opts && 'fieldValues' in opts ? opts.fieldValues : null;
        return new (QueryOfQueryJsImpl()).fromJsObject(dart.lazyJSType(() => dart.global.firebase.firestore.Query, "firebase.firestore.Query")._check(this[_wrapPaginatingFunctionCall]("endAt", snapshot, fieldValues)));
      }
      endBefore(opts) {
        let snapshot = opts && 'snapshot' in opts ? opts.snapshot : null;
        let fieldValues = opts && 'fieldValues' in opts ? opts.fieldValues : null;
        return new (QueryOfQueryJsImpl()).fromJsObject(dart.lazyJSType(() => dart.global.firebase.firestore.Query, "firebase.firestore.Query")._check(this[_wrapPaginatingFunctionCall]("endBefore", snapshot, fieldValues)));
      }
      get() {
        return src__utils.handleThenable(dart.lazyJSType(() => dart.global.firebase.firestore.QuerySnapshot, "firebase.firestore.QuerySnapshot"), this.jsObject.get()).then(src__firestore.QuerySnapshot, dart.fn(src__firestore.QuerySnapshot.getInstance, QuerySnapshotJsImplToQuerySnapshot()));
      }
      limit(limit) {
        return new (QueryOfQueryJsImpl()).fromJsObject(this.jsObject.limit(limit));
      }
      get onSnapshot() {
        let t2;
        return (t2 = this[_onSnapshotController], t2 == null ? this[_onSnapshotController] = this[_createStream](false) : t2).stream;
      }
      get onSnapshotMetadata() {
        let t2;
        return (t2 = this[_onSnapshotMetadataController], t2 == null ? this[_onSnapshotMetadataController] = this[_createStream](true) : t2).stream;
      }
      [_createStream](includeMetadataChanges) {
        let controller = null;
        let nextWrapper = js.allowInterop(QuerySnapshotJsImplToNull(), dart.fn(snapshot => {
          controller.add(new src__firestore.QuerySnapshot._fromJsObject(snapshot));
        }, QuerySnapshotJsImplToNull()));
        let errorWrapper = js.allowInterop(dynamicTovoid(), dart.fn(e => controller.addError(e), dynamicTovoid()));
        let onSnapshotUnsubscribe = null;
        let options = {includeMetadataChanges: includeMetadataChanges};
        const startListen = () => {
          onSnapshotUnsubscribe = this.jsObject.onSnapshot(options, nextWrapper, errorWrapper);
        };
        dart.fn(startListen, VoidTovoid());
        function stopListen() {
          onSnapshotUnsubscribe();
          onSnapshotUnsubscribe = null;
        }
        dart.fn(stopListen, VoidTovoid());
        return controller = StreamControllerOfQuerySnapshot().broadcast({onListen: startListen, onCancel: stopListen, sync: true});
      }
      orderBy(fieldPath, directionStr) {
        if (directionStr === void 0) directionStr = null;
        let jsObjectOrderBy = directionStr != null ? this.jsObject.orderBy(fieldPath, directionStr) : this.jsObject.orderBy(fieldPath);
        return new (QueryOfQueryJsImpl()).fromJsObject(jsObjectOrderBy);
      }
      startAfter(opts) {
        let snapshot = opts && 'snapshot' in opts ? opts.snapshot : null;
        let fieldValues = opts && 'fieldValues' in opts ? opts.fieldValues : null;
        return new (QueryOfQueryJsImpl()).fromJsObject(dart.lazyJSType(() => dart.global.firebase.firestore.Query, "firebase.firestore.Query")._check(this[_wrapPaginatingFunctionCall]("startAfter", snapshot, fieldValues)));
      }
      startAt(opts) {
        let snapshot = opts && 'snapshot' in opts ? opts.snapshot : null;
        let fieldValues = opts && 'fieldValues' in opts ? opts.fieldValues : null;
        return new (QueryOfQueryJsImpl()).fromJsObject(dart.lazyJSType(() => dart.global.firebase.firestore.Query, "firebase.firestore.Query")._check(this[_wrapPaginatingFunctionCall]("startAt", snapshot, fieldValues)));
      }
      where(fieldPath, opStr, value) {
        return new (QueryOfQueryJsImpl()).fromJsObject(this.jsObject.where(fieldPath, opStr, src__utils.jsify(value)));
      }
      [_wrapPaginatingFunctionCall](method, snapshot, fieldValues) {
        if (snapshot == null && fieldValues == null) {
          dart.throw(new core.ArgumentError.new("Please provide either snapshot or fieldValues parameter."));
        }
        let args = snapshot != null ? JSArrayOfDocumentSnapshotJsImpl().of([snapshot.jsObject]) : fieldValues[$map](dart.dynamic, dart.fn(src__utils.jsify, ObjectTodynamic()))[$toList]();
        return src__utils.callMethod(this.jsObject, method, args);
      }
    }
    (Query.fromJsObject = function(jsObject) {
      this[_onSnapshotController] = null;
      this[_onSnapshotMetadataController] = null;
      Query.__proto__.fromJsObject.call(this, jsObject);
      ;
    }).prototype = Query.prototype;
    dart.addTypeTests(Query);
    Query.prototype[_is_Query_default] = true;
    dart.setMethodSignature(Query, () => ({
      __proto__: dart.getMethods(Query.__proto__),
      endAt: dart.fnType(src__firestore.Query$(dart.lazyJSType(() => dart.global.firebase.firestore.Query, "firebase.firestore.Query")), [], {fieldValues: core.List, snapshot: src__firestore.DocumentSnapshot}),
      endBefore: dart.fnType(src__firestore.Query$(dart.lazyJSType(() => dart.global.firebase.firestore.Query, "firebase.firestore.Query")), [], {fieldValues: core.List, snapshot: src__firestore.DocumentSnapshot}),
      get: dart.fnType(async.Future$(src__firestore.QuerySnapshot), []),
      limit: dart.fnType(src__firestore.Query$(dart.lazyJSType(() => dart.global.firebase.firestore.Query, "firebase.firestore.Query")), [core.num]),
      [_createStream]: dart.fnType(async.StreamController$(src__firestore.QuerySnapshot), [core.bool]),
      orderBy: dart.fnType(src__firestore.Query$(dart.lazyJSType(() => dart.global.firebase.firestore.Query, "firebase.firestore.Query")), [dart.dynamic], [core.String]),
      startAfter: dart.fnType(src__firestore.Query$(dart.lazyJSType(() => dart.global.firebase.firestore.Query, "firebase.firestore.Query")), [], {fieldValues: core.List, snapshot: src__firestore.DocumentSnapshot}),
      startAt: dart.fnType(src__firestore.Query$(dart.lazyJSType(() => dart.global.firebase.firestore.Query, "firebase.firestore.Query")), [], {fieldValues: core.List, snapshot: src__firestore.DocumentSnapshot}),
      where: dart.fnType(src__firestore.Query$(dart.lazyJSType(() => dart.global.firebase.firestore.Query, "firebase.firestore.Query")), [dart.dynamic, core.String, dart.dynamic]),
      [_wrapPaginatingFunctionCall]: dart.fnType(dart.dynamic, [core.String, src__firestore.DocumentSnapshot, core.List])
    }));
    dart.setGetterSignature(Query, () => ({
      __proto__: dart.getGetters(Query.__proto__),
      firestore: src__firestore.Firestore,
      onSnapshot: async.Stream$(src__firestore.QuerySnapshot),
      onSnapshotMetadata: async.Stream$(src__firestore.QuerySnapshot)
    }));
    dart.setLibraryUri(Query, "package:firebase/src/firestore.dart");
    dart.setFieldSignature(Query, () => ({
      __proto__: dart.getFields(Query.__proto__),
      [_onSnapshotController]: dart.fieldType(async.StreamController$(src__firestore.QuerySnapshot)),
      [_onSnapshotMetadataController]: dart.fieldType(async.StreamController$(src__firestore.QuerySnapshot))
    }));
    return Query;
  });
  src__firestore.Query = src__firestore.Query$();
  dart.addTypeTests(src__firestore.Query, _is_Query_default);
  const _is_CollectionReference_default = Symbol('_is_CollectionReference_default');
  src__firestore.CollectionReference$ = dart.generic(T => {
    class CollectionReference extends src__firestore.Query$(T) {
      get id() {
        return this.jsObject.id;
      }
      get parent() {
        return src__firestore.DocumentReference.getInstance(this.jsObject.parent);
      }
      get path() {
        return this.jsObject.path;
      }
      static getInstance(jsObject) {
        let t5, t4, t3, t2;
        if (jsObject == null) {
          return null;
        }
        t2 = src__firestore.CollectionReference._expando;
        t3 = jsObject;
        t4 = t2._get(t3);
        return t4 == null ? (t5 = new (CollectionReferenceOfCollectionReferenceJsImpl())._fromJsObject(jsObject), t2._set(t3, t5), t5) : t4;
      }
      static new() {
        return new (src__firestore.CollectionReference$(T))._fromJsObject(new dart.global.firebase.firestore.CollectionReference());
      }
      add(data) {
        return src__utils.handleThenable(dart.lazyJSType(() => dart.global.firebase.firestore.DocumentReference, "firebase.firestore.DocumentReference"), this.jsObject.add(src__utils.jsify(data))).then(src__firestore.DocumentReference, dart.fn(src__firestore.DocumentReference.getInstance, DocumentReferenceJsImplToDocumentReference()));
      }
      doc(documentPath) {
        if (documentPath === void 0) documentPath = null;
        let jsObjectDoc = documentPath != null ? this.jsObject.doc(documentPath) : this.jsObject.doc();
        return src__firestore.DocumentReference.getInstance(jsObjectDoc);
      }
      isEqual(other) {
        return this.jsObject.isEqual(other.jsObject);
      }
    }
    (CollectionReference._fromJsObject = function(jsObject) {
      CollectionReference.__proto__.fromJsObject.call(this, T._check(jsObject));
      ;
    }).prototype = CollectionReference.prototype;
    dart.addTypeTests(CollectionReference);
    CollectionReference.prototype[_is_CollectionReference_default] = true;
    dart.setMethodSignature(CollectionReference, () => ({
      __proto__: dart.getMethods(CollectionReference.__proto__),
      add: dart.fnType(async.Future$(src__firestore.DocumentReference), [core.Map$(core.String, dart.dynamic)]),
      doc: dart.fnType(src__firestore.DocumentReference, [], [core.String]),
      isEqual: dart.fnType(core.bool, [src__firestore.CollectionReference$(dart.lazyJSType(() => dart.global.firebase.firestore.CollectionReference, "firebase.firestore.CollectionReference"))])
    }));
    dart.setGetterSignature(CollectionReference, () => ({
      __proto__: dart.getGetters(CollectionReference.__proto__),
      id: core.String,
      parent: src__firestore.DocumentReference,
      path: core.String
    }));
    dart.setLibraryUri(CollectionReference, "package:firebase/src/firestore.dart");
    return CollectionReference;
  });
  src__firestore.CollectionReference = src__firestore.CollectionReference$();
  dart.defineLazy(src__firestore.CollectionReference, {
    /*src__firestore.CollectionReference._expando*/get _expando() {
      return new (ExpandoOfCollectionReferenceOfCollectionReferenceJsImpl()).new();
    }
  });
  dart.addTypeTests(src__firestore.CollectionReference, _is_CollectionReference_default);
  src__firestore.DocumentChange = class DocumentChange extends src__js.JsObjectWrapper$(dart.anonymousJSType("DocumentChangeJsImpl")) {
    get type() {
      return this.jsObject.type;
    }
    get doc() {
      return src__firestore.DocumentSnapshot.getInstance(this.jsObject.doc);
    }
    get oldIndex() {
      return this.jsObject.oldIndex;
    }
    get newIndex() {
      return this.jsObject.newIndex;
    }
    static getInstance(jsObject) {
      let t5, t4, t3, t2;
      if (jsObject == null) {
        return null;
      }
      t2 = src__firestore.DocumentChange._expando;
      t3 = jsObject;
      t4 = t2._get(t3);
      return t4 == null ? (t5 = new src__firestore.DocumentChange._fromJsObject(jsObject), t2._set(t3, t5), t5) : t4;
    }
  };
  (src__firestore.DocumentChange._fromJsObject = function(jsObject) {
    src__firestore.DocumentChange.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = src__firestore.DocumentChange.prototype;
  dart.addTypeTests(src__firestore.DocumentChange);
  dart.setGetterSignature(src__firestore.DocumentChange, () => ({
    __proto__: dart.getGetters(src__firestore.DocumentChange.__proto__),
    type: core.String,
    doc: src__firestore.DocumentSnapshot,
    oldIndex: core.num,
    newIndex: core.num
  }));
  dart.setLibraryUri(src__firestore.DocumentChange, "package:firebase/src/firestore.dart");
  dart.defineLazy(src__firestore.DocumentChange, {
    /*src__firestore.DocumentChange._expando*/get _expando() {
      return new (ExpandoOfDocumentChange()).new();
    }
  });
  src__firestore.DocumentSnapshot = class DocumentSnapshot extends src__js.JsObjectWrapper$(dart.lazyJSType(() => dart.global.firebase.firestore.DocumentSnapshot, "firebase.firestore.DocumentSnapshot")) {
    get exists() {
      return this.jsObject.exists;
    }
    get id() {
      return this.jsObject.id;
    }
    get metadata() {
      return this.jsObject.metadata;
    }
    get ref() {
      return src__firestore.DocumentReference.getInstance(this.jsObject.ref);
    }
    static getInstance(jsObject) {
      let t5, t4, t3, t2;
      if (jsObject == null) {
        return null;
      }
      t2 = src__firestore.DocumentSnapshot._expando;
      t3 = jsObject;
      t4 = t2._get(t3);
      return t4 == null ? (t5 = new src__firestore.DocumentSnapshot._fromJsObject(jsObject), t2._set(t3, t5), t5) : t4;
    }
    data() {
      return MapOfString$dynamic()._check(src__utils.dartify(this.jsObject.data()));
    }
    get(fieldPath) {
      return src__utils.dartify(this.jsObject.get(fieldPath));
    }
    isEqual(other) {
      return this.jsObject.isEqual(other.jsObject);
    }
  };
  (src__firestore.DocumentSnapshot._fromJsObject = function(jsObject) {
    src__firestore.DocumentSnapshot.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = src__firestore.DocumentSnapshot.prototype;
  dart.addTypeTests(src__firestore.DocumentSnapshot);
  dart.setMethodSignature(src__firestore.DocumentSnapshot, () => ({
    __proto__: dart.getMethods(src__firestore.DocumentSnapshot.__proto__),
    data: dart.fnType(core.Map$(core.String, dart.dynamic), []),
    get: dart.fnType(dart.dynamic, [dart.dynamic]),
    isEqual: dart.fnType(core.bool, [src__firestore.DocumentSnapshot])
  }));
  dart.setGetterSignature(src__firestore.DocumentSnapshot, () => ({
    __proto__: dart.getGetters(src__firestore.DocumentSnapshot.__proto__),
    exists: core.bool,
    id: core.String,
    metadata: dart.lazyJSType(() => dart.global.firebase.firestore.SnapshotMetadata, "firebase.firestore.SnapshotMetadata"),
    ref: src__firestore.DocumentReference
  }));
  dart.setLibraryUri(src__firestore.DocumentSnapshot, "package:firebase/src/firestore.dart");
  dart.defineLazy(src__firestore.DocumentSnapshot, {
    /*src__firestore.DocumentSnapshot._expando*/get _expando() {
      return new (ExpandoOfDocumentSnapshot()).new();
    }
  });
  src__firestore.QuerySnapshot = class QuerySnapshot extends src__js.JsObjectWrapper$(dart.lazyJSType(() => dart.global.firebase.firestore.QuerySnapshot, "firebase.firestore.QuerySnapshot")) {
    docChanges() {
      return this.jsObject.docChanges()[$map](src__firestore.DocumentChange, dart.fn(e => src__firestore.DocumentChange.getInstance(dart.anonymousJSType("DocumentChangeJsImpl")._check(e)), dynamicToDocumentChange()))[$toList]();
    }
    get docs() {
      return this.jsObject.docs[$map](src__firestore.DocumentSnapshot, dart.fn(e => src__firestore.DocumentSnapshot.getInstance(dart.lazyJSType(() => dart.global.firebase.firestore.DocumentSnapshot, "firebase.firestore.DocumentSnapshot")._check(e)), dynamicToDocumentSnapshot()))[$toList]();
    }
    get empty() {
      return this.jsObject.empty;
    }
    get metadata() {
      return this.jsObject.metadata;
    }
    get query() {
      return new (QueryOfQueryJsImpl()).fromJsObject(this.jsObject.query);
    }
    get size() {
      return this.jsObject.size;
    }
    static getInstance(jsObject) {
      let t5, t4, t3, t2;
      if (jsObject == null) {
        return null;
      }
      t2 = src__firestore.QuerySnapshot._expando;
      t3 = jsObject;
      t4 = t2._get(t3);
      return t4 == null ? (t5 = new src__firestore.QuerySnapshot._fromJsObject(jsObject), t2._set(t3, t5), t5) : t4;
    }
    forEach(callback) {
      let callbackWrap = js.allowInterop(dynamicTodynamic(), dart.fn(s => callback(src__firestore.DocumentSnapshot.getInstance(dart.lazyJSType(() => dart.global.firebase.firestore.DocumentSnapshot, "firebase.firestore.DocumentSnapshot")._check(s))), dynamicTodynamic()));
      return this.jsObject.forEach(callbackWrap);
    }
    isEqual(other) {
      return this.jsObject.isEqual(other.jsObject);
    }
  };
  (src__firestore.QuerySnapshot._fromJsObject = function(jsObject) {
    src__firestore.QuerySnapshot.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = src__firestore.QuerySnapshot.prototype;
  dart.addTypeTests(src__firestore.QuerySnapshot);
  dart.setMethodSignature(src__firestore.QuerySnapshot, () => ({
    __proto__: dart.getMethods(src__firestore.QuerySnapshot.__proto__),
    docChanges: dart.fnType(core.List$(src__firestore.DocumentChange), []),
    forEach: dart.fnType(dart.void, [dart.fnType(dart.dynamic, [src__firestore.DocumentSnapshot])]),
    isEqual: dart.fnType(core.bool, [src__firestore.QuerySnapshot])
  }));
  dart.setGetterSignature(src__firestore.QuerySnapshot, () => ({
    __proto__: dart.getGetters(src__firestore.QuerySnapshot.__proto__),
    docs: core.List$(src__firestore.DocumentSnapshot),
    empty: core.bool,
    metadata: dart.lazyJSType(() => dart.global.firebase.firestore.SnapshotMetadata, "firebase.firestore.SnapshotMetadata"),
    query: src__firestore.Query$(dart.lazyJSType(() => dart.global.firebase.firestore.Query, "firebase.firestore.Query")),
    size: core.num
  }));
  dart.setLibraryUri(src__firestore.QuerySnapshot, "package:firebase/src/firestore.dart");
  dart.defineLazy(src__firestore.QuerySnapshot, {
    /*src__firestore.QuerySnapshot._expando*/get _expando() {
      return new (ExpandoOfQuerySnapshot()).new();
    }
  });
  const JsObjectWrapper__Updatable$$0 = class JsObjectWrapper__Updatable extends src__js.JsObjectWrapper$(dart.lazyJSType(() => dart.global.firebase.firestore.Transaction, "firebase.firestore.Transaction")) {};
  (JsObjectWrapper__Updatable$$0.fromJsObject = function(jsObject) {
    JsObjectWrapper__Updatable$$0.__proto__.fromJsObject.call(this, jsObject);
  }).prototype = JsObjectWrapper__Updatable$$0.prototype;
  dart.applyMixin(JsObjectWrapper__Updatable$$0, src__firestore._Updatable);
  src__firestore.Transaction = class Transaction extends JsObjectWrapper__Updatable$$0 {
    static getInstance(jsObject) {
      let t5, t4, t3, t2;
      if (jsObject == null) {
        return null;
      }
      t2 = src__firestore.Transaction._expando;
      t3 = jsObject;
      t4 = t2._get(t3);
      return t4 == null ? (t5 = new src__firestore.Transaction._fromJsObject(jsObject), t2._set(t3, t5), t5) : t4;
    }
    delete(documentRef) {
      return src__firestore.Transaction.getInstance(this.jsObject.delete(documentRef.jsObject));
    }
    get(documentRef) {
      return src__utils.handleThenable(dart.lazyJSType(() => dart.global.firebase.firestore.DocumentSnapshot, "firebase.firestore.DocumentSnapshot"), this.jsObject.get(documentRef.jsObject)).then(src__firestore.DocumentSnapshot, dart.fn(src__firestore.DocumentSnapshot.getInstance, DocumentSnapshotJsImplToDocumentSnapshot()));
    }
    set(documentRef, data, options) {
      if (options === void 0) options = null;
      let jsObjectSet = options != null ? this.jsObject.set(documentRef.jsObject, src__utils.jsify(data), options) : this.jsObject.set(documentRef.jsObject, src__utils.jsify(data));
      return src__firestore.Transaction.getInstance(jsObjectSet);
    }
    update(documentRef, opts) {
      let data = opts && 'data' in opts ? opts.data : null;
      let fieldsAndValues = opts && 'fieldsAndValues' in opts ? opts.fieldsAndValues : null;
      return src__firestore.Transaction.getInstance(dart.lazyJSType(() => dart.global.firebase.firestore.Transaction, "firebase.firestore.Transaction")._check(this[_wrapUpdateFunctionCall](this.jsObject, data, fieldsAndValues, documentRef)));
    }
  };
  (src__firestore.Transaction._fromJsObject = function(jsObject) {
    src__firestore.Transaction.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = src__firestore.Transaction.prototype;
  dart.addTypeTests(src__firestore.Transaction);
  dart.setMethodSignature(src__firestore.Transaction, () => ({
    __proto__: dart.getMethods(src__firestore.Transaction.__proto__),
    delete: dart.fnType(src__firestore.Transaction, [src__firestore.DocumentReference]),
    get: dart.fnType(async.Future$(src__firestore.DocumentSnapshot), [src__firestore.DocumentReference]),
    set: dart.fnType(src__firestore.Transaction, [src__firestore.DocumentReference, core.Map$(core.String, dart.dynamic)], [dart.anonymousJSType("SetOptions")]),
    update: dart.fnType(src__firestore.Transaction, [src__firestore.DocumentReference], {data: core.Map$(core.String, dart.dynamic), fieldsAndValues: core.List})
  }));
  dart.setLibraryUri(src__firestore.Transaction, "package:firebase/src/firestore.dart");
  dart.defineLazy(src__firestore.Transaction, {
    /*src__firestore.Transaction._expando*/get _expando() {
      return new (ExpandoOfTransaction()).new();
    }
  });
  const _jsify = dart.privateName(src__firestore, "_jsify");
  src__firestore._FieldValueDelete = class _FieldValueDelete extends core.Object {
    [_jsify]() {
      return dart.global.firebase.firestore.FieldValue.delete();
    }
    toString() {
      return "FieldValue.delete()";
    }
  };
  (src__firestore._FieldValueDelete.new = function() {
    ;
  }).prototype = src__firestore._FieldValueDelete.prototype;
  dart.addTypeTests(src__firestore._FieldValueDelete);
  src__firestore._FieldValueDelete[dart.implements] = () => [src__firestore.FieldValue];
  dart.setMethodSignature(src__firestore._FieldValueDelete, () => ({
    __proto__: dart.getMethods(src__firestore._FieldValueDelete.__proto__),
    [_jsify]: dart.fnType(dart.dynamic, [])
  }));
  dart.setLibraryUri(src__firestore._FieldValueDelete, "package:firebase/src/firestore.dart");
  dart.defineExtensionMethods(src__firestore._FieldValueDelete, ['toString']);
  src__firestore._FieldValueServerTimestamp = class _FieldValueServerTimestamp extends core.Object {
    [_jsify]() {
      return dart.global.firebase.firestore.FieldValue.serverTimestamp();
    }
    toString() {
      return "FieldValue.serverTimestamp()";
    }
  };
  (src__firestore._FieldValueServerTimestamp.new = function() {
    ;
  }).prototype = src__firestore._FieldValueServerTimestamp.prototype;
  dart.addTypeTests(src__firestore._FieldValueServerTimestamp);
  src__firestore._FieldValueServerTimestamp[dart.implements] = () => [src__firestore.FieldValue];
  dart.setMethodSignature(src__firestore._FieldValueServerTimestamp, () => ({
    __proto__: dart.getMethods(src__firestore._FieldValueServerTimestamp.__proto__),
    [_jsify]: dart.fnType(dart.dynamic, [])
  }));
  dart.setLibraryUri(src__firestore._FieldValueServerTimestamp, "package:firebase/src/firestore.dart");
  dart.defineExtensionMethods(src__firestore._FieldValueServerTimestamp, ['toString']);
  src__firestore._FieldValueArray = class _FieldValueArray extends core.Object {};
  (src__firestore._FieldValueArray.new = function(elements) {
    this.elements = elements;
    ;
  }).prototype = src__firestore._FieldValueArray.prototype;
  dart.addTypeTests(src__firestore._FieldValueArray);
  src__firestore._FieldValueArray[dart.implements] = () => [src__firestore.FieldValue];
  dart.setLibraryUri(src__firestore._FieldValueArray, "package:firebase/src/firestore.dart");
  dart.setFieldSignature(src__firestore._FieldValueArray, () => ({
    __proto__: dart.getFields(src__firestore._FieldValueArray.__proto__),
    elements: dart.finalFieldType(core.List)
  }));
  src__firestore._FieldValueArrayUnion = class _FieldValueArrayUnion extends src__firestore._FieldValueArray {
    [_jsify]() {
      return src__utils.callMethod(dart.global.firebase.firestore.FieldValue, "arrayUnion", core.List._check(src__utils.jsifyList(this.elements)));
    }
    toString() {
      return "FieldValue.arrayUnion(" + dart.str(this.elements) + ")";
    }
  };
  (src__firestore._FieldValueArrayUnion.new = function(elements) {
    src__firestore._FieldValueArrayUnion.__proto__.new.call(this, elements);
    ;
  }).prototype = src__firestore._FieldValueArrayUnion.prototype;
  dart.addTypeTests(src__firestore._FieldValueArrayUnion);
  dart.setMethodSignature(src__firestore._FieldValueArrayUnion, () => ({
    __proto__: dart.getMethods(src__firestore._FieldValueArrayUnion.__proto__),
    [_jsify]: dart.fnType(dart.dynamic, [])
  }));
  dart.setLibraryUri(src__firestore._FieldValueArrayUnion, "package:firebase/src/firestore.dart");
  dart.defineExtensionMethods(src__firestore._FieldValueArrayUnion, ['toString']);
  src__firestore._FieldValueArrayRemove = class _FieldValueArrayRemove extends src__firestore._FieldValueArray {
    [_jsify]() {
      return src__utils.callMethod(dart.global.firebase.firestore.FieldValue, "arrayRemove", core.List._check(src__utils.jsifyList(this.elements)));
    }
    toString() {
      return "FieldValue.arrayRemove(" + dart.str(this.elements) + ")";
    }
  };
  (src__firestore._FieldValueArrayRemove.new = function(elements) {
    src__firestore._FieldValueArrayRemove.__proto__.new.call(this, elements);
    ;
  }).prototype = src__firestore._FieldValueArrayRemove.prototype;
  dart.addTypeTests(src__firestore._FieldValueArrayRemove);
  dart.setMethodSignature(src__firestore._FieldValueArrayRemove, () => ({
    __proto__: dart.getMethods(src__firestore._FieldValueArrayRemove.__proto__),
    [_jsify]: dart.fnType(dart.dynamic, [])
  }));
  dart.setLibraryUri(src__firestore._FieldValueArrayRemove, "package:firebase/src/firestore.dart");
  dart.defineExtensionMethods(src__firestore._FieldValueArrayRemove, ['toString']);
  src__firestore.FieldValue = class FieldValue extends core.Object {
    static _fromJs(jsFieldValue) {
      if (dart.equals(jsFieldValue, dart.global.firebase.firestore.FieldValue.delete())) {
        return src__firestore.FieldValue.delete();
      } else if (dart.equals(jsFieldValue, dart.global.firebase.firestore.FieldValue.serverTimestamp())) {
        return src__firestore.FieldValue.serverTimestamp();
      } else {
        dart.throw(new core.ArgumentError.value(jsFieldValue, "jsFieldValue", "Invalid value provided. We don't support dartfying object like arrayUnion or arrayRemove since not needed"));
      }
    }
    static serverTimestamp() {
      return src__firestore.FieldValue._serverTimestamp;
    }
    static delete() {
      return src__firestore.FieldValue._delete;
    }
    static arrayUnion(elements) {
      return new src__firestore._FieldValueArrayUnion.new(elements);
    }
    static arrayRemove(elements) {
      return new src__firestore._FieldValueArrayRemove.new(elements);
    }
  };
  (src__firestore.FieldValue.__ = function() {
    ;
  }).prototype = src__firestore.FieldValue.prototype;
  dart.addTypeTests(src__firestore.FieldValue);
  dart.setLibraryUri(src__firestore.FieldValue, "package:firebase/src/firestore.dart");
  dart.defineLazy(src__firestore.FieldValue, {
    /*src__firestore.FieldValue._serverTimestamp*/get _serverTimestamp() {
      return new src__firestore._FieldValueServerTimestamp.new();
    },
    /*src__firestore.FieldValue._delete*/get _delete() {
      return new src__firestore._FieldValueDelete.new();
    }
  });
  src__firestore.jsifyFieldValue = function(fieldValue) {
    return fieldValue[_jsify]();
  };
  src__app.App = class App extends src__js.JsObjectWrapper$(dart.lazyJSType(() => dart.global.firebase.app.App, "firebase.app.App")) {
    get name() {
      return this.jsObject.name;
    }
    get options() {
      return this.jsObject.options;
    }
    static getInstance(jsObject) {
      let t5, t4, t3, t2;
      if (jsObject == null) {
        return null;
      }
      t2 = src__app.App._expando;
      t3 = jsObject;
      t4 = t2._get(t3);
      return t4 == null ? (t5 = new src__app.App._fromJsObject(jsObject), t2._set(t3, t5), t5) : t4;
    }
    auth() {
      return src__auth.Auth.getInstance(this.jsObject.auth());
    }
    database() {
      return src__database.Database.getInstance(this.jsObject.database());
    }
    delete() {
      return src__utils.handleThenable(dart.dynamic, this.jsObject.delete());
    }
    storage(url) {
      if (url === void 0) url = null;
      let jsObjectStorage = url != null ? this.jsObject.storage(url) : this.jsObject.storage();
      return src__storage.Storage.getInstance(jsObjectStorage);
    }
    firestore() {
      return src__firestore.Firestore.getInstance(this.jsObject.firestore());
    }
  };
  (src__app.App._fromJsObject = function(jsObject) {
    src__app.App.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = src__app.App.prototype;
  dart.addTypeTests(src__app.App);
  dart.setMethodSignature(src__app.App, () => ({
    __proto__: dart.getMethods(src__app.App.__proto__),
    auth: dart.fnType(src__auth.Auth, []),
    database: dart.fnType(src__database.Database, []),
    delete: dart.fnType(async.Future, []),
    storage: dart.fnType(src__storage.Storage, [], [core.String]),
    firestore: dart.fnType(src__firestore.Firestore, [])
  }));
  dart.setGetterSignature(src__app.App, () => ({
    __proto__: dart.getGetters(src__app.App.__proto__),
    name: core.String,
    options: dart.anonymousJSType("FirebaseOptions")
  }));
  dart.setLibraryUri(src__app.App, "package:firebase/src/app.dart");
  dart.defineLazy(src__app.App, {
    /*src__app.App._expando*/get _expando() {
      return new (ExpandoOfApp()).new();
    }
  });
  const _name$ = dart.privateName(src__storage, "_name");
  src__storage.TaskState = class TaskState extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (src__storage.TaskState.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = src__storage.TaskState.prototype;
  dart.addTypeTests(src__storage.TaskState);
  dart.setLibraryUri(src__storage.TaskState, "package:firebase/src/storage.dart");
  dart.setFieldSignature(src__storage.TaskState, () => ({
    __proto__: dart.getFields(src__storage.TaskState.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(src__storage.TaskState, ['toString']);
  src__storage.TaskState.RUNNING = dart.const(new src__storage.TaskState.new(0, "TaskState.RUNNING"));
  src__storage.TaskState.PAUSED = dart.const(new src__storage.TaskState.new(1, "TaskState.PAUSED"));
  src__storage.TaskState.SUCCESS = dart.const(new src__storage.TaskState.new(2, "TaskState.SUCCESS"));
  src__storage.TaskState.CANCELED = dart.const(new src__storage.TaskState.new(3, "TaskState.CANCELED"));
  src__storage.TaskState.ERROR = dart.const(new src__storage.TaskState.new(4, "TaskState.ERROR"));
  src__storage.TaskState.values = dart.constList([src__storage.TaskState.RUNNING, src__storage.TaskState.PAUSED, src__storage.TaskState.SUCCESS, src__storage.TaskState.CANCELED, src__storage.TaskState.ERROR], src__storage.TaskState);
  src__storage.Storage = class Storage extends src__js.JsObjectWrapper$(dart.lazyJSType(() => dart.global.firebase.storage.Storage, "firebase.storage.Storage")) {
    get app() {
      return src__app.App.getInstance(this.jsObject.app);
    }
    get maxOperationRetryTime() {
      return this.jsObject.maxOperationRetryTime;
    }
    get maxUploadRetryTime() {
      return this.jsObject.maxUploadRetryTime;
    }
    static getInstance(jsObject) {
      let t5, t4, t3, t2;
      if (jsObject == null) {
        return null;
      }
      t2 = src__storage.Storage._expando;
      t3 = jsObject;
      t4 = t2._get(t3);
      return t4 == null ? (t5 = new src__storage.Storage._fromJsObject(jsObject), t2._set(t3, t5), t5) : t4;
    }
    ref(path) {
      if (path === void 0) path = null;
      return src__storage.StorageReference.getInstance(this.jsObject.ref(path));
    }
    refFromURL(url) {
      return src__storage.StorageReference.getInstance(this.jsObject.refFromURL(url));
    }
    setMaxOperationRetryTime(time) {
      return this.jsObject.setMaxOperationRetryTime(time);
    }
    setMaxUploadRetryTime(time) {
      return this.jsObject.setMaxUploadRetryTime(time);
    }
  };
  (src__storage.Storage._fromJsObject = function(jsObject) {
    src__storage.Storage.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = src__storage.Storage.prototype;
  dart.addTypeTests(src__storage.Storage);
  dart.setMethodSignature(src__storage.Storage, () => ({
    __proto__: dart.getMethods(src__storage.Storage.__proto__),
    ref: dart.fnType(src__storage.StorageReference, [], [core.String]),
    refFromURL: dart.fnType(src__storage.StorageReference, [core.String]),
    setMaxOperationRetryTime: dart.fnType(dart.void, [core.int]),
    setMaxUploadRetryTime: dart.fnType(dart.void, [core.int])
  }));
  dart.setGetterSignature(src__storage.Storage, () => ({
    __proto__: dart.getGetters(src__storage.Storage.__proto__),
    app: src__app.App,
    maxOperationRetryTime: core.int,
    maxUploadRetryTime: core.int
  }));
  dart.setLibraryUri(src__storage.Storage, "package:firebase/src/storage.dart");
  dart.defineLazy(src__storage.Storage, {
    /*src__storage.Storage._expando*/get _expando() {
      return new (ExpandoOfStorage()).new();
    }
  });
  src__storage.StorageReference = class StorageReference extends src__js.JsObjectWrapper$(dart.lazyJSType(() => dart.global.firebase.storage.Reference, "firebase.storage.Reference")) {
    get bucket() {
      return this.jsObject.bucket;
    }
    get fullPath() {
      return this.jsObject.fullPath;
    }
    get name() {
      return this.jsObject.name;
    }
    get parent() {
      return src__storage.StorageReference.getInstance(this.jsObject.parent);
    }
    get root() {
      return src__storage.StorageReference.getInstance(this.jsObject.root);
    }
    get storage() {
      return src__storage.Storage.getInstance(this.jsObject.storage);
    }
    static getInstance(jsObject) {
      let t5, t4, t3, t2;
      if (jsObject == null) {
        return null;
      }
      t2 = src__storage.StorageReference._expando;
      t3 = jsObject;
      t4 = t2._get(t3);
      return t4 == null ? (t5 = new src__storage.StorageReference._fromJsObject(jsObject), t2._set(t3, t5), t5) : t4;
    }
    child(path) {
      return src__storage.StorageReference.getInstance(this.jsObject.child(path));
    }
    delete() {
      return src__utils.handleThenable(dart.dynamic, this.jsObject.delete());
    }
    getDownloadURL() {
      return async.async(core.Uri, (function* getDownloadURL() {
        let uriString = (yield src__utils.handleThenable(core.String, this.jsObject.getDownloadURL()));
        return core.Uri.parse(uriString);
      }).bind(this));
    }
    getMetadata() {
      return src__utils.handleThenable(dart.anonymousJSType("FullMetadataJsImpl"), this.jsObject.getMetadata()).then(src__storage.FullMetadata, dart.fn(src__storage.FullMetadata.getInstance, dynamicToFullMetadata()));
    }
    put(blob, metadata) {
      if (metadata === void 0) metadata = null;
      let taskImpl = null;
      if (metadata != null) {
        taskImpl = this.jsObject.put(blob, metadata.jsObject);
      } else {
        taskImpl = this.jsObject.put(blob);
      }
      return src__storage.UploadTask.getInstance(taskImpl);
    }
    putString(data, format, metadata) {
      if (format === void 0) format = null;
      if (metadata === void 0) metadata = null;
      let taskImpl = null;
      if (metadata != null) {
        taskImpl = this.jsObject.putString(data, format, metadata.jsObject);
      } else if (format != null) {
        taskImpl = this.jsObject.putString(data, format);
      } else {
        taskImpl = this.jsObject.putString(data);
      }
      return src__storage.UploadTask.getInstance(taskImpl);
    }
    toString() {
      return dart.toString(this.jsObject);
    }
    updateMetadata(metadata) {
      return src__utils.handleThenable(dart.anonymousJSType("FullMetadataJsImpl"), this.jsObject.updateMetadata(metadata.jsObject)).then(src__storage.FullMetadata, dart.fn(src__storage.FullMetadata.getInstance, dynamicToFullMetadata()));
    }
  };
  (src__storage.StorageReference._fromJsObject = function(jsObject) {
    src__storage.StorageReference.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = src__storage.StorageReference.prototype;
  dart.addTypeTests(src__storage.StorageReference);
  dart.setMethodSignature(src__storage.StorageReference, () => ({
    __proto__: dart.getMethods(src__storage.StorageReference.__proto__),
    child: dart.fnType(src__storage.StorageReference, [core.String]),
    delete: dart.fnType(async.Future, []),
    getDownloadURL: dart.fnType(async.Future$(core.Uri), []),
    getMetadata: dart.fnType(async.Future$(src__storage.FullMetadata), []),
    put: dart.fnType(src__storage.UploadTask, [dart.dynamic], [src__storage.UploadMetadata]),
    putString: dart.fnType(src__storage.UploadTask, [core.String], [core.String, src__storage.UploadMetadata]),
    updateMetadata: dart.fnType(async.Future$(src__storage.FullMetadata), [src__storage.SettableMetadata])
  }));
  dart.setGetterSignature(src__storage.StorageReference, () => ({
    __proto__: dart.getGetters(src__storage.StorageReference.__proto__),
    bucket: core.String,
    fullPath: core.String,
    name: core.String,
    parent: src__storage.StorageReference,
    root: src__storage.StorageReference,
    storage: src__storage.Storage
  }));
  dart.setLibraryUri(src__storage.StorageReference, "package:firebase/src/storage.dart");
  dart.defineExtensionMethods(src__storage.StorageReference, ['toString']);
  dart.defineLazy(src__storage.StorageReference, {
    /*src__storage.StorageReference._expando*/get _expando() {
      return new (ExpandoOfStorageReference()).new();
    }
  });
  const _is__SettableMetadataBase_default = Symbol('_is__SettableMetadataBase_default');
  src__storage._SettableMetadataBase$ = dart.generic(T => {
    class _SettableMetadataBase extends src__js.JsObjectWrapper$(T) {
      get cacheControl() {
        return this.jsObject.cacheControl;
      }
      set cacheControl(s) {
        this.jsObject.cacheControl = s;
      }
      get contentDisposition() {
        return this.jsObject.contentDisposition;
      }
      set contentDisposition(s) {
        this.jsObject.contentDisposition = s;
      }
      get contentEncoding() {
        return this.jsObject.contentEncoding;
      }
      set contentEncoding(s) {
        this.jsObject.contentEncoding = s;
      }
      get contentLanguage() {
        return this.jsObject.contentLanguage;
      }
      set contentLanguage(s) {
        this.jsObject.contentLanguage = s;
      }
      get contentType() {
        return this.jsObject.contentType;
      }
      set contentType(s) {
        this.jsObject.contentType = s;
      }
      get customMetadata() {
        let t2;
        t2 = core.Map.as(src__utils.dartify(this.jsObject.customMetadata));
        return t2 == null ? null : t2[$cast](core.String, core.String);
      }
      set customMetadata(m) {
        this.jsObject.customMetadata = src__utils.jsify(m);
      }
    }
    (_SettableMetadataBase.fromJsObject = function(jsObject) {
      _SettableMetadataBase.__proto__.fromJsObject.call(this, jsObject);
      ;
    }).prototype = _SettableMetadataBase.prototype;
    dart.addTypeTests(_SettableMetadataBase);
    _SettableMetadataBase.prototype[_is__SettableMetadataBase_default] = true;
    dart.setGetterSignature(_SettableMetadataBase, () => ({
      __proto__: dart.getGetters(_SettableMetadataBase.__proto__),
      cacheControl: core.String,
      contentDisposition: core.String,
      contentEncoding: core.String,
      contentLanguage: core.String,
      contentType: core.String,
      customMetadata: core.Map$(core.String, core.String)
    }));
    dart.setSetterSignature(_SettableMetadataBase, () => ({
      __proto__: dart.getSetters(_SettableMetadataBase.__proto__),
      cacheControl: core.String,
      contentDisposition: core.String,
      contentEncoding: core.String,
      contentLanguage: core.String,
      contentType: core.String,
      customMetadata: core.Map$(core.String, core.String)
    }));
    dart.setLibraryUri(_SettableMetadataBase, "package:firebase/src/storage.dart");
    return _SettableMetadataBase;
  });
  src__storage._SettableMetadataBase = src__storage._SettableMetadataBase$();
  dart.addTypeTests(src__storage._SettableMetadataBase, _is__SettableMetadataBase_default);
  const _is__UploadMetadataBase_default = Symbol('_is__UploadMetadataBase_default');
  src__storage._UploadMetadataBase$ = dart.generic(T => {
    class _UploadMetadataBase extends src__storage._SettableMetadataBase$(T) {
      get md5Hash() {
        return this.jsObject.md5Hash;
      }
      set md5Hash(s) {
        this.jsObject.md5Hash = s;
      }
    }
    (_UploadMetadataBase.fromJsObject = function(jsObject) {
      _UploadMetadataBase.__proto__.fromJsObject.call(this, jsObject);
      ;
    }).prototype = _UploadMetadataBase.prototype;
    dart.addTypeTests(_UploadMetadataBase);
    _UploadMetadataBase.prototype[_is__UploadMetadataBase_default] = true;
    dart.setGetterSignature(_UploadMetadataBase, () => ({
      __proto__: dart.getGetters(_UploadMetadataBase.__proto__),
      md5Hash: core.String
    }));
    dart.setSetterSignature(_UploadMetadataBase, () => ({
      __proto__: dart.getSetters(_UploadMetadataBase.__proto__),
      md5Hash: core.String
    }));
    dart.setLibraryUri(_UploadMetadataBase, "package:firebase/src/storage.dart");
    return _UploadMetadataBase;
  });
  src__storage._UploadMetadataBase = src__storage._UploadMetadataBase$();
  dart.addTypeTests(src__storage._UploadMetadataBase, _is__UploadMetadataBase_default);
  src__storage.FullMetadata = class FullMetadata extends src__storage._UploadMetadataBase$(dart.anonymousJSType("FullMetadataJsImpl")) {
    get bucket() {
      return this.jsObject.bucket;
    }
    get fullPath() {
      return this.jsObject.fullPath;
    }
    get generation() {
      return this.jsObject.generation;
    }
    get metageneration() {
      return this.jsObject.metageneration;
    }
    get name() {
      return this.jsObject.name;
    }
    get size() {
      return this.jsObject.size;
    }
    get timeCreated() {
      return core.DateTime.parse(this.jsObject.timeCreated);
    }
    get updated() {
      return core.DateTime.parse(this.jsObject.updated);
    }
    static getInstance(jsObject) {
      let t5, t4, t3, t2;
      if (jsObject == null) {
        return null;
      }
      t2 = src__storage.FullMetadata._expando;
      t3 = jsObject;
      t4 = t2._get(t3);
      return t4 == null ? (t5 = new src__storage.FullMetadata._fromJsObject(jsObject), t2._set(t3, t5), t5) : t4;
    }
  };
  (src__storage.FullMetadata._fromJsObject = function(jsObject) {
    src__storage.FullMetadata.__proto__.fromJsObject.call(this, dart.anonymousJSType("FullMetadataJsImpl")._check(jsObject));
    ;
  }).prototype = src__storage.FullMetadata.prototype;
  dart.addTypeTests(src__storage.FullMetadata);
  dart.setGetterSignature(src__storage.FullMetadata, () => ({
    __proto__: dart.getGetters(src__storage.FullMetadata.__proto__),
    bucket: core.String,
    fullPath: core.String,
    generation: core.String,
    metageneration: core.String,
    name: core.String,
    size: core.int,
    timeCreated: core.DateTime,
    updated: core.DateTime
  }));
  dart.setLibraryUri(src__storage.FullMetadata, "package:firebase/src/storage.dart");
  dart.defineLazy(src__storage.FullMetadata, {
    /*src__storage.FullMetadata._expando*/get _expando() {
      return new (ExpandoOfFullMetadata()).new();
    }
  });
  src__storage.UploadMetadata = class UploadMetadata extends src__storage._UploadMetadataBase$(dart.anonymousJSType("UploadMetadataJsImpl")) {
    static new(opts) {
      let md5Hash = opts && 'md5Hash' in opts ? opts.md5Hash : null;
      let cacheControl = opts && 'cacheControl' in opts ? opts.cacheControl : null;
      let contentDisposition = opts && 'contentDisposition' in opts ? opts.contentDisposition : null;
      let contentEncoding = opts && 'contentEncoding' in opts ? opts.contentEncoding : null;
      let contentLanguage = opts && 'contentLanguage' in opts ? opts.contentLanguage : null;
      let contentType = opts && 'contentType' in opts ? opts.contentType : null;
      let customMetadata = opts && 'customMetadata' in opts ? opts.customMetadata : null;
      return new src__storage.UploadMetadata.fromJsObject({md5Hash: md5Hash, cacheControl: cacheControl, contentDisposition: contentDisposition, contentEncoding: contentEncoding, contentLanguage: contentLanguage, contentType: contentType, customMetadata: customMetadata != null ? src__utils.jsify(customMetadata) : null});
    }
  };
  (src__storage.UploadMetadata.fromJsObject = function(jsObject) {
    src__storage.UploadMetadata.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = src__storage.UploadMetadata.prototype;
  dart.addTypeTests(src__storage.UploadMetadata);
  dart.setLibraryUri(src__storage.UploadMetadata, "package:firebase/src/storage.dart");
  const _future = dart.privateName(src__storage, "_future");
  const _onStateChangedUnsubscribe = dart.privateName(src__storage, "_onStateChangedUnsubscribe");
  const _changeController$ = dart.privateName(src__storage, "_changeController");
  src__storage.UploadTask = class UploadTask extends src__js.JsObjectWrapper$(dart.lazyJSType(() => dart.global.firebase.storage.UploadTask, "firebase.storage.UploadTask")) {
    get future() {
      let t2;
      t2 = this[_future];
      return t2 == null ? this[_future] = src__utils.handleThenable(dart.anonymousJSType("UploadTaskSnapshotJsImpl"), this.jsObject).then(src__storage.UploadTaskSnapshot, dart.fn(src__storage.UploadTaskSnapshot.getInstance, UploadTaskSnapshotJsImplToUploadTaskSnapshot())) : t2;
    }
    get snapshot() {
      return src__storage.UploadTaskSnapshot.getInstance(this.jsObject.snapshot);
    }
    static getInstance(jsObject) {
      let t5, t4, t3, t2;
      if (jsObject == null) {
        return null;
      }
      t2 = src__storage.UploadTask._expando;
      t3 = jsObject;
      t4 = t2._get(t3);
      return t4 == null ? (t5 = new src__storage.UploadTask._fromJsObject(jsObject), t2._set(t3, t5), t5) : t4;
    }
    cancel() {
      return this.jsObject.cancel();
    }
    get onStateChanged() {
      if (this[_changeController$] == null) {
        let nextWrapper = js.allowInterop(UploadTaskSnapshotJsImplToNull(), dart.fn(data => {
          this[_changeController$].add(src__storage.UploadTaskSnapshot.getInstance(data));
        }, UploadTaskSnapshotJsImplToNull()));
        let errorWrapper = js.allowInterop(dynamicTovoid(), dart.fn(e => this[_changeController$].addError(e), dynamicTovoid()));
        let onCompletion = js.allowInterop(VoidToFuture(), dart.fn(() => this[_changeController$].close(), VoidToFuture()));
        const startListen = () => {
          this[_onStateChangedUnsubscribe] = this.jsObject.on(core.String._check(dart.global.firebase.storage.TaskEvent.STATE_CHANGED), nextWrapper, errorWrapper, onCompletion);
        };
        dart.fn(startListen, VoidTovoid());
        const stopListen = () => {
          this[_onStateChangedUnsubscribe]();
        };
        dart.fn(stopListen, VoidTovoid());
        this[_changeController$] = StreamControllerOfUploadTaskSnapshot().broadcast({onListen: startListen, onCancel: stopListen, sync: true});
      }
      return this[_changeController$].stream;
    }
    pause() {
      return this.jsObject.pause();
    }
    resume() {
      return this.jsObject.resume();
    }
  };
  (src__storage.UploadTask._fromJsObject = function(jsObject) {
    this[_future] = null;
    this[_onStateChangedUnsubscribe] = null;
    this[_changeController$] = null;
    src__storage.UploadTask.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = src__storage.UploadTask.prototype;
  dart.addTypeTests(src__storage.UploadTask);
  dart.setMethodSignature(src__storage.UploadTask, () => ({
    __proto__: dart.getMethods(src__storage.UploadTask.__proto__),
    cancel: dart.fnType(core.bool, []),
    pause: dart.fnType(core.bool, []),
    resume: dart.fnType(core.bool, [])
  }));
  dart.setGetterSignature(src__storage.UploadTask, () => ({
    __proto__: dart.getGetters(src__storage.UploadTask.__proto__),
    future: async.Future$(src__storage.UploadTaskSnapshot),
    snapshot: src__storage.UploadTaskSnapshot,
    onStateChanged: async.Stream$(src__storage.UploadTaskSnapshot)
  }));
  dart.setLibraryUri(src__storage.UploadTask, "package:firebase/src/storage.dart");
  dart.setFieldSignature(src__storage.UploadTask, () => ({
    __proto__: dart.getFields(src__storage.UploadTask.__proto__),
    [_future]: dart.fieldType(async.Future$(src__storage.UploadTaskSnapshot)),
    [_onStateChangedUnsubscribe]: dart.fieldType(dart.fnType(dart.dynamic, [])),
    [_changeController$]: dart.fieldType(async.StreamController$(src__storage.UploadTaskSnapshot))
  }));
  dart.defineLazy(src__storage.UploadTask, {
    /*src__storage.UploadTask._expando*/get _expando() {
      return new (ExpandoOfUploadTask()).new();
    }
  });
  src__storage.UploadTaskSnapshot = class UploadTaskSnapshot extends src__js.JsObjectWrapper$(dart.anonymousJSType("UploadTaskSnapshotJsImpl")) {
    get bytesTransferred() {
      return this.jsObject.bytesTransferred;
    }
    get metadata() {
      return src__storage.FullMetadata.getInstance(this.jsObject.metadata);
    }
    get ref() {
      return src__storage.StorageReference.getInstance(this.jsObject.ref);
    }
    get state() {
      switch (this.jsObject.state) {
        case "running":
        {
          return src__storage.TaskState.RUNNING;
        }
        case "paused":
        {
          return src__storage.TaskState.PAUSED;
        }
        case "success":
        {
          return src__storage.TaskState.SUCCESS;
        }
        case "canceled":
        {
          return src__storage.TaskState.CANCELED;
        }
        case "error":
        {
          return src__storage.TaskState.ERROR;
        }
        default:
        {
          dart.throw(new core.UnsupportedError.new("Unknown state \"" + dart.str(this.jsObject.state) + "\" please file a bug."));
        }
      }
    }
    get task() {
      return src__storage.UploadTask.getInstance(this.jsObject.task);
    }
    get totalBytes() {
      return this.jsObject.totalBytes;
    }
    static getInstance(jsObject) {
      let t5, t4, t3, t2;
      if (jsObject == null) {
        return null;
      }
      t2 = src__storage.UploadTaskSnapshot._expando;
      t3 = jsObject;
      t4 = t2._get(t3);
      return t4 == null ? (t5 = new src__storage.UploadTaskSnapshot._fromJsObject(jsObject), t2._set(t3, t5), t5) : t4;
    }
  };
  (src__storage.UploadTaskSnapshot._fromJsObject = function(jsObject) {
    src__storage.UploadTaskSnapshot.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = src__storage.UploadTaskSnapshot.prototype;
  dart.addTypeTests(src__storage.UploadTaskSnapshot);
  dart.setGetterSignature(src__storage.UploadTaskSnapshot, () => ({
    __proto__: dart.getGetters(src__storage.UploadTaskSnapshot.__proto__),
    bytesTransferred: core.int,
    metadata: src__storage.FullMetadata,
    ref: src__storage.StorageReference,
    state: src__storage.TaskState,
    task: src__storage.UploadTask,
    totalBytes: core.int
  }));
  dart.setLibraryUri(src__storage.UploadTaskSnapshot, "package:firebase/src/storage.dart");
  dart.defineLazy(src__storage.UploadTaskSnapshot, {
    /*src__storage.UploadTaskSnapshot._expando*/get _expando() {
      return new (ExpandoOfUploadTaskSnapshot()).new();
    }
  });
  src__storage.SettableMetadata = class SettableMetadata extends src__storage._SettableMetadataBase$(dart.anonymousJSType("SettableMetadataJsImpl")) {
    static new(opts) {
      let cacheControl = opts && 'cacheControl' in opts ? opts.cacheControl : null;
      let contentDisposition = opts && 'contentDisposition' in opts ? opts.contentDisposition : null;
      let contentEncoding = opts && 'contentEncoding' in opts ? opts.contentEncoding : null;
      let contentLanguage = opts && 'contentLanguage' in opts ? opts.contentLanguage : null;
      let contentType = opts && 'contentType' in opts ? opts.contentType : null;
      let customMetadata = opts && 'customMetadata' in opts ? opts.customMetadata : null;
      return new src__storage.SettableMetadata.fromJsObject({cacheControl: cacheControl, contentDisposition: contentDisposition, contentEncoding: contentEncoding, contentLanguage: contentLanguage, contentType: contentType, customMetadata: customMetadata != null ? src__utils.jsify(customMetadata) : null});
    }
  };
  (src__storage.SettableMetadata.fromJsObject = function(jsObject) {
    src__storage.SettableMetadata.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = src__storage.SettableMetadata.prototype;
  dart.addTypeTests(src__storage.SettableMetadata);
  dart.setLibraryUri(src__storage.SettableMetadata, "package:firebase/src/storage.dart");
  src__database.Database = class Database extends src__js.JsObjectWrapper$(dart.lazyJSType(() => dart.global.firebase.database.Database, "firebase.database.Database")) {
    get app() {
      return src__app.App.getInstance(this.jsObject.app);
    }
    static getInstance(jsObject) {
      let t5, t4, t3, t2;
      if (jsObject == null) {
        return null;
      }
      t2 = src__database.Database._expando;
      t3 = jsObject;
      t4 = t2._get(t3);
      return t4 == null ? (t5 = new src__database.Database._fromJsObject(jsObject), t2._set(t3, t5), t5) : t4;
    }
    goOffline() {
      return this.jsObject.goOffline();
    }
    goOnline() {
      return this.jsObject.goOnline();
    }
    ref(path) {
      if (path === void 0) path = null;
      return src__database.DatabaseReference.getInstance(this.jsObject.ref(path));
    }
    refFromURL(url) {
      return src__database.DatabaseReference.getInstance(this.jsObject.refFromURL(url));
    }
  };
  (src__database.Database._fromJsObject = function(jsObject) {
    src__database.Database.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = src__database.Database.prototype;
  dart.addTypeTests(src__database.Database);
  dart.setMethodSignature(src__database.Database, () => ({
    __proto__: dart.getMethods(src__database.Database.__proto__),
    goOffline: dart.fnType(dart.void, []),
    goOnline: dart.fnType(dart.void, []),
    ref: dart.fnType(src__database.DatabaseReference$(dart.lazyJSType(() => dart.global.firebase.database.Reference, "firebase.database.Reference")), [], [core.String]),
    refFromURL: dart.fnType(src__database.DatabaseReference$(dart.lazyJSType(() => dart.global.firebase.database.Reference, "firebase.database.Reference")), [core.String])
  }));
  dart.setGetterSignature(src__database.Database, () => ({
    __proto__: dart.getGetters(src__database.Database.__proto__),
    app: src__app.App
  }));
  dart.setLibraryUri(src__database.Database, "package:firebase/src/database.dart");
  dart.defineLazy(src__database.Database, {
    /*src__database.Database._expando*/get _expando() {
      return new (ExpandoOfDatabase()).new();
    }
  });
  const _onValue = dart.privateName(src__database, "_onValue");
  const _onChildAdded = dart.privateName(src__database, "_onChildAdded");
  const _onChildRemoved = dart.privateName(src__database, "_onChildRemoved");
  const _onChildChanged = dart.privateName(src__database, "_onChildChanged");
  const _onChildMoved = dart.privateName(src__database, "_onChildMoved");
  const _createStream$ = dart.privateName(src__database, "_createStream");
  const _is_Query_default$ = Symbol('_is_Query_default');
  src__database.Query$ = dart.generic(T => {
    class Query extends src__js.JsObjectWrapper$(T) {
      get ref() {
        return src__database.DatabaseReference.getInstance(this.jsObject.ref);
      }
      get onValue() {
        let t2;
        t2 = this[_onValue];
        return t2 == null ? this[_onValue] = this[_createStream$]("value") : t2;
      }
      get onChildAdded() {
        let t2;
        t2 = this[_onChildAdded];
        return t2 == null ? this[_onChildAdded] = this[_createStream$]("child_added") : t2;
      }
      get onChildRemoved() {
        let t2;
        t2 = this[_onChildRemoved];
        return t2 == null ? this[_onChildRemoved] = this[_createStream$]("child_removed") : t2;
      }
      get onChildChanged() {
        let t2;
        t2 = this[_onChildChanged];
        return t2 == null ? this[_onChildChanged] = this[_createStream$]("child_changed") : t2;
      }
      get onChildMoved() {
        let t2;
        t2 = this[_onChildMoved];
        return t2 == null ? this[_onChildMoved] = this[_createStream$]("child_moved") : t2;
      }
      endAt(value, key) {
        if (key === void 0) key = null;
        return new (QueryOfQueryJsImpl$()).fromJsObject(key == null ? this.jsObject.endAt(value) : this.jsObject.endAt(value, key));
      }
      equalTo(value, key) {
        if (key === void 0) key = null;
        return new (QueryOfQueryJsImpl$()).fromJsObject(key == null ? this.jsObject.equalTo(value) : this.jsObject.equalTo(value, key));
      }
      isEqual(other) {
        return this.jsObject.isEqual(other.jsObject);
      }
      limitToFirst(limit) {
        return new (QueryOfQueryJsImpl$()).fromJsObject(this.jsObject.limitToFirst(limit));
      }
      limitToLast(limit) {
        return new (QueryOfQueryJsImpl$()).fromJsObject(this.jsObject.limitToLast(limit));
      }
      [_createStream$](eventType) {
        let streamController = null;
        let callbackWrap = js.allowInterop(DataSnapshotJsImplAndStringToNull(), dart.fn((data, string) => {
          if (string === void 0) string = null;
          streamController.add(new src__database.QueryEvent.new(src__database.DataSnapshot.getInstance(data), string));
        }, DataSnapshotJsImplAndStringToNull()));
        const startListen = () => {
          this.jsObject.on(eventType, callbackWrap);
        };
        dart.fn(startListen, VoidTovoid());
        const stopListen = () => {
          this.jsObject.off(eventType, callbackWrap);
        };
        dart.fn(stopListen, VoidTovoid());
        streamController = StreamControllerOfQueryEvent().broadcast({onListen: startListen, onCancel: stopListen, sync: true});
        return streamController.stream;
      }
      once(eventType) {
        let c = CompleterOfQueryEvent().new();
        this.jsObject.once(eventType, js.allowInterop(DataSnapshotJsImplAndStringToNull(), dart.fn((snapshot, string) => {
          if (string === void 0) string = null;
          c.complete(new src__database.QueryEvent.new(src__database.DataSnapshot.getInstance(snapshot), string));
        }, DataSnapshotJsImplAndStringToNull())), src__utils.resolveError(c));
        return c.future;
      }
      orderByChild(path) {
        return new (QueryOfQueryJsImpl$()).fromJsObject(this.jsObject.orderByChild(path));
      }
      orderByKey() {
        return new (QueryOfQueryJsImpl$()).fromJsObject(this.jsObject.orderByKey());
      }
      orderByPriority() {
        return new (QueryOfQueryJsImpl$()).fromJsObject(this.jsObject.orderByPriority());
      }
      orderByValue() {
        return new (QueryOfQueryJsImpl$()).fromJsObject(this.jsObject.orderByValue());
      }
      startAt(value, key) {
        if (key === void 0) key = null;
        return new (QueryOfQueryJsImpl$()).fromJsObject(key == null ? this.jsObject.startAt(value) : this.jsObject.startAt(value, key));
      }
      toString() {
        return dart.toString(this.jsObject);
      }
      toJson() {
        return src__utils.dartify(this.jsObject.toJSON());
      }
    }
    (Query.fromJsObject = function(jsObject) {
      this[_onValue] = null;
      this[_onChildAdded] = null;
      this[_onChildRemoved] = null;
      this[_onChildChanged] = null;
      this[_onChildMoved] = null;
      Query.__proto__.fromJsObject.call(this, jsObject);
      ;
    }).prototype = Query.prototype;
    dart.addTypeTests(Query);
    Query.prototype[_is_Query_default$] = true;
    dart.setMethodSignature(Query, () => ({
      __proto__: dart.getMethods(Query.__proto__),
      endAt: dart.fnType(src__database.Query$(dart.lazyJSType(() => dart.global.firebase.database.Query, "firebase.database.Query")), [dart.dynamic], [core.String]),
      equalTo: dart.fnType(src__database.Query$(dart.lazyJSType(() => dart.global.firebase.database.Query, "firebase.database.Query")), [dart.dynamic], [core.String]),
      isEqual: dart.fnType(core.bool, [src__database.Query$(dart.lazyJSType(() => dart.global.firebase.database.Query, "firebase.database.Query"))]),
      limitToFirst: dart.fnType(src__database.Query$(dart.lazyJSType(() => dart.global.firebase.database.Query, "firebase.database.Query")), [core.int]),
      limitToLast: dart.fnType(src__database.Query$(dart.lazyJSType(() => dart.global.firebase.database.Query, "firebase.database.Query")), [core.int]),
      [_createStream$]: dart.fnType(async.Stream$(src__database.QueryEvent), [core.String]),
      once: dart.fnType(async.Future$(src__database.QueryEvent), [core.String]),
      orderByChild: dart.fnType(src__database.Query$(dart.lazyJSType(() => dart.global.firebase.database.Query, "firebase.database.Query")), [core.String]),
      orderByKey: dart.fnType(src__database.Query$(dart.lazyJSType(() => dart.global.firebase.database.Query, "firebase.database.Query")), []),
      orderByPriority: dart.fnType(src__database.Query$(dart.lazyJSType(() => dart.global.firebase.database.Query, "firebase.database.Query")), []),
      orderByValue: dart.fnType(src__database.Query$(dart.lazyJSType(() => dart.global.firebase.database.Query, "firebase.database.Query")), []),
      startAt: dart.fnType(src__database.Query$(dart.lazyJSType(() => dart.global.firebase.database.Query, "firebase.database.Query")), [dart.dynamic], [core.String]),
      toJson: dart.fnType(dart.dynamic, [])
    }));
    dart.setGetterSignature(Query, () => ({
      __proto__: dart.getGetters(Query.__proto__),
      ref: src__database.DatabaseReference$(dart.lazyJSType(() => dart.global.firebase.database.Reference, "firebase.database.Reference")),
      onValue: async.Stream$(src__database.QueryEvent),
      onChildAdded: async.Stream$(src__database.QueryEvent),
      onChildRemoved: async.Stream$(src__database.QueryEvent),
      onChildChanged: async.Stream$(src__database.QueryEvent),
      onChildMoved: async.Stream$(src__database.QueryEvent)
    }));
    dart.setLibraryUri(Query, "package:firebase/src/database.dart");
    dart.setFieldSignature(Query, () => ({
      __proto__: dart.getFields(Query.__proto__),
      [_onValue]: dart.fieldType(async.Stream$(src__database.QueryEvent)),
      [_onChildAdded]: dart.fieldType(async.Stream$(src__database.QueryEvent)),
      [_onChildRemoved]: dart.fieldType(async.Stream$(src__database.QueryEvent)),
      [_onChildChanged]: dart.fieldType(async.Stream$(src__database.QueryEvent)),
      [_onChildMoved]: dart.fieldType(async.Stream$(src__database.QueryEvent))
    }));
    dart.defineExtensionMethods(Query, ['toString']);
    return Query;
  });
  src__database.Query = src__database.Query$();
  dart.addTypeTests(src__database.Query, _is_Query_default$);
  const _is_DatabaseReference_default = Symbol('_is_DatabaseReference_default');
  src__database.DatabaseReference$ = dart.generic(T => {
    class DatabaseReference extends src__database.Query$(T) {
      get key() {
        return this.jsObject.key;
      }
      get parent() {
        return src__database.DatabaseReference.getInstance(this.jsObject.parent);
      }
      get root() {
        return src__database.DatabaseReference.getInstance(this.jsObject.root);
      }
      static getInstance(jsObject) {
        let t5, t4, t3, t2;
        if (jsObject == null) {
          return null;
        }
        t2 = src__database.DatabaseReference._expando;
        t3 = jsObject;
        t4 = t2._get(t3);
        return t4 == null ? (t5 = new (DatabaseReferenceOfReferenceJsImpl())._fromJsObject(jsObject), t2._set(t3, t5), t5) : t4;
      }
      child(path) {
        return src__database.DatabaseReference.getInstance(this.jsObject.child(path));
      }
      onDisconnect() {
        return new src__database.OnDisconnect.fromJsObject(this.jsObject.onDisconnect());
      }
      push(value) {
        if (value === void 0) value = null;
        return new src__database.ThenableReference.fromJsObject(this.jsObject.push(src__utils.jsify(value)));
      }
      remove() {
        return src__utils.handleThenable(dart.dynamic, this.jsObject.remove());
      }
      set(value) {
        return src__utils.handleThenable(dart.dynamic, this.jsObject.set(src__utils.jsify(value)));
      }
      setPriority(priority) {
        return src__utils.handleThenable(dart.dynamic, this.jsObject.setPriority(priority));
      }
      setWithPriority(newVal, newPriority) {
        return src__utils.handleThenable(dart.dynamic, this.jsObject.setWithPriority(src__utils.jsify(newVal), newPriority));
      }
      transaction(transactionUpdate, applyLocally) {
        if (applyLocally === void 0) applyLocally = true;
        let c = CompleterOfTransaction().new();
        let transactionUpdateWrap = js.allowInterop(dynamicTodynamic(), dart.fn(update => src__utils.jsify(transactionUpdate(src__utils.dartify(update))), dynamicTodynamic()));
        let onCompleteWrap = js.allowInterop(dynamicAndboolAndDataSnapshotJsImplToNull(), dart.fn((error, committed, snapshot) => {
          if (error != null) {
            c.completeError(error);
          } else {
            c.complete(src__database.Transaction.new({committed: committed, snapshot: src__database.DataSnapshot.getInstance(snapshot)}));
          }
        }, dynamicAndboolAndDataSnapshotJsImplToNull()));
        this.jsObject.transaction(transactionUpdateWrap, onCompleteWrap, applyLocally);
        return c.future;
      }
      update(values) {
        return src__utils.handleThenable(dart.dynamic, this.jsObject.update(src__utils.jsify(values)));
      }
    }
    (DatabaseReference._fromJsObject = function(jsObject) {
      DatabaseReference.__proto__.fromJsObject.call(this, jsObject);
      ;
    }).prototype = DatabaseReference.prototype;
    dart.addTypeTests(DatabaseReference);
    DatabaseReference.prototype[_is_DatabaseReference_default] = true;
    dart.setMethodSignature(DatabaseReference, () => ({
      __proto__: dart.getMethods(DatabaseReference.__proto__),
      child: dart.fnType(src__database.DatabaseReference$(dart.lazyJSType(() => dart.global.firebase.database.Reference, "firebase.database.Reference")), [core.String]),
      onDisconnect: dart.fnType(src__database.OnDisconnect, []),
      push: dart.fnType(src__database.ThenableReference, [], [dart.dynamic]),
      remove: dart.fnType(async.Future, []),
      set: dart.fnType(async.Future, [dart.dynamic]),
      setPriority: dart.fnType(async.Future, [dart.dynamic]),
      setWithPriority: dart.fnType(async.Future, [dart.dynamic, dart.dynamic]),
      transaction: dart.fnType(async.Future$(src__database.Transaction), [dart.fnType(dart.dynamic, [dart.dynamic])], [core.bool]),
      update: dart.fnType(async.Future, [dart.dynamic])
    }));
    dart.setGetterSignature(DatabaseReference, () => ({
      __proto__: dart.getGetters(DatabaseReference.__proto__),
      key: core.String,
      parent: src__database.DatabaseReference$(dart.lazyJSType(() => dart.global.firebase.database.Reference, "firebase.database.Reference")),
      root: src__database.DatabaseReference$(dart.lazyJSType(() => dart.global.firebase.database.Reference, "firebase.database.Reference"))
    }));
    dart.setLibraryUri(DatabaseReference, "package:firebase/src/database.dart");
    return DatabaseReference;
  });
  src__database.DatabaseReference = src__database.DatabaseReference$();
  dart.defineLazy(src__database.DatabaseReference, {
    /*src__database.DatabaseReference._expando*/get _expando() {
      return new (ExpandoOfDatabaseReferenceOfReferenceJsImpl()).new();
    }
  });
  dart.addTypeTests(src__database.DatabaseReference, _is_DatabaseReference_default);
  src__database.QueryEvent = class QueryEvent extends core.Object {
    get snapshot() {
      return this[snapshot$];
    }
    set snapshot(value) {
      super.snapshot = value;
    }
    get prevChildKey() {
      return this[prevChildKey$];
    }
    set prevChildKey(value) {
      super.prevChildKey = value;
    }
  };
  (src__database.QueryEvent.new = function(snapshot, prevChildKey) {
    if (prevChildKey === void 0) prevChildKey = null;
    this[snapshot$] = snapshot;
    this[prevChildKey$] = prevChildKey;
    ;
  }).prototype = src__database.QueryEvent.prototype;
  dart.addTypeTests(src__database.QueryEvent);
  const snapshot$ = Symbol("QueryEvent.snapshot");
  const prevChildKey$ = Symbol("QueryEvent.prevChildKey");
  dart.setLibraryUri(src__database.QueryEvent, "package:firebase/src/database.dart");
  dart.setFieldSignature(src__database.QueryEvent, () => ({
    __proto__: dart.getFields(src__database.QueryEvent.__proto__),
    snapshot: dart.finalFieldType(src__database.DataSnapshot),
    prevChildKey: dart.finalFieldType(core.String)
  }));
  src__database.DataSnapshot = class DataSnapshot extends src__js.JsObjectWrapper$(dart.anonymousJSType("DataSnapshotJsImpl")) {
    get key() {
      return this.jsObject.key;
    }
    get ref() {
      return src__database.DatabaseReference.getInstance(this.jsObject.ref);
    }
    static getInstance(jsObject) {
      let t5, t4, t3, t2;
      if (jsObject == null) {
        return null;
      }
      t2 = src__database.DataSnapshot._expando;
      t3 = jsObject;
      t4 = t2._get(t3);
      return t4 == null ? (t5 = new src__database.DataSnapshot._fromJsObject(jsObject), t2._set(t3, t5), t5) : t4;
    }
    child(path) {
      return src__database.DataSnapshot.getInstance(this.jsObject.child(path));
    }
    exists() {
      return this.jsObject.exists();
    }
    exportVal() {
      return src__utils.dartify(this.jsObject.exportVal());
    }
    forEach(action) {
      let actionWrap = js.allowInterop(dynamicTodynamic(), dart.fn(d => action(src__database.DataSnapshot.getInstance(dart.anonymousJSType("DataSnapshotJsImpl")._check(d))), dynamicTodynamic()));
      return this.jsObject.forEach(actionWrap);
    }
    getPriority() {
      return this.jsObject.getPriority();
    }
    hasChild(path) {
      return this.jsObject.hasChild(path);
    }
    hasChildren() {
      return this.jsObject.hasChildren();
    }
    numChildren() {
      return this.jsObject.numChildren();
    }
    val() {
      return src__utils.dartify(this.jsObject.val());
    }
    toJson() {
      return src__utils.dartify(this.jsObject.toJSON());
    }
  };
  (src__database.DataSnapshot._fromJsObject = function(jsObject) {
    src__database.DataSnapshot.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = src__database.DataSnapshot.prototype;
  dart.addTypeTests(src__database.DataSnapshot);
  dart.setMethodSignature(src__database.DataSnapshot, () => ({
    __proto__: dart.getMethods(src__database.DataSnapshot.__proto__),
    child: dart.fnType(src__database.DataSnapshot, [core.String]),
    exists: dart.fnType(core.bool, []),
    exportVal: dart.fnType(dart.dynamic, []),
    forEach: dart.fnType(core.bool, [dart.fnType(dart.dynamic, [src__database.DataSnapshot])]),
    getPriority: dart.fnType(dart.dynamic, []),
    hasChild: dart.fnType(core.bool, [core.String]),
    hasChildren: dart.fnType(core.bool, []),
    numChildren: dart.fnType(core.int, []),
    val: dart.fnType(dart.dynamic, []),
    toJson: dart.fnType(dart.dynamic, [])
  }));
  dart.setGetterSignature(src__database.DataSnapshot, () => ({
    __proto__: dart.getGetters(src__database.DataSnapshot.__proto__),
    key: core.String,
    ref: src__database.DatabaseReference$(dart.lazyJSType(() => dart.global.firebase.database.Reference, "firebase.database.Reference"))
  }));
  dart.setLibraryUri(src__database.DataSnapshot, "package:firebase/src/database.dart");
  dart.defineLazy(src__database.DataSnapshot, {
    /*src__database.DataSnapshot._expando*/get _expando() {
      return new (ExpandoOfDataSnapshot()).new();
    }
  });
  src__database.OnDisconnect = class OnDisconnect extends src__js.JsObjectWrapper$(dart.lazyJSType(() => dart.global.firebase.database.OnDisconnect, "firebase.database.OnDisconnect")) {
    cancel() {
      return src__utils.handleThenable(dart.dynamic, this.jsObject.cancel());
    }
    remove() {
      return src__utils.handleThenable(dart.dynamic, this.jsObject.remove());
    }
    set(value) {
      return src__utils.handleThenable(dart.dynamic, this.jsObject.set(src__utils.jsify(value)));
    }
    setWithPriority(value, priority) {
      return src__utils.handleThenable(dart.dynamic, this.jsObject.setWithPriority(src__utils.jsify(value), priority));
    }
    update(values) {
      return src__utils.handleThenable(dart.dynamic, this.jsObject.update(src__utils.jsify(values)));
    }
  };
  (src__database.OnDisconnect.fromJsObject = function(jsObject) {
    src__database.OnDisconnect.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = src__database.OnDisconnect.prototype;
  dart.addTypeTests(src__database.OnDisconnect);
  dart.setMethodSignature(src__database.OnDisconnect, () => ({
    __proto__: dart.getMethods(src__database.OnDisconnect.__proto__),
    cancel: dart.fnType(async.Future, []),
    remove: dart.fnType(async.Future, []),
    set: dart.fnType(async.Future, [dart.dynamic]),
    setWithPriority: dart.fnType(async.Future, [dart.dynamic, dart.dynamic]),
    update: dart.fnType(async.Future, [dart.dynamic])
  }));
  dart.setLibraryUri(src__database.OnDisconnect, "package:firebase/src/database.dart");
  const _future$ = dart.privateName(src__database, "_future");
  src__database.ThenableReference = class ThenableReference extends src__database.DatabaseReference$(dart.lazyJSType(() => dart.global.firebase.database.ThenableReference, "firebase.database.ThenableReference")) {
    get future() {
      let t2;
      t2 = this[_future$];
      return t2 == null ? this[_future$] = src__utils.handleThenable(dart.lazyJSType(() => dart.global.firebase.database.Reference, "firebase.database.Reference"), this.jsObject).then(DatabaseReferenceOfReferenceJsImpl(), dart.fn(src__database.DatabaseReference.getInstance, ReferenceJsImplToDatabaseReferenceOfReferenceJsImpl())) : t2;
    }
  };
  (src__database.ThenableReference.fromJsObject = function(jsObject) {
    this[_future$] = null;
    src__database.ThenableReference.__proto__._fromJsObject.call(this, jsObject);
    ;
  }).prototype = src__database.ThenableReference.prototype;
  dart.addTypeTests(src__database.ThenableReference);
  dart.setGetterSignature(src__database.ThenableReference, () => ({
    __proto__: dart.getGetters(src__database.ThenableReference.__proto__),
    future: async.Future$(src__database.DatabaseReference$(dart.lazyJSType(() => dart.global.firebase.database.Reference, "firebase.database.Reference")))
  }));
  dart.setLibraryUri(src__database.ThenableReference, "package:firebase/src/database.dart");
  dart.setFieldSignature(src__database.ThenableReference, () => ({
    __proto__: dart.getFields(src__database.ThenableReference.__proto__),
    [_future$]: dart.fieldType(async.Future$(src__database.DatabaseReference$(dart.lazyJSType(() => dart.global.firebase.database.Reference, "firebase.database.Reference"))))
  }));
  src__database.Transaction = class Transaction extends src__js.JsObjectWrapper$(dart.anonymousJSType("TransactionJsImpl")) {
    get committed() {
      return this.jsObject.committed;
    }
    get snapshot() {
      return src__database.DataSnapshot.getInstance(this.jsObject.snapshot);
    }
    static new(opts) {
      let committed = opts && 'committed' in opts ? opts.committed : null;
      let snapshot = opts && 'snapshot' in opts ? opts.snapshot : null;
      return new src__database.Transaction.fromJsObject({committed: committed, snapshot: snapshot.jsObject});
    }
  };
  (src__database.Transaction.fromJsObject = function(jsObject) {
    src__database.Transaction.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = src__database.Transaction.prototype;
  dart.addTypeTests(src__database.Transaction);
  dart.setGetterSignature(src__database.Transaction, () => ({
    __proto__: dart.getGetters(src__database.Transaction.__proto__),
    committed: core.bool,
    snapshot: src__database.DataSnapshot
  }));
  dart.setLibraryUri(src__database.Transaction, "package:firebase/src/database.dart");
  src__database.enableLogging = function(logger, persistent) {
    if (logger === void 0) logger = null;
    if (persistent === void 0) persistent = false;
    return dart.global.firebase.database.enableLogging(src__utils.jsify(logger), persistent);
  };
  dart.trackLibraries("packages/firebase/src/app", {
    "package:firebase/src/interop/js_interop.dart": src__interop__js_interop,
    "package:firebase/src/interop/messaging_interop.dart": src__interop__messaging_interop,
    "package:firebase/src/interop/firebase_interop.dart": src__interop__firebase_interop,
    "package:firebase/src/interop/storage_interop.dart": src__interop__storage_interop,
    "package:firebase/src/interop/app_interop.dart": src__interop__app_interop,
    "package:firebase/src/interop/firestore_interop.dart": src__interop__firestore_interop,
    "package:firebase/src/func.dart": src__func,
    "package:firebase/src/interop/database_interop.dart": src__interop__database_interop,
    "package:firebase/src/interop/auth_interop.dart": src__interop__auth_interop,
    "package:firebase/src/auth.dart": src__auth,
    "package:firebase/src/utils.dart": src__utils,
    "package:firebase/src/firestore.dart": src__firestore,
    "package:firebase/src/js.dart": src__js,
    "package:firebase/src/app.dart": src__app,
    "package:firebase/src/storage.dart": src__storage,
    "package:firebase/src/database.dart": src__database
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/firebase/src/interop/js_interop.dart","org-dartlang-app:///packages/firebase/src/js.dart","org-dartlang-app:///packages/firebase/src/auth.dart","org-dartlang-app:///packages/firebase/src/utils.dart","org-dartlang-app:///packages/firebase/src/firestore.dart","org-dartlang-app:///packages/firebase/src/app.dart","org-dartlang-app:///packages/firebase/src/storage.dart","org-dartlang-app:///packages/firebase/src/database.dart"],"names":[],"mappings":"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","file":"app.ddc.js"}');
  // Exports:
  return {
    src__interop__js_interop: src__interop__js_interop,
    src__interop__messaging_interop: src__interop__messaging_interop,
    src__interop__firebase_interop: src__interop__firebase_interop,
    src__interop__storage_interop: src__interop__storage_interop,
    src__interop__app_interop: src__interop__app_interop,
    src__interop__firestore_interop: src__interop__firestore_interop,
    src__func: src__func,
    src__interop__database_interop: src__interop__database_interop,
    src__interop__auth_interop: src__interop__auth_interop,
    src__auth: src__auth,
    src__utils: src__utils,
    src__firestore: src__firestore,
    src__js: src__js,
    src__app: src__app,
    src__storage: src__storage,
    src__database: src__database
  };
});

//# sourceMappingURL=app.ddc.js.map
