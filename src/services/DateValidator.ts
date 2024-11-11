export default class DateValidator {
  static isValidDate(dateString: string): boolean {
    // Verifica se a data está no formato correto YYYY-MM-DD
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(dateString)) {
      return false;
    }

    // Converte a string em um objeto Date
    const date = new Date(dateString);
    const today = new Date();

    // Verifica se a data é válida e se não é uma data futura
    if (isNaN(date.getTime()) || date > today) {
      return false;
    }

    // Limita para datas a partir do ano 1900
    const minDate = new Date("1900-01-01");
    if (date < minDate) {
      return false;
    }

    return true;
  }
}