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
