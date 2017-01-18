// Create an algorithm that will reverse any string input.

function reverseString(str)
{
    return str.split('').reverse().join('');
}

reverseString("hello");