const sum = (num1,num2) => {
     return num1+num2;
 }

test('sum(1,2) is 3', () => {
     expect(sum(1,2)).toBe(3);
})
test('sum(1,2) is not equal 3', () => {
     expect(sum(1,2)).not.toBe(4);
})

console.log(sum(1,2));
