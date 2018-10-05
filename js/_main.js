
    var rankJson = {};

$(document).ready(function () {

    function showLoad() {
        $('.overlay').removeClass('hidden');
    }

    function hideLoad() {
        $('.overlay').addClass('hidden');
    }


    var tableUser = $('#userTable tbody');


    var input = '';
    var resultado = $('#txResultados');

    
    $('#btnConsultar').click(function () {
        showLoad();
        input = $('#txInput').val();

        res = encodeURIComponent(input);

        $.ajax({
                // "async": true,      
                "url":  "php/getSummonerElo.php",
                "method": "POST", 
                "data":{
                    'SummonerName': res
                }
        })
        .done(function(data){
            console.log(data);
            var res = JSON.parse(data);
            rankJson = res;
            console.log(rankJson);

            // gerarTabelaRank(rankJson);
            inserirDados(rankJson);
            hideLoad();
        })
        .fail(function(jqXHR, textStatus){
             console.log(textStatus);
             alert('OPS!');
             hideLoad();
        });

        // $.getJSON( "php/getSummonerElo.php", function( data ) { 
        //     console.log(data);
          
        //   });
        
    });

    function inserirDados(json){
        // SOLO DUO = 0
        if(rankJson[0] != undefined){
            var elo = rankJson[0]['tier'] + ' ' + json[0]['rank'];
            var eloImg = 'images/base-icons/' + rankJson[0]['tier'].toLowerCase() + '.png'
            var vitorias = rankJson[0]['wins'];
            var derrotas =  rankJson[0]['losses'];
            var pdl =  rankJson[0]['leaguePoints'];
            var totalVD = vitorias + derrotas;
            var taxaVitorias = Math.round((vitorias * 100) / totalVD) ;

            $('#txEloSolo').html(elo);
            $('#txPDLSolo').html(pdl + ' PDL');
            $('#txImgSolo').attr("src", eloImg);
            $('#txVitoriasSolo').html(vitorias);
            $('#txDerrotasSolo').html(derrotas);
            $('#txMediaSolo').html(taxaVitorias);

        }

        if(rankJson[1] != undefined){
            // FLEX = 1
            elo = rankJson[1]['tier'] + ' ' + json[1]['rank'];
            eloImg = 'images/base-icons/' + rankJson[1]['tier'].toLowerCase() + '.png'
            vitorias = rankJson[1]['wins'];
            derrotas =  rankJson[1]['losses'];
            pdl =  rankJson[1]['leaguePoints'];
            totalVD = vitorias + derrotas;
            taxaVitorias = Math.round((vitorias * 100) / totalVD) ;
    
            $('#txEloFlex').html(elo);
            $('#txPDLFlex').html(pdl + ' PDL');
            $('#txImgFlex').attr("src", eloImg);
            $('#txVitoriasFlex').html(vitorias);
            $('#txDerrotasFlex').html(derrotas);
            $('#txMediaFlex').html(taxaVitorias);
        }
        
        resultado.removeClass('hidden');

    }


    function gerarTabelaRank(json){
        var txTabela = "";
        for (let i = 0; i < json.length; i++) {
            
            txTabela += '<tr>';
                txTabela += '<td>Tipo de Fila</td>';
                txTabela += '<td>' + json[i]['queueType'] + '</td>';
            txTabela += '</tr>';
            txTabela += '<tr>';
                txTabela += '<td>Nome da Liga</td>';
                txTabela += '<td>' + json[i]['leagueName'] + '</td>';
            txTabela += '</tr>';
            txTabela += '<tr>';
                txTabela += '<td>Pontos da Liga</td>';
                txTabela += '<td>' + json[i]['leaguePoints'] + '</td>';
            txTabela += '</tr>';
            txTabela += '<tr>';
                txTabela += '<td>Vitórias</td>';
                txTabela += '<td>' + json[i]['wins'] + '</td>';
            txTabela += '</tr>';
            txTabela += '<tr>';
                txTabela += '<td>Derotas</td>';
                txTabela += '<td>' + json[i]['losses'] + '</td>';
            txTabela += '</tr>';
            txTabela += '<tr>';
                txTabela += '<td>Rank</td>';
                txTabela += '<td>' + json[i]['rank'] + '</td>';
            txTabela += '</tr>';
            txTabela += '<tr>';
                txTabela += '<td>Tier</td>';
                txTabela += '<td>' + json[i]['tier'] + '</td>';
            txTabela += '</tr>';
            txTabela += '<tr><td></td><td></td></tr>'

        }
        tableUser.empty();
        tableUser.append(txTabela)
    }
})