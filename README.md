# debounce-by-key
[![debounce-by-key](https://img.shields.io/npm/v/debounce-by-key.svg)]()
[![debounce-by-key](https://img.shields.io/npm/l/debounce-by-key.svg)]()

useful for employing a group of functions within a single debounce scope and/or employing a single function across a group of debounce scopes

## Installation

```sh
npm install debounce-by-key --save
```

## Usage

This module provides a single function that takes a single options arg (*optional*) and returns a `Promise` that *resolves* if the debounce state is **non-blocking**, and *rejects* if its **blocking**.

### debounce([options])
- options `{Object}`
- return: `Promise`

#### [options]
- `key` the string identifier of the debounce scope. Defaults to `''`
- `duration` the time in milliseconds of the **blocking** state. Defaults to `1000`

## Example

```javascript
const debounce = require('debounce-by-key')

const sayHi = ()=>{console.log('hello world')}


/* no-args */
debounce().then(sayHi)
debounce().then(sayHi) //⛔ will not run


/* multiple functions, single scope */
debounce({key:'say hi'}).then(() => console.log('hola mundo') )
debounce({key:'say hi'}).then(() => console.log('hello world') ) //⛔ will not run
debounce({key:'say hi'}).then(() => console.log('bonjour monde') ) //⛔ will not run


/* single function, mutliple scopes */
debounce({key:'say hi 1'}).then(sayHi)
debounce({key:'say hi 2'}).then(sayHi) //✅ will run


/* duration arg */
const d = () => debounce({key:'say hi 3', duration:1000}).then(sayHi)

d()
setTimeout(d,500) //⛔ will not run
setTimeout(d,1500) //✅ will run



```

## Tests

```sh
npm install
npm test
```

## Dependencies

None

## Dev Dependencies

- [tap](https://github.com/tapjs/node-tap): A Test-Anything-Protocol library


## License

ISC
