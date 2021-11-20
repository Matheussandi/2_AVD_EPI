import { 
    Entity,
    PrimaryColumn, 
    Column, 
    UpdateDateColumn,
    CreateDateColumn
} from 'typeorm'

import { v4 as uuid } from 'uuid'

@Entity('epis')
class Epi {
    
    @PrimaryColumn()
    id: string;

    @Column()
    name_epi: string;

    @Column()
    validity_epi: string;

    @Column()
    num_CA: string;

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

export { Epi };