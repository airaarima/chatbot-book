import express from 'express'

import { Router, Request, Response } from 'express';

const app = express()

app.get('/', (req, res) => {
  res.send('Bem-vindo!')
})

const PORT = 3030

app.listen(PORT, () => `Server running on port ${PORT}`)