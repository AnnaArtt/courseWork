-- AlterTable
CREATE SEQUENCE competitioncategory_id_seq;
ALTER TABLE "CompetitionCategory" ALTER COLUMN "id" SET DEFAULT nextval('competitioncategory_id_seq');
ALTER SEQUENCE competitioncategory_id_seq OWNED BY "CompetitionCategory"."id";
