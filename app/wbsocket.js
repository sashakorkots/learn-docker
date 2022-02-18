import { WebSocketServer } from 'ws'

export default async (expressServer) => {
  const wss = new WebSocketServer({
    port: 3001,
    path: '/'
  });
  wss.on('connection', (ws) => {
      ws.on('message', (message) => {
        wss.clients.forEach((client) => client.send(message.toString()))
      });
  })

  return wss;
};