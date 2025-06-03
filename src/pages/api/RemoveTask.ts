import type { NextApiRequest, NextApiResponse } from 'next';
import { delete_task } from './firebase';




export default async function RemoveTask(req:NextApiRequest,res:NextApiResponse) {
    if (req.method !== 'POST') {
       
          res.setHeader('Allow', ['POST']);
        res.status(405).json({ message: `Method ${req.method} Not Allowed` });
    }
    const { uid } = req.body;
        const { id } = req.body
        
        const result = await delete_task(uid, id)
        console.log(result)
        res.json(result)
  
}