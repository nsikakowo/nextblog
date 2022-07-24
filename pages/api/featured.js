import data from "./data";

export default function handler(req, res){
    const {Featured} = data;

    if(Featured) return res.status(200).json(Featured);
    return res.status(404).json({error: "Data not found"});
}