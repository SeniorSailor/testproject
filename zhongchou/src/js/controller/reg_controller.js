/**
 * Created by Administrator on 2017-6-8 0008.
 */
/*定义模块
 * 定义控制器{
 * 1.访问http://localhost:3000/IndexInfo得到数据
 * 2.每部分 分开存放}*/
angular.module("myApp.controller")
//    注册页面控制器
.controller("RegController",function ($scope,$http,$state) {
    $scope.reg = function(b){
        if(b){              //只有表达式myForm.$valid && pwd1==pwd2为真
            $http({
                url: "http://localhost:3000/user/reg",
                method: "post",
                data: {
                    name: $scope.user,
                    phone: $scope.phone,
                    password: $scope.pwd1,
                    passwordRepeat: $scope.pwd2
                }
            }).then(function(res){
                // console.log(res);
                if (res.data.resultCode =="0000"){
                    $state.go("login");
                }
            }, function (err) {
                console.log(err);
            });
        }else{
            alert("请填写注册信息!");
        }
    };
});