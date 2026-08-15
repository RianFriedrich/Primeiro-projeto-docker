# Primeiro Projeto com Docker

Meu primeiro projeto utilizando Docker, desenvolvido para aprender na prática os conceitos básicos de **containerização** e **Docker Compose**.

## Sobre o projeto

O projeto consiste em uma API simples desenvolvida com **Node.js e Express**, conectada a um banco de dados **PostgreSQL**.

A aplicação e o banco de dados são executados em containers separados e se comunicam através da rede criada pelo Docker Compose.

```text
Node.js API
    │
    │ Docker Network
    ↓
PostgreSQL
```

## Tecnologias

* Node.js
* Express
* PostgreSQL
* Docker
* Docker Compose

## O que pratiquei

* Criação de `Dockerfile`
* Construção e execução de imagens e containers
* Uso do Docker Compose
* Comunicação entre containers
* Configuração de portas
* Integração entre Node.js e PostgreSQL

## Como executar

É necessário ter o **Docker Desktop** instalado.

Clone o repositório:

```bash
git clone https://github.com/RianFriedrich/Primeiro-projeto-docker.git
cd Primeiro-projeto-docker
```

Inicie os containers:

```bash
docker compose up -d --build
```

Verifique se estão rodando:

```bash
docker compose ps
```

A API estará disponível em:

```text
http://localhost:3000
```

Para testar a conexão com o PostgreSQL:

```text
http://localhost:3000/banco
```

## Objetivo

Este projeto representa meu primeiro contato prático com Docker e faz parte dos meus estudos em **Backend e DevOps**.

Docker é uma ferramenta importante para padronizar ambientes, facilitar o desenvolvimento e permitir que aplicações e suas dependências sejam executadas de forma consistente em diferentes ambientes.

Este projeto também serve como base para estudos futuros de **CI/CD, Cloud e Kubernetes**.
