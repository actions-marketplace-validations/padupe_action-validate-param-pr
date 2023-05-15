import { getInput, info, setFailed } from '@actions/core'
import * as param from '@actions/github'
import { validateParamAtPullRequest } from './service'

const gitHubToken = getInput('gitHubToken')

async function run(): Promise<void> {
  try {
    if (gitHubToken) {
      const conditionalValue = getInput('conditionalValue')
      const valueThatMustExist = getInput('valueThatMustExist')
      const pullRequestNumber = Number(param.context.ref.split('/')[2])
      const repoName = param.context.payload.repository?.owner.login
      const repoOwner = param.context.payload.repository?.name

      info(
        `repoName: ${repoName}\nrepoOwner: ${repoOwner}\npullRequest: ${pullRequestNumber}`,
      )

      await validateParamAtPullRequest(
        conditionalValue,
        pullRequestNumber,
        repoName as string,
        repoOwner as string,
        valueThatMustExist,
      )
    } else {
      setFailed(`"gitHubToken" is required!`)
    }
  } catch (error) {
    setFailed(`Error at action: ${error}.`)
  }
}

void run()
