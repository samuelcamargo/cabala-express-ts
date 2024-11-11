import { getRepository } from "typeorm";
import { Orixa } from "../entities/Orixa";

export default class CalculaCabalaController {
  // Função que reduz um valor para um único dígito, se necessário.
  static reduceToSingleDigit(value: number): number {
    while (value > 16) {
      value = String(value)
        .split('')
        .reduce((a, b) => Number(a) + Number(b), 0);
    }
    return value;
  }

  // Obtém o nome do Orixá pelo ID ou retorna "N/A" se não encontrado.
  static async getOrixaNameById(id: number): Promise<string> {
    const orixaRepository = getRepository(Orixa);
    const orixa = await orixaRepository.findOne({ where: { id } });
    return orixa ? orixa.name : "N/A";
  }

  // Função principal para calcular os valores de cabala.
  static async calcula(ano: number, mes: number, dia: number) {
    // Extrai os dígitos de dia, mês e ano.
    const [n1, n2] = [Math.floor(dia / 10), dia % 10];
    const [n3, n4] = [Math.floor(mes / 10), mes % 10];
    const [n5, n6, n7, n8] = [
      Math.floor(ano / 1000),
      Math.floor((ano % 1000) / 100),
      Math.floor((ano % 100) / 10),
      ano % 10,
    ];

    // Calcula somas e reduz para valores de 1 a 16.
    const soma1 = this.reduceToSingleDigit(n1 + n3 + n5 + n7);
    const soma2 = this.reduceToSingleDigit(n2 + n4 + n6 + n8);

    const dinheiro = `${soma1} - ${await this.getOrixaNameById(soma1)}`;
    const pessoas = `${soma2} - ${await this.getOrixaNameById(soma2)}`;

    // Calcula o valor do Coração, Racional, Destino e Fé.
    const somaCoracao = this.reduceToSingleDigit(soma1 + soma2);
    const coracao = `${somaCoracao} - ${await this.getOrixaNameById(somaCoracao)}`;

    const somaRacional = this.reduceToSingleDigit(soma1 + soma2 + somaCoracao);
    const racional = `${somaRacional} - ${await this.getOrixaNameById(somaRacional)}`;

    const somaDestino = this.reduceToSingleDigit(soma1 + soma2 + somaCoracao + somaRacional);
    const destino = `${somaDestino} - ${await this.getOrixaNameById(somaDestino)}`;

    const somaFe = this.reduceToSingleDigit(n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8);
    const fe = `${somaFe} - ${await this.getOrixaNameById(somaFe)}`;

    return {
      dinheiro,
      pessoas,
      coracao,
      racional,
      destino,
      fe,
    };
  }
}