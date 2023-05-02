export default function ({ $axios }) {
    $axios.defaults.baseURL = 'http://0.0.0.0:8080/'
    $axios.defaults.headers.common['Content-Type'] = 'application/json'
  }
  