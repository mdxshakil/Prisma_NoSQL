import { Server } from 'http'
import app from './app'
import { errorLogger, logger } from './shared/logger'

process.on('uncaughtException', error => {
  errorLogger.error(error)
  process.exit(1)
})

let server: Server

async function bootstrap() {
  try {
    server = app.listen(5000, () => {
      logger.info(`Server is running on 5000`)
    })
  } catch (error) {
    errorLogger.error('Faled to conect', error)
  }
  //terminate server gracefully after any unhandled rejection occurs
  process.on('unhandledRejection', error => {
    if (server) {
      server.close(() => {
        errorLogger.error(error)
        process.exit(1)
      })
    } else {
      process.exit(1)
    }
  })
}

bootstrap()

process.on('SIGTERM', () => {
  logger.info('SIGTERM is received')
  if (server) {
    server.close()
  }
})
