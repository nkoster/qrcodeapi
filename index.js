const
    app = require('express')(),
    http = require('http').createServer(app),
    httpPort = 10000,
    { exec } = require('child_process'),
    execute = (command, callback) => {
        exec(command, (error, stdout, stderr) => { callback(stdout) })
    }

app.get('/:data', (req, res) => {
    console.log(
        new Date().toISOString(),
        req.headers['x-forwarded-for'] || req.connection.remoteAddress,
        req.params.data
    )
    res.setHeader('Content-Type', 'application/json')
    execute(
        `echo -n "https://${req.params.data}" | qrencode -s 3 -o - --type=png --foreground=000000 --background=FFFFFF | base64 -w0`,
        qrcode => {
        res.end(JSON.stringify({
            qrcode
        }))
    })
})

http.listen(httpPort, _ => {
    console.log(`qrcodeapi listening on port \u001b[33m${httpPort}\u001b[39m`)
})
