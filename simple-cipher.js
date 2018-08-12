class Cipher {
    constructor(key) {
        if (!key && key !== '') {
            this.key = makeKey(100);
        } else if (hasUpperCase(key) || hasNumber(key) || key === '') {
            throw new Error('Bad key');
        } else {
            this.key = key;
        }

        function hasNumber(myString) {
            return /\d/.test(myString);
        };

        function hasUpperCase(str) {
            return str.toLowerCase() != str;
        };

        function makeKey(keySize) {
            let text = "";
            const possible = "abcdefghijklmnopqrstuvwxyz";

            for (let index = 0; index < keySize; index += 1) {
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            }

            return text;
        }
    }

    encode(text) {
        let self, i;

        self = this;
        i = 0;

        return text.replace(/[^a-z]/g, '').replace(/[a-z]/g, letter => String.fromCharCode((((letter.charCodeAt(0) - 97) + ((self.key[i++ % self.key.length].charCodeAt(0) - 97))) % 26 + 97)));
    }

    decode(text) {
        let self, i;

        self = this;
        i = 0;

        return text.replace(/[^a-z]/g, '').replace(/[a-z]/g, letter => String.fromCharCode((((letter.charCodeAt(0) - 97) + (26 - (self.key[i++ % self.key.length].charCodeAt(0) - 97))) % 26 + 97)));
    }
}

export default Cipher;