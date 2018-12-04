<?php
 
//  mb_http_output( "iso-8859-1" );  
//  ob_start("mb_output_handler");   
//  header("Content-Type: text/html; charset=ISO-8859-1",true);

 
include 'lolconfig.php';

 // PART I. OBTAIN SUMMONERID
 
// construct url to grab the summonerId
$summonerURL = "https://". $region . ".api.riotgames.com/lol/summoner/v3/summoners/by-name/". $summonerName ."?api_key=". $apiKey;
 
// grab the results from the url, this will be in a JSON format
// $summonerResult = file_get_contents($summonerURL);


$ch = curl_init($summonerURL);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$summonerResult = '';
if( ($summonerResult = curl_exec($ch) ) === false)
{
    die(json_encode(array("error"=>"Usuario")));
}
else
{
    $summonerDecoded = json_decode($summonerResult, true);
    if(!empty($summonerDecoded['id'])){
        $summonerId = $summonerDecoded['id'];
    }else{
        die(json_encode(array("error"=>"Usuario")));
    }
}

// Close handle
curl_close($ch);


// Take the result (JSON encoded string) and converts it into a PHP variable. 


// print_r($summonerResult);

// PART II. GET RANK INFORMATION
 
 
// construct url to grab the rank information
$rankInfoURL = "https://". $region . ".api.riotgames.com/lol/league/v3/positions/by-summoner/". $summonerId ."?api_key=". $apiKey;
 
$ch = curl_init($rankInfoURL);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$rankInfoResult = '';
if( ($rankInfoResult = curl_exec($ch) ) === false)
{
    die(json_encode(array("error"=>"Usuario")));
}
else
{
    print_r($rankInfoResult);
}

// Close handle
curl_close($ch);
 
// Take the result (JSON encoded string) and converts it into a PHP variable. 
// $rankInfoDecoded = json_decode($rankInfoResult, true);
 
// to output the associative arrays uncomment the next 2 lines
// echo "<pre>"; // this line will make your array more readable
 //out put your array
?>