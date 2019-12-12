const express = require('express')

const app = express()

app.get('/usuario', (req, res) => {
    res.json({
        ok: true,
        message: 'Todo bien con el servidor'
    })
})

module.exports = app