define(['ko', 'gateways/FooGateway', 'underscore'],
    function (ko, FooGateway, _) {

        return function Foo(data) {
            var self = this;
            self.errorMessages = ko.observableArray([]);
            self.allSelectedStuff = ko.observable([]);

            self.fooGateway = new FooGateway();

            self.doThing = function (data) {
                var options = {
                    data: {},
                    success: function (response) {
                    },
                    error: function (response) {
                        self.errorMessages("Unexpected error occurred during the process");
                    }
                };
                self.fooGateway.getFoo(options);
            };
        };
    });