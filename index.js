const
    app = require('express')(),
    http = require('http').createServer(app),
    httpPort = 10000,
    { exec } = require('child_process'),
    execute = (command, callback) => exec(command, (_, stdout) => callback(stdout))
    
app.get('/:data', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    const cmd = `echo -n "https://${req.params.data}" | qrencode -s 3 -o - --type=png --foreground=000000 --background=FFFFFF | base64 -w0`
    execute(cmd, qrcode => res.end(JSON.stringify({ qrcode })))
})

http.listen(httpPort, _ => {
    console.log(`qrcodeapi listening on port \u001b[33m${httpPort}\u001b[39m`)
})
