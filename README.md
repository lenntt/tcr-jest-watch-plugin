# Overview
This is a friendlier version of Kent Becks "Test && Commit || Revert"
https://medium.com/@kentbeck_7670/test-commit-revert-870bbd756864 that integrates well in your workflow (assuming jest+git).

A jest watch plugin to learn disciplined TDD, it continously runs your tests, it commits when passed. On a failure, it reverts everything except for your test files.
That last part is important to me, as "Red" is the first step in "Red-Green-Refactor".

# Usage
1. To install in your project:
```
npm install --save-dev tcr-jest-watch-plugin
```
2. Add to your `jest.config.js`:
```
watchPlugins: ['tcr-jest-watch-plugin'],
```

3. Run with `jest --watchAll`

Note: Before watching you might want to create an empty commit, as the plugin will amend all your changes to the last commit. For example: 
```
git commit -m "feat: building my new feature" --alow-empty
```
