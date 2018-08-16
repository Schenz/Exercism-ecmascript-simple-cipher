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

    encodeOrDecode(text, decode) {
        let self = this;

        return text
            .replace(/[^a-z]/g, '')
            .replace(/[a-z]/g, (letter, index) => {
                let charCode = letter.charCodeAt(0) - 97;
                let offSet = self.key[index % self.key.length].charCodeAt(0) - 97;
                let calculatedOffSet = decode ? 26 - offSet : offSet;
                return String.fromCharCode(((charCode + calculatedOffSet) % 26 + 97));
            });
    }

    encode(text) {
        return this.encodeOrDecode(text, false);
    }

    decode(text) {
        return this.encodeOrDecode(text, true);
    }
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