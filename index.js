const
    app = require('express')(),
    http = require('http').createServer(app),
    cors = require('cors'),
    httpPort = 10010,
    { exec } = require('child_process'),
    execute = (command, callback) => exec(command, (_, stdout) => callback(stdout))

app.use(cors())

app.get('/:data', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    const cmd = `echo -n '${req.params.data}' | qrencode -s 7 -o - --type=png --foreground=501080FF --background=FFFFFF00 | base64 -w0`
    execute(cmd, qrcode => res.end(JSON.stringify({ qrcode })))
})

http.listen(httpPort, _ => {
    console.log(`qrcodeapi listening on port \u001b[33m${httpPort}\u001b[39m`)
})
