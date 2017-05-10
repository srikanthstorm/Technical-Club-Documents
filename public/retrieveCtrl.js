        
        app.controller('retrieveCtrl', function($scope, $http) {

            $scope.myFunc = function() {
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
                        $scope.names = response.data;


                    });
            };


        });
