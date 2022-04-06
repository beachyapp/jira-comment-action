# Add comment to JIRA issue

This action will add a comment to JIRA issue by JIRA issue key

## Inputs

## `comment`

Comment to add to the JIRA ticket

## `issue-key`

**Required** The issue key you want to add the comment

## `jira-user-email`

**Required** JIRA user email

## `jira-api-token`

**Required** JIRA API token

## `jira-base-url`

**Required** JIRA base URL

## Example usage

```
- name: Find JIRA issue keys by commits
  id: issue-key-from-commits
  uses: beachyapp/jira-get-issue-key-action@v0.1
  ....
  ....
- name: Add comment to JIRA issue
  id: jira-comment
  uses: beachyapp/jira-comment-action@v0.1
  with:
    comment: This is a sample comment
    issue-key: ${{steps.issue-key-from-commits.outputs.key}}
    jira-user-email: ${{ secrets.JIRA_USER_EMAIL }}
    jira-api-token: ${{ secrets.JIRA_API_TOKEN }}
    jira-base-url: ${{ secrets.JIRA_BASE_URL }}
```
