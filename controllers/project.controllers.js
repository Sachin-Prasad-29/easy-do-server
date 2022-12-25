const { createHttpError } = require('../errors/custom.error')

const {
  createProjectSvc,
  getProjectsSvc,
  getProjectByIdSvc,
  editProjectByIdSvc,
  deleteProjectByIdSvc
} = require('../services/project.services')

const createProject = async (req, res, next) => {
  const projectReqData = req.body

  if (Object.keys(projectReqData).length === 0) {
    const httpError = createHttpError('Body is missing', 400)
    next(httpError)
    return
  }
  try {
    const { email, name, profilePic } = res.locals.userData
    const user = { email, name, profilePic }
    projectReqData.createdBy = user
    const contributors = [email]
    projectReqData.contributors = contributors
    const projectDetails = await createProjectSvc(projectReqData)
    projectDetails.success = true
    res.status(201).json(projectDetails)
  } catch (error) {
    const httpError = createHttpError(error.message, 400)
    next(httpError)
  }
}
const getProjects = async (req, res, next) => {
  const userEmail = res.locals.userData.email
  try {
    const fetchedAllProjects = await getProjectsSvc(userEmail)
    const allProject = fetchedAllProjects.map((project) => {
      const singleProject = { ...project.toObject() }
      delete singleProject.link
      delete singleProject.workflow
      delete singleProject.issueTypes
      delete singleProject.issues
      delete singleProject.createdAt
      return singleProject
    })
    console.log(allProject)

    res.status(201).json({ success: true, projects: allProject })
  } catch (error) {
    const httpError = createHttpError(error.message, 400)
    next(httpError)
  }
}
const getProjectById = async (req, res, next) => {
  const projectId = req.params.id
  try {
    const fetchedProject = await getProjectByIdSvc(projectId)
    res.status(201).json({ success: true, project: fetchedProject })
  } catch (error) {
    const httpError = createHttpError(error.message, 400)
    next(httpError)
  }
}
const editProjectById = async (req, res, next) => {
  const projectId = req.params.id
  const projectReqData = req.body
  try {
    const updatedProject = await editProjectByIdSvc(projectId, projectReqData)
    res.status(201).json({ success: true, project: updatedProject })
  } catch (error) {
    const httpError = createHttpError(error.message, 400)
    next(httpError)
  }
}
const deleteProjectById = async (req, res, next) => {
  const projectId = req.params.id
  try {
    const deletedProjectDetails = await deleteProjectByIdSvc(projectId)
    res.status(201).json({ success: true, project: deletedProjectDetails })
  } catch (error) {
    const httpError = createHttpError(error.message, 400)
    next(httpError)
  }
}

module.exports = {
  createProject,
  getProjects,
  getProjectById,
  editProjectById,
  deleteProjectById
}
