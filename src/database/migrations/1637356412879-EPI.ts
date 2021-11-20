import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class EPI1637356412879 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "epis",
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,

                    },
                    {
                        name: 'name_epi',
                        type: "varchar",
                    },
                    {
                        name: 'validity_epi',
                        type: "varchar",
                    },
                    {
                        name: 'num_CA',
                        type: 'varchar',
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()'
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ],
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('epis')
    }

}
