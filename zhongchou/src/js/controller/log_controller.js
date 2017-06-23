/**
 * Created by Administrator on 2017-6-8 0008.
 */
angular.module("myApp.controller")
//登录页面控制器
.controller("logController",function ($scope,$http,$state) {
    $scope.reg = function(a){
        if(a){              //只有表达式myForm.$valid && pwd1==pwd2为真
            $http({
                url: "http://localhost:3000/user/login",
                method: "post",
                data: {
                    phone: $scope.phone,
                    password: $scope.pwd
                }
            }).then(function(res){
                // console.log(res);

                if (res.data.resultCode =="0000"){
                    $state.go("home");
                }
            }, function (err) {
                console.log(err);
            });
        }else{
            alert("请填写注册信息!");
        }
    };
});