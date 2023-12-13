COMPONENTES:
Robson Graça dos Santos (RA12722112379)     
Matheus Silva de Oliveira (RA 1272227031)
Luan Gabriel Santos Paim Dias (RA 12722125073) 
Eraldo de Oliveira da Silva Neto (RA 12722210973)
Lucca de Serra de Melo Reis (RA 1272116626)


Ao realizar o download , após iniciar a abertura do arquivo, é necessário seguir algumas etapas para a execução para o Beckend:
Ao entrar na pasta que se localizar o arquivo do backend atraves do terminal, deve incluir o seguinte comando:
node index.js e assim o servidor será iniciado.

Logo após o servidor ser iniciado teremos a opção de trabalharmos o beckend usando o postman , utilizando metodos de apredizado ensinados em sala de aula , como por exemplo metodos GET, POST ,DELETE , para com que o crud tanto da plataforma quanto do jogo funcione corretamente.

no metodo GET da plataforma:
Para verificarmos se de fato tem uma plataforma usaremos https://localhost:3000/plataformas.
Para adicionar uma plataforma usaremos https://localhost:3000/plataformas.
Para deletarmos a plataforma usaremos https://localhost:3000/plataformas/{id_da_plataforma}.
Para verificarmos se de fato tem um jogo dentro da plataforma usaremos https://localhost:3000/plataformas/{id_da_plataforma}/jogo.
Para adicionar um jogo dentro da plataforma usaremos https://localhost:3000/plataformas/{id_da_plataforma}/jogo.
Para deletar um jogo dentro da plataforma usaremos https://localhost:3000/plataformas/{id_da_plataforma}/jogo/{id_do_jogo}.

Algumas caracteristicas do React abaixo:

Descrição de Pastas frontend
Dentro da pasta .\Src.\src\ do projeto.

A pasta "Src" com "S" maiusculo é que contem todas as pasta e arquivos aqui criados , já na pasta src com "s" minusculo contém outros arquivos e pastas também importantes para o projeto, sendo essas pastas:
Dentro de src contem pasta contexts que dentro dela contém o arquivo "auth.js".
Dentro da pasta pages contem mais 3 pastas "Home" , "Signin" , "Signiup".
Dentro da pasta home contem 3 arquivos chamados "index.css", "index.js" , "styles.js"
            São as principais pastas do projeto FRONTEND.



### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
