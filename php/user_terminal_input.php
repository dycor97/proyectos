<?php
    echo "Hello, there. What's your first name?\n";
    
    $fname = readline("> ");
    $name_length = strlen($fname);
    
    if($name_length > 8) {
      echo "Hi, $fname. That's a long name.";
    } elseif($name_length >= 4 && $name_length <= 8) {
      echo "Hi, $fname.";
    } else {
      echo "Hi, $fname. That's a short name.";
    }
?>