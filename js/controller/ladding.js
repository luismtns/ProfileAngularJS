ngapp.controller("laddingCTRL", function ($scope, $route) {
    
    $('#btnSaibaMais').click(function () {
        $(".body-ladding").animate({scrollTop: $('#tgtImg').offset().top}, "slow");
    });

    function marcarVisitante(){
        localStorage.setItem('profile', 'nota10');
    }

    if(window.location.hash == '#/ladding'){
        marcarVisitante();
    }
});