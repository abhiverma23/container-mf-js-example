import { mount as ic01Mount } from 'ic01/InnerContainer01';
import { mount as ic02Mount } from 'ic02/InnerContainer02';

console.log('Inside contaier');
console.log('Root container is in ' + process.env.NODE_ENV + ' mode');

ic01Mount(document.querySelector('#ic01'));
ic02Mount(document.querySelector('#ic02'));
