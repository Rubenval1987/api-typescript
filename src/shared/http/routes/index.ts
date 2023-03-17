import { Router } from 'express'

const routes = Router()

routes.get(path: '/', ...handlers(request, response) => {
  return response.json(body: { message: 'Olá Dev!' })
})

export { routes }
