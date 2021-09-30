const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  discordId: {
    type: String,
    unique: true
  },
  username: {
    type: String
  },
  discriminator: {
    type: String
  },
  experience: {
    default: 0,
    type: Number
  },
  level: {
    default: 0,
    type: Number
  },
  balance: {
    default: 0,
    type: Number
  },
  summonerName: {
    default: null,
    type: String
  }
}, { timestamps: true })

mongoose.models = {}

export default mongoose.models.User || mongoose.model('User', schema)