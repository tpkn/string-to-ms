# String To Milliseconds

Module that converts the string into milliseconds. Understands following macross:

| Time | Macros | Example |
| ------ | :------: | :------: |
| week | w | `7w` |
| day | d | `31d` |
| hour | h | `24h` |
| minute | m | `60m` |
| second | s | `60s` |


## Usage
```javascript
const stringToMs = require('string-to-ms');

// return 86400000ms
stringToMs('1d');

// return 1814400000ms
stringToMs('  3w  ');

// return 1371600000ms
stringToMs('1d 4d 10d 20h 1h');

// return 202147207000ms
stringToMs('2335d  0112h 12112dsds 7s');
```
