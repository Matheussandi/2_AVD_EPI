import { Request, Response } from 'express'
import { EmployeesServices } from '../services/EmployeesService'

class EmployeesController {

    async create(req: Request, res: Response) {
        const { name, cpf, functions } = req.body

        const employeesServices = new EmployeesServices()

        try {
            const employees = await employeesServices.create({ name, cpf, functions })
            return res.json(employees)
        } catch(error) {
            return res
                    .status(400)
                    .json({ messagem: error.message })
        }
    }

    async index(req: Request, res: Response) {
        const employeesServices = new EmployeesServices()

        try {
            const employees = await employeesServices.index()
            return res
                    .status(200)
                    .json(employees)
        } catch (error) {
            return res
                    .status(400)
                    .json({ messagem: error.message })
        }
    }

    async delete(req: Request, res: Response) {

        const employeesServices = new EmployeesServices();
        const { id } = req.params;

        try {
            await employeesServices.delete({ id })
            return res.json({ message: 'Funcionário excluído com sucesso !!!'})
        } catch (error) {
            return res
                    .status(400)
                    .json({ messagem: error.message })
        }
    }

}

export { EmployeesController }
