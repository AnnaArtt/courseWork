-- CreateTable
CREATE TABLE "Judges" (
    "name" TEXT NOT NULL,
    "idJudges" INTEGER NOT NULL,

    CONSTRAINT "Judges_pkey" PRIMARY KEY ("idJudges")
);

-- CreateTable
CREATE TABLE "Sportsman" (
    "name" TEXT NOT NULL,
    "sex" TEXT NOT NULL,
    "idSportsman" INTEGER NOT NULL,

    CONSTRAINT "Sportsman_pkey" PRIMARY KEY ("idSportsman")
);

-- CreateIndex
CREATE UNIQUE INDEX "Judges_idJudges_key" ON "Judges"("idJudges");

-- CreateIndex
CREATE UNIQUE INDEX "Sportsman_idSportsman_key" ON "Sportsman"("idSportsman");

-- AddForeignKey
ALTER TABLE "Judges" ADD CONSTRAINT "Judges_idJudges_fkey" FOREIGN KEY ("idJudges") REFERENCES "Auth"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sportsman" ADD CONSTRAINT "Sportsman_idSportsman_fkey" FOREIGN KEY ("idSportsman") REFERENCES "Auth"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
