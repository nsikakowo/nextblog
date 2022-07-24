import data from "./data"


export default function handler(req, res) {
    const {Slider} = data;

    if(Slider) return res.status(200).json(Slider)
    return res.status(404).json({error: 'data not found'})
  }