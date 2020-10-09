# caixa-registradora-api

Para rodar o project será necessário possuir um gerenciador de pacotes javascript
YARN ou NPM

Realiza um fork do projeto e um clone do mesmo

    git clone https://github.com/igooruh/caixa-registradora-api.git

Acessa o diretório do projeto e baixa as dependências

    npm install ou apenas yarn
    
para subir o servidor

    npm dev:server ou  yarn dev:server
    
# Ferramenta utilizada

O projeto utilizou docker para criação do banco de dados no caso foi utilizado Postgres

    docker run --name box-register -e POSTGRES_PASSWORD=box -p 5432:5432 -d postgres
    
NodeJs, Typescript, TypeORM


# Regra de Negócio

## Categoria
O usuário poderá criar categorias para ser utilizada no momento em que for criar uma movimentação;
As categorias criadas será vista em tela em forma de listbox para o usuário poder escolher

## Movimentação
O usuário poderá realizar as movimentações que foi parametrizada quando foi criada as categorias;
No mínimo terá que ter duas movimentações de deposito de uma quantia e o saque do mesmo;
