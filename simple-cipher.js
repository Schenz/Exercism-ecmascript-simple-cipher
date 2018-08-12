class Cipher {
    constructor() {
        this.key = this.makeKey(100);
    }

    makeKey(keySize) {
        let text = "";
        const possible = "abcdefghijklmnopqrstuvwxyz";

        for (let index = 0; index < keySize; index += 1) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }

        return text;
    }

    encode() {

    }
}

export default Cipher;