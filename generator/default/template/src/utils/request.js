import Axios from 'axios'

export default Axios.create({
  baseURL: process.env.VUE_APP_API_URL,
})
