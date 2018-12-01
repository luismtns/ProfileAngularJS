ngapp.controller("videosCTRL", function ($scope, $route) {
    $scope.$route = $route;
    $('.d-link').removeClass('active');
    if($route.current.activetab == 'videos'){
        $('#videosLink').addClass('active');
    }
    verificarLogin();
    setTimeout(()=>{
        $('.body-videos').css('padding-top', $('.header-videos').height() + 30);
        if($('.header-videos').hasClass('minimize'))
            $('#menu-video').css('height', $('#video_player').height());
    }, 300)

    $('#minimize-video').click(()=>{
        if($('.header-videos').hasClass('minimize')){
            $('#minimize-video i').removeClass('fa-expand').addClass('fa-compress');
            $('.header-videos').removeClass('minimize')
            $('#menu-video').css('height', 'auto');
            $('.body-videos').css('padding-top', $('.header-videos').height() + 30);
        }else{            
            $('#minimize-video i').removeClass('fa-compress').addClass('fa-expand');
            $('.header-videos').addClass('minimize');
            $('#menu-video').css('height', $('#video_player').height());
            $('.body-videos').css('padding-top', $('.header-videos').height() + 30);
        }
    });

    $(document).ready(function(){
        var _originalSize = $(window).width() + $(window).height()
        $(window).resize(function(){
          if($(window).width() + $(window).height() != _originalSize){
            // console.log("keyboard show up");
            $("nav").addClass("hidden");  
          }else{
            // console.log("keyboard closed");
            $("nav").removeClass("hidden");  
          }
        });
      });

      $('.video-demo-slick').slick({
        infinite: false,
        slidesToShow: 2.5,
        slidesToScroll: 1,
        arrows: false,
      });

     

setTimeout(()=>{
    var updateBar;
    var video_player = document.getElementById('video_player');
    var barSize = $('#cvideoprogress').width();
    var progressBar = document.getElementById('video-progress');
    

	video_player.addEventListener('click', playOrPause, false);
	progressBar.addEventListener('click', clickedBar, false);

    function playOrPause(){
       if(video_player.paused){
           video_player.play();
           video_fdback('play-alert', 300);
           startUpdate();
       }else{
           video_player.pause();
           video_fdback('pause-alert', 300);
           stopUpdate();        
       }
    }
    
    function update() {
       console.log('rodando');
       if (!video_player.ended) {
           var size=parseFloat(video_player.currentTime*barSize/video_player.duration);
           progressBar.style.width=size+'px';
       } else {
           progressBar.style.width='0';
          stopUpdate();
       }
    }
    
    function stopUpdate(){
       clearInterval(updateBar);
    }
    function startUpdate(){
       updateBar = setInterval(update, 500);
    }
    
    function clickedBar(e){
       var bar = document.getElementById('cvideoprogress');
       var barSize = $('#cvideoprogress').width();
       var progressBar = document.getElementById('video-progress');
        var mouseX=e.pageX-bar.offsetLeft;
        var newtime=mouseX*video_player.duration/barSize;
        video_player.currentTime=newtime;
        progressBar.style.width=mouseX+'px';
    }
},300);
      

});

    