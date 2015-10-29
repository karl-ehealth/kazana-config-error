Kazana Error Example
=====

An example of an error in kazana, which gives a stack trace that's hard to interpret

1. `npm install`

2. `npm start`

3. go to [http://localhost:8000/error](http://localhost:8000/error) in the browser

4. Check the stack trace in your console (example below)

## While putting together this example, i saw that if i trigger the same error again right away after, i get the expected stack trace. Why can't i just get that right away?

### Example stack trace

```
Debug: internal, implementation, error
    Error: Uncaught, unspecified "error" event. ([object Object])
    at EventEmitter.emit (events.js:144:17)
    at EventEmitter.<anonymous> (/Users/karl/Development/ehealth/kazana-error-example/node_modules/kazana/node_modules/kazana-server/node_modules/npmlog/log.js:159:22)
    at EventEmitter.<anonymous> (/Users/karl/Development/ehealth/kazana-error-example/node_modules/kazana/node_modules/kazana-server/node_modules/npmlog/log.js:230:21)
    at logger (/Users/karl/Development/ehealth/kazana-error-example/node_modules/kazana/node_modules/kazana-server/lib/plugins/logger.js:46:9)
    at emitOne (events.js:77:13)
    at emit (events.js:169:7)
    at readableAddChunk (_stream_readable.js:146:16)
    at Readable.push (_stream_readable.js:110:10)
    at Transform.push (_stream_transform.js:128:32)
    at internals.Squeeze._transform (/Users/karl/Development/ehealth/kazana-error-example/node_modules/kazana/node_modules/kazana-server/node_modules/good-squeeze/lib/squeeze.js:31:14)
```

### Expected

Something pointing to an error in index.js
