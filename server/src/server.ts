import express from "express";

const app = express();

app.use(express.json());

// GET: buscar ou listar uma informação.
// POST: criar alguma nova infromção.
// PUT: atualizar uma informção existente.
// DELETE: deletear ou excluir uma iformação.

// Corpo (request body): dados para criação ou atualização de um registro.

// Route params: identificar qual recurso eu quero atualizar ou deletar.
// Query params: paginação, filtros, ordenação.

app.get("/", (request, response) => {
  return response.json({ message: "Hello World" });
});

app.listen(3333);
