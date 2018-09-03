controllers.controller('userCtrl', function($scope,$rootScope,$location){
    
    if($rootScope.isValidUser)
              $location.path('/orders');
    else
        $location.path('/login');
    
    $scope.pageid="place";
    
    
     $scope.getorders=function()
    {
//     Ststus : R=requested, A=accepted, P=processing, D=dispatched, C=completed
       $rootScope.orders=[{"orderid":1,"totalbill":345,"date":"3/9/2018","status":"R"},
           {"orderid":2,"totalbill":590,"date":"1/9/2018","status":"D"},
           {"orderid":3,"totalbill":876,"date":"1/9/2018","status":"C"},
           {"orderid":4,"totalbill":78,"date":"1/9/2018","status":"A"},
           {"orderid":5,"totalbill":234,"date":"1/9/2018","status":"P"},
           {"orderid":6,"totalbill":567,"date":"2/9/2018","status":"C"}
       ];
       
    };
    
    $scope.getorders();
    
    $scope.login=function()
    {
       $rootScope.isValidUser=true; 
       $rootScope.user={"userid":1,"mobile":9646448234,"password":"abc","name":"saumya","address":"vikas nagar lko"};
    };
    
     $scope.register=function()
    {
       $rootScope.isValidUser=true; 
       $rootScope.user=$scope.reguser;
    };
    
    
    
    $scope.logout=function()
    {
        
       $rootScope.isValidUser=false; 
        $rootScope.user={};
    };
    
    
    
    $scope.placeorder=function()
    {
      
     
       var billingcontact= $rootScope.user.name +","+ $rootScope.user.mobile +","+ $rootScope.user.address;
       
       //send userid billingcontact totalbill datetime, cartlist
       $scope.pageid="track";
       $rootScope.cartlist=[];
       $scope.getorders();
       
    };
    
   
    
    });
