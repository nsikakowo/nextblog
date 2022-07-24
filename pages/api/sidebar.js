import data from "./data"


export default function handler(req, res) {
    const {Sidebar} = data;

    if(Sidebar) return res.status(200).json(Sidebar)
    return res.status(404).json({error: 'data not found'})
  }