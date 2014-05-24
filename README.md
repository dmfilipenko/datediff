datediff [![Build Status](https://travis-ci.org/dmfilipenko/datediff.svg?branch=master)](https://travis-ci.org/dmfilipenko/datediff)
========

Simple module to calculate difference between two date

Example
=====

```js
var from = new Date(2014, 8, 0,0,10, 12),
 		to = new Date(2012, 0, 1, 0, 56, 13),
 		diff;

diff = datediff(from, to);
console.log( diff );

```
---------

```js
{
    years: 2,
    months: 7,
    days: 29,
    hours: 23,
    minutes: 13,
    seconds: 59
}
```
