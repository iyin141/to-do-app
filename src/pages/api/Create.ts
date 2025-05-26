import type { NextApiRequest, NextApiResponse } from 'next';
import type { Formdata } from '@/app/Components/Send';
import { sign } from './firebase';


export default async function Create(req:NextApiRequest,res:NextApiResponse) {
    if (req.method === 'POST') {
        const data:Formdata = req.body;
        const result = await sign(data.Email,data.Password,data.Firstname)
        res.json(result)
    }

    res.setHeader('Allow', ['POST']);
  res.status(405).json({ message: `Method ${req.method} Not Allowed` });
}