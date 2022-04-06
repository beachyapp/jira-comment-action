const core = require('@actions/core');
var JiraApi = require('jira-client');

try {
  const comment = `----\n${core.getInput('comment')}\n----`;
  const issueKey = core.getInput('issue-key');
  const jiraBaseUrl = core.getInput('jira-base-url');
  const jiraUserEmail = core.getInput('jira-user-email');
  const jiraApiToken = core.getInput('jira-api-token');
  const jira = new JiraApi({
    protocol: 'https',
    host: jiraBaseUrl.replace(/(^\w+:|^)\/\//, ''),
    username: jiraUserEmail,
    password: jiraApiToken,
    apiVersion: '2',
    strictSSL: true
  });

  jira.addComment(issueKey, comment);
} catch (error) {
  core.setFailed(error);
}
