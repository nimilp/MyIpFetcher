angular.module('starter.MaController',[])
.controller('MaController',['$scope','$http',
                            function($scope,$http){   
                                
            $scope.refresh = function(){
//                alert('hi');
                var url = 'http://ip-nimil.rhcloud.com/mytask/whatismyip';
                var onSuccess = function(response){
                    $scope.IP = response.data;
                    console.log($scope.IP);
                };
                var onError = function(error){
                    $scope.error = error.status;
                };
                $http({
                          url:url,
                          method:'GET'
                      }).then(onSuccess,onError);   
                $scope.date = new Date();
                //alert($scope.IP);
            };
                                
}]);