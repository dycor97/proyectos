<?php
namespace Codecademy;

// Write your code below:
$with_function = array("PHP", "popcorn", 555.55);
$with_short = ["PHP", "popcorn", 555.55];

//print arrays
$message = ["Oh hey", " You're doing great", " Keep up the good work!\n"];

$favorite_nums = [7, 201, 33, 88, 91];
// Write your code below:
echo implode("!", $message);
print_r($favorite_nums);

//assign and change values in arrays
$change_me = [3, 6, 9];
// Write your code below:
$change_me[] = "change";
$change_me[] = 12;
$change_me[1] = "tadpole";

print_r($change_me);

//array pop and push
$stack = ["wild success", "failure", "struggle"];
// Write your code below:
array_push($stack, "blocker", "impediment");
array_pop($stack);

//shift and unshift
$record_holders = [];
// Write your code below:
array_unshift($record_holders, "Tim Montgomery", "Maurice Greene", "Donovan Bailey", "Leroy Burrell", "Carl Lewis");
array_shift($record_holders);
array_unshift($record_holders, "Justin Gatlin", "Asafa Powell");
array_shift($record_holders);
array_unshift($record_holders, "Usain Bolt");

//nested arrays

$treasure_hunt = ["garbage", "cat", 99, ["soda can", 8, ":)", "sludge", ["stuff", "lint", ["GOLD!"], "cave", "bat", "scorpion"], "rock"], "glitter", "moonlight", 2.11];
  
// Write your code below:
echo $treasure_hunt[3][4][2][0];