
        app.controller('updateCtrl', function($scope, $http) {
             $scope.myFunc1 = function() {
                alert("do you want to update?");
                var name = $scope.name;
                var email = $scope.email;
                var mob = $scope.mob;
                var city = $scope.city;
                var pincode = $scope.pincode;
                var req = {
                    method: 'POST',
                    url: 'http://localhost:3000/update',
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
                        $scope.na = response.data;
                                      alert($scope.na);

                    });
            };
           

            $scope.myFunc = function() {
                alert("do you want to retrieve?");
                $scope.records = [{
                    "Name": "Name",
                    "Email": "Email",
                    "Mobile": "Mobile",
                    "City": "city",
                    "Pincode": "Pincode"
                }]
                var name = $scope.name;
                var req = {
                    method: 'POST',
                    url: 'http://localhost:3000/retrieve',
                    headers: {
                        'Content-Type': 'Application/json'
                    },
                    data: {
                        name: name,
                    }
                }

                $http(req)
                    .then(function(response) {

                        $scope.name1 = response.data[0].name;

                        $scope.email = response.data[0].email;

                        $scope.city = response.data[0].city;

                        $scope.pincode = response.data[0].pincode;


                        $scope.mob = response.data[0].mob;

                        


                    });
            };

        });

