<?php
class Beverage {
  public $temperature, $color, $opacity;

  function __construct($temperature, $color) {
    $this->temperature = $temperature;
    $this->color = $color;
  }

  function getInfo() {
    return "This beverage is $this->temperature and $this->color.";
  }
}

$tea = new Beverage("cold", "black");
echo $tea->getInfo();


//private y protected
class Beverage2 {
  private $temperature, $color;
  protected $opacity;
  
  function __construct($temperature, $color) {
    $this->temperature = $temperature;
    $this->color = $color;
  }
  function setColor($color) {
    $this->color = $color;
  }

  function getColor() {
      return $this->color;
  }

  function getInfo() {
    return "This beverage is $this->temperature and $this->color.";
  }

}
class Milk extends Beverage2 {
  function setOpacity($opacity) {
    $this->opacity = $opacity;
  }
}

//static methods and attributes
class AdamsUtils {
    public static $the_answer = 42;
    public static function addTowel($string) {
      return $string . " and a towel.";
    }
  }
  
  $items = "I brought apples";
  
  echo AdamsUtils::$the_answer;
  echo AdamsUtils::addTowel($items);