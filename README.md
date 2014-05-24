datediff [![Build Status](https://travis-ci.org/dmfilipenko/datediff.svg?branch=master)](https://travis-ci.org/dmfilipenko/datediff)
========

Simple module to calculate difference between two date

Example
=====

```js
var from = new Date(2012, 8, 0,0),
 		to = new Date(2014, 0, 1, 0),
 		diff;

diff = datediff(from, to);
console.log( diff );

```
---------

```js
{
    years: 2,
    months: 7,
    days: 30
    hours: 0
    minutes: 0
    seconds: 0
}
```