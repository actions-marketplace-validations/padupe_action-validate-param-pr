export interface IGitHubRepository {
  createCommentAtPR: (
    message: string,
    pullRequestNumber: number,
    repoName: string,
    repoOwner: string,
  ) => Promise<object>
  getPullRequestNumber: (
    pullRequestNUmber: number,
    repoName: string,
    repoOwner: string,
  ) => Promise<string>
}
