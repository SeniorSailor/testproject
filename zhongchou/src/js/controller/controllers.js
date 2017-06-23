/**
 * Created by Administrator on 2017-6-6 0006.
 */
/*定义模块
* 定义控制器{
* 1.访问http://localhost:3000/IndexInfo得到数据
* 2.每部分 分开存放}*/
angular.module("myApp.controller",[])
//    首页控制器
.controller("HomeController",function ($scope,$http) {
    $scope.homeData = {
        sildeData:[],
        hotData: [],
        newData:[],
        unitData:[]
    };
    var url = "http://localhost:3000/IndexInfo";
    $http({
        url:url,
        mothod:"get"
    }).then(function (res) {
        console.log(res);
        if (res.data.resultCode == "0000"){
            $scope.homeData.slideData = res.data.result.slides;
            $scope.homeData.hotData = res.data.result.hot;
            $scope.homeData.newData = res.data.result.new;
            $scope.homeData.unitData = res.data.result.unit;/*有疑问*/
            $scope.nav_r=[{a:"微电影"},{a:"电影"},{a:"电视剧"},{a:"传统戏曲"},{a:"话剧"},{a:"书画"},{a:"相声"},
                {a:"戏剧"},{a:"音乐剧"},{a:"纪录片"}];
            console.log(res.data.result.hot);
        }
    },function (err) {
        console.log(err);
    });
});
