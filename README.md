# Galerie de visualisations de données

Ce projet présente une sélection d'exemples concrets de visualisations de données, organisée sous forme de carte interactive et filtrable. Il a été conçu par les **bibliothèques de l’Université de Montréal** pour inspirer, explorer et analyser les manières de représenter visuellement les données.

![Capture d'écran de la galerie](screenshot.png)

## ✨ Fonctionnalités

- Affichage sous forme de cartes colorées
- Recherche par mots-clés
- Filtres par **thème** et par **type**
- Accessibilité améliorée (navigation clavier, texte alternatif, contraste)
- Interface responsive
- Données chargées depuis un fichier `.csv`

## 🗂 Structure du projet

```
/
├── index.html          → Page principale
├── style.css           → Feuille de style
├── script.js           → Logique d'affichage et de filtrage
├── galerie_dataviz.csv → Source des données (liens, titres, thèmes, descriptions)
├── logo-bib-udem.svg   → Logo des bibliothèques de l’UdeM
└── README.md           → Ce fichier
```

## 🧪 Lancer localement

1. Clonez ce dépôt :
   ```bash
   git clone https://github.com/votre-utilisateur/galerie-dataviz.git
   cd galerie-dataviz
   ```

2. Ouvrez `index.html` dans un navigateur moderne.

✅ Aucun serveur nécessaire.

## 🌐 Déploiement

Ce projet peut être hébergé gratuitement via [GitHub Pages](https://pages.github.com/) ou sur n’importe quel hébergeur statique.

## 📄 Format CSV attendu

Le fichier `galerie_dataviz.csv` doit contenir les colonnes suivantes :

| Titre | Lien | Auteur(s) | Type | Thème | Description |
|-------|------|-----------|------|--------|-------------|

Exemple :

```csv
Titre,Lien,Auteur(s),Type,Thème,Description
Une année de pluie,https://dataviz.example.com/journal-pluie,Jean Dupont,Carte interactive,Météo,Visualisation des précipitations journalières.
```

## 🤝 Contribuer

Toute suggestion d’ajout de visualisation, de correction ou d’amélioration est la bienvenue.  
Vous pouvez proposer une modification via une _pull request_ ou ouvrir une _issue_.

---

© 2025 — Bibliothèques de l’Université de Montréal  
Licence [MIT](LICENSE)
