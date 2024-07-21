import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Import des icônes
import { faHouse, faTrash, faEdit, faBars, faXmark, faUsers, faLayerGroup, faChartPie, faBell, faGears, faTag} from '@fortawesome/free-solid-svg-icons';

import { faGithub } from '@fortawesome/free-brands-svg-icons';

// Ajouter les icônes à la bibliothèque
library.add(faUsers, faLayerGroup, faXmark, faTrash, faEdit, faGithub, faBars, faHouse, faChartPie, faBell, faGears, faTag);

// Enregistrer le composant FontAwesome
Vue.component('font-awesome-icon', FontAwesomeIcon);
