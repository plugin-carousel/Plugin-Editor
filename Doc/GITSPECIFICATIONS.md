# Git specifications

# Description

This file will describe how to use git command. It will included the general explaination of the role for different branches, how to name a new branch and how to write a commit message.

# The Role Of Diffenet Branches

In order to standardize the development, keep the code submission record and the git branch structure clear to facilitate subsequent maintenance, and now standardize the relevant operations of git.

-   ### Master Branch

    The master branch is the main branch and is also used to deploy the production environment to ensure the stability of the master branch. The master branch is generally merged by the develop and hotfix branches, and the code cannot be directly modified at any time.

-   ### Develop Branch

    develop branch is a development branch, and always keeps the latest completed and bug-fixed code. When developing new functions in general, the feature branch is created based on the develop branch

-   ### Feature Branch

    When developing new features, create a feature branch based on develop

    Branch Naming Rule: The name of the branch starts with `version`/feature, and connect the feature with / and follow with the feature's name, such as `v2/feature/user_module`, `v2/feature/data_module`

-   ### Release Branch

    Release branch is a pre-launch branch, during the release testing phase, the release branch code will be benchmarked, When the development of a set of features is completed, it will first be merged into the develop branch. When entering the test, a release branch will be created. If there are bugs in the testing process that need to be fixed, the developer directly fixes and submits them in the release branch. When the test is complete, merge the release branch into the master and develop branches. At this time, the master is the latest code and is used to go online.

-   ### Hotfix Branch

    When an urgent problem occurs online, it needs to be repaired in time. The master branch is used as a baseline to create a hotfix branch. After the repair is completed, it needs to be merged into the master branch and the develop branch.

    Branch Naming Rule: The name of the branch starts with `version`/hotfix, and connect the hotfix with / and follow with the hotfix's name, such as `v2/hotfix/data_storage_error`, `v2/hotfix/user_login_error`

# Usage

## Workflow of each branch

-   ### Add new feature

    ```
    (dev)$: git checkout -b v2/feature/xxx          # create feature branch
    (feature/xxx)$: developing...                # developing...
    (feature/xxx)$: git add xxx
    (feature/xxx)$: git commit -m ':sparkles: new feature xxx 2020/06/28'
    (dev)$: git merge v2/feature/xxx --no-ff        # merge the feature to development branch

    ```

-   ### Fix emergency bugs

    ```
    (master)$: git checkout -b v2/hotfix/xxx         # create the hotfix branch from master branch
    (hotfix/xxx)$: developing...                  # developing...
    (hotfix/xxx)$: git add xxx
    (hotfix/xxx)$: git commit -m 'commit comment'
    (master)$: git merge hotfix/xxx --no-ff       # merge the hotfix to master branch and deploy to production environment
    (dev)$: git merge v2/hotfix/xxx --no-ff          # ensure the development branch also fix this bug

    ```

-   ### Test environment

    ```
    (release)$: git merge dev --no-ff             # merge the code from development branch, and tested in this environment

    ```

-   ### Production environment

    ```
    (master)$: git merge release --no-ff          # merge the release code to master branch and prepare to publish
    (master)$: git tag -a v0.1 -m 'tagName'       # name the version and tag

    ```

## Commit Message Rules

All commit messages should be committed as such:

```
:gitmoji:	Your Message	Commit Date
```

[`:gitmoji`](https://gitmoji.carloscuesta.me/) is used to clearly show the purpose of current commit. Please carefully search in the above link to locate the most appropriate GitMoji. For ad hoc commits, use `:construction:` to represent the work is still under development and has not reached a milestone.

Use `$commitDate` variable to fetch the current date when committing.

To pin the above formate as a command, one can define a git commit command alias in the shell. For example, under Unix/Linux environment, using `bash`, one can add the following line to the `$HOME/.bashrc` file:

```bash
    export git-commit() {
    	git commit -m "$1 $2 $(date +"%d-%B-%Y")"
    }
```

Then, use command `git-commit ":gitmoji:" "Your Message"` to perform the commit operation. This generates a commit message like `:bug: Fix Bugs 06-June-2020`.
