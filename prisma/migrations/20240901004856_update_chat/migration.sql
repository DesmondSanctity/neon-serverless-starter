/*
  Warnings:

  - Added the required column `message` to the `Chat` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Chat" ADD COLUMN     "message" TEXT NOT NULL;
