angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
    .factory('types', function ($http,localStorageService) {
        var ab=function (data) {
            console.log(data)
            localStorageService.set("typesData",data)
        }
        var cb = function (data) {
            console.log(data)
            localStorageService.set("itemsData",data)
        }
        $http.get("http://localhost:3000/api/types").success(ab)
        $http.get("http://localhost:3000/api/posts").success(cb)
        var types=localStorageService.get("typesData")
        var items=localStorageService.get("itemsData")

        console.log(types+"is good!")
        console.log(items+"is good!")

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