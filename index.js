const
    app = require('express')(),
    http = require('http').createServer(app),
    httpPort = 10000,
    { exec } = require('child_process'),
    execute = (command, callback) => {
        exec(command, (error, stdout, stderr) => { callback(stdout) })
    }

app.get('/:data', async (req, res) => {
    console.log(
        new Date().toISOString(),
        req.headers['x-forwarded-for'] || req.connection.remoteAddress,
        req.params.data
    )
    res.setHeader('Content-Type', 'application/json')
    execute('echo aap | qrencode -s 3 -o - --type=png --foreground=000000 --background=FFFFFF', data => {
        res.end(JSON.stringify({
            data: data
        }))
    })
})

http.listen(httpPort, _ => {
    console.log(`geoip listening on port \u001b[33m${httpPort}\u001b[39m`)
})
