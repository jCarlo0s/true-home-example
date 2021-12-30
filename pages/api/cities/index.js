import axios from 'axios';

/**
 * Call the api to retrieve the destination array
 * @returns {Promise<AxiosResponse<any>>}
 */
const retrieveCities = () => {
    return axios.get(`${process.env.API_HOST}/api/cities/`)
}

/**
 * Internal API endpoint to retrieve the cities from the main api host
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
const getCities = async (req, res) => {
    try {
        const response = await retrieveCities();
        res.status(200).json({cities: response.data})
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: "can't reach the api host" })
    }
}

export default getCities;