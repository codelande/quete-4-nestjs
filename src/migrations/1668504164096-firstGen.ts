import { MigrationInterface, QueryRunner } from "typeorm";

export class firstGen1668504164096 implements MigrationInterface {
    name = 'firstGen1668504164096'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`article\` (\`id\` int NOT NULL AUTO_INCREMENT, \`Title\` varchar(255) NOT NULL, \`content\` varchar(255) NOT NULL, \`author\` varchar(255) NOT NULL, \`creationDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`article\``);
    }

}
