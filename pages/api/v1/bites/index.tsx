import type { NextApiRequest, NextApiResponse } from 'next';
import API from "@/src/utils/axiosInstance"

const Bites = async (
    req: NextApiRequest,
    res: NextApiResponse
) => {
    const { method } = req

    switch (method) {
        case 'GET': {
            const response = await API.get('bites')
            return res.status(response.status).json(response.data)
        }
        default: {
            res.setHeader('Allow', ['GET'])
            res.status(405).end(`Method ${method} Not Allowed`)
        }
    }
}

export default Bites