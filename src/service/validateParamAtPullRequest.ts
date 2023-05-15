import { gitHubService } from './gitHubService'

export async function validateParamAtPullRequest(
  conditionalValue: string,
  pullRequestNumber: number,
  repoName: string,
  repoOwner: string,
  valueThatMustExist: string,
): Promise<any> {
  await gitHubService(
    conditionalValue,
    pullRequestNumber,
    repoName,
    repoOwner,
    valueThatMustExist,
  )
}
