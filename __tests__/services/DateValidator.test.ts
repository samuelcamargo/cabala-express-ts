import DateValidator from "../../src/services/DateValidator";

describe("DateValidator", () => {
  it("deve retornar true para uma data válida", () => {
    expect(DateValidator.isValidDate("2000-01-01")).toBe(true);
  });

  it("deve retornar false para uma data no formato inválido", () => {
    expect(DateValidator.isValidDate("01-01-2000")).toBe(false);
  });

  it("deve retornar false para uma data futura", () => {
    const futureDate = new Date();
    futureDate.setFullYear(futureDate.getFullYear() + 1);
    const futureDateString = futureDate.toISOString().split("T")[0];
    expect(DateValidator.isValidDate(futureDateString)).toBe(false);
  });

  it("deve retornar false para uma data anterior a 1900", () => {
    expect(DateValidator.isValidDate("1899-12-31")).toBe(false);
  });
});