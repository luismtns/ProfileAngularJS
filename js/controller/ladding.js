ngapp.controller("laddingCTRL", function ($scope, $route) {
    
    $('#btnSaibaMais').click(function () {
        $(".body-ladding").animate({scrollTop: $('#tgtImg').offset().top}, "slow");
    });

    function marcarVisitante(){
        var date = new Date();
        localStorage.setItem('profile', date);
    }

    if(window.location.hash == '#/ladding'){
        marcarVisitante();
    }
});