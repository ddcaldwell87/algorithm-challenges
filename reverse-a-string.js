// Create an algorithm that will reverse any string input.

function reverseString(str)
{
    var rev = str.split('').reverse().join('');
    return rev;
}

reverseString("hello");