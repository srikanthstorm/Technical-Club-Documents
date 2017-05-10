               
               app.controller('deleteselectedCtrl', function ($scope, $http) {

                   $scope.delete = function (name) {
                       var res = {
                           method: 'POST',
                           url: 'http://localhost:3000/delete',
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
