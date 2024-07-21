export default async function ({ redirect, $axios }) {
  if (process.client) {
    const token = localStorage.getItem('token');
    const expiryDate = localStorage.getItem('expiryDate');

    if (token && expiryDate) {
      const now = new Date().getTime();
      if (now < expiryDate) {
        try {
          await $axios.$get('http://localhost:4000/auth/validate-token', {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          return redirect('/dashboard/overview'); // Rediriger vers le tableau de bord ou une autre page protégée
        } catch (error) {
          
        }
      }
    }
  }
}
