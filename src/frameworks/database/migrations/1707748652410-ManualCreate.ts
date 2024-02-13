import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class ManualCreate1707748652410 implements MigrationInterface {
  name?: string | undefined
  transaction?: boolean | undefined

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'stores',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'name',
            type: 'varchar',
            length: '60',
          },
          {
            name: 'qrcode',
            type: 'varchar',
          },
          {
            name: 'email',
            type: 'varchar',
          },
          {
            name: 'temporaryPassword',
            type: 'varchar',
            isNullable: true,
          },
        ],
      }),
      true
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('stores', true)
  }
}
