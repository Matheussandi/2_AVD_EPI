import { getCustomRepository } from 'typeorm';
import { EmployeesRepository } from '../repositories/EmployeesRepository';


interface IEmployeesCreate {
    name: string;
    cpf: string;
    functions: string;
}

interface IEmployeesID {
    id: string;
}

class EmployeesServices {

    async create({ name, cpf, functions }: IEmployeesCreate) {

        const employeesRepository = getCustomRepository(EmployeesRepository);

        const employeeExisting = await employeesRepository.findOne({ cpf });

        if (employeeExisting) {
            throw new Error(`Funcionário existente`);
        }

        const employees = employeesRepository.create({
            name,
            cpf,
            functions
        })

        await employeesRepository.save(employees)

        return employees;

    }

    async index() {
        const employeesRepository = getCustomRepository(EmployeesRepository);

        const employees = await employeesRepository.find();

        return employees;
    }


    async delete({ id }: IEmployeesID) {
        const employeesRepository = getCustomRepository(EmployeesRepository);

        let employees = await employeesRepository.findOne({ id });

        if (!employees) {
            throw new Error(`Cliente não encontrado`);
        }

        return await employeesRepository.delete({ id });
    }
    
}

export { EmployeesServices }