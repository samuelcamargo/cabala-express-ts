import express from "express";
import CabalaController from "../controllers/CabalaControlle";

const routes = express.Router();

/**
 * @swagger
 * /cabala:
 *   get:
 *     summary: Lista todos os Orixás
 *     description: Retorna uma lista de todos os Orixás com seus respectivos IDs e nomes.
 *     responses:
 *       200:
 *         description: Lista de Orixás.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Orixa'
 */
routes.get("/cabala", CabalaController.listarOrixas);

/**
 * @swagger
 * /cabala/{id}:
 *   get:
 *     summary: Busca um Orixá pelo ID
 *     description: Retorna o nome do Orixá correspondente ao ID fornecido.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do Orixá
 *     responses:
 *       200:
 *         description: Nome do Orixá.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Orixa'
 *       404:
 *         description: Orixá não encontrado.
 */
routes.get("/cabala/:id", (req, res) => CabalaController.getOrixaNameById(req, res));

/**
 * @swagger
 * /cabala:
 *   post:
 *     summary: Calcula a Cabala
 *     description: Recebe uma data e calcula a Cabala, retornando as interpretações.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               data:
 *                 type: string
 *                 format: date
 *                 example: "1978-03-11"
 *                 description: Data de nascimento no formato YYYY-MM-DD
 *     responses:
 *       200:
 *         description: Cabala calculada com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 Nascimento:
 *                   type: string
 *                   description: Data de nascimento interpretada.
 *                 Cabala:
 *                   type: object
 *                   description: Resultados da Cabala.
 *       400:
 *         description: Data incompatível.
 */
routes.post("/cabala", CabalaController.calculaCabala);

export default routes;