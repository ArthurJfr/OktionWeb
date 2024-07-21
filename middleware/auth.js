export default async function ({ redirect, $axios }) {
    if (process.client) {
      console.log('Middleware auth: Checking token...');
      const token = localStorage.getItem('token');
      const expiryDate = localStorage.getItem('expiryDate');
  
      if (!token || !expiryDate) {
        console.log('Middleware auth: No token or expiry date found, redirecting to login.');
        return redirect('/auth/login');


      }
  
      const now = new Date().getTime();
      if (now > expiryDate) {
        console.log('Middleware auth: Token expired, redirecting to login.');
        localStorage.removeItem('token');
        localStorage.removeItem('expiryDate');
        return redirect('/auth/login');
      }
  
      try {
        console.log('Middleware auth: Validating token...');
        await $axios.$get('http://localhost:4000/auth/validate-token');
        console.log('Middleware auth: Token is valid.');
      } catch (error) {
        console.log('Middleware auth: Token validation failed, redirecting to login.');
        localStorage.removeItem('token');
        localStorage.removeItem('expiryDate');
        return redirect('/auth/login');
      }
    }
  }
  