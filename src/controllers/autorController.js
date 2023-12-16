import { autor } from "../models/Autor.js";

/**
 * Controla as requisicoes dos Autors
 */
class AutorController {

   static async listarAutores(req, res) {
      try {
         const listaAutores = await autor.find({})
         res.status(200).json(listaAutores)

      } catch (error) {
         res.status(500).json({ message: `${error.message} - falha na requisicao` })
      }

   };

   static async listarAutorporId(req, res) {
      try {
         const id = req.params.id;
         const autorEncontrado = await autor.findById(id)
         res.status(200).json(autorEncontrado)

      } catch (error) {
         res.status(500).json({ message: `${error.message} - falha na requisicao do Autor` })
      }

   };

   static async cadastrarAutor(req, res) {

      try {
         const novoAutor = await autor.create(req.body);
         res.status(201).json({ message: "criado com sucesso", autor: novoAutor });

      } catch (error) {
         res.status(500).json({ message: `${error.message} - falha ao cadastrar Autor` })
      }
   }

   static async atualizarAutor(req, res) {
      try {
         const id = req.params.id;
         await autor.findByIdAndUpdate(id, req.body)
         res.status(200).json({ message: "Autor atualizado" })

      } catch (error) {
         res.status(500).json({ message: `${error.message} - falha na atualizacao do Autor` })
      }

   };

   static async excluirAutor(req, res) {
      try {
         const id = req.params.id;
         await autor.findByIdAndDelete(id)
         res.status(200).json({ message: "Autor excluido" })

      } catch (error) {
         res.status(500).json({ message: `${error.message} - falha exclusão do Autor` })
      }
   };
}

export default AutorController