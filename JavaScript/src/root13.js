/*
How can you tell an extrovert from an introvert at NSA? Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.

I found this joke on USENET, but the punchline is scrambled. Maybe you can decipher it? According to Wikipedia, ROT13 (http://en.wikipedia.org/wiki/ROT13) is frequently used to obfuscate jokes on USENET.

Hint: For this task you're only supposed to substitue characters. Not spaces, punctuation, numbers etc. Test examples:

rot13("EBG13 rknzcyr.") == "ROT13 example.";
rot13("This is my first ROT13 excercise!" == "Guvf vf zl svefg EBG13 rkprepvfr!"
*/

function rot13(str) {
    const isBigLetter = code => 64 < code && code < 91;
    const isSmallLetter = code => 96 < code && code < 123;

    return str.split('').map(char => {
        const code = char.charCodeAt(char);

        let encodedCode;
        if(isBigLetter(code))
            encodedCode= isBigLetter(code + 13) ? code + 13 : code - 13;
        else if(isSmallLetter(code))
            encodedCode = isSmallLetter(code + 13) ? code + 13 : code - 13;

        return encodedCode ? String.fromCharCode(encodedCode) : char;
    }).join('');
}