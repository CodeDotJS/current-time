import test from 'ava';
import fn from './';

test(async t => {
	const currt = await fn('What time is it in Paris when it is 5-April-2015 in Sydney at 2am');

	t.is(currt.data, 'It is 5pm on Saturday the 4th of April, 2015 in Paris, &#206;le-de-France, France (CEST) when it is 2am on Sunday the 5th of April, 2015 in Sydney, New South Wales, Australia (AEST)');
});
