# RSS Reader Demo App
## Based on Ionic
==================================================================================================================

This demo app is a basic RSS Reader retrieving RSS feeds from the Red Hat Mobile Platform.

#### views/example.html
The view of the app is defined by `views/example.html`.

It consists of the following elements:
- Header
- Content
- Footer

Within the content section, the view's controller `MainCtrl` is referenced, which will populate the `$scope` variable with RSS feeds.

#### app/controller.js
All controller logic is implemented in `app/controllers.js`. On instantiation, a request will be triggered against the app's corresponding 
server side (the Cloud Application). 

The response will be used to populate the RSS feeds in the scope of the controller. 