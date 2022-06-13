/* eslint-disable */
import { AxiosInstance } from 'axios'
import mockServer from 'axios-mock-server'
import mock0 from './users/register'

export default (client?: AxiosInstance) => mockServer([
  {
    path: '/users/register',
    methods: mock0
  }
], client, '')
