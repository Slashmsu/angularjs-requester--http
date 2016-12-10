(function () {
    'use strict';

    var main = angular.module('app', ['RequesterModule']);

    main.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {template: '<main></main>'})
        ;
        $routeProvider.otherwise({ redirectTo: '/' });
    }]);

    // set main url for requests
    main.run(function(requesterNg) {
        requesterNg.setUrl("http://localhost:7000");
    });

})();


(function () {
    'use strict';
    angular.module('app')
        .service('UserRepository', UserRepository);

    function UserRepository(requesterNg) {
        return {
            
            getList: function (filter) {

                // return requesterNg.get("/user", filter).then(function (users) {
                //
                // });

                return requesterNg.get("/user", filter);
            }, 
            
            getById: function (id) {

                return requesterNg.getById("/user" + id).then(function (user) {

                });

                return requesterNg.getById("/user" + id);
            }, 
            
            save: function (data) {

                return requesterNg.post("/user", data).then(function (savedUser) {

                });

                return requesterNg.post("/user", data);
            },
            
            update: function (data) {

                return requesterNg.put("/user", data).then(function (updatedUser) {

                });

                return requesterNg.put("/user", data);
            }, 
            
            remove: function (id) {

                // after Status Code: 200
                return requesterNg.delete("/user" + id).then(function () {
                     users.splice(users.indexOff(user), 1);
                });

                return requesterNg.delete("/user" + id);
            }
        };
    }
})();