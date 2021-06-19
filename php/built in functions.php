<?php
namespace Codecademy;

$first = "Welcome to the magical world of built-in functions.";
  
$second = 82137012983; 

//Write your code below:
echo gettype($first) . "\n";
echo gettype($second) . "\n";

echo var_dump($first) . "\n";
echo var_dump($second);

//string functions
function convertToShout($string) {
    return strtoupper($string) . "!";
}

echo convertToShout("hola") . "\n";

echo strrev(".pu ti peeK .taerg gniod er'uoY") . "\n";

echo strtolower("SOON, tHiS WILL Look NoRmAL.") . "\n";

echo str_repeat("\nThere's no place like home.\n", 3);

//substring functions
$essay_one = "I really enjoyed the book. I thought the characters were really interesting. The plot of the novel was really engaging. I really felt the characters' emotions. They were really well-written. I really wish the ending had been different though.";
  
$essay_two = "Obviously this is a really good book. You obviously would not have made us read it if it wasn't. I felt like the ending was too obvious though. It was so obvious who did it right away. I think the thing with the light was obviously a metaphor for life. It would have been better if the characters were less obvious about their secrets.";  

echo substr_count($essay_one, "really");
echo substr_count($essay_two, "obvious");

//number functions
function calculateDistance($number1, $number2) {
    return abs($number1 - $number2);
}
  
function calculateTip($cost) {
    return round($cost * 1.18);
}
  
echo calculateDistance(-3, 7) . "\n";
echo calculateTip(88.77);

echo getrandmax() . "\n";
echo rand() . "\n";
echo rand(1, 52);
  
function tipGenerously($cost) {
    return ceil($cost * 1.2);
}
  
function calculateCircleArea($diameter) {
    return pi() * pow(($diameter / 2), 2); 
}
  
  
echo tipGenerously(100) . "\n";
echo calculateCircleArea(30);

$initial = '555';

$a = octdec($initial);
echo $a . "\n";

$b = deg2rad($a);
echo $b . "\n";

$c = cos($b);
echo $c . "\n";

$d = round($c, 3);
echo $d . "\n";

$e = log($d);
echo $e . "\n";

$f = abs($e);
echo $f . "\n";

$g = acos($f);
echo $g . "\n";

$h = rad2deg($g);
echo $h . "\n";

$i = floor($h);
echo $i . "\n";

$j = $i - 47;
echo $j;