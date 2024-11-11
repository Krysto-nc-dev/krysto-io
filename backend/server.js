import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import connectDB from "./config/db.js";
import morgan from "morgan";
import colors from "colors";
import errorHandler from "./middlewares/error.js";
// Routes files
import organisationRoutes from "./routes/organisationRoutes.js";

dotenv.config({ path: "./.env" });

const app = express();
// Middleware pour parsing des requêtes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const isProduction = process.env.NODE_ENV === "production";
const port = process.env.PORT || 4000;

console.log(
  `L'application est en mode ${isProduction ? "Production" : "Développement"}`
    .yellow
);

// Récupère le chemin du répertoire actuel
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Connexion à la base de données
connectDB();

// Middleware pour servir les fichiers statiques du dossier "doc"
app.use("/doc", express.static(path.join(__dirname, "doc")));
// Serveur de fichiers statiques pour les uploads
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Configuration CORS en fonction de l'environnement
const allowedOrigins = [
  "http://localhost:3000", // Développement local
  "https://krysto.io", // Domaine principal en production
  "https://api.krysto.io", // Sous-domaine API en production
];

app.use(
  cors({
    credentials: true,
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg =
          "La politique CORS ne permet pas l'accès depuis cette origine.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Authorization", "Content-Type", "Accept"],
  })
);

// Middleware pour les requêtes OPTIONS (pré-vol) avec CORS
app.options("*", cors(), (req, res) => {
  res.sendStatus(204);
});

// Route principale pour servir la documentation de l'API
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../doc", "api-doc.html"));
});

// Middleware pour log les requêtes en mode développement
if (process.env.NODE_ENV == "development") {
  app.use(morgan("dev"));
}

app.use("/v1/organisations", organisationRoutes);


// Middleware pour gérer les erreurs
app.use(errorHandler);

// Lancement du serveur
app.listen(port, () => {
  console.log(
    `Serveur en cours d'exécution sur le port ${port} en mode ${
      isProduction ? `Production`.red : `Développement`.cyan
    }`.green.bold
  );
});
