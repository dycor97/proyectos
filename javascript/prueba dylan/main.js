// mostrar verdadero o falso si una palabra es un palindromo

const test_data = 'a';

const isPalindrome = data => {
    let j = 0;
    for(let i = data.length - 1; i >= Math.ceil((data.length / 2)); i--){
        if(data[j] !== data[i]) {
            return false;
        }
        j++;
    }
    return true;
}

console.log(`${test_data} is palindrome: ${isPalindrome(test_data)}`);