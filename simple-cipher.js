class Cipher {
    constructor(key) {
        if (isOnlyLowerCase(key) || key === '') {
            throw new Error('Bad key');
        } else if (!key) {
            this.key = makeKey(100);
        } else {
            this.key = key;
        }
    }

    encode(text) {
        return encodeOrDecode(text, false, this.key);
    }

    decode(text) {
        return encodeOrDecode(text, true, this.key);
    }
}

function encodeOrDecode(text, decode, key) {
    return text
        .replace(/[^a-z]/g, '')
        .replace(/[a-z]/g, (letter, index) => {
            let charCode = letter.charCodeAt(0) - 97;
            let offSet = key[index % key.length].charCodeAt(0) - 97;
            let calculatedOffSet = decode ? 26 - offSet : offSet;
            return String.fromCharCode(((charCode + calculatedOffSet) % 26 + 97));
        });
}

function isOnlyLowerCase(str) {
    return /[^(a-z)]/.test(str);
};

function makeKey(keySize) {
    let text = "";
    const possible = "abcdefghijklmnopqrstuvwxyz";

    for (let index = 0; index < keySize; index += 1) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
}

export default Cipher;