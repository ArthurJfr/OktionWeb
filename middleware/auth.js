export default async function({ $axios, redirect }) {
    const token = localStorage.getItem('token') || sessionStorage.getItem('token');
    const expiryDate = localStorage.getItem('expiryDate') || sessionStorage.getItem('expiryDate');
  
    if (!token || !expiryDate) {
      return redirect('/auth/login');
    }
  
    const now = new Date().getTime();
    if (now > expiryDate) {
      localStorage.removeItem('token');
      localStorage.removeItem('expiryDate');
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('expiryDate');
      return redirect('/auth/login');
    }
  
    try {
      await $axios.$get('http://localhost:4000/auth/validate-token', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
    } catch (error) {
      localStorage.removeItem('token');
      localStorage.removeItem('expiryDate');
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('expiryDate');
      return redirect('/auth/login');
    }
  }


  //middleware: 'auth'
  