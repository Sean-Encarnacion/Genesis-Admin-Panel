import axios from 'axios'

const API_URL = 'http://localhost:5000/api/'

//ping
const pingServer =  async () => {
  const response = await axios.get('http://localhost:5000/ping')

  if (response.data) {
    console.log(response.data)
  }

  return response.data
}

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + 'users/login', userData)

  if(!!response.data.token) {
    const queryString = Object.keys(response.data).map(key => key + '=' + response.data[key]).join('&');
    console.log(queryString)
    window.location = "http://localhost:2000/home" + "?" + queryString;
  }
}

//get reservations
const getReservation = async(id) => {
  const response = await axios.get(API_URL + 'reservations/' + id)

  if (!!response.data) {
    return response.data
  } else {
    return false
  }

}

//get payment
const getPayment = async(id) => {
  const response = await axios.get(API_URL + 'pop/' + id)

  if (!!response.data) {
    return response.data
  } else {
    return false
  }
}

const api = {
  pingServer,
  login,
  getReservation,
  getPayment
}

export default api