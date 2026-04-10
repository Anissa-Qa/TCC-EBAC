# Projeto Final – Engenharia de Qualidade de Software

## 📌 Objetivo
Este projeto tem como objetivo aplicar, na prática, os conhecimentos adquiridos ao longo do curso de Engenharia de Qualidade de Software, contemplando automação de testes de interface, testes de API, testes de performance e integração contínua.

## 🖥️ Automação UI
Foram implementados testes automatizados com Cypress para a história de usuário **[US-0001] – Adicionar item ao carrinho**, validando a inclusão de pelo menos 3 produtos diferentes com sucesso.

### Tecnologias utilizadas
- Cypress
- JavaScript
- Node.js

### Como executar
```bash
cd UI
npm install
npx cypress run

🔌 Automação API

Foram desenvolvidos testes automatizados para a funcionalidade API de cupons, cobrindo os seguintes cenários:

GET: listagem de todos os cupons cadastrados
GET por ID do cupom
POST: cadastro de novo cupom
Validação de regras de negócio
Validação de cupom duplicado
Autenticação Basic
Tecnologias utilizadas
Cypress
REST API
JSON

Como executar
cd API
npm install
npx cypress run

⚡ Testes de Performance

Os testes de performance foram desenvolvidos com Apache JMeter, simulando carga no fluxo de login da plataforma.

Configuração do teste
20 usuários virtuais
2 minutos de execução
Ramp-up de 20 segundos
Massa dinâmica em CSV
Template de gravação (Recording)
Fluxo validado
Login na plataforma
Ferramentas
Apache JMeter
CSV Data Set Config
Recording Controller
Summary Report

🔄 Integração Contínua

Foi configurado um pipeline com Jenkins utilizando Jenkinsfile versionado no GitHub para execução automatizada dos testes de UI e API.

📁 Estrutura do Projeto
TCC-EBAC-2
 ├── UI
 ├── API
 ├── performance
 ├── Jenkinsfile
 └── README.md
👩‍💻 Autor

Projeto desenvolvido por Anissa como trabalho de conclusão do curso de Engenharia de Qualidade de Software – EBAC.
