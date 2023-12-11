Ao realizar o download , após iniciar a abertura do arquivo, é necessário seguir algumas etapas para a execução

Ao abrir o projeto , inicie o terminal e em seguida coloque: 
"npm install" e isso fará com que instale as dependências necessárias,
logo após isso no terminal, adicione "cd .\Src\" e entrará na pasta para execução.
logo após executar a entrada da pasta Src, ainda no terminal digitará "npm start",
e com isso o projeto será iniciado na web.

Na criação do projeto , de inicio foi criado no terminal npx create-react-app Src,
logo após foi digitado no terminal a instalação da biblioteca express ,
com o comando npm install express,
instalando as rotas com o comando, npm install react-router-dom.

Exemplo de uma das documentações usadas

Documentação do arquivo App.js sendo ele um dos principais:
import React from "react";
import RoutesApp from "./routes";
import { AuthProvider } from "./contexts/auth";
import GlobalStyle from "./styles/global";

"const App = () => (
  <AuthProvider>
    <RoutesApp />
    <GlobalStyle />
  </AuthProvider>
);

export default App;"

e também o arquivo index.js

que ficam dentro da pasta .\Src.\src\ do projeto.

A pasta "Src" com "S" maiusculo é que contem todas as pasta e arquivos aqui criados , já na pasta src com "s" minusculo contém outros arquivos e pastas também importantes para o projeto, sendo essas pastas:
components: que contém a pasta Button e contém dois arquivos chamados "index.js" e "style.js", contém aqui ainda tambem a pasta input que contem dois arquivos,
chamados "index.js" e "style.js".
Dentro de src contem pasta contexts que dentro dela contém o arquivo "auth.js".
Dentro do src contem a pasta hooks que contem arquivo chamado "useAuth.js.
Dentro da pasta pages contem mais 3 pastas "Home" , "Signin" , "Signiup".
Dentro da pasta home contem 3 arquivos chamados "index.css", "index.js" , "styles.js"
Dentro da pasta Signin contem os arquivos chamados "index.js" , "styles.js"
Dentro da pasta Sigiup os arquivos chamados "indexx.js" , "styles.js"
Dentro da pasta routes contem o arquivo chamado "index.js" onde contém nossas rotas
Dentro da pasta styles contem o arquivo chamado "global.js"



### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
