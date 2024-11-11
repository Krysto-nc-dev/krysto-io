import ErrorResponse from "../utils/errorResponse.js";
import asyncHandler from "../middlewares/async.js";
import organisationModel from "../models/organisationModel.js";
import geocoder from "../utils/geocoder.js";

// @access  Public
const getOrganisations = asyncHandler(async (req, res, next) => {
  const organisations = await organisationModel.find();
  res
    .status(200)
    .json({ succes: true, count: organisations.length, data: organisations });
});

// @desc    Get Single organisations
// @route   GET /v1/organisations/:id
// @access  Public
const getOrganisationById = asyncHandler(async (req, res, next) => {
  const organisation = await organisationModel.findById(req.params.id);
  if (!organisation) {
    return next(
      new ErrorResponse(
        `Organisation not found with id of ${req.params.id}`,
        404
      )
    );
  }
  res.status(200).json({ succes: true, data: organisation });
});

// @desc    PUT  organisation
// @route   PUT /v1/organisations
// @access  Public
const updateOrganisation = asyncHandler(async (req, res, next) => {
  const organisation = await organisationModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  if (!organisation) {
    return next(
      new ErrorResponse(
        `Organisation not found with id of ${req.params.id}`,
        404
      )
    );
  }
  res.status(200).json({ succes: true, data: organisation });
});

// @desc    POST  organisation
// @route   POST/v1/organisations
// @access  Public
const createOrganisation = asyncHandler(async (req, res, next) => {
  const organisation = await organisationModel.create(req.body);
  res.status(201).json({ succes: true, data: organisation });
});

// @desc   GET  organisation  within a radius
// @route  GET /v1/organisations/radius/:zipcode/:distance
// @access  Public
const getOrganisationsInRadius = asyncHandler(async (req, res, next) => {
  const { zipcode, distance } = req.params;

  // Get lat/lng from geocoder
  const loc = await geocoder.geocode(zipcode);
  const lat = loc[0].latitude;
  const lng = loc[0].longitude;

  // Calc radius using radians
  // Divide dist by radius of Earth
  // Earth Radius = 3,963 mi / 6,378 km
  const radius = distance / 6.378;

  const organisations = await organisationModel.find({
    location: { $geoWithin: { $centerSphere: [[lng, lat], radius] } },
  });

  res.status(200).json({
    success: true,
    count: organisations.length,
    data: organisations,
  });
});
// @desc    DELETE  organisation
// @route   DELETE /v1/organisations
// @access  Public
const deleteOrganisation = asyncHandler(async (req, res, next) => {
  const organisation = await organisationModel.findByIdAndDelete(req.params.id);

  if (!organisation) {
    return next(
      new ErrorResponse(
        `Organisation not found with id of ${req.params.id}`,
        404
      )
    );
  }
  res
    .status(200)
    .json({ succes: true, message: "Organisation supprimée", data: {} });
});

export {
  getOrganisations,
  createOrganisation,
  getOrganisationById,
  updateOrganisation,
  deleteOrganisation,
  getOrganisationsInRadius,
};
