import type { NextApiRequest, NextApiResponse } from 'next';
import type { Formdata } from '@/app/Components/Send';
import { update_task } from './firebase';



export default async function EditTask(req:NextApiRequest,res:NextApiResponse) {
    if (req.method === 'POST') {
        const data:Formdata = req.body;
        const result = update_task(data.Uid, data.id, data.Task, data.Date)
        res.json(result)
    }

    res.setHeader('Allow', ['POST']);
  res.status(405).json({ message: `Method ${req.method} Not Allowed` });
}