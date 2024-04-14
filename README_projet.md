**Initialisation du Projet:**  
- npx create react-app table-plugin 

**Installation des Dépendances:**  
- npm install react react-dom --save 
- npm install --save-dev @babel/core @babel/cli babel-preset-react-app @babel/preset-react cross-env 
- npm install rimraf --save-dev

**Configuration de Babel:**  
.babelrc 

**Configuration d'Eslint:**  
.eslintrc.json 

**Configuration du package.json:**  
- npm run start
- npm run build  

**Publication:**  
- npm login  
- npm publish --access public

**Etape 7 : Patch:**  
```bash
npm whoami
npm run build
git add .
git commit -a -m "Mise à jour du package"
git push
npm version patch 
npm publish --access public
```
