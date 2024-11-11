import ErrorResponse from "../utils/errorResponse.js";
import organisationModel from "../models/organisationModel.js";

// @access  Public
const getOrganisations = async (req, res, next) => {
  try {
    const organisations = await organisationModel.find();
    res
      .status(200)
      .json({ succes: true, count: organisations.length, data: organisations });
  } catch (error) {
    next(error);
  }
};

// @desc    Get Single organisations
// @route   GET /v1/organisations/:id
// @access  Public
const getOrganisationById = async (req, res, next) => {
  try {
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
  } catch (error) {
    // res.status(400).json({ succes: false, message: error.message });
    next(error);
  }
};

// @desc    PUT  organisation
// @route   PUT /v1/organisations
// @access  Public
const updateOrganisation = async (req, res, next) => {
  try {
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
  } catch (error) {
    next(error);
  }
};

// @desc    POST  organisation
// @route   POST/v1/organisations
// @access  Public
const createOrganisation = async (req, res, next) => {
  try {
    const organisation = await organisationModel.create(req.body);
    res.status(201).json({ succes: true, data: organisation });
  } catch (error) {
    next(error);
  }
};

// @desc    DELETE  organisation
// @route   DELETE /v1/organisations
// @access  Public
const deleteOrganisation = async (req, res, next) => {
  try {
    const organisation = await organisationModel.findByIdAndDelete(
      req.params.id
    );

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
  } catch (error) {
    next(error);
  }
};

export {
  getOrganisations,
  createOrganisation,
  getOrganisationById,
  updateOrganisation,
  deleteOrganisation,
};
