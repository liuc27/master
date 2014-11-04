angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
})


.controller('MyCtrl', function($scope, Friends) {
  // don't be scared by the image value, its just dataur
  $scope.value= 'coco strong';

      $scope.currentTime = new Date();
  $scope.items = Friends.allItems();
      $scope.$broadcast("scroll.refreshComplete");


    });