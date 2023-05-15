export interface IGitHubRepository {
  createCommentAtPR: (
    message: string,
    pullRequestNumber: number,
    repoName: string,
    repoOwner: string,
  ) => Promise<object>
  getPullRequestNumber: (
    pullRequestNumber: number,
    repoName: string,
    repoOwner: string,
  ) => Promise<string>
}
