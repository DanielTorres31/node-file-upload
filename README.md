# Node File Upload

Esse projeto é uma API para upload de imagens no formato multipart/form-data.
Baseado em um [vídeo](https://www.youtube.com/watch?v=MkkbUfcZUZM) da Rocketseat.

Como desafio, decidi utilizar Typescript na construção, estruturei o projeto de uma forma diferente e configurei todo o ambiente com containers Docker.

O armazenamento das imagens pode ser feito no S3 da AWS ou no FileSystem da máquina. Em ambos os casos, é gerada uma URL de acesso a imagem.

Rotas:

**POST /posts**: Salva uma imagem

**GET /posts**: Recupera todas as imagens

**DELETE /posts/:id**: Deleta imagem a partir de um id

**DELETE /posts/clear**: Deleta todas as imagens salvas

# Variáveis de Ambiente

-   **HOST**: Endereço onde a API será disponibilizada
-   **PORT**: Porta onde a API será disponibilizada
-   **MONGO_URL**: URL de conexão com o MongoDB
-   **STORAGE_TYPE**: Tipo de armazenamento de imagem - local ou s3

Caso utilize **STORAGE_TYPE=s3** é necessário definir as váriaveis abaixo:

-   **AWS_ACCESS_KEY_ID**: Chave de acesso a conta AWS
-   **AWS_SECRET_ACCESS_KEY**: Chave secreta de acesso a conta AWS
-   **S3_BUCKET**: Nome do bucket onde as fotos serão armazenadas

# Executar projeto

Para executar o projeto, no terminal, execute: `docker-compose up -d`.

Esse comando irá criar e iniciar os dois containers necessário para o funcionamento correto da API, será criado um container para o Banco de Dados (MongoDB) e outro para a API.

Para parar a API, execute: `docker-compose down`. Esse comando irá parar todos os containers criados para o projeto.

# Tecnologias e Frameworks Utilizados

-   Typescript

-   Express

-   Docker

-   MongoDB

-   Mongoose

-   Multer

-   AWS SDK
