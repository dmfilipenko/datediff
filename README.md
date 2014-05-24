datediff [![Build Status](https://travis-ci.org/dmfilipenko/datediff.svg?branch=master)](https://travis-ci.org/dmfilipenko/datediff)
========

Simple module to calculate difference between two date

Example
=====

```js
var from = new Date(2012, 8, 0,0,10, 12),
    to = new Date(2014, 0, 1, 0, 56, 13),
    diff;

diff = datediff(from, to);
console.log( diff )

```
---------

```js
{
	years: 1,
	months: 4,
	days: 3
	hours: 2,
	minutes: 46,
	seconds: 1
}
```
