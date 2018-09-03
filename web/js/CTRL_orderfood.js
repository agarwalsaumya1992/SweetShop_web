controllers.controller('orderfoodCtrl', function($scope,$rootScope){
          
       
        $scope.menulist=[{"itemid":1,"itemname":"Dhokla (250 gms)","itemprice":28,"qtyavailable":5},
                         {"itemid":2,"itemname":"Jalebi (100gm)","itemprice":20,"qtyavailable":8},
                         {"itemid":3,"itemname":"gulabjamun (3pcs)","itemprice":50,"qtyavailable":18},
                         {"itemid":4,"itemname":"samosa","itemprice":50,"qtyavailable":18},
                         {"itemid":5,"itemname":"aloo tikki chat","itemprice":50,"qtyavailable":18},
                         {"itemid":6,"itemname":"khaste","itemprice":50,"qtyavailable":18},
                         {"itemid":7,"itemname":"dahi bhalla","itemprice":50,"qtyavailable":18},
                         {"itemid":8,"itemname":"panipuri","itemprice":50,"qtyavailable":18}];
           
       
        
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