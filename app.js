var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope) {
  
  $scope.items = ['第一題', '第二題', '第三題', '第四題', '第五題'];
  $scope.selection = $scope.items[0];
  
  $scope.change1 = function(){
$scope.selection = ["第一題"];
  }
  $scope.change2 = function(){
$scope.selection = ["第二題"];
  }
  $scope.change3 = function(){
$scope.selection = ["第三題"];
  }
  $scope.change4 = function(){
$scope.selection = ["第四題"];
  }
  $scope.change5 = function(){
$scope.selection = ["第五題"];
  }
  $scope.addfontsize = function(){
     $scope.x =$scope.x + 1;
  }
  $scope.redfontsize = function(){
    if ($scope.x > 0){
     $scope.x =$scope.x - 1;}
  }
  $scope.refontsize = function(){
     $scope.x = 14;
  }

});


    

