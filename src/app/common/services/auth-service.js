'use strict';

angular.module('noterious.common')
  .factory('Auth', function ($firebaseAuth, ENDPOINT_URI) {
    var config = {
    apiKey: "AIzaSyCV0eAx1ahcqn-_SdTSqxaNHM0moo-vK0g",
    authDomain: "noteapp-e8749.firebaseapp.com",
    databaseURL: ENDPOINT_URI,
    storageBucket: "noteapp-e8749.appspot.com",
  };
  firebase.initializeApp(config);
  return $firebaseAuth(firebase.auth())
  })
;