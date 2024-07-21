export default function ({ $axios, redirect }) {
  // Intercepter les requêtes pour ajouter le token
  $axios.onRequest(config => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.common['Authorization'] = `Bearer ${token}`;
    }
    return config;
  });

  // Intercepter les réponses pour gérer les erreurs globales
  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status);
    if (code === 401 || code === 403) {
      // Supprimer le token et rediriger vers la page de login si l'utilisateur n'est pas autorisé
      localStorage.removeItem('token');
      localStorage.removeItem('expiryDate');
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('expiryDate');
      redirect('/auth/login');
    }
    return Promise.reject(error);
  });
}
