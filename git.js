// git init creates a new Git repository
// git status inspects the contents of the working directory and staging area
// git add adds files from the working directory to the staging area
// git diff shows the difference between the working directory and the staging area
// git commit permanently stores file changes from the staging area in the repository
// git log shows a list of all the logs


// git checkout HEAD filename: Discards changes in the working directory.
// git reset HEAD filename: Unstages file changes in the staging area.
// git reset commit_SHA: Resets to a previous commit in your commit history.
// Additionally, you learned a way to add multiple files to the staging area with a single command:

// git add filename_1 filename_2

//git branch shows which branch you are at

//git branch new_branch  Here new_branch would be the name of the new branch you create, like photos or blurb. Be sure to name your branch something that describes the purpose of the branch. Also, branch names can’t contain whitespaces: new-branch and new_branch are valid branch names, but new branch is not.

//You can switch to the new branch with

//git checkout branch_name

// What if you wanted include all the changes made to the fencing branch on the master branch? We can easily accomplish this by merging the branch into master with:

// git merge branch_name
// For example, if I wanted to merge the skills branch to master, I would enter

// git merge skills

// In Git, branches are usually a means to an end. You create them to work on a new project feature, but the end goal is to merge that feature into the master branch. After the branch has been integrated into master, it has served its purpose and can be deleted.

// The command

// git branch -d branch_name

// git branch: Lists all a Git project's branches.
// git branch branch_name: Creates a new branch.
// git checkout branch_name: Used to switch from one branch to another.
// git merge branch_name: Used to join file changes from one branch to another.
// git branch -d branch_name: Deletes the branch specified.
