-- CreateTable
CREATE TABLE "Auth" (
    "id" SERIAL NOT NULL,
    "login" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Auth_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Team" (
    "name" TEXT NOT NULL,
    "idTeam" INTEGER NOT NULL,

    CONSTRAINT "Team_pkey" PRIMARY KEY ("idTeam")
);

-- CreateIndex
CREATE UNIQUE INDEX "Auth_id_key" ON "Auth"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Auth_login_key" ON "Auth"("login");

-- CreateIndex
CREATE UNIQUE INDEX "Team_idTeam_key" ON "Team"("idTeam");

-- AddForeignKey
ALTER TABLE "Team" ADD CONSTRAINT "Team_idTeam_fkey" FOREIGN KEY ("idTeam") REFERENCES "Auth"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
