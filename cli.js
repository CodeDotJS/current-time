#!/usr/bin/env node

'use strict';

const curt = require('./index.js');

curt('India').then(user => {
	console.log(user);
});
