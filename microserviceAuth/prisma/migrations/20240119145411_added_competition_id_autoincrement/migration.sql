-- AlterTable
CREATE SEQUENCE competition_id_seq;
ALTER TABLE "Competition" ALTER COLUMN "id" SET DEFAULT nextval('competition_id_seq');
ALTER SEQUENCE competition_id_seq OWNED BY "Competition"."id";
