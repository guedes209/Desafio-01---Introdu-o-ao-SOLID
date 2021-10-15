/* eslint-disable prettier/prettier */
/* eslint-disable import-helpers/order-imports */
import express from "express";
import { app } from ".";

app.use(express.json());
app.listen(3333, () => console.log("Server is running!"));
