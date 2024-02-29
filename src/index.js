/* eslint-disable no-console */
import './css/style.css';
import Daemon from './js/Math/Daemon';
import Magician from './js/Math/Magician';
import ArrayBufferConverter from './js/arrayBuffer/ArrayBufferConverter';
import getBuffer from './js/arrayBuffer/getBuffer';

const daemon = new Daemon('Daemon');
daemon.stoned = true;
daemon.attack = 2;

console.log(daemon.attack);

const magician = new Magician('Magician');
magician.attack = 2;
daemon.stoned = false;

console.log(magician.attack);

const arrayBuffer = getBuffer();
const converter = new ArrayBufferConverter(arrayBuffer);

console.log(JSON.parse(converter.toString()));
