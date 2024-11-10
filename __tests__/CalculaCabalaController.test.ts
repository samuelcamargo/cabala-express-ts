import CalculaCabalaController from '../src/controllers/CalculaCabalaController';

describe('CalculaCabalaController', () => {
  it('should calculate correctly', () => {
    const result = CalculaCabalaController.calcula(2024, 10, 10);
    expect(result.dinheiro).toBeDefined();
    expect(result.pessoas).toBeDefined();
    expect(result.coracao).toBeDefined();
    expect(result.racional).toBeDefined();
    expect(result.destino).toBeDefined();
    expect(result.fe).toBeDefined();
  });
});