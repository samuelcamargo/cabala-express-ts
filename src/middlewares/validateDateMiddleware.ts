import { Request, Response, NextFunction } from "express";
import DateValidator from "../services/DateValidator";

const validateDateMiddleware: (req: Request, res: Response, next: NextFunction) => void = (req, res, next) => {
  const { data } = req.body;

  if (!DateValidator.isValidDate(data)) {
    return res.status(400).json({
      mensagem: "Data inválida. Certifique-se de usar o formato YYYY-MM-DD e uma data realista."
    });
  }

  next(); // Continua para o controlador se a data for válida
};

export default validateDateMiddleware;