import type { NextApiRequest, NextApiResponse } from 'next';
import { Fetch_task } from './firebase';




export default async function FetchTask(req:NextApiRequest,res:NextApiResponse) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', ['POST']);
       res.status(405).json({ message: `Method ${req.method} Not Allowed` });
    }
        const {uid}= req.body;
        const result = await Fetch_task(uid)
        res.json(result)
   
}