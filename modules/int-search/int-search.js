angular.module('int-search', [])

    .component('intSearch',{
        controller: ['$scope',function($scope) {
            var $ctrl = this;

            $ctrl.result = {
                text:'',
                countInt:''
            };

            $ctrl.resultList = [];
            
            $ctrl.run = function () {
                $ctrl.result.text = $ctrl.textInput;
                $ctrl.result.countInt = $ctrl.result.text.replace(/\D+/g,'').length;
                $ctrl.resultList.push($ctrl.result.text + " : " + $ctrl.result.countInt);
                $ctrl.textInput = '';
            };
        }],
        templateUrl: "./modules/int-search/int-search.html"
    });
