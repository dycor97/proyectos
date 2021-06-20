<?php 
    /* Imagine a lot of code here */  
    $very_bad_unclear_name = "15 chicken wings";
    
    // Write your code here:
    $order =& $very_bad_unclear_name;
    $order .= "\n2 number 5, a number 7";
    
    // Don't change the line below
    echo "\nYour order is: $very_bad_unclear_name.";

    //By value—this creates two variables which hold copies of the same value but remain independent entities.
    //By reference—this creates two variable names (aliases) which point to the same space in memory. 
    //They cannot be modified separately!
?>
