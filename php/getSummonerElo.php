<?php
 
 $region = "br1"; //https://developer.riotgames.com/regional-endpoints.html
 $summonerName = $_POST['SummonerName'];
 $apiKey = "RGAPI-1380a797-49fb-4eb6-9a2b-5eee2833ec94";

 // PART I. OBTAIN SUMMONERID
 
// construct url to grab the summonerId
$summonerURL = "https://". $region . ".api.riotgames.com/lol/summoner/v3/summoners/by-name/". $summonerName ."?api_key=". $apiKey;
 
// grab the results from the url, this will be in a JSON format
$summonerResult = file_get_contents($summonerURL);
 
// Take the result (JSON encoded string) and converts it into a PHP variable. 
$summonerDecoded = json_decode($summonerResult, true);

// print_r($summonerResult);

// PART II. GET RANK INFORMATION
 
$summonerId = $summonerDecoded['id'];
 
// construct url to grab the rank information
$rankInfoURL = "https://". $region . ".api.riotgames.com/lol/league/v3/positions/by-summoner/". $summonerId ."?api_key=". $apiKey;
 
// grab the results from the url, this will be in a JSON format
$rankInfoResult = file_get_contents($rankInfoURL);
 
// Take the result (JSON encoded string) and converts it into a PHP variable. 
// $rankInfoDecoded = json_decode($rankInfoResult, true);
 
// to output the associative arrays uncomment the next 2 lines
// echo "<pre>"; // this line will make your array more readable
print_r($rankInfoResult); //out put your array
 


// echo '{ "Tier":"'.$tier.'", "Rank":"'. $rank .'" }'; // just kidding ofcourse
?>