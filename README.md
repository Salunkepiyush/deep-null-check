# Deep null check
[![npm version](https://badge.fury.io/js/deep-null-check.svg)](https://badge.fury.io/js/deep-null-check)


Checking JavaScript objects for null and undefined values for nested structure. It will return boolean values as an result for null/undefined check.

This module was created basically keeping JSON object in mind. The module is light-weight and dependency free. 

### Prerequisites

No prerequisites needed for this package. It is dependency free npm library

## Installation

`npm install --save deep-null-check`

## Usage:

To check null/undefined values on an object:

```
> var nullCheck = require('deep-null-check');
> var obj = {
...   name: 'value',
...   age: 1,
...   Address: {
...   city : null
...   },
...   isUndefined: undefined
... }
> console.log(nullCheck.deepNullCheck(obj));
Output : false

```

## API

<!--lint enable code-block-style-->

### `deepNullCheck(obj)`

It return boolean value depends on null/undefined values in obj

true :  IF no null/undefined exist

false : IF null/undefined exist

#### Arguments

##### `obj`

`Object` - The object refers to the JSON object.


### Requirements

No additional requirements needed for this library

## Authors

* **Piyush Salunke** - *Initial work*

## Acknowledgments

* Inspiration
* Keep learning and keep contributing 
