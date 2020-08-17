import express from "express";
import cors from "cors";
import routes from "./routes";

const app = express();

app.use(cors());
app.use(express.json());

// GET: buscar ou listar uma informação.
// POST: criar alguma nova infromção.
// PUT: atualizar uma informção existente.
// DELETE: deletear ou excluir uma iformação.

// Corpo (request body): dados para criação ou atualização de um registro.

// Route params: identificar qual recurso eu quero atualizar ou deletar.
// Query params: paginação, filtros, ordenação.
app.use(routes);

app.listen(3333);
