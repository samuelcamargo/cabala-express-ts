import { orixas, Orixa } from "../models/OrixasModel";

export default class CalculaCabalaController {
  // Função que recalcula o valor se passar de 16.
  static recalc16(valor: number): number {
    return String(valor)
      .split('')
      .reduce((a, b) => Number(a) + Number(b), 0);
  }

  static getOrixaNameById(id: number): string {
    const orixa = orixas.find((o: Orixa) => o.id === id);
    return orixa ? orixa.name : "N/A";
  }

  static calcula(
    ano: number,
    mes: number,
    dia: number
  ) {
    // Separando os dígitos do dia
    const n1 = Math.floor(dia / 10); // Primeiro dígito do dia
    const n2 = dia % 10;             // Segundo dígito do dia

    // Separando os dígitos do mês
    const n3 = Math.floor(mes / 10); // Primeiro dígito do mês
    const n4 = mes % 10;             // Segundo dígito do mês

    // Separando os dígitos do ano
    const n5 = Math.floor(ano / 1000);              // Primeiro dígito do ano
    const n6 = Math.floor((ano % 1000) / 100);      // Segundo dígito do ano
    const n7 = Math.floor((ano % 100) / 10);        // Terceiro dígito do ano
    const n8 = ano % 10;                            // Quarto dígito do ano

    // Somando os valores de acordo com a lógica do cálculo
    let soma1 = n1 + n3 + n5 + n7;
    let soma2 = n2 + n4 + n6 + n8;

    // Recalculando valores maiores que 16
    if (soma1 > 16) {
      soma1 = this.recalc16(soma1);
    }
    if (soma2 > 16) {
      soma2 = this.recalc16(soma2);
    }

    const dinheiro = `${soma1} - ${this.getOrixaNameById(soma1)}`;
    const pessoas = `${soma2} - ${this.getOrixaNameById(soma2)}`;

    // Cálculo do Coração
    let somaCoracao = soma1 + soma2;
    if (somaCoracao > 16) {
      somaCoracao = this.recalc16(somaCoracao);
    }
    const coracao = `${somaCoracao} - ${this.getOrixaNameById(somaCoracao)}`;

    // Cálculo do Racional
    let somaRacional = soma1 + soma2 + somaCoracao;
    if (somaRacional > 16) {
      somaRacional = this.recalc16(somaRacional);
    }
    const racional = `${somaRacional} - ${this.getOrixaNameById(somaRacional)}`;

    // Cálculo do Destino
    let somaDestino = soma1 + soma2 + somaCoracao + somaRacional;
    if (somaDestino > 16) {
      somaDestino = this.recalc16(somaDestino);
    }
    const destino = `${somaDestino} - ${this.getOrixaNameById(somaDestino)}`;

    // Cálculo da Fé
    let somaFe = n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8;
    if (somaFe > 16) {
      somaFe = this.recalc16(somaFe);
    }
    const fe = `${somaFe} - ${this.getOrixaNameById(somaFe)}`;

    return {
      dinheiro,
      pessoas,
      coracao,
      racional,
      destino,
      fe
    };
  }
}