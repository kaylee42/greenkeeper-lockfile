'use strict'

const env = process.env

const _ = require('lodash')
const gitHelpers = require('../lib/git-helpers')

// Jenkins reports the branch name and Git URL in a couple of different places depending on use of the new
// pipeline vs. older job types.
const branchName = env.CHANGE_BRANCH || env.GIT_BRANCH
const gitUrl = env.CHANGE_URL || env.GIT_URL

module.exports = {
  gitUrl,
  branchName,
  firstPush: env.BUILD_NUMBER === '1' || gitHelpers.getNumberOfCommitsOnBranch(env.GIT_BRANCH) === 1,
  correctBuild: true, // assuming this is always the correct build to update the lockfile
  uploadBuild: true // assuming 1 build per branch/PR
}
