import { createServer } from 'miragejs'

createServer({
  routes() {
    this.namespace = 'api'
    this.urlPrefix = 'http://api.desafioteste.com.br'

    this.get('/tasks', () => [
      {
        id: 1,
        content:
          'Lorem ipsum dolor sit amet consecteturffdsfdfffdsfdsfdsfsdfdsfsdfdsf',
        status: 'pending',
        createdAt: '2023-03-12T17:12:52.487Z',
      },
      {
        id: 2,
        content:
          "Lorem ipsum dolor sit amet odp[aodp[saodp[as dos[adopsado[  ada[spdopado[a s[dp [pfsdf dsfdsfsdfs fdosipfiuoiotn iof jofdspo jjf;ls'",
        status: 'in_progress',
        createdAt: '2023-03-12T17:13:22.652Z',
      },
      {
        id: 3,
        content: 'Lorem ipsum dolor sit, amet consectetur ',
        status: 'completed',
        createdAt: '2023-03-12T17:16:00.619Z',
      },
      {
        id: 4,
        content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
        status: 'completed',
        createdAt: '2023-03-12T17:16:45.069Z',
      },
    ])
  },
})
