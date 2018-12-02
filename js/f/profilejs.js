// Aviso PROFILEjs

function aviso(body, header, btnText){
    if(!header){
        $("#b_m").html(body);
    }else{
        $("#h_m").html(header);
        $("#b_m").html(body);
    }

    if(btnText){
        $('#f_m button').text(btnText);
    }
    $('#modalProfile').removeClass('hidden');
};

function fechar_aviso(){
    $("#h_m").html('');
    $("#b_m").html('');
    $("#f_m").html('<button onclick="fechar_aviso()" class="btn-rosa">Fechar</button>');
    $('#modalProfile').addClass('hidden');
};

// Video FBK
function video_fdback(element, time){    
    document.getElementById(element).className = 'mostrar';
    setTimeout(()=>{document.getElementById(element).className = '';},time);
};

// AOS Fix
$(window).on('load', function() {
    AOS.refresh();
  });