# Node File Upload

Esse projeto é uma API para upload de imagens no formato multipart/form-data.
Baseado em um [vídeo](https://www.youtube.com/watch?v=MkkbUfcZUZM) da Rocketseat, como desafio decidi utilizar Typescript na construção e estruturei o projeto de uma forma diferente.

Quando uma imagem é enviada através da rota /posts, fazemos o registro no MongoDB, com um link para o local da imagem, que pode ser salva no Amazon S3 ou no FileSystem da máquina.

# Tecnologias e Frameworks Utilizados

-   Typescript

-   Express

-   MongoDB

-   Mongoose

-   Multer

-   AWS SDK
