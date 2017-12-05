// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCwUQuDDei_anNdIfeS1Wm-b-nwrao17-I",
    authDomain: "push-manager.firebaseapp.com",
    databaseURL: "https://push-manager.firebaseio.com",
    projectId: "push-manager",
    storageBucket: "push-manager.appspot.com",
    messagingSenderId: "38182099018"
  }
};
