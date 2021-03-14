# **U Can**

Uma plataforma fictícia para cadastro de pessoas aptas a doarem para moradores de rua.

## Linguagem utilizada

<img src="https://github.com/remojansen/logo.ts/blob/master/ts.png" width="96">

## Tecnologias utilizadas

- **Back-end**
  - NodeJS
  - Express
  - Celebrate
  - Cors
  - MySQL
  - Sequelize

- **Front-end**
  - ReactJS
  - Axios
  - React Router Dom
  - Framer Motion
  - Styled Components
  

## Como rodar a plataforma

Primeiro, se deve acessar [esse link](https://www.nodejs.org) e instalar o Node.js. 
> Opcional: se quiser, pode instalar também o Yarn, que é uma ótima ferramenta de gestão de pacotes. Para isso, já com o Node.js instalado, basta rodar `npm i -g yarn` no terminal.

Em seguida, basta abrir o terminal numa pasta qualquer escolhida e rodar `git clone github.com/richardqcarvalho/projeto-u-can`.

Feito isso, rode o seguinte código para a instalação das dependências:

`cd /projeto-u-can/front-end && npm i && cd ../back-end && npm i`
> Se estiver usando yarn, pode usar `cd /projeto-u-can/front-end && yarn && cd ../back-end && yarn`

Ao fim do processo, toda a base da aplicação vai estar devidamente instalada.

Em seguida, abra a pasta `back-end` e rode `npm start` ou `yarn start`.

Para que o back-end rode corretamente, é necessário que uma instância do MySQL esteja rodando. Para saber como fazer isso, acesse [este link](https://dev.mysql.com/doc/refman/8.0/en/installing.html) em que há um tutorial para instalar o MySQL na sua máquina. Logo em seguida, basta rodar o servidor no terminal e rodar `create database UCan`.

Isto fará com que o MySQL fique pronto para ser usado pelo back-end.

Feito tudo isso, basta então entrar na pasta `front-end` e rodar `npm start` ou `yarn start`.

Uma nova aba no navegador será carregada com o projeto.


