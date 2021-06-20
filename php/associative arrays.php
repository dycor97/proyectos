<?php

//associative arrays

$php_array = array("language" => "PHP", "creator" => "Rasmus Lerdorf", "year_created" => 1995, "filename_extensions" => [".php", ".phtml", ".php3", ".php4", ".php5", ".php7", ".phps", ".php-s", ".pht", ".phar"]);

$php_short = ["language" => "PHP", "creator" => "Rasmus Lerdorf", "year_created" => 1995, "filename_extensions" => [".php", ".phtml", ".php3", ".php4", ".php5", ".php7", ".phps", ".php-s", ".pht", ".phar"]];

// print associative arrays
$september_hits = ["The Sixth Sense" => 22896967, "Stigmata" => 18309666, "Blue Streak" => 19208806, "Double Jeopardy" => 23162542];

echo implode(" ", $september_hits) . "\n";
print_r($september_hits);

//adding and accesing
$assignment_one = ["Alex"=> 87, "Kenny"=> 91, "Natalia"=> 91, "Lily"=> 67, "Dan"=> 81, "Kat"=> 77, "Sara" => 65];

$assignment_two = ["Alex"=> 91, "Kenny"=> 99, "Natalia"=> 100, "Lily"=> 61, "Dan"=> 88, "Kat"=> 90];

$assignment_three = ["Alex"=> 78, "Kenny"=> 92, "Natalia"=> 94, "Lily"=> 79, "Dan"=> 73, "Sara" => 61];

$student_name = "Alex";
// Write your code below:
$assignment_two["Sara"] = 65;
$assignment_three["Kat"] = 97;

$dans_grades = [$assignment_one["Dan"], $assignment_two["Dan"], $assignment_three["Dan"]];

echo $assignment_two[$student_name];

//Changing and removing
$my_car = [
    "oil" => "black and clumpy",
    "brakes" => "new",
    "tires" => "old with worn treads",
    "filth" => "bird droppings", 
    "wiper fluid" => "full", 
    "headlights" => "bright"
  ];
  print_r($my_car);
  
  // Write your code below:
  $my_car["oil"] = "new and premium";
  $my_car["tires"] = "new with deep treads";
  unset($my_car["filth"]);
  
  print_r($my_car);

  //joining arrays
  
$giraffe_foods = ["dip"=>"guacamole", "chips"=>"corn", "entree"=>"grilled chicken"];

$impala_foods = ["dessert"=>"cookies", "vegetable"=>"asparagus", "side"=>"mashed potatoes"];

$rat_foods = ["dip"=>"mashed earth worms", "entree"=>"trash pizza", "dessert"=>"sugar cubes", "drink"=>"lemon water"];

// Write your code below:
$potluck = $giraffe_foods + $impala_foods + $rat_foods;
print_r($potluck);