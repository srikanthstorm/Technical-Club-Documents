               
               app.controller('viewordersCtrl', function ($scope, $http) {
  
                   $scope.delete = function (name) {
					   alert(name);
                       var res = {
                           method: 'POST',
                           url: 'http://localhost:3000/orderdelete',
                           headers: {
                               'Content-Type': 'Application/json'
                           },
                           data: {
                               name: name
                           }
                       }

                       $http(res)
                           .then(function () {
                               $scope.myFunc()
                           });
                       //setTimeout($scope.myFunc,1500);

                   }

                   $scope.insert = function (x) {
                                   alert(x.name);
								    alert("Do you want to insert ?");
                var name = x.name;
                var email = x.email;
                var mob = x.mob;
                var city = x.city;
                var pincode = x.pincode;
                var req = {
                    method: 'POST',
                    url: 'http://localhost:3000/orderdata',
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
                           url: 'http://localhost:3000/getorderdata',
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
