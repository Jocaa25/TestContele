## Descrição

Esse teste consiste na validação e correção de uma aplicação, nele será avaliado a análise de problemas técnicos e a sua capacidade de soluciona-los da maneira mais objetiva possível.

## Recomendações

Para a resolução dessa API é desejável que o desenvolvedor conheça previamente as seguintes tecnologias, e caso não conheça acabe por aprender durante o teste.

- Docker
- Node.js
- MySQL
- Express
- OpenAPI 2.0

## Aplicação e Intuito

A aplicação consiste em alguns *Endpoints* de CRUD(*Create, Read, Update and Delete*), que tem como as suas entidades:

- Usuários
- Postagens

Apesar de ser uma simples aplicação acaba por ter diversos problemas que encontramos em nosso dia a dia como desenvolvedores, assim sendo possível avaliar como você se sairia desenvolvendo tais habilidades para a resolução destes problemas.

## Rodando a API

Para rodar a aplicação é necessário executar somente o comando:

```docker
docker compose up --build
```

Após essa execução a aplicação deverá estar sendo executada no endereço:

```docker
http://localhost:8081
```

Para a consulta dos endereços e endpoints a serem consultados e corrigidos é disponibilizada a documentação da aplicação em:

```docker
http://localhost:8081/api/v1/docs
```

## Efetuando o Teste

### Iniciando - Repositório

Para iniciar o teste é necessário clonar esse repositório e obtendo os arquivos com a aplicação, assim obtendo a pasta na qual se encontram todos os arquivos para a execução.

Após a extração será necessário criar um repositório público no seu perfil pessoal com esta pasta, nomeando o primeiro commit como "Init Repo".

Todas as alterações necessárias serão efetuadas no seu repositório.

### Pull Requests

Após efetuar as analises e encontrar uma problemática a sua solução deverá ser salva em uma branch a parte com o nome de:

```docker
test/[Número do Problema Encontrado]
```

Como exemplo, após ter resolvido 2 problemáticas e encontrado uma terceira, para a resolução deveremos criar a terceira branch a partir da branch principal com o nome de:

```docker
test/3
```

A partir dessa branch com a resolução é pedido que se crie um pull request para a branch principal.
E que comente na descrição:
1. a causa do problema, 
2. o porquê a alteração foi feita daquela maneira
3. como ela soluciona o problema encontrado.

Após essa documentação da problemática é necessário que efetue o merge dessa pull request, inserindo as modificações no seu projeto.

### Finalização

Após validar que os problemas em sua grande parte foram solucionados, simplesmente é necessário contactar o responsável pelo processo seletivo e enviar o link do seu repositório.#   T e s t C o n t e l e 
 

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Pessoal, boa tarde, tudo bem?

Eu consegui levantar o banco e a aplicação via docker, consegui tambem acessar o banco do docker via terminal, porem nao consegui de maneira alguma fazer o acesso via aplicação e via Azure Studio.
Desabilitei o Firewall, tambem liberei as portas.
Tambem dei uma mexida nos arquivos de configuração knex.js e no docker-compose.yml, porem sem sucesso tambem.

Eu ja estourei o prazo e infelizmente só consegui desenvoler na madrugada da terça. De qualquer forma eu gostaria de saber o que eu poderia ter feito para resolver esse problema.

Eu tambem tentei subir um banco local, tambem sem sucesso para acessar via aplicação, mas consigo acessar via azure studio.

Eu vou deixar aqui um link, onde eu estou desenvolvendo uma aplicação .net 7, uso o my sql tambem, porem ainda nao tenho front desenvolvido e seria em angular.

https://github.com/Jocaa25/AllFood.API.

Gostaria de deixar aqui minha gratidao pela oportunidade, pude encontrar aqui a curiosidade de aprender o node.js, a ultilização do Docker, e claro, tambem as outras tecnologias mencionadas na descrição do teste.



 
