# TablePlugin - P14 OpenClassrooms  
https://github.com/CamilleStagiaire/P14-table-plugin.git  
*Formation Développeur d'application - JavaScript React*  

**Etape 1 : Initialisation du Projet:**  
- npx create react-app table-plugin 

**Etape 2 : Installation des Dépendances:**  
- npm install react react-dom --save 
- npm install --save-dev @babel/core @babel/cli babel-preset-react-app @babel/preset-react cross-env 
- npm install rimraf --save-dev

**Etape 3 : Configuration de Babel:**  
.babelrc 

**Etape 4 : Configuration d'Eslint:**  
.eslintrc.json 

**Etape 5 : Configuration du package.json:**  
- npm run start
- npm run build  

**Etape 6 : Publication:**  
- npm login  
- npm publish --access public

**Etape 6 : Patch:**  
```bash
npm run build
git add .
git commit -a -m "Mise à jour du package"
git push
npm version patch 
npm publish --access public
```

## Introduction
Le TablePlugin est un composant React conçu pour faciliter la création et la gestion de tables dynamiques dans vos applications React. Il permet de trier, filtrer et paginer des données.

## Installation
Vous pouvez installer le TablePlugin en utilisant npm ou yarn :

### Avec npm :
```bash
npm install table-plugin-openclassrooms
```

### Avec yarn:
```bash
yarn add table-plugin-openclassrooms
```

## Utilisation :
```javascript
import React from 'react';
import TablePlugin from 'table-plugin-openclassrooms';

const App = () => {
  const data = [{ /* votre tableau de données */ }];
  const dataMapping = {/* votre objet de mapping des données */};
  const primaryColor = "#5a6f08"; // La couleur principale du tableau

  return (
    <TablePlugin data={data} dataMapping={dataMapping} primaryColor={primaryColor} />
  );
}

export default App;

```

##  Props :
| Prop         | Type    | Description                                                |
|--------------|---------|------------------------------------------------------------|
| data         | Array   | Les données que vous souhaitez afficher dans le tableau.    |
| dataMapping  | Object  | Un objet qui associe les clés de vos données aux en-têtes de colonnes. |
| primaryColor | String  | La couleur principale utilisée dans le tableau.        |


##  Personnalisation :
Vous pouvez personnaliser le style du TablePlugin en surchargeant les classes CSS. Consultez le fichier de style pour voir les classes disponibles.

##  Contribuer :
Les contributions sont toujours les bienvenues! Pour contribuer, veuillez forker le dépôt, créer une branche, faire vos changements, et soumettre une pull request.

##  License :
[MIT](https://opensource.org/licenses/MIT)