
Esse projeto foi construido usando a ferramenta [Create React App](https://github.com/facebook/create-react-app).

## Requisitos
- Node


Estando na pasta raíz do diretório
Rode o comando: `npm i`
Para instalar as dependências
Em seguida, rode o comando: `npm start` para inicializar a aplicação

## Scripts

### `npm start`

Executa o app.\
Acesse [http://localhost:3000](http://localhost:3000) para visualizar no seu browser.

A página recarregará com qualquer edição que fizer.\

## Atividade 1
No arquivo `library-app/src/pages/Library/index.jsx`\
Crie valores "Default" para as propriedades "header" e "text" que são passadas ao componente "Card"
Semelhantemente ao "photoSrc" (lembrem que no caso dessas propriedades, são apenas strings)

## Atividade 2
Na página de arquivo `library-app/src/pages/References/index.jsx`\
Semelhantemente ao que foi feito na atividade, use os dados providenciados no JSON em
`library-app/src/db/libraries.json` (olhe o arquivo e veja quais campos estão presentes em cada item)
- crie um componente `LibraryItem` (o nome pode ser da sua escolha)
semelhante ao `ReferenceItem`
  - O componente deve imprimir os campos na forma `name: address` (ex: `LivrariaA: Rua Tal de Tal)
- crie um `buildLibraries` (o nome você pode escolher) semelhante ao `buildReferences`, usando as propriedades do libraries\
- não é necessário fazer CSS, ou passar classNames