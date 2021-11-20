import { getCustomRepository } from 'typeorm';
import { DeliveryEpiRepository } from '../repositories/DeliverysEpiRepository';
import { EmployeesRepository } from '../repositories/EmployeesRepository';
import { EpisRepository } from '../repositories/EpisRepository'

interface IDeliveryEpiCreate {
    employee_id: string;
    epi_id: string;
    delivery_date: Date;
    quantity_delivered: number;
}

interface IDeliveryEpiID {
    id: string;
}

class DeliveryEpiServices {

    async create({ employee_id, epi_id, delivery_date, quantity_delivered }: IDeliveryEpiCreate) {

        const employeesRepository = getCustomRepository(EmployeesRepository);

        const employee = await employeesRepository.findOne( employee_id );

        if (!employee) {
            throw new Error(`Funcionário inválido`);
        }

        const episRepository = getCustomRepository(EpisRepository);

        const epi = await episRepository.findOne( epi_id );

        if (!epi) {
            throw new Error(`Epi inválido`);
        }

        const deliveryEpiRepository = getCustomRepository(DeliveryEpiRepository);

        const deliveryEpi = deliveryEpiRepository.create({
            employee_id,
            epi_id,
            delivery_date, 
            quantity_delivered
        })

        new Date(delivery_date);

        await deliveryEpiRepository.save(deliveryEpi)

        return deliveryEpi;

    }

    async index() {
        const deliveryEpiRepository = getCustomRepository(DeliveryEpiRepository);

        const deliveryEpi = deliveryEpiRepository.find({
            relations: ['employees', 'epi']
        });

        return deliveryEpi;
    }


    async delete({ id }: IDeliveryEpiID) {
        const deliveryEpiRepository = getCustomRepository(DeliveryEpiRepository);

        let deliveryEpi = await deliveryEpiRepository.findOne({ id });

        if (!deliveryEpi) {
            throw new Error(`ID não encontrado`);
        }

        return await deliveryEpiRepository.delete({ id });
    }
    
}

export { DeliveryEpiServices }
