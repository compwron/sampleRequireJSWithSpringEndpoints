require.config({
    paths: {
        ko: "libraries/knockout-2.2.1",
        jquery: "libraries/jquery-1.8.2",
        underscore: "libraries/underscore-1.4.4.min",
        templates: "js/libraries/jquery.tmpl"
    },
    shim: {
        'underscore': {
            exports: '_'
        }
    },
    map: {
        '*': {
            'css': 'plugins/css',
            'text': 'plugins/text/text'
        }
    },
    baseUrl: "scripts"
});

requirejs([ 'ko', 'jquery', "gateways/FooGateway", 'css!../css/foo.css' ],
    function (ko, jquery, FooGateway) {
        var fooGateway = new FooGateway();
        options = {
            success: function (data) {
            }
        };
        fooGateway.getFoo(options);
    });
