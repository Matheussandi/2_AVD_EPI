import { Request, Response } from 'express'
import { DeliveryEpiServices } from '../services/DeliveryEpiServices'

class DeliveryEpiController {

    async create(req: Request, res: Response) {
        const { employee_id, epi_id, delivery_date, quantity_delivered } = req.body

        const deliveryEpiServices = new DeliveryEpiServices()

        try {
            const deliveryEpi = await deliveryEpiServices.create({ employee_id, epi_id, delivery_date, quantity_delivered })
            return res.json(deliveryEpi)
        } catch(error) {
            return res
                    .status(400)
                    .json({ messagem: error.message })
        }
    }

    async index(req: Request, res: Response) {
        const deliveryEpiServices = new DeliveryEpiServices()

        try {
            const deliveryEpi = await deliveryEpiServices.index()
            return res
                    .status(200)
                    .json(deliveryEpi)
        } catch (error) {
            return res
                    .status(400)
                    .json({ messagem: error.message })
        }
    }

    async delete(req: Request, res: Response) {

        const deliveryEpiServices = new DeliveryEpiServices();
        const { id } = req.params;

        try {
            await deliveryEpiServices.delete({ id })
            return res.json({ message: 'Cliente excluído com sucesso !!!'})
        } catch (error) {
            return res
                    .status(400)
                    .json({ messagem: error.message })
        }
    }

}

export { DeliveryEpiController }
