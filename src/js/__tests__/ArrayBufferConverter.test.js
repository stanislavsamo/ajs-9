import getBuffer from '../arrayBuffer/getBuffer';
import ArrayBufferConverter from '../arrayBuffer/ArrayBufferConverter';

test('should create ArrayBufferConverter for "ArrayBuffer"', () => {
  const arrayBuffer = getBuffer();
  const arrayBufferConverter = new ArrayBufferConverter(arrayBuffer);
  expect(arrayBufferConverter.buffer).toEqual(arrayBuffer);
});

test('should String "{"data":{"user":{"id":1,"name":"Mario","level":10}}}" for "ArrayBuffer"', () => {
  const arrayBuffer = getBuffer();
  const arrayBufferConverter = new ArrayBufferConverter(arrayBuffer);
  expect(arrayBufferConverter.toString()).toEqual(
    '{"data":{"user":{"id":1,"name":"Mario","level":10}}}',
  );
});
