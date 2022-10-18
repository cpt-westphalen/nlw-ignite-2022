# Next Level Week (Rocketseat) Set. 2022

[![Netlify Status](https://api.netlify.com/api/v1/badges/67e4d318-3a4d-4236-af90-a840c4854566/deploy-status)](https://find-your-duo-nlw-2022.netlify.app/)

## Find your Duo

Find Your Duo é uma plataforma para encontrar uma pessoa parceira para jogar. O conceito e o design foi apresentado pela Rocketseat na NLW de setembro de 2022.

### Mas...

Optei por não seguir o código apresentado pelo instrutor da NLW e encontrar meu próprio jeito de dar vida ao layout do [Figma](<https://www.figma.com/file/4NzP8JUOC8m005Xqh8lu2m/NLW-eSports-(Community)?node-id=0%3A1>).

### O que mudou?

Além de algumas decisões estéticas menores, criei um modal de visualização de anúncios já criados, **que não existe previsto no Figma para a aplicação web**, e optei por testar outras coisas, como **criar meu próprio modal** que respeite a navegação por teclado e conduza o Focus corretamente (ao invés de usar um modal de lib) e implementar o **React Hook Form** com um input **"Select" da lib Radix UI**, uma lib de componentes com acessibilidade (o que deu uma dor de cabeça até eu entender como faria a integração com o RHF, mas funcionou!).

### Limitações do projeto

-   Não tem backend. Os dados iniciais e a inserção de novos anúncios é simulada.
-   ~~Não é mobile-first.~~ (Responsividade adicionada em 17/10/2022)
-   Não tem testes.

### TypeScript

Vale notar que esse é meu primeiro projeto usando TypeScript - e tomei decisões sem supervisão, haha.
Podem não ser as melhores.

### Tecnologias

O projeto usa Vite, ReactJS, TypeScript, TailwindCSS, React-Hook-Form e Radix UI.
