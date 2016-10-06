var app = angular.module("myApp", []);

    app.controller('Ctrl', function($scope) {
        $scope.myFunc = function() {
        console.log("gotcha");
        }
    
        $scope.cloakFunc = {
            message: 'How you like me now!?!'
        }
    })
    

    

