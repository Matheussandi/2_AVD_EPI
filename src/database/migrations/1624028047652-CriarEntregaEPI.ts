import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CriarEntregaEPI1624028047652 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "deliveryEPI",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "employee_id",
                        type: "uuid",
                        isNullable: true,
                    },
                    {
                        name: "epi_id",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "delivery_date",
                        type: "Date"
                    },
                    {
                        name: "quantity_delivered",
                        type: "number"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ],
                foreignKeys: [
                    {
                        name: 'FKEmployees',
                        referencedTableName: 'employees',
                        referencedColumnNames: ['id'],
                        columnNames: ['employee_id'],
                        onDelete: 'SET NULL',
                        onUpdate: 'SET NULL',
                    },
                    {
                        name: 'FKEpi',
                        referencedTableName: 'epi',
                        referencedColumnNames: ['id'],
                        columnNames: ['epi_id'],
                        onDelete: 'SET NULL',
                        onUpdate: 'SET NULL',
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("deliveryEPI")
    }
}
