<div align="center">
  <br />
  <h1 align="center">HabitBoost</h1>

  <p align="center">
    Sua plataforma para transformar rotinas em conquistas. 🚀
    <br />
    <br />
    <a href="#-sobre-o-projeto"><strong>Explore a documentação »</strong></a>
    <br />
    <br />
    <a href="https://github.com/seu-usuario/habit-boost/issues">Reportar Bug</a>
    ·
    <a href="https://github.com/seu-usuario/habit-boost/issues">Solicitar Feature</a>
  </p>
</div>

<p align="center">
  <img src="https://img.shields.io/github/license/seu-usuario/habit-boost?style=for-the-badge" alt="Licença">
  <img src="https://img.shields.io/github/stars/seu-usuario/habit-boost?style=for-the-badge" alt="Stars">
  <img src="https://img.shields.io/github/forks/seu-usuario/habit-boost?style=for-the-badge" alt="Forks">
</p>

---

## 📌 Sumário

* [🧠 Sobre o Projeto](#-sobre-o-projeto)
* [🛠️ Tecnologias Utilizadas](#-tecnologias-utilizadas)
* [⚙️ Começando](#-começando)
  * [Pré-requisitos](#pré-requisitos)
  * [Instalação](#instalação)
* [🚀 Roadmap Futuro](#-roadmap-futuro)
* [🤝 Como Contribuir](#-como-contribuir)
* [📄 Licença](#-licença)

---

## 🧠 Sobre o Projeto

**HabitBoost** é uma plataforma SaaS inovadora, desenhada para ajudar usuários a construir e manter hábitos positivos através da gamificação. Em um mundo onde a produtividade é chave, nós oferecemos uma ferramenta divertida e engajadora para criar rotinas, definir metas e acompanhar o progresso de forma visual e motivadora.

**Por que criamos o HabitBoost?**
*   ✔ **Alta Demanda:** Aplicações de produtividade e hábitos são uma tendência de busca contínua.
*   ✔ **Potencial de Evolução:** O projeto tem um vasto espaço para crescer com funcionalidades de gamificação, relatórios avançados, interações sociais e modelos de assinatura.
*   ✔ **Impacto Real:** Pode ser transformado em um produto real, ajudando pessoas a alcançarem seu potencial máximo.

### Principais Funcionalidades

✅ **Criação de Metas:** Defina rotinas diárias e objetivos claros (ex: "Estudar 1h de Java", "Correr 3km").
✅ **Registro de Progresso:** Marque tarefas como concluídas e veja sua evolução.
✅ **Gamificação:** Ganhe pontos, suba de nível e desbloqueie conquistas ao completar suas metas.
✅ **Dashboards Visuais:** Acompanhe sua performance com gráficos e estatísticas detalhadas.
✅ **Compartilhamento Social:** (em breve) Compartilhe suas conquistas com amigos e uma comunidade de apoio.

---

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído utilizando as mais modernas tecnologias para garantir escalabilidade, segurança e performance.

*   **[NestJS](https://nestjs.com/):** Um framework Node.js progressivo para construir aplicações eficientes e escaláveis do lado do servidor.
*   **[TypeScript](https://www.typescriptlang.org/):** Para um código mais seguro, legível e manutenível.
*   **[Docker](https://www.docker.com/):** Para garantir um ambiente de desenvolvimento e produção consistente e isolado.
*   **[PostgreSQL](https://www.postgresql.org/):** Como nosso banco de dados relacional.
*   **[TypeORM](https://www.typeorm.io/):** Como nosso ORM para uma interação fluida com o banco de dados.

---

## ⚙️ Começando

Para ter uma cópia do projeto rodando localmente, siga estes passos.

### Pré-requisitos

Certifique-se de ter os seguintes softwares instalados em sua máquina:
*   [Node.js](https://nodejs.org/en/) (v18 ou superior)
*   [pnpm](https://pnpm.io/installation)
*   [Docker](https://www.docker.com/get-started)

### Instalação

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/peixotim/habit-boost.git
    cd habit-boost
    ```

2.  **Instale as dependências:**
    ```bash
    pnpm install
    ```

3.  **Configure as variáveis de ambiente:**
    ```bash
    cp .env.example .env
    ```

4.  **Inicie o banco de dados com Docker:**
    ```bash
    docker-compose up -d
    ```

5.  **Rode as migrações do banco de dados (se aplicável):**
    ```bash
    # Exemplo com Prisma
    # pnpm prisma migrate dev
    ```

6.  **Inicie a aplicação em modo de desenvolvimento:**
    ```bash
    pnpm run start:dev
    ```

A API estará disponível em `http://localhost:3000`.

---

## 🚀 Roadmap Futuro

Temos grandes planos para o HabitBoost!
*   [ ] **Sistema de Níveis e XP:** Aprimorar a gamificação com um sistema de experiência mais robusto.
*   [ ] **Relatórios Avançados:** Gerar relatórios semanais e mensais de performance.
*   [ ] **Funcionalidades Sociais:** Permitir que usuários adicionem amigos e compartilhem progresso.
*   [ ] **Planos de Assinatura:** Introduzir planos *Premium* para desbloquear funcionalidades exclusivas.
*   [ ] **Notificações Push:** Enviar lembretes e mensagens de motivação.

---

## 🤝 Como Contribuir

Contribuições são o que tornam a comunidade de código aberto um lugar incrível para aprender, inspirar e criar. Qualquer contribuição que você fizer será **muito apreciada**.

1.  Faça um **Fork** do projeto.
2.  Crie uma **Branch** para sua feature (`git checkout -b feature/AmazingFeature`).
3.  Faça o **Commit** de suas mudanças (`git commit -m 'Add some AmazingFeature'`).
4.  Faça o **Push** para a Branch (`git push origin feature/AmazingFeature`).
5.  Abra um **Pull Request**.

---

## 📄 Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.

<div align="center">
  <br/>
  Feito com ❤️ por [Pedro Peixoto](https://github.com/peixotim)
</div>