import axios from 'axios';

/**
 * Call the api to retrieve the availability from destination id
 * @returns {Promise<AxiosResponse<any>>}
 */
const checkAvailability = (destinationId) => {
    return axios.get(`${process.env.API_HOST}/api/availability/?destination=${destinationId}`)
}

/**
 * Internal API endpoint to retrieve the availability from destination id
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
const getAvailability = async (req, res) => {
    try {
        const { destinationId } = req.query;
        if (destinationId) {
            const response = await checkAvailability(destinationId);
            res.status(200).json({availability: response.data})
        } else {
            res.status(400).json({ error: 'the destination id is required' })
        }
    } catch (error) {
        return res.status(500).json({ error: "can't reach the api host" })
    }
}

export default getAvailability;