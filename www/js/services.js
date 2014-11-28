angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
    .factory('types', function ($http) {
        // Might use a resource here that returns a JSON array
        var types,items;

        $http.get("http://localhost:3000/api/types").success(function (data) {
            console.log(data)
            types = data
        })
        // Some fake testing data

        $http.get("http://localhost:3000/api/posts").success(function (data) {
            console.log(data)
            items = data
        })


        var checked = [];
        return {
            all: function () {
                return types;
            },
            get: function (typeId) {
                return types[typeId];
            },
            fetch: function (couponId) {
                return items[couponId];
            },
            allItems: function () {
                return items;
            },
            favoriteList: function () {
                return checked;
            }
        }
    });