'use strict';

var myApp = angular.module('myApp.controllers', ['fhcloud']);

myApp.controller('MainCtrl', function ($scope, $q, fhcloud) {
  
  $scope.items = [];

  //Call to the Cloud Application to retrieve the RSS Feeds
  fhcloud('feeds')
      .then(function (response) {
        if (response.data != null && typeof (response.data) !== 'undefined') {
          $scope.items = response.data;
        } else {
          console.log("Error: Expected a message from $fh.cloud.");
        }
      })
      .catch(function (msg, err) {
        console.log("Cloud call failed: " + err);
      });
});