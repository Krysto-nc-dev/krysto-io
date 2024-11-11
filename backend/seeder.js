import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";

import connectDB from "./config/db.js";
import User from "./models/userModel.js";
import users from "./_data/users.js";
import organisations from "./_data/organisations.js";
import Organisation from "./models/organisationModel.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    // Suppression des données existantes
    await User.deleteMany();
    await Organisation.deleteMany();

    // Insertion des utilisateurs
    await User.insertMany(users);

    // Insertion des organisations une par une pour déclencher le middleware
    for (const organisationData of organisations) {
      const organisation = new Organisation(organisationData);
      await organisation.save(); // Cela déclenche le middleware pour chaque organisation
    }

    console.log("Data Imported!".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Organisation.deleteMany();
    await User.deleteMany();

    console.log("Data Destroyed!".red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
