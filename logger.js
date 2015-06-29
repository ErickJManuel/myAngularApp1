module.exports =  function (req, res, next) {
    // date converted to milliseconds with '+'
    var start = +new Date();  
    // writable stream accessible from process.stdout
    var stream = process.stdout;

    var url = req.url;
    // request method 'get', 'post', 'head' etc.
    var method = req.method;
    // response object is an event emitter
    res.on('finish', function () {
        var duration = +new Date() - start;
        var message = method + " to " + url +
        // two line breaks for easy reading output
        "\ntook" + duration + " ms \n\n";
     stream.write(message);
    });

    next();
}
