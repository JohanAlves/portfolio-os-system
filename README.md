Para acessar a versão demo, acesse [`portfolio-os-system`](https://portfolio-os-system-db5yxlh7g-johanalves-projects.vercel.app/).

## Introdução

Esta aplicação full stack foi desenvolvida utilizando Next.js e Firebase, oferecendo uma plataforma moderna e escalável para desenvolvimento web. Next.js é um poderoso framework React que permite renderização híbrida (SSR e SSG), roteamento automático e suporte a API, enquanto o Firebase fornece uma suíte completa de ferramentas de backend, como banco de dados em tempo real, autenticação, funções em nuvem, e hospedagem.

Para testar, clone esse repositório e, em seguida, crie um arquivo ".env.local" e adicione suas credenciais do firebase.

```bash
FIREBASE_APIKEY=""
FIREBASE_AUTHDOMAIN=""
FIREBASE_DATABASEURL=""
FIREBASE_PROJECTID=""
FIREBASE_STORAGEBUCKET=""
FIREBASE_SENDERID=""
FIREBASE_APPID=""
```

Após isso, execute os seguintes comandos no prompt

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## Sistema de Criação de OS

A primeira tela irá apresentar todas as ordens de serviço que foram criadas, bem como a possibilidade de criar uma nova OS e editar/remover uma OS já criada. Todos os formulários contam com validação no front-end e no back-end

![homepage](https://github.com/JohanAlves/portfolio-os-system/assets/88723501/cc41cad6-5002-4620-9738-d64c464d8e5e)
![add-client-modal](https://github.com/JohanAlves/portfolio-os-system/assets/88723501/a7f9e623-ea58-4290-a8ca-ff8f0dfac92a)

Além disso, o sistema também conta com Notificações de erros e de mensagens de sucesso utilizando o react-toastify

![toast](https://github.com/JohanAlves/portfolio-os-system/assets/88723501/57dd6497-9ef5-4c2d-8d15-a5d47d2a1bc3)
