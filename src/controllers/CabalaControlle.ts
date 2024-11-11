import { Request, Response } from "express";
import calculaCabalaController from "./CalculaCabalaController";
import { orixas, Orixa } from "../models/OrixasModel";

class CabalaController {

  static async listarOrixas(req: Request, res: Response) {
    res.status(200).json(orixas);
  }

  static getOrixaNameById(req: Request, res: Response) {
    const id = parseInt(req.params.id, 10);
    const orixa = orixas.find((o: Orixa) => o.id === id);

    if (orixa) {
      res.status(200).json(orixa);
    } else {
      res.status(404).json({ message: "Orixá não encontrado" });
    }
  }

  static async calculaCabala(req: Request, res: Response) {
    const data = req.body.data;
    try {
      // Divide a data em ano, mês e dia 
      const [ano, mes, dia] = data.split('-').map(Number);
      const cabalaCalculada = calculaCabalaController.calcula(ano, mes, dia);
      res.status(200).json({
        Nascimento: `Dia: ${dia} - Mês: ${mes} -  Ano: ${ano}`,
        Cabala: cabalaCalculada
      });
    } catch {
      res.status(400).json({
        mensagem: `Erro ao processar.`
      });
    }
  }

}

export default CabalaController;