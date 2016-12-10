/**
 * Created by Bakhtier Gaibulloev
 */

'use strict';

var config = { url: null, token: null };

angular.module('RequesterModule', [])
       .service('requesterNg', function($http) {

           if (config.token != null)
                $http.defaults.headers.common.Authorization = 'Basic ' + config.token;

            //=============Configurations===================================================================================

           this.setUrl = function (url) {
                config.url = url
           };

           this.getUrl = function () {
               return config.url
           };

           this.setToken = function (token) {
                config.token = token
           };

           this.removeToken = function () {
                config.token = null
           };

            //==============================================================================================================

            this.get = function (apiRoute, params) {
                return $http({
                    method: 'GET',
                    url: config.url + apiRoute,
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
                    url: config.url + apiRoute
                }).then(function successCallback(response) {
                    return response.data;
                }, function errorCallback(response) {
                    console.log(response);
                });
            };

            this.post = function (apiRoute, data) {
                return $http({
                    method: 'POST',
                    url: config.url + apiRoute,
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
                    url: config.url + apiRoute,
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
                    url: config.url + apiRoute,
                    data: id
                }).then(function successCallback(response) {
                    return response.data;
                }, function errorCallback(response) {
                    console.log(response);
                });
            };

       });


