-- CreateTable
CREATE TABLE "CompetitionCategoryResult" (
    "id" SERIAL NOT NULL,
    "idCompetitionCategory" INTEGER,
    "idSportsman" INTEGER,
    "timeInvoice" TEXT NOT NULL,

    CONSTRAINT "CompetitionCategoryResult_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CompetitionCategoryResult_id_key" ON "CompetitionCategoryResult"("id");

-- AddForeignKey
ALTER TABLE "CompetitionCategoryResult" ADD CONSTRAINT "CompetitionCategoryResult_idCompetitionCategory_fkey" FOREIGN KEY ("idCompetitionCategory") REFERENCES "CompetitionCategory"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompetitionCategoryResult" ADD CONSTRAINT "CompetitionCategoryResult_idSportsman_fkey" FOREIGN KEY ("idSportsman") REFERENCES "Sportsman"("id") ON DELETE SET NULL ON UPDATE CASCADE;
