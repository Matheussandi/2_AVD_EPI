import { EntityRepository, Repository } from 'typeorm';
import { Employee } from '../entities/Employees';

@EntityRepository(Employee)
class EmployeesRepository extends Repository<Employee> {

}

export { EmployeesRepository }