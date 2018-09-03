controllers.controller('orderfoodCtrl', function($scope,$rootScope){
          
       
        $scope.menulist=[{"itemid":1,"itemname":"100 gm Dhokla","itemprice":28,"qtyavailable":5},
                {"itemid":2,"itemname":"100 gm Jalebi","itemprice":40,"qtyavailable":8},
                {"itemid":3,"itemname":"gulabjamun","itemprice":50,"qtyavailable":18}];
           
       
        
         $scope.addtocart=function(item)
         {
           var flag=false;
           
           for(var i = 0; i < $rootScope.cartlist.length; ++i) {
                if($rootScope.cartlist[i].itemid === item.itemid)
                {
                $rootScope.cartlist[i].qty++;
                flag=true;
                }
            }
            if(!flag)
            {
                var tempitem={};
           tempitem.itemid=item.itemid;
           tempitem.itemname=item.itemname;
           tempitem.itemprice=item.itemprice;
           tempitem.qty=1;
           $rootScope.cartlist.push(tempitem);  
            }
             
             };
       
 $scope.deletefromcart=function($index)
         {         
             $rootScope.cartlist.splice($index,1);
         };
 
});