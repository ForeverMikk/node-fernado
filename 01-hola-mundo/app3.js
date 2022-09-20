console.log('INICIO');

setTimeout(() => {
    console.log('primer time out');
}, 2000);

setTimeout(() => {
    console.log('segundo time out');
}, 0);

setTimeout(() => {
    console.log('tercer time out');
}, 0);

console.log('FIN');