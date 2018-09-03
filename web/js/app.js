var app=angular.module('app',['controllers','ngResource','ngRoute','ngCookies']);
var controllers=angular.module('controllers',[]);


app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/home', {
            templateUrl: 'PRTL_home.html'
        }).
        when('/menu', {
            templateUrl: 'PRTL_menu.html'
            , controller: 'orderfoodCtrl'
        }).
        when('/cart', {
            templateUrl: 'PRTL_cart.html'
            , controller: 'orderfoodCtrl'
        }).
            when('/login', {
            templateUrl: 'PRTL_login.html'
            , controller: 'userCtrl'
        }).
            when('/orders', {
            templateUrl: 'PRTL_orders.html'
            , controller: 'userCtrl'
        }).                
        otherwise({
            redirectTo: '/home'
        });
    }]);

app.run(function($location,$rootScope,$cookies){

$location.path("/home");


var cookielist;
try {
   cookielist =JSON.parse($cookies.get('cartlist'));
   $rootScope.cartlist=cookielist;
}
catch(err) {
    cookielist= $cookies.get('cartlist');
    $rootScope.cartlist=[];
}


$rootScope.user={};
$rootScope.isValidUser=false;

$rootScope.$watch('isValidUser', function (newval, oldval) {
        if($rootScope.isValidUser && $location.path()=='/login')
        {
               $location.path('/orders');  
        }
        else if(!$rootScope.isValidUser && $location.path()=='/orders')
        {
               $location.path('/login');  
        }
        });

 $rootScope.$watch('cartlist', function (newval,oldval) {
             var subtotal=0;
           for(var i = 0; i < $rootScope.cartlist.length; ++i) {
             subtotal=subtotal+($rootScope.cartlist[i].itemprice*$rootScope.cartlist[i].qty);
            }
             $rootScope.subtotal=subtotal;
             $rootScope.delivery=subtotal===0 || subtotal>299 ?0:30;
            $rootScope.tax=Math.round(subtotal*0.08); //8 % gst
            $rootScope.total=subtotal+$rootScope.tax+$rootScope.delivery; 
            
            
            var today = new Date();
            var expiresValue = new Date(today);
            expiresValue.setMinutes(today.getMinutes() + 5); 
            var str=JSON.stringify($rootScope.cartlist);
            $cookies.put('cartlist',str,{'expires' : expiresValue});
                
 },true);
 
});