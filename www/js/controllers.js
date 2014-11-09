angular.module('starter.controllers', [])

    .controller('CouponCtrl', function($scope) {
    })

    .controller('typesCtrl', function($scope, types) {
        $scope.types = types.all();
    })

    .controller('typeDetailCtrl', function($scope, $stateParams, types) {
        $scope.type = types.get($stateParams.typeId);
    })

    .controller('CouponDetailCtrl', function($scope, $stateParams, types) {
        $scope.types = types.all();
        $scope.items = types.allItems();
        $scope.coupon = types.fetch($stateParams.couponId);
        $scope.checked = types.favoriteList();
        $scope.favorites = "button icon-left ion-plus button-positive";
        $scope.favoritesText = "点击领取";
        $scope.changeClass = function(){
            if ($scope.favorites === "button icon-left ion-plus button-positive"){
                $scope.favorites = "button icon-left ion-heart button-positive";
                if ($scope.favoritesText === "点击领取")
                    $scope.favoritesText = "已经领取";
                var notExist = true;
                angular.forEach($scope.checked, function(value){
                    if(value.id == $scope.coupon.id) {
                        notExist = false;
                    }
                });
                if(notExist) {

                    if($scope.checked.push($scope.coupon))
                    {
                        console.log($scope.checked.length)
                        console.log($scope.checked);
                        console.log($scope.items);

                        //$scope.items.splice($scope.checked[this.length-1],1);
                        }


                    console.log( $scope.items);
                    //delete $scope.items[$scope.coupon.id];
                    console.log( $scope.items);
                }

                console.log( $scope.checked);
            }
        };
    })
    .controller('menuCtrl', function($scope, $ionicSideMenuDelegate) {
    })
    .controller('favoriteListCtrl', function($scope) {
    })

    .controller('favoriteDetailCtrl', function($scope, $stateParams, types) {
        $scope.favoriteCoupon = types.fetch($stateParams.favoriteId);
        $scope.checked = types.favoriteList();
        $scope.favorites = "button icon-left ion-plus button-positive";
        $scope.favoritesText = "点击领取";
        $scope.changeClass = function(){
            if ($scope.favorites === "button icon-left ion-plus button-positive"){
                $scope.favorites = "button icon-left ion-heart button-positive";
                if ($scope.favoritesText === "点击领取")
                    $scope.favoritesText = "已经领取";
                var notExist = true;
                angular.forEach($scope.checked, function(value){
                    if(value.id == $scope.coupon.id) {
                        notExist = false;
                    }
                });
                if(notExist) {
                    $scope.checked.push($scope.coupon);
                }
                console.log( $scope.checked);
                console.log( $scope.items);
            }
        };
    })

    .controller('MyCtrl', function($scope, types) {
        // don't be scared by the image value, its just dataur
        $scope.value= 'coco strong';

        $scope.currentTime = new Date();
        $scope.items = types.allItems();
        $scope.$broadcast("scroll.refreshComplete");


    });