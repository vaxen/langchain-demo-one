// import {MigrationInterface, QueryRunner} from "typeorm";
// import {faker} from '@faker-js/faker';
//
// export class GenerateRandomUsers1709123456789 implements MigrationInterface {
//     private readonly corporations = ['corporation-a', 'corporation-b', 'corporation-c'];
//     private readonly numberOfUsers = 100;
//
//     public async up(queryRunner: QueryRunner): Promise<void> {
//         for (let i = 0; i < this.numberOfUsers; i++) {
//             const name = faker.person.fullName();
//             const org = this.corporations[Math.floor(Math.random() * this.corporations.length)];
//             const creationDate = faker.date.past({years: 5}).toISOString().split('T')[0];
//             const address = faker.location.streetAddress();
//
//             await queryRunner.query(
//                 `INSERT INTO users (name, org, creation_date, address) VALUES ($1, $2, $3, $4)`,
//                 [name, org, creationDate, address]
//             );
//         }
//     }
//
//     public async down(queryRunner: QueryRunner): Promise<void> {
//         await queryRunner.query(`DELETE FROM users`);
//     }
// }