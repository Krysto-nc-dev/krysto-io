import express from 'express'
import { createOrganisation, deleteOrganisation, getOrganisationById, getOrganisations, updateOrganisation } from '../controllers/organisationController.js'

const router = express.Router()

router.route('/').get(getOrganisations).post(createOrganisation)
router
  .route('/:id')
  .get(getOrganisationById)
  .put(updateOrganisation)
  .delete(deleteOrganisation)



export default router
