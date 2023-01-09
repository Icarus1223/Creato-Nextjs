import type { NextApiRequest, NextApiResponse } from 'next';
import API from "../../axiosInstance"

const getBiteById = async (
    req: NextApiRequest,
    res: NextApiResponse
) => {
    const {
        query: { id },
        method,
    } = req

    switch (method) {
        case 'GET': {
            const response = await API.get(`/api/v1/bites/${id}`)
            return res.status(response.status).json(response.data)
        }
        default: {
            res.setHeader('Allow', ['GET'])
            res.status(405).end(`Method ${method} Not Allowed`)
        }
    }
}

export default getBiteById