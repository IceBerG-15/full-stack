const fs = require('fs');

function isPalindrome(str) {
    const len = str.length;
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

function countPalindromes(strings) {
    let count = 0;
    strings.forEach(str => {
        if (isPalindrome(str)) {
            count++;
        }
    });
    return count;
}

fs.readFile('20-03-24\\question2\\file.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    const words = data.split(/\s+/);
    const palindromeCount = countPalindromes(words);

    console.log('Number of palindrome-type strings:', palindromeCount);
});
