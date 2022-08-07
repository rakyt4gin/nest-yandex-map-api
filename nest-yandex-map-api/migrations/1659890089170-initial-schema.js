const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class initialSchema1659890089170 {
    name = 'initialSchema1659890089170'

    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "map_object" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "type" varchar NOT NULL, "title" varchar NOT NULL, "hint" varchar NOT NULL, "description" varchar NOT NULL, "images" varchar array NOT NULL, "geometry" varchar NOT NULL, "more" varchar NOT NULL)`);
    }

    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "map_object"`);
    }
}
