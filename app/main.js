requirejs.config({
    urlArgs: "bust=" +  (new Date()).getTime(),
//    urlArgs: "version=0.0.1",
    paths: {
    'text': '../lib/require/text',
    'durandal':'../lib/durandal/js',
    'plugins' : '../lib/durandal/js/plugins',
    'transitions' : '../lib/durandal/js/transitions',
    'knockout': '../lib/knockout/knockout-3.1.0',
    'jquery': '../lib/jquery/jquery-1.9.1'
    }
});

define(function (require) {
   var system = require('durandal/system'),
       app = require('durandal/app');

   // debug stuff. thanks https://github.com/BlueSpire/Durandal/issues/466
   //>>excludeStart("build", pragmas.build);
   system.debug(true);
   // window.onerror .. ?
   require('durandal/binder').throwOnErrors = true;
   //>>excludeEnd("build");

   app.title = 'QueueVue bus queue counter';

   app.configurePlugins({
     router:true,
     dialog: true
   });

   app.start().then(function() {
     app.setRoot('shell');
   });
});
