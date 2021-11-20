import { 
    Entity,
    PrimaryColumn, 
    Column, 
    UpdateDateColumn,
    CreateDateColumn,
    JoinColumn,
    ManyToOne
} from 'typeorm'

import { v4 as uuid } from 'uuid'

import { Employee } from './Employees'
import { Epi } from './EPI'

@Entity('deliveryEPI')
class DeliveryEpi {
    
    @PrimaryColumn()
    id: string;

    @JoinColumn({ name: 'employee_id' })
    @ManyToOne(() => Employee )
    employee: Employee;

    @Column()
    employee_id: string;

    @JoinColumn({ name: 'epi_id' })
    @ManyToOne(() => Epi )
    epi: Epi;

    @Column()
    epi_id: string;

    @Column()
    delivery_date: Date;

    @Column()
    quantity_delivered: number;

    @UpdateDateColumn()
    updated_at: Date;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { DeliveryEpi };