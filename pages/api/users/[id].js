import dbConnect from '@/helpers/dbConnect'

import User from '@/database/models/User'

const api = async (req, res) => {
  await dbConnect()

  if(req.method == 'GET') {
    const user = await User.findOne({ discordId: req.query.id }).lean()

    if(user) {
      return res.status(200).json(user)
    } else {
      return res.status(400).json({ error: 'no user found' })
    }
  }
}

export default api