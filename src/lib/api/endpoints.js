const endpoints = {
    login: {url: '/login', method: 'POST'},
    register:{url:'/register', method:'POST'},
    getCars:{url:'/car/all', method:'GET'},
    getUsers:{url:'/users/all', method:'GET'},
    verify: { url: '/users/verify', method: 'PUT' },
    forgotPassword: { url: '/forgot-password-request', method: 'POST' },
    resetPassword: { url: '/users/forgot-password', method: 'PUT' },

  }
  
  export default endpoints