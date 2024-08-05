Esse repositório e em conjunto com o repositório de [frontend](https://github.com/ebagabee/Angular-Task-Lists)

# Pré requisitos

- NodeJS
- npm
- Banco de dados PostgreSQL

1. Clone o repositorio

```bash
git clone https://github.com/ebagabee/Lista-Tarefas.git
```

2. Navegue ate o diretorio criado

3. Instale as dependências

```bash
npm install
```
4. Altere o .env.example para .env e dê valores para as variaveis de ambiente

5. Configure o banco de dados e crie a tabela com o seguinte script:
  Caso não queira, basta alterar o `synchronize: false,` para `true` em app.module.ts e executar o servidor

```sql
CREATE DATABASE tasks;

CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    deadline TIMESTAMPTZ
);
```

## Execute o projeto

```bash
npm run start:dev
```

O servidor estará disponível em http://localhost:3000

## Endpoints

### Tarefas

- `GET /tasks`: Retorna todas as tarefas.
- `GET /tasks/:id`: Retorna uma tarefa específica.
- `POST /tasks`: Cria uma nova tarefa.
- `PUT /tasks/:id`: Atualiza uma tarefa existente.
- `DELETE /tasks/:id`: Deleta uma tarefa.