import { Request, Response } from "express";
import CalculaCabalaController from "./CalculaCabalaController";
import { getRepository } from "typeorm";
import { Orixa } from "../entities/Orixa";

class CabalaController {
  static async listarOrixas(req: Request, res: Response) {
    try {
      const orixaRepository = getRepository(Orixa);
      const orixas = await orixaRepository.find();
      res.status(200).json(orixas);
    } catch (error) {
      res.status(500).json({ message: "Erro ao buscar os Orixás", error });
    }
  }

  static async getOrixaNameById(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id, 10);
      const orixaRepository = getRepository(Orixa);
      const orixa = await orixaRepository.findOne({ where: { id } });

      if (orixa) {
        res.status(200).json(orixa);
      } else {
        res.status(404).json({ message: "Orixá não encontrado" });
      }
    } catch (error) {
      res.status(500).json({ message: "Erro ao buscar o Orixá", error });
    }
  }

  static async calculaCabala(req: Request, res: Response) {
    const data = req.body.data;
    try {
      // Divide a data em ano, mês e dia
      const [ano, mes, dia] = data.split('-').map(Number);

      // Utiliza o CalculaCabalaController para calcular
      const cabalaCalculada = await CalculaCabalaController.calcula(ano, mes, dia);

      res.status(200).json({
        Nascimento: `Dia: ${dia} - Mês: ${mes} - Ano: ${ano}`,
        Cabala: cabalaCalculada,
      });
    } catch (error) {
      res.status(400).json({
        mensagem: `Erro ao processar.`,
        error,
      });
    }
  }
}

export default CabalaController;