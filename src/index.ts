import server from './server'

const host = process.env.HOST || 'http://localhost'
const port = parseInt(process.env.PORT || '3000')
server.listen(port, () => console.log(`Server listening on ${host}:${port}`))
