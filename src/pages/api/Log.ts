import type { NextApiRequest, NextApiResponse } from 'next';
import type { Formdata } from '@/app/Components/Send';
import { log } from './firebase';



export default async function Log(req:NextApiRequest,res:NextApiResponse) {
    if (req.method === 'POST') {
        const data:Formdata = req.body;
        const result = await log(data.Email, data.Password)
        res.json(result)
    }

    res.setHeader('Allow', ['POST']);
  res.status(405).json({ message: `Method ${req.method} Not Allowed` });
}