const { StackdriverTraceExporter } = require('@opencensus/exporter-stackdriver');
const exporter = new StackdriverTraceExporter({ projectId: "testing-iap" });
const tracing = require('@opencensus/nodejs');

tracing.registerExporter(exporter).start({
	logLevel: 4
});

const http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('Hello World!');
    res.end();
}).listen(8080);
