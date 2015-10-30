Kazana Config Error
=====

An example of how kazana is not reading the configuration when started outside its working directory

1. Start with `node_modules/.bin/kazana` from this directory. **The app starts on port 8000**

2. Start with `cd .. && ./kazana-config-error/node_modules/.bin/kazana --main=./kazana-config-error` **app starts on port 5000, .kazanarc is not being read**

### Expected

.kazanarc should be read
