angular.module('app', ['onsen'])

            .controller('CustomerController', function ($scope, $http) {
               
               
                 
            })

            .controller('LoginController', function ($scope, $http) {
                window.localStorage.removeItem("memberCode");
                this.mcode;
                this.password;
                this.pay = function pay() {
                    menu.setMainPage('aboutus.html', { closeMenu: true });
                };
            })

;
;