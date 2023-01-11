import type { NextApiRequest, NextApiResponse } from 'next';
import API from "@/src/utils/axiosInstance"

const BiteById = async (
    req: NextApiRequest,
    res: NextApiResponse
) => {
    const {
        query: { id },
        body,
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
        case 'PUT': {
            const response = await API.put(`bites/${id}`, body)
            return res.status(response.status).json(response.data)
        }
        default: {
            res.setHeader('Allow', ['GET', 'DELETE', 'PUT'])
            res.status(405).end(`Method ${method} Not Allowed`)
        }
    }
}

export default BiteById