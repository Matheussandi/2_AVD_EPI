import { EntityRepository, Repository } from 'typeorm';
import { DeliveryEpi } from '../entities/DeliverysEPI';

@EntityRepository(DeliveryEpi)
class DeliveryEpiRepository extends Repository<DeliveryEpi> {

}

export { DeliveryEpiRepository }