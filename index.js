const express = require('express')

const port = process.env.PORT || 3000
const app = express()

app.get('/api/book/1.0/get', (req, res) => {
    res.send('<h1><marquee direction=right>Hello from Express path / on Now 2.0!</marquee>'+process.env.MY_VARIABLE+'</h1>')
    res.end()
})

app.listen(port, err => {
    if (err) throw err
    console.log(`> Ready On Server http://localhost:${port}`)
})