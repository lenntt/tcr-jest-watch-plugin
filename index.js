var git = require("simple-git")();

// TODO: detect whether user has a commit that is safe to append to (i.e. not pushed, not a merge?, same author?)
module.exports = class TCRJestWatchPlugin {
    apply(jestHooks) {
        return jestHooks.onTestRunComplete(results => {
            if(results.success) {
                return git.add('.').then(() => {
                    // logs a warning, see https://github.com/steveukx/git-js/issues/694
                    return git.commit(null, {
                        // append to previous commit
                        '--amend': null, 
                        // keep the previous commit message
                        '--no-edit': null, 
                        // dont fail if there's nothing to amend
                        '--allow-empty': null})
                })
            } else {
                return git.raw('restore' , ':!**/*.spec.*').then(console.log, console.error)
            }
        });
    }
}
