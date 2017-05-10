
        app.controller('insertCtrl', function($scope, $http) {
            $scope.myFunc = function() {
                alert("Do you want to insert ?");
                var name = $scope.name;
                var email = $scope.email;
                var mob = $scope.mob;
                var city = $scope.city;
                var pincode = $scope.pincode;
                var req = {
                    method: 'POST',
                    url: 'http://localhost:3000/data',
                    headers: {
                        'Content-Type': 'Application/json'
                    },
                    data: {
                        name: name,
                        email: email,
                        mob: mob,
                        city: city,
                        pincode: pincode
                    }
                }

                $http(req)
                    .then(function(response) {
                        $scope.names = response.data;
                        alert($scope.names);
                    });
            };

        });

