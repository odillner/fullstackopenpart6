import axios from 'axios'

import {API_URL} from '../utils/config'
import logger from '../utils/logger'

const extension = 'anecdotes/'
const baseUrl = API_URL + extension

export default {
    getAll: async () => {
        try {
            logger.info(extension, 'Fetching anecdotes')

            const res = await axios.get(baseUrl)

            logger.info(extension, 'Anecdotes fetched', res)

            return res.data
        } catch (err) {
            logger.error(extension, err)
            throw err
        }
    },
    create: async (newAnecdote) => {
        try {
            logger.info(extension, 'Creating anecdote', newAnecdote)

            const res = await axios.post(baseUrl, newAnecdote)

            logger.info(extension, 'Anecdote created', res)

            return res.data
        } catch (err) {
            logger.error(extension, err)
            throw err
        }
    },
    getById: async (id) => {
        try {
            logger.info(extension, 'Fetching anecdote', id)

            const res = await axios.get(baseUrl + id)

            logger.info(extension, 'Anecdote fetched', res)

            return res.data
        } catch (err) {
            logger.error(extension, err)
            throw err
        }
    },
    remove: async (id) => {
        try {
            logger.info(extension, 'Deleting anecdote', id)

            const res = await axios.delete(baseUrl + id)

            logger.info(extension, 'Anecdote deleted', res)

            return res.data
        } catch (err) {
            logger.error(extension, err)
            throw err
        }
    },
    update: async (id, newAnecdote) => {
        try {
            logger.info(extension, 'Updating anecdote', id, newAnecdote)

            const res = await axios.put(`${baseUrl}${id}`, newAnecdote)

            logger.info(extension, 'Anecdote updated', res)

            return res.data
        } catch (err) {
            logger.error(extension, err)
            throw err
        }
    },
}