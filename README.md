opencensus-stackdriver-exporter-error
=====================================

- Checkout repo
- Use node `v10.15.3`
- Run `npm install`
- Run `npm start`

To see the error logged to the console (it doesn't show up by default), I've had to change the logger to be `console` in the [`stackdriver-cloudtrace.ts` file](https://github.com/census-instrumentation/opencensus-node/blob/master/packages/opencensus-exporter-stackdriver/src/stackdriver-cloudtrace.ts#L39).