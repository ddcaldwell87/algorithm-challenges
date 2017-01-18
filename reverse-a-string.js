function reverseString(str)
{
    var rev = str.split('').reverse().join('');
    return rev;
}

reverseString("hello");