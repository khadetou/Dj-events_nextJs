const { events } = require('./data.json')
export default function handler(req, res) {
  const { id } = req.query
  const evt = events.filter((ev) => ev.id === id)
  if (req.method === 'GET') {
    res.status(200).json(evt)
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).json({ message: `Method ${req.method} is not allowed` })
  }
}
