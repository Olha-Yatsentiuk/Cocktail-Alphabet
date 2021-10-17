const alphabet = Array.from(Array(26)).map((e, i) => i + 65);
export const getAlphabet = () => alphabet.map((x) => String.fromCharCode(x));
