const app = require('./index')
const connectDB = require('./config/database')
require('dotenv').config()

const PORT = process.env.PORT || 8001;

// Handled Uncaught Exception
process.on('uncaughtException', (err) => {
  console.log(`Error: ${err.message}`)
  console.log('Shutting down the server because of Uncaught Exception')

  process.exit(1)
})

// connecting the database for listing the port
const server = app.listen(PORT, async () => {
  try {
    await connectDB()
    console.log(`Server is Listening On Port Number:- ${PORT}`)
  } catch (error) {
    console.error(`Error:${error.message}`)
  }
})

// Handled Promise Rejection
process.on('unhandledRejection', (err) => {
  console.log(`Error: ${err.message}`)
  console.log(
    'Shutting down the server because of Unhandled Promise Rejection'
  )

  server.close(() => {
    process.exit(1)
  })
})

