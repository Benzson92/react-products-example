import { numberWithCommas } from './numberWithCommas';

it('numbers with commas', () => {
  expect(numberWithCommas('0')).toEqual('0');
  expect(numberWithCommas('0.123456')).toEqual('0.123456');
  expect(numberWithCommas('10')).toEqual('10');
  expect(numberWithCommas('10.123456')).toEqual('10.123456');
  expect(numberWithCommas('100')).toEqual('100');
  expect(numberWithCommas('100.123456')).toEqual('100.123456');
  expect(numberWithCommas('1000')).toEqual('1,000');
  expect(numberWithCommas('1000.123456')).toEqual('1,000.123456');
  expect(numberWithCommas('10000')).toEqual('10,000');
  expect(numberWithCommas('10000.123456')).toEqual('10,000.123456');
  expect(numberWithCommas('100000')).toEqual('100,000');
  expect(numberWithCommas('100000.123456')).toEqual('100,000.123456');
  expect(numberWithCommas('1000000')).toEqual('1,000,000');
  expect(numberWithCommas('1000000.123456')).toEqual('1,000,000.123456');
  expect(numberWithCommas('10000000')).toEqual('10,000,000');
  expect(numberWithCommas('10000000.123456')).toEqual('10,000,000.123456');
  expect(numberWithCommas('100000000')).toEqual('100,000,000');
  expect(numberWithCommas('100000000.123456')).toEqual('100,000,000.123456');
});
