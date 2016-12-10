# Angularjs-requester-http
Simply way todo GET, POST, PUT and DELETE requestes

### Installing

```
npm i angularjs-requester--http
```

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Exmples

What things you need to install the software and how to install them

GET

```
 return requesterNg.get("/user", filter).then(function (users) {
    console.log(users);
    return users;
 });

```
or 
```
return requesterNg.get("/user", filter);
```

POST

```
 return requesterNg.post("/user", data).then(function (savedUser) {
    console.log(savedUser);
    return savedUser;
 });

```
or 
```
return requesterNg.post("/user", data);
```

PUT

```
 return requesterNg.post("/user", data).then(function (updatedUser) {
    console.log(updatedUser);
    return updatedUser;
 });

```
or 
```
return requesterNg.post("/user", data);
```

DELETE

```
 // After Status Code: 200
 return requesterNg.delete("/user" + id).then(function () {
      return users.splice(users.indexOff(user), 1);
 });

```
or 
```
return requesterNg.delete("/user" + id);
```

