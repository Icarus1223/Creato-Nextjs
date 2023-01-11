import type { NextApiRequest, NextApiResponse } from 'next';
import API from "@/src/utils/axiosInstance"

const TransactionByUser = async (
    req: NextApiRequest,
    res: NextApiResponse
) => {
    const { method, query: { id } } = req

    switch (method) {
        case 'GET': {
            const response = await API.get(`transactions/users/${id}`)
            return res.status(response.status).json(response.data)
        }
        default: {
            res.setHeader('Allow', ['GET'])
            res.status(405).end(`Method ${method} Not Allowed`)
        }
    }
}

export default TransactionByUser