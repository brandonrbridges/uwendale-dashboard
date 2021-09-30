// Modules
import mongoose from 'mongoose'

// Variables
const MONGO_URI = process.env.MONGO_URI

if(!MONGO_URI) throw new Error('Please define the MONGO_URI environment variable inside .env.local')

let cached = global.mongoose

if(!cached) cached = global.mongoose = { connection: null, promise: null }

async function dbConnect() {
  if(cached.connection) {
    return cached.connection
  }

  if(!cached.promise) {
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      bufferCommands: false,
    }

    cached.promise = mongoose.connect(MONGO_URI, options).then(mongoose => { return mongoose })
  }

  cached.connection = await cached.promise

  return cached.connection
}

export default dbConnect