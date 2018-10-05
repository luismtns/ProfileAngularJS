<?php
 
$region = "br1"; //https://developer.riotgames.com/regional-endpoints.html
$summonerName = "darq%20cansado";
$apiKey = "RGAPI-9de49181-17a4-478c-abcc-58d18b32b3cd";
 
// PART I. OBTAIN SUMMONERID
 
// construct url to grab the summonerId
$summonerURL = "https://". $region . ".api.riotgames.com/lol/summoner/v3/summoners/by-name/". $summonerName ."?api_key=". $apiKey;
 
// grab the results from the url, this will be in a JSON format
$summonerResult = file_get_contents($summonerURL);
 
// Take the result (JSON encoded string) and converts it into a PHP variable. 
$summonerDecoded = json_decode($summonerResult, true);
 
// to output the associative arrays uncomment the next 2 lines
// echo "<pre>"; // this line will make your array more readable
// print_r($summonerDecoded); //out put your array
 
 
 
// PART II. GET RANK INFORMATION
 
$summonerId = $summonerDecoded['id'];
 
// construct url to grab the rank information
$rankInfoURL = "https://". $region . ".api.riotgames.com/lol/league/v3/positions/by-summoner/". $summonerId ."?api_key=". $apiKey;
 
// grab the results from the url, this will be in a JSON format
$rankInfoResult = file_get_contents($rankInfoURL);
 
// Take the result (JSON encoded string) and converts it into a PHP variable. 
$rankInfoDecoded = json_decode($rankInfoResult, true);
 
// to output the associative arrays uncomment the next 2 lines
// echo "<pre>"; // this line will make your array more readable
// print_r($rankInfoDecoded); //out put your array
 
 
// PART III. Transform the data into information
 
$tier = $rankInfoDecoded[0]['tier'];
$rank = $rankInfoDecoded[0]['rank'];
 
echo $summonerName ." is stuck in ". $tier ." ". $rank ." :P"; // just kidding ofcourse
 
?>