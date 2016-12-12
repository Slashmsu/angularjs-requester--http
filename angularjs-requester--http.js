/**
 * Created by Bakhtier Gaibulloev
 */

'use strict';

var url;

angular.module('RequesterModule', [])
    .service('requesterNg', function($http) {

        //=============Configurations===================================================================================

        // set url to server
        this.setUrl = function (u) {
            url = u
        };

        // get url to server
        this.getUrl = function () {
            return url
        };

        // set token to header
        this.setToken = function (token) {
            $http.defaults.headers.common['Authorization'] = "Bearer " + token;
        };

        // clear token from header
        this.clearToken = function () {
            $http.defaults.headers.common['Authorization'] = ''
        };

        //==============================================================================================================

        this.get = function (apiRoute, params) {
            return $http({
                method: 'GET',
                url: url + apiRoute,
                params: params
            }).then(function successCallback(response) {
                return response.data;
            }, function errorCallback(response) {
                console.log(response);
            });
        };

        this.getById = function (apiRoute) {
            return $http({
                method: 'GET',
                url: url + apiRoute
            }).then(function successCallback(response) {
                return response.data;
            }, function errorCallback(response) {
                console.log(response);
            });
        };

        this.post = function (apiRoute, data) {
            return $http({
                method: 'POST',
                url: url + apiRoute,
                data: data
            }).then(function successCallback(response) {
                return response.data;
            }, function errorCallback(response) {
                console.log(response);
            });
        };

        this.put = function (apiRoute, data) {
            return $http({
                method: 'PUT',
                url: url + apiRoute,
                data: data
            }).then(function successCallback(response) {
                return response.data;
            }, function errorCallback(response) {
                console.log(response);
            });
        };

        this.delete = function (apiRoute) {
            return $http({
                method: 'DELETE',
                url: url + apiRoute,
                data: id
            }).then(function successCallback(response) {
                return response.data;
            }, function errorCallback(response) {
                console.log(response);
            });
        };

    });


