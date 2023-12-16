import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => {
   console.error("erro de conexao", erro);
})

conexao.once("open", () => {
   console.log("Conexao com o banco foi um sucesso");
})

const app = express();

routes(app)

app.delete("/livros/:id", (req, res) => {
   const index = buscaLivros(req.params.id)
   livros.splice(index, 1);
   res.status(200).send("livro removido com sucesso ")
})

export default app;
