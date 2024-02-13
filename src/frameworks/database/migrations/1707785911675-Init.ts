import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1707785911675 implements MigrationInterface {
    name = 'Init1707785911675'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`account_loyalty\` (\`id\` int NOT NULL AUTO_INCREMENT, \`percentage\` int NOT NULL, \`price\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`characters\` (\`id\` int NOT NULL AUTO_INCREMENT, \`vocation\` varchar(255) NOT NULL, \`level\` int NOT NULL, \`world\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tibia_coins\` (\`id\` int NOT NULL AUTO_INCREMENT, \`code\` varchar(255) NOT NULL, \`name\` varchar(255) NOT NULL, \`price\` int NOT NULL, \`amount\` int NOT NULL, \`min\` int NOT NULL, \`img\` varchar(255) NOT NULL, \`step\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tibia_coins_promotions\` (\`id\` int NOT NULL AUTO_INCREMENT, \`description\` varchar(255) NOT NULL, \`min\` int NOT NULL, \`max\` int NOT NULL, \`price\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`stores\` ADD \`cellphone\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`stores\` DROP COLUMN \`cellphone\``);
        await queryRunner.query(`DROP TABLE \`tibia_coins_promotions\``);
        await queryRunner.query(`DROP TABLE \`tibia_coins\``);
        await queryRunner.query(`DROP TABLE \`characters\``);
        await queryRunner.query(`DROP TABLE \`account_loyalty\``);
    }

}
