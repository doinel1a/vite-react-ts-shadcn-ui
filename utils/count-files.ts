import { BettererFileTest } from '@betterer/betterer';

export function countFiles(issue: string) {
  return new BettererFileTest(async (filePaths, fileTestResult) => {
    for (const filePath of filePaths) {
      // In this case the file contents don't matter:
      const file = fileTestResult.addFile(filePath, '');
      // Add the issue to the first character of the file:
      file.addIssue(0, 0, issue);
    }
  });
}
