<?php
 
  function magic8Ball() {
    echo "Welcome to the 8 ball. \n";
    echo "Write a yes or no question: \n";
    $question = readline("> ");
    
    echo "\nHmm I see... Your question is $question... I understand why this weighs on you... I have consulted the spirit world.\nHere is your answer: ";

    $magic = rand(0, 19);

    switch ($magic) {
        case 0:
            $response = "It is certain,";
            break;
        
        case 1:
            $response = "It is decidedly so.";
            break;
        
        case 2:
            $response = "Without a doubt.";
            break;

        case 3:
            $response = "Yes - definitely.";
            break;

        case 4:
            $response = "You may rely on it.";
            break;
        
        case 5:
            $response = "As I see it, yes.";
            break;
        
        case 6:
            $response = "Most likely.";
            break;
        
        case 7:
            $response = "Outlook good.";
            break;

        case 8:
            $response = "Yes.";
            break;

        case 9:
            $response = "Signs point to yes.";
            break;
            
        case 10:
            $response = "Reply hazy, try again.";
            break;
        
        case 11:
            $response = "Ask again later.";
            break;
        
        case 12:
            $response = "Better not tell you now.";
            break;

        case 13:
            $response = "Cannot predict now.";
            break;

        case 14:
            $response = "Concentrate and ask again.";
            break;
        
        case 15:
            $response = "Don't count on it.";
            break;
        
        case 16:
            $response = "My reply is no.";
            break;
        
        case 17:
            $response = "My sources say no.";
            break;

        case 18:
            $response = "Outlook not so good.";
            break;

        case 19:
            $response = "Very doubtful.";
            break;
    }

    echo $response;

  }

magic8Ball();