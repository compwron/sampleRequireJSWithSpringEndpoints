define(['ko', 'jquery'], function(ko, $) {
    return function FooGateway() {
        var self = this;

        self.getFoo = function(ajaxOptions) {
            $.ajax({
                type : "GET",
                url : 'resources/spike/',
                data : JSON.stringify(ajaxOptions.data),
                contentType : "application/json",
                success: ajaxOptions.success,
                fail: ajaxOptions.error
            });
        };
    };
});