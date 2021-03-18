# Backend Maxxidata Coding Exercise

Construído com:
* Expressjs
* Sequelize
* PostgreSql
* Jest
* Swagger UI e Swagger autogen


## Requisitos

* Node 14.16
* npm 6.14
* Docker
* Docker-compose

## Instalação
```
git clone https://github.com/nicolas-costa/maxxidata-test-back.git
```

Na raiz do projeto, rode:

```
npm install
```

Faça um arquivo .env seguindo o modelo do arquivo .env.example e coloque lá os dados pertinentes (conexão com o banco e afins)   
Sugiro continuar usando a porta 3001, uma vez que o front roda por padrão na 3000.   

Suba os containers: 
```
docker-compose up -d
```

Rode as migrations:
```
npx sequelize-cli db:migrate
```

Rode os seeders:
```
npx sequelize-cli db:seed:all
```

Rode o script para iniciar o servidor em modo dev:
```
npm run dev 
```

Após isso, o servidor deverá estar rodando em http://localhost:{PORTA}, sendo PORTA, o especificado no arquivo .env.

## Ideias não implementadas/Pendências 

* Mecanismo de versionamento dos endpoints.
* Autenticação com JWT.
* Maior cobertura de código.

## Testes

Faça ajustes que se fizerem necessários no arquivo .env.testing com para rodar os testes e execute:
```
npm run test
```

