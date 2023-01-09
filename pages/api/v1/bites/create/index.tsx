import type { NextApiRequest, NextApiResponse } from 'next';
import API from "../../../axiosInstance"

const CreateBite = async (
    req: NextApiRequest,
    res: NextApiResponse
) => {
    const { method, body } = req

    switch (method) {
        case 'POST': {
            const response = await API.post('bites/create', body)
            return res.status(response.status).json(response.data)
        }
        default: {
            res.setHeader('Allow', ['POST'])
            res.status(405).end(`Method ${method} Not Allowed`)
        }
    }
}

export default CreateBite