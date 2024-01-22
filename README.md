# TablePlugin - P14 OpenClassrooms  
https://github.com/CamilleStagiaire/P14-table-plugin.git  
*Formation Développeur d'application - JavaScript React*  

## Description:
Le TablePlugin est un composant React conçu pour faciliter la création et la gestion de tables dynamiques dans vos applications React. Il permet de trier, filtrer et paginer des données.

## Prerequis:
- [Node.js](https://nodejs.org/en/) > v16  
- [VS Code](https://code.visualstudio.com/) éditeur de texte recommandé  
- Un terminal bash ex : [git Bash]  

## Installation
Vous pouvez installer le TablePlugin en utilisant npm ou yarn :

### Avec npm:
```bash
npm install table-plugin-openclassrooms
```

### Avec yarn:
```bash
yarn add table-plugin-openclassrooms
```

## Utilisation:
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


##  Personnalisation:
Vous pouvez personnaliser le style du TablePlugin en surchargeant les classes CSS. Consultez le fichier de style pour voir les classes disponibles.

##  Contribuer:
Les contributions sont toujours les bienvenues! Pour contribuer, veuillez forker le dépôt, créer une branche, faire vos changements, et soumettre une pull request.

##  License:
[MIT](https://opensource.org/licenses/MIT)