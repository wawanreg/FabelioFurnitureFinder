
angular.module('fabelioTest').component('furnitureList', {
    templateUrl: '/Assets/app/furniture-list/furniture-list.template.html',
    controller: ['$http', '$scope',
        function SearchController($http, $scope) {

        //refresh select-picker in the beginning
            setTimeout(function () {
                $('.selectpicker').selectpicker('refresh');
            }, 2000);

            var self = this;
            $http.get('http://www.mocky.io/v2/5c9105cb330000112b649af8').then(function (respone) {
                
                $scope.furnitures = respone.data;
            });
            
            $scope.styleValue;
            $scope.timeValue;

            //function for select multiple furnitureStyle
            $scope.updateStyle = function () {
                
                $scope.styleValue = $scope.furStyle;
            }

            //function for select multiple deliveryTime
            $scope.updateTime = function () {
                
                $scope.timeValue = $scope.furTime;
            }

            
        }
    ]
});

