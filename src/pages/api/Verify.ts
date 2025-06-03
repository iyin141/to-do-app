import type { NextApiRequest, NextApiResponse } from 'next';
import { verify} from './firebase';



export default async function Verify(req:NextApiRequest,res:NextApiResponse) {
    if (req.method !== 'POST') {
            res.setHeader('Allow', ['POST']);
            res.status(405).json({ message: `Method ${req.method} Not Allowed` });
    }
        const {token} = req.body;
        const result = await verify(token)
        res.json(result)

}