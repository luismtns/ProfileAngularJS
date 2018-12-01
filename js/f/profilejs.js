// Aviso PROFILEjs

function aviso(body, header){
    if(header.lenght < 1){
        $("#b_m").html(header);
    }else{
        $("#h_m").html(header);
        $("#b_m").html(body);
    }
    $('#modalProfile').removeClass('hidden');
};

function fechar_aviso(){
    $("#h_m").html('');
    $("#b_m").html('');
    $('#modalProfile').addClass('hidden');
};


function video_fdback(element, time){    
    document.getElementById(element).className = 'mostrar';
    setTimeout(()=>{document.getElementById(element).className = '';},time);
};
  