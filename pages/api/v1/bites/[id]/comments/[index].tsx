import type { NextApiRequest, NextApiResponse } from 'next';
import API from "@/src/utils/axiosInstance"

const Comment = async (
    req: NextApiRequest,
    res: NextApiResponse
) => {
    const {
        query: { id, index },
        method,
    } = req

    switch (method) {
        case 'DELETE': {
            const response = await API.delete(`bites/${id}/comments/${index}`)
            return res.status(response.status).json(response.data)
        }
        default: {
            res.setHeader('Allow', ['DELETE'])
            res.status(405).end(`Method ${method} Not Allowed`)
        }
    }
}

export default Comment