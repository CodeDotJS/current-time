# current-time
[![Build Status](https://travis-ci.org/CodeDotJS/current-time.svg?branch=master)](https://travis-ci.org/CodeDotJS/current-time)

> :alarm_clock: Get current date and time in descriptive format

## Install

```
$ npm install --save current-time
```


## Usage

__`›› 1`__

```js
const currenTime = require('current-time');

currenTime('Perl').then(data => {
	console.log(data);
	/*
	{
		data: 'The current time in Perl, Saarland, Germany (CEST) is 9pm on Thursday the 15th of September, 2016.'
	}
	/*
});
```

__`›› 2`__

```js
const currenTime = require('current-time');

currenTime('If its 4pm in London what is the time in Boston').then(data => {
	console.log(data);
	/*
	{
		data: 'It is 11am on Thursday the 15th of September, 2016 in Boston, Massachusetts, United States (EDT) when it is 4pm on Thursday the 15th of September, 2016 in London, England, United Kingdom (BST)'
	}
	*/
});
```
## API

### currenTime(info)

#### info

Type: `string`

### `kinds of info that can be supplied :`

#### Current time in a city

- `What is the time in New York`

- `Time in Belgrade`


#### Time conversions between cities in different timezones

- `What is the time in Kathmandu Nepal when it is 7pm in New York USA`

- `Whats the time in Chicago when its 8pm Eastern Time`

- `If its 4pm in London what is the time in Boston`


#### Time conversions between cities in different timezones on a particular date

- `What is the time in Sao Paolo when it is 6pm on the 2nd of June in California`

- `What time is it in Paris when it is 5-April-2015 in Sydney at 2am`

- `When its midday on the 9th of September Pacific Time, whats the time in Miami`

#### Daylight saving information for a city

- `When does daylight saving time begin in Auckland`

- `DST time in London`

#### Daylight saving information for a city for a specific year

- `When does daylight saving time begin in New York in 2016`


## Related

- [current-time-cli](https://github.com/CodeDotJS/current-time-cli) : CLI tool to find current time in descriptive format.

### NOTE

__››__ __`Data scrapped from` [`naturaldateandtime`](http://www.naturaldateandtime.com/)__

## License

MIT © [Rishi Giri](https://github.com/CodeDotJS)
