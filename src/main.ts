import express from 'express'
import os from 'os'
import si from 'systeminformation'

const app = express()
const host = '0.0.0.0'
const port = 3001

//localhost:3000/node will return system info
app.get('/', async (req, res) => {
    res.send({
        architecture: os.arch(),
        platform: os.platform(),
        release: os.release(),
        cpu: await si.cpu(),
        mem: await si.mem()
    })
})

app.listen(port, host, () => {
    console.log(`Listening on ${host} port ${port}!`)
})