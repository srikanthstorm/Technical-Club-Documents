               
               app.controller('addtocartCtrl', function ($scope, $http) {

                   $scope.insert = function (x) {
                                    alert("Do you want to add to cart ?");
                var name = x.name;
                var email = x.email;
                var mob = x.mob;
                var city = x.city;
                var pincode = x.pincode;
                var req = {
                    method: 'POST',
                    url: 'http://localhost:3000/userdata',
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
								 
				   }
                   $scope.myFunc = function () {
                       $scope.records = [
                           {
                               "Name": "Name",
                               "Email": "Email",
                               "Mobile": "Mobile",
                               "City": "city",
                               "Pincode": "Pincode",
                               "delete": "Delete"
    }]
                       var name = $scope.name;
                       var req = {
                           method: 'POST',
                           url: 'http://localhost:3000/entiredata',
                           headers: {
                               'Content-Type': 'Application/json'
                           },
                           data: {
                               name: name,
                           }
                       }

                       $http(req)
                           .then(function (response) {
                               $scope.names = response.data;


                           });
                   };


               });
