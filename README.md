# RSS Reader Demo App
## Based on Ionic
This demo app is a basic RSS Reader retrieving RSS feeds from the Red Hat Mobile Platform.

### views/example.html
The view of the app is defined by `views/example.html`.

It consists of the following elements:
- Header
- Content
- Footer

Within the content section, the view's controller `MainCtrl` is referenced, which will populate the `$scope` variable with RSS feeds.

### app/controller.js
All controller logic is implemented in `app/controllers.js`. On instantiation, a request will be triggered against the app's corresponding 
server side (the Cloud Application). 

The response will be used to populate the RSS feeds in the scope of the controller. 

## Import / Installation on a RHMAP domain

### Create a new porject

> You can skip the creation of a new project, if you want to import the client into an exisiting project.

1. Open your domain
2. Click on `Projects` --> `+ New Project`
3. Start typing in the search bar `Bare Project`
4. Click `Choose` and specify a name for the project: `RSS`

![alt text](./pictures/create_bare_project.png "Create a Bare Proejct")

5. Click `Create` and `Finish` after the wizard has completed
6. This will open your project in RHMAP:

![alt text](./pictures/bare_project.png "Newly created Bare Proejct")

### Import an exisiting app

1. Click the little plus sign in the apps' section
2. Select `Import Existing App`
3. Choose `Cordova Light`

![alt text](./pictures/cordova_light.png "Corodova Light")

4. Click `Next`
5. Give the app a name: `RSS Reader Demo Ionic`
6. Click `Next`
7. Select `Public Git Repository`
8. Insert the following Git Repo URL: `https://github.com/mmetting/RSS-Reader-Demo-App-Ionic`
9. Make sure, `master` is specified

![alt text](./pictures/ionic_import_from_github.png "Import an exisiting Ionic app from GitHub")

10. Click the button for `Import & Move on to Integration`

![alt text](./pictures/finished.png "Done")

11. Click `Finished - Take me My App`

![alt text](./pictures/create_cloud_app.png "Let's create corresponding Cloud App")

Since the client requests RSS feeds from it's corresponding server-side API, we would need to create a Cloud App in this project:

Continue with the import of the prepared [Cloud App](https://github.com/mmetting/RHMAP-RSS-Reader-Demo-Cloud-App).