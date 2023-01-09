import type { NextApiRequest, NextApiResponse } from 'next';
import API from "../../../axiosInstance"

const BiteById = async (
    req: NextApiRequest,
    res: NextApiResponse
) => {
    const {
        query: { id },
        method,
    } = req

    switch (method) {
        case 'GET': {
            const response = await API.get(`bites/${id}`)
            return res.status(response.status).json(response.data)
        }
        case 'DELETE': {
            const response = await API.delete(`bites/${id}`)
            return res.status(response.status).json(response.data)
        }
        default: {
            res.setHeader('Allow', ['GET', 'DELETE'])
            res.status(405).end(`Method ${method} Not Allowed`)
        }
    }
}

export default BiteById