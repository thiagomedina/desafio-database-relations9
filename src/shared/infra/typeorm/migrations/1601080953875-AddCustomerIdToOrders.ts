import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";

export default class AddCustomerIdToOrders1601080953875 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.addColumn(
            'orders',
            new TableColumn({
                name: 'costumer_id',
                type: 'uuid',
                isNullable: true
            })
        )


        await queryRunner.createForeignKey(
            'orders',
            new TableForeignKey({
                name: 'OrdersCustumer',
                columnNames: ['costumer_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'costumers',
                onDelete: `SET NULL `

            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<any> {

        await queryRunner.dropForeignKey('orders', 'custumer_id')

        await queryRunner.dropColumn('orders', 'costumer_id')
    }

}
