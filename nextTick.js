function asyncFunc(i) {
    console.log('start ',i)
    process.nextTick(console.log, i);
}
const range = n => [...Array(n).keys()];
const arr = range(10)
arr.map(asyncFunc);
console.log('next function');
setTimeout(() => {
console.log('next async function');
}, 0);
