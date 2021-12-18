import { getCustomRepository } from 'typeorm';
import { EpisRepository } from '../repositories/EpisRepository';


interface IEpiCreate {
    name_epi: string;
    validity_epi: string;
    num_CA: string;
}

interface IEpiID {
    id: string;
}

class EpisServices {

    async create({ name_epi, validity_epi, num_CA }: IEpiCreate) {

        const episRepository = getCustomRepository(EpisRepository);

        const epis = episRepository.create({
            name_epi,
            validity_epi,
            num_CA
        })

        await episRepository.save(epis)

        return epis;

    }

    async index() {

        const episRepository = getCustomRepository(EpisRepository);

        const epis = await episRepository.find();

        return epis;
    }


    async delete({ id }: IEpiID) {
        const episRepository = getCustomRepository(EpisRepository);

        let epis = await episRepository.findOne({ id });

        if (!epis) {
            throw new Error(`EPI não encontrada`);
        }

        return await episRepository.delete({ id });
    }
}

export { EpisServices }
