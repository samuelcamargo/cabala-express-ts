import { getRepository } from 'typeorm';
import CalculaCabalaController from '../src/controllers/CalculaCabalaController';

jest.mock('typeorm', () => ({
  getRepository: jest.fn(),
}));

describe('CalculaCabalaController', () => {
  it('should calculate correctly', async () => {
    const mockRepository = {
      findOne: jest.fn().mockImplementation(({ id }) => {
        const orixas = [
          { id: 1, name: 'Exu' },
          { id: 2, name: 'Ibeji' },
          // Adicione mais orixás conforme necessário para o teste
        ];
        return orixas.find(orixa => orixa.id === id) || null;
      }),
    };
    (getRepository as jest.Mock).mockReturnValue(mockRepository);

    const result = await CalculaCabalaController.calcula(2024, 10, 10);
    expect(result.dinheiro).toBeDefined();
    expect(result.pessoas).toBeDefined();
    expect(result.coracao).toBeDefined();
    expect(result.racional).toBeDefined();
    expect(result.destino).toBeDefined();
    expect(result.fe).toBeDefined();
  });
});