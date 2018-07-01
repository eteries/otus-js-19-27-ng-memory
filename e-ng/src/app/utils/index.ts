export const spliceRandom = function(arr: any[], quantity: number) {
    let i = 0;
    const source = [...arr];
    const result = [];
    while(i < quantity && source.length) {
        result.push(...source.splice(Math.floor(Math.random() * source.length), 1));
        i++;
    }
    return result;
};

export const generateId = function () {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return '_' + Math.random().toString(36).substr(2, 9);
};