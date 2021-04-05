import { axiosInstance } from 'boot/axios.js'

export async function query(ctx, queryParams = {}) {
  try {
    const response = await axiosInstance({
      url: '/devtest',
      params: queryParams,
      method: 'GET'
    })
    return response
  } catch (e) {
    return e
  }
}