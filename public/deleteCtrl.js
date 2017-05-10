                          
                          app.controller('deleteCtrl', function ($scope, $http) {
                              $scope.myFunc = function() {
                                  alert("do you want to delete?");
                          var name=$scope.name;
                              var req = { 
                                  method: 'POST',
                                  url: 'http://localhost:3000/delete', 
                   headers: { 'Content-Type': 'Application/json' },
                   data: {
                          name: name, 
                         }
                              }
                          
                                  $http(req)
                          .then(function (response) {
                          $scope.names = response.data;
                                      alert($scope.names);
                         });
                                  };
                                  
                  });
