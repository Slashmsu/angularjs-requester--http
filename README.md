#Angularjs-requester-http
Simply way todo GET, POST, PUT and DELETE requestes

###Installing:

```
npm i angularjs-requester--http --save
```

Add `'RequesterModule'` to your main module's list of dependencies.
When you're done, your setup should look similar to the following:

```html
<!doctype html>
<html ng-app="myApp">
<head>

</head>
<body>
    ...
    <script src="node_modules/angularjs-requester--http/angularjs-requester--http.js"></script>
    ...
    <script>
        var myApp = angular.module('myApp', ['RequesterModule']);
    </script>
    ...
</body>
</html>
```

###Examples:

What things you need to install the software and how to install them

GET

```
 return requesterNg.get("/user/", filter).then(function (users) {
    console.log(users);
    return users;
 });

```
or 
```
return requesterNg.get("/user/", filter);
```

POST

```
 return requesterNg.post("/user/", data).then(function (savedUser) {
    console.log(savedUser);
    return savedUser;
 });

```
or 
```
return requesterNg.post("/user/", data);
```

PUT

```
 return requesterNg.post("/user/", data).then(function (updatedUser) {
    console.log(updatedUser);
    return updatedUser;
 });

```
or 
```
return requesterNg.post("/user/", data);
```

DELETE

```
 // After Status Code: 200
 return requesterNg.delete("/user/" + id).then(function () {
      return users.splice(users.indexOff(user), 1);
 });

```
or 
```
return requesterNg.delete("/user/" + id);
```

##Set and Remove token:

Set 
```
 function LoginCtrl($scope, requesterNg) {
     $scope.login = function (user) {
         UserRepository.authenticate(user).then(function successCallback(user.token) {
             requesterNg.setToken(user.token);
         });
     };
 }

```
Remove 
```
function LoginCtrl($scope, requesterNg) {
     $scope.logOut = function() {
         requesterNg.clearToken();
     };
 }
```


##Work example: 
```
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

                // return requesterNg.get("/user/", filter).then(function (users) {
                //
                // });

                return requesterNg.get("/user/", filter);
            }, 
            
            getById: function (id) {

                // return requesterNg.getById("/user/" + id).then(function (user) {
                //
                // });

                return requesterNg.getById("/user/" + id);
            }, 
            
            save: function (data) {

                // return requesterNg.post("/user/", data).then(function (savedUser) {
                //
                // });

                return requesterNg.post("/user/", data);
            },
            
            update: function (data) {

                // return requesterNg.put("/user/", data).then(function (updatedUser) {
                //
                // });

                return requesterNg.put("/user/", data);
            }, 
            
            remove: function (id) {

                // after Status Code: 200
                // return requesterNg.delete("/user/" + id).then(function () {
                //      users.splice(users.indexOff(user), 1);
                // });

                return requesterNg.delete("/user/" + id);
            }
        };
    }
})();
```
