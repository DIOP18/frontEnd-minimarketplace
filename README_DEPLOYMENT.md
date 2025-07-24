# Interface de Messagerie - React + Vite + Tailwind CSS

Une interface de messagerie moderne et responsive construite avec React, Vite et Tailwind CSS.

## 🚀 Fonctionnalités

- **Liste des messages** avec aperçu et statut de lecture
- **Affichage détaillé** des messages avec informations de l'expéditeur
- **Composition de nouveaux messages** avec formulaire intuitif
- **Réponse rapide** aux messages existants
- **Recherche** dans les messages et expéditeurs
- **Interface responsive** adaptée aux écrans desktop et mobile
- **Indicateurs visuels** pour les messages non lus
- **Avatars** avec initiales automatiques
- **Formatage des dates** en français

## 🛠️ Technologies Utilisées

- **React 19** - Framework JavaScript
- **Vite** - Outil de build rapide
- **Tailwind CSS** - Framework CSS utilitaire
- **shadcn/ui** - Composants UI modernes
- **Lucide React** - Icônes
- **date-fns** - Manipulation des dates

## 📦 Installation et Démarrage

### Prérequis
- Node.js (version 18 ou supérieure)
- pnpm (recommandé) ou npm

### Installation
```bash
# Cloner le projet
git clone <votre-repo>
cd messagerie-frontend

# Installer les dépendances
pnpm install
# ou
npm install

# Démarrer le serveur de développement
pnpm run dev --host
# ou
npm run dev -- --host
```

L'application sera accessible à l'adresse : `http://localhost:5173/`

## 🏗️ Structure du Projet

```
src/
├── components/
│   ├── ui/                 # Composants UI de base (shadcn/ui)
│   ├── MessageList.jsx     # Liste des messages
│   ├── MessageDetail.jsx   # Affichage détaillé d'un message
│   ├── ComposeMessage.jsx  # Formulaire de composition
│   └── SearchBar.jsx       # Barre de recherche
├── App.jsx                 # Composant principal
├── App.css                 # Styles globaux
└── main.jsx               # Point d'entrée
```

## 🎨 Composants Principaux

### MessageList
- Affiche la liste des messages avec aperçu
- Gère la sélection des messages
- Affiche les indicateurs de messages non lus
- Supporte le scroll pour de nombreux messages

### MessageDetail
- Affiche le contenu complet d'un message
- Informations de l'expéditeur avec avatar
- Bouton de réponse avec formulaire intégré
- Formatage des dates en français

### ComposeMessage
- Formulaire de composition de nouveaux messages
- Validation des champs requis
- Support des raccourcis clavier (Ctrl+Entrée)
- Interface claire et intuitive

### SearchBar
- Recherche en temps réel dans les messages
- Filtrage par contenu et nom d'expéditeur
- Bouton de réinitialisation

## 🔧 Personnalisation

### Données de Test
Les données de démonstration sont définies dans `App.jsx` dans la variable `mockMessages`. Vous pouvez les modifier pour tester différents scénarios.

### Styles
- Les styles sont basés sur Tailwind CSS
- Les couleurs et thèmes sont configurés dans `App.css`
- Support du mode sombre intégré

### API Integration
Pour connecter à une vraie API :

1. Remplacez les fonctions mock dans `App.jsx`
2. Ajoutez les appels API appropriés
3. Gérez les états de chargement et d'erreur

Exemple d'intégration API :
```javascript
// Dans App.jsx
const fetchMessages = async () => {
  try {
    const response = await fetch('/api/messages/')
    const data = await response.json()
    setMessages(data)
  } catch (error) {
    console.error('Erreur lors du chargement des messages:', error)
  }
}
```

## 📱 Responsive Design

L'interface s'adapte automatiquement aux différentes tailles d'écran :
- **Desktop** : Vue en deux colonnes (liste + détails)
- **Tablet** : Vue adaptée avec navigation optimisée
- **Mobile** : Vue empilée avec navigation tactile

## 🚀 Déploiement

### Build de Production
```bash
pnpm run build
# ou
npm run build
```

Les fichiers de production seront générés dans le dossier `dist/`.

### Options de Déploiement

#### Netlify (Recommandé)
1. Construire le projet : `pnpm run build`
2. Glisser-déposer le dossier `dist/` sur Netlify
3. Votre site est en ligne !

#### Vercel
1. Connecter votre repository GitHub
2. Vercel détecte automatiquement Vite
3. Déploiement automatique

#### Serveur Traditionnel
1. Construire le projet : `pnpm run build`
2. Copier le contenu de `dist/` sur votre serveur web
3. Configurer votre serveur pour servir les fichiers statiques

## 🔍 Tests et Développement

### Commandes Utiles
```bash
# Démarrage en mode développement
pnpm run dev

# Build de production
pnpm run build

# Prévisualisation du build
pnpm run preview

# Linting (si configuré)
pnpm run lint
```

### Fonctionnalités Testées
- ✅ Affichage de la liste des messages
- ✅ Sélection et affichage des détails
- ✅ Composition de nouveaux messages
- ✅ Réponse aux messages existants
- ✅ Recherche dans les messages
- ✅ Indicateurs de messages non lus
- ✅ Interface responsive
- ✅ Raccourcis clavier

## 🤝 Contribution

Pour contribuer au projet :
1. Fork le repository
2. Créer une branche pour votre fonctionnalité
3. Commiter vos changements
4. Pousser vers la branche
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.

## 🆘 Support

Pour toute question ou problème :
- Ouvrir une issue sur GitHub
- Consulter la documentation de React, Vite et Tailwind CSS
- Vérifier les logs de la console pour les erreurs JavaScript

---

**Note** : Cette interface est conçue pour être facilement intégrée avec une API backend Django REST Framework. Les structures de données utilisées correspondent aux modèles Django définis dans le projet backend.

