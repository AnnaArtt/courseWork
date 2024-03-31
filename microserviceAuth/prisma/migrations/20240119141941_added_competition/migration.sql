-- CreateTable
CREATE TABLE "Competition" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Competition_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CompetitionCategory" (
    "id" INTEGER NOT NULL,
    "idCompetition" INTEGER,
    "category" TEXT NOT NULL,

    CONSTRAINT "CompetitionCategory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Competition_id_key" ON "Competition"("id");

-- CreateIndex
CREATE UNIQUE INDEX "CompetitionCategory_id_key" ON "CompetitionCategory"("id");

-- AddForeignKey
ALTER TABLE "CompetitionCategory" ADD CONSTRAINT "CompetitionCategory_idCompetition_fkey" FOREIGN KEY ("idCompetition") REFERENCES "Competition"("id") ON DELETE SET NULL ON UPDATE CASCADE;
