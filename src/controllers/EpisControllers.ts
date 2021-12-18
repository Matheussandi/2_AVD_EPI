import { Request, Response } from 'express'
import { EpisServices } from '../services/EpisServices'

class EpisController {

    async create(req: Request, res: Response) {
        const { name_epi, validity_epi, num_CA } = req.body

        const episServices = new EpisServices()

        try {
            const epis = await episServices.create({ name_epi, validity_epi, num_CA })
            return res.json(epis)
        } catch(error) {
            return res
                    .status(400)
                    .json({ messagem: error.message })
        }
    }

    async index(req: Request, res: Response) {
        const episServices = new EpisServices()

        try {
            const epis = await episServices.index()
            return res
                    .status(200)
                    .json(epis)
        } catch (error) {
            return res
                    .status(400)
                    .json({ messagem: error.message })
        }
    }

    async delete(req: Request, res: Response) {
        const episServices = new EpisServices();
        const { id } = req.params;

        try {
            await episServices.delete({ id })
            return res.json({ message: 'EPI excluído com sucesso !!!'})
        } catch (error) {
            return res
                    .status(400)
                    .json({ messagem: error.message })
        }
    }
}

export { EpisController }
