import { EntityRepository, Repository } from "typeorm";
import { Orixa } from "../entities/Orixa";

@EntityRepository(Orixa)
export class OrixaRepository extends Repository<Orixa> {
  // Aqui você pode adicionar métodos personalizados para buscar ou manipular os dados de Orixas
}