import type { NextApiRequest, NextApiResponse } from 'next';
import API from "../../../axiosInstance"

const TransactionByBite = async (
    req: NextApiRequest,
    res: NextApiResponse
) => {
    const { method, query: { id } } = req

    switch (method) {
        case 'GET': {
            const response = await API.get(`transactions/bites/${id}`)
            return res.status(response.status).json(response.data)
        }
        default: {
            res.setHeader('Allow', ['GET'])
            res.status(405).end(`Method ${method} Not Allowed`)
        }
    }
}

export default TransactionByBite