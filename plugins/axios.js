export default function({ $axios, store }) {
    $axios.onRequest(config => {
      const token = localStorage.getItem('token') || sessionStorage.getItem('token');
      if (token) {
        config.headers.common['Authorization'] = `Bearer ${token}`;
      }
    });
  
    $axios.onError(error => {
      if (error.response.status === 401) {
        localStorage.removeItem('token');
        sessionStorage.removeItem('token');
        store.dispatch('auth/logout');
      }
    });
  }
   