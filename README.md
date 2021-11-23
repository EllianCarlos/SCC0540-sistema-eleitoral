Para executar esse projeto é necessário ter possuir node, npm, yarn e docker-compose.

Basta dar `yarn install` nessa pasta para instalar os pacotes.

Para subir uma instancia do banco use: `yarn db:up`, para derrubar uma: `yarn db:down`. 

Para executar a aplicação basta executar `yarn start:dev` ou `yarn start` e acessar o localhost da sua porta 3000.

Todas as queries são logadas no terminal em que a aplicação executa.