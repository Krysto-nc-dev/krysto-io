import mongoose from "mongoose";

import slugify from "slugify";
import geocoder from "../utils/geocoder.js";

const OrganisationSchema = new mongoose.Schema(
  {
    plasticTypes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "PlasticType",
        required: true,
      },
    ],
    type: {
      type: String,
      enum: ["Entreprise", "Association"],
      required: [true, "Veuillez spécifier le type d'organisation"],
    },
    name: {
      type: String,
      required: [true, "Veuillez fournir un nom pour cette organisation"],
      maxlength: [50, "Le nom ne peut pas dépasser 50 caractères"],
      trim: true,
      unique: true,
    },
    slug: String,
    description: {
      type: String,
      required: [
        true,
        "Veuillez fournir une description pour cette organisation",
      ],
      maxlength: [500, "La description ne peut pas dépasser 500 caractères"],
    },
    address: {
      type: String,
      required: [true, "Veuillez fournir une adresse pour cette organisation"],
    },

    location: {
      type: {
        type: String,
        enum: ["Point"],
        required: false,
      },
      coordinates: {
        type: [Number],
        required: false,
        index: "2dsphere",
      },
      formattedAddress: String,
      street: String,
      city: String,
      zipcode: String,
      country: String,
    },
    averageRating: {
      type: Number,
      min: [1, "La note minimale est de 1"],
      max: [10, "La note maximale est de 10"],
    },
    photo: { type: String, default: "no-photo.jpg" },
    colors: {
      primary: { type: String, default: "#000000" },
      secondary: { type: String, default: "#FFFFFF" },
      accent: { type: String, default: "#FF5733" },
    },
    contactInfo: {
      primaryContact: {
        name: String,
        role: String,
        phone: String,
      },
      secondaryPhone: String,
    },
    certifications: {
      type: [String],
      enum: ["ISO 14001", "B Corp", "Precious Plastic Member", "Label Green"],
    },
    services: {
      type: [String],
      enum: ["Recyclage", "Production", "Formation", "Consulting"],
    },
    openingHours: {
      monday: { open: String, close: String },
      tuesday: { open: String, close: String },
      // Autres jours
    },
    projects: [
      {
        title: { type: String, required: true },
        description: String,
        date: Date,
        outcome: String,
      },
    ],
    socialLinks: {
      linkedin: String,
      instagram: String,
      facebook: String,
      twitter: String,
    },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

// Middleware pour créer un slug à partir du nom de l'organisation
OrganisationSchema.pre("save", function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

//geocode & create location field

OrganisationSchema.pre("save", async function (next) {
  const loc = await geocoder.geocode(this.address);
  this.location = {
    type: "Point",
    coordinates: [loc[0].longitude, loc[0].latitude],
    formattedAddress: loc[0].formattedAddress,
    street: loc[0].streetName,
    city: loc[0].city,
    zipcode: loc[0].zipcode,
    country: loc[0].countryCode,
  };

  // Do not save address in DB
  this.address = undefined;
  next();
});

export default mongoose.model("Organisation", OrganisationSchema);
