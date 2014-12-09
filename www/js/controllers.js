angular.module('starter.controllers', [])

    .controller('CouponCtrl', function ($scope) {
    })

    .controller('typesCtrl', function ($scope, types) {
        $scope.types = types.all();
    })

    .controller('typeDetailCtrl', function ($scope, $stateParams, types) {
        $scope.type = types.get($stateParams.typeId);
    })

    .controller('CouponDetailCtrl', function ($scope, $stateParams, types) {
        $scope.types = types.all();
        $scope.items = types.allItems();
        $scope.coupon = types.fetch($stateParams.couponId);
        $scope.checked = types.favoriteList();
        $scope.favorites = "button icon-left ion-plus button-positive";
        $scope.favoritesText = "点击领取";

        $scope.favoriteClass = function () {
            var exist = false;
            angular.forEach($scope.checked, function (value) {
                if (value.id == $scope.coupon.id) {
                    exist = true;
                }
            });
            if (exist) {
                $scope.favorites = "button icon-left ion-heart button-positive";
                $scope.favoritesText = "已经领取";
            }
        };

        $scope.changeClass = function () {
            if ($scope.favorites === "button icon-left ion-plus button-positive") {
                $scope.favorites = "button icon-left ion-heart button-positive";
                if ($scope.favoritesText === "点击领取")
                    $scope.favoritesText = "已经领取";
                var notExist = true;
                angular.forEach($scope.checked, function (value) {
                    if (value.id == $scope.coupon.id) {
                        notExist = false;
                    }
                });
                if (notExist) {
                    $scope.checked.push($scope.coupon);
                    //delete $scope.items[$scope.coupon.id];
                    console.log($scope.items);
                }
                console.log($scope.checked);
            }
        };
    })

    .controller('favoriteListCtrl', function ($scope) {
    })

    .controller('favoriteDetailCtrl', function ($scope, $stateParams, types, $http) {

        $scope.favoriteCoupon = types.fetch($stateParams.favoriteId);
        $scope.checked = types.favoriteList();
        $scope.favorites = "button icon-left ion-plus button-positive";
        $scope.coupon = types.fetch($stateParams.favoriteId);
        $scope.favoritesText = "点击领取";
        $scope.changeClass = function () {
            if ($scope.favorites === "button icon-left ion-plus button-positive") {
                $scope.favorites = "button icon-left ion-heart button-positive";
                if ($scope.favoritesText === "点击领取")
                    $scope.favoritesText = "已经领取";
            }
        };
    })
    .controller('MenuCtrl', function ($scope, types, $http, $ionicSideMenuDelegate, localStorageService, $location) {
        $scope.register = function (username,password) {
            $http.post("http://localhost:3000/api/user",{"username":username,"password":password}).success(function (data) {
                if(data==="already registered"){
                    alert("用户名已经注册，请换用户名！");
                }
                else {
                    alert("注册成功！")
                    $location.path('#/tab/coupon')
                    localStorageService.set("usernameDate",data)
                    console.log(localStorageService.get("usernameDate")+"is nice")

                }
            });
        };
    })
    .controller('MyCtrl', function ($scope, types, $http, localStorageService) {
        // don't be scared by the image value, its just data
        $scope.doRefresh = function () {
            $http.get("http://localhost:3000/api/posts").success(function (data) {
                console.log(data+"is fine")
                $scope.items = data;
                localStorageService.set("itemsData",data)
                console.log(localStorageService.get("itemsData")+"is fine")
            })
                .finally(function () {
                    $scope.$broadcast('scroll.refreshComplete')
                });
        };
        $scope.checked = types.favoriteList();
        $scope.currentTime = new Date();
        $scope.items = types.allItems();

    });