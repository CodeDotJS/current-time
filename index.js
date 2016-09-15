'use strict';

const got = require('got');
const Promise = require('pinkie-promise');

const fillSpace = spaces => {
	return spaces.split(' ').join('_');
};

module.exports = place => {
	if (typeof place !== 'string') {
		return Promise.reject(new Error('place required'));
	}

	const url = `http://www.naturaldateandtime.com/q/${fillSpace(place)}`;

	return got(url).then(res => {
		const $ = res.body;
		return {
			data: $.split('<span ng-bind="answer" ng-init="answer=')[1].split('"></span>')[0].replace(/'/g, '')
		};
	}).catch(err => {
		if (err) {
			err.message = 'Something went wrong';
		}
		return err.message;
	});
};
