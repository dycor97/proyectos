let userName = 'Dyl';
let userQuestion = 'Am i gonna be rich? ';
let eightBall = '';
let randomNumber = Math.floor(Math.random() * 8);

switch (randomNumber) {
    case 1:
        eightBall = 'It is certain';
        break;
    
    case 2:
        eightBall = 'It is decidedly so';
        break;
    
    case 3:
        eightBall = 'Reply hazy, try again';
        break;

    case 4:
        eightBall = 'Cannot predict now';
        break;
        
    case 5:
        eightBall = 'My sources say no';
        break;
    
    case 6:
        eightBall = 'Outlook not so good';
        break;
    
    case 7:
        eightBall = 'Don\'t count on it';
        break;

    case 8:
        eightBall = 'Signs point to yes';
        break;

    default:
        eightBall = 'Try again i\'m broke';
        break;
}
console.log(`${userName} ask: ${userQuestion}`);
console.log(`Your destiny says: ${eightBall}`);