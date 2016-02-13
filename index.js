require('http').createServer(function (req, res) {
  res.end(require(__dirname + '/package.json').version || 'dev');
}).listen(process.env.PORT || 8888);
