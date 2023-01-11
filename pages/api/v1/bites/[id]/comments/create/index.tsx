import type { NextApiRequest, NextApiResponse } from 'next';
import API from "@/src/utils/axiosInstance"

const CreateComment = async (
    req: NextApiRequest,
    res: NextApiResponse
) => {
    const {
        query: { id, index },
        body,
        method,
    } = req

    switch (method) {
        case 'POST': {
            const response = await API.post(`bites/${id}/comments/${index}`, body)
            return res.status(response.status).json(response.data)
        }
        default: {
            res.setHeader('Allow', ['POST'])
            res.status(405).end(`Method ${method} Not Allowed`)
        }
    }
}

export default CreateComment