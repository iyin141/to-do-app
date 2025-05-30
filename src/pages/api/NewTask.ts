import type { NextApiRequest, NextApiResponse } from 'next';
import { Log_task } from './firebase';
import { Formdata } from '@/app/Components/Send';


export default async function NewTask(req:NextApiRequest,res:NextApiResponse) {
    if (req.method === 'POST') {
        const data: Formdata = req.body;
        const result = await Log_task(data.Task,data.Date,data.Uid)
        res.json(result)
    }

    res.setHeader('Allow', ['POST']);
  res.status(405).json({ message: `Method ${req.method} Not Allowed` });
}