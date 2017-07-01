window.onload = function () {
    var pop = "<div class='pop'> <div class='popHeader'><p>请留言</p><div class='popCloseBtn'> - </div> </div> <form class='popContent' method='post' action='#'><textarea placeholder='请在此输入留言内容，我们会尽快与您联系。'></textarea><span>*</span><ul><li class='inputName'>姓名<span>*</span></li> <li class='popUserData'><input type='text' name='username'/> </li> </ul> <ul> <li class='inputName'> 电话<span>*</span> </li> <li class='popUserData'> <input type='text' name='Tel'/> </li> </ul> <ul> <li class='inputName'>地址 </li> <li class='popUserData'> <input type='text' name='address'/> </li> </ul> <ul> <li class='inputName'>邮箱 </li> <li class='popUserData'> <input type='text' name='Email'/> </li> </ul> <button>发送</button> </form> </div>";
    $("body").append(pop);

    $('.popCloseBtn').click(function () {
        $(".pop").fadeOut();
        showPop ();
    });

    function showPop () {
        setTimeout(function () {
            $(".pop").fadeIn();
        },10000);
    }
};