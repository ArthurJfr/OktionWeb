export default function({ store, redirect }) {
    if (process.client) {
      const token = localStorage.getItem('token') || sessionStorage.getItem('token');
      if (token) {
        return redirect('/dashboard/overview');
      }
    }
  }
  