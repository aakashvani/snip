const mongoose = require('mongoose')
require('dotenv').config()
mongoose.set('strictQuery', false) // for removing DeprecationWarning


// database connection
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_URL)
    console.log(
      `MongoDB Connected: ${conn.connection.host}`
    )
  } catch (error) {
    console.error(`Error:${error.message}`)
  }
}

module.exports = connectDB
