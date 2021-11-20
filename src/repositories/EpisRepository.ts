import { EntityRepository, Repository } from 'typeorm';
import { Epi } from '../entities/EPI';

@EntityRepository(Epi)
class EpisRepository extends Repository<Epi> {

}

export { EpisRepository }