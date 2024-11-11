// @desc    Get all organisations
// @route   GET /v1/organisations
// @access  Public
const getOrganisations = (req, res, next) => {
  res.status(200).json({ succes: true, message: "Liste des organisations" });
};



// @desc    Get Single organisations
// @route   GET /v1/organisations/:id
// @access  Public
const getOrganisationById = (req, res, next) => {
  res.status(200).json({ succes: true, message: "single organisations" });
};


// @desc    PUT  organisation
// @route   PUT /v1/organisations
// @access  Public
const updateOrganisation = (req, res, next) => {
  res.status(200).json({ succes: true, message: "Update organisations" });
};


// @desc    POST  organisation
// @route   POST/v1/organisations
// @access  Public
const createOrganisation = (req, res, next) => {
  res.status(200).json({ succes: true, message: "Supprimer  organisations" });
};


// @desc    DELETE  organisation
// @route   DELETE /v1/organisations
// @access  Public
const deleteOrganisation = (req, res, next) => {
  res.status(200).json({ succes: true, message: "Supprimer  organisations" });
};

export {
  getOrganisations,
  createOrganisation,
  getOrganisationById,
  updateOrganisation,
  deleteOrganisation,
};
