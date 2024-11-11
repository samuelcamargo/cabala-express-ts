import { getRepository } from "typeorm";
import { Orixa } from "../entities/Orixa";

export const orixasSeed = async () => {
  const orixaRepository = getRepository(Orixa);

  const orixas = [
    { id: 1, name: "Exu" },
    { id: 2, name: "Ibeji" },
    { id: 3, name: "Ogum" },
    { id: 4, name: "Omolu" },
    { id: 5, name: "Oxum" },
    { id: 6, name: "Obará" },
    { id: 7, name: "Obaluaê" },
    { id: 8, name: "Ejionilê" },
    { id: 9, name: "Iemanjá" },
    { id: 10, name: "Oxalufá" },
    { id: 11, name: "Owonrin" },
    { id: 12, name: "Xangô" },
    { id: 13, name: "Nanã" },
    { id: 14, name: "Oxumaré" },
    { id: 15, name: "Obá" },
    { id: 16, name: "Oxalá" }
  ];

  for (const orixa of orixas) {
    const existingOrixa = await orixaRepository.findOne({ where: { id: orixa.id } });
    if (!existingOrixa) {
      await orixaRepository.save(orixa);
    }
  }

  console.log("Seed de orixás concluída!");
};