# Contributing

A healthy community is a contributing community, and contributions are appreciated and welcome with open hearts and open fingers. If you haven't done so already, please review the `README.md` since this text only covers the commit conventions and how to install/test.


## Pull Requests + Commit Conventions

1. [Fork](https://help.github.com/fork-a-repo/) the repository.

   ```bash
   git clone https://github.com/<your-username>/documentation.git
   cd documentation
   git remote add upstream https://github.com/ctr-lang/documentation.git
   ```

2. Install the dependencies. Make sure you have [yarn](https://yarnpkg.com) [installed](https://yarnpkg.com/en/docs/install).

   ```bash
   yarn install
   ```

4. Create a new branch to contain your feature, change, or fix.

   ```bash
   git checkout -b <topic-branch-name>
   ```

5. Commit your changes in logical chunks.
    + To keep commits uniform, this project uses [commitizen](http://commitizen.github.io/cz-cli/), but don't worry if you've never heard about commitizen or don't know how to use it. Everything is pre-configured and ready for you to rock 'n' roll out of the box. Just follow these simple steps:
        1. Make your update/change/fix
        2. Add your changes `git add .`
        3. Run: `npm run commit` - An interactive command prompt will appear and lead you step-by-step through the whole process. It's easy peasy lemon squeezy so don't worry about a thing.
    + If commitizen does not work or for some extraneous reason you wish not to use it your commit must follow the [angular commit](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#-git-commit-guidelines) format: `<type>(<scope>): <subject> → #<closes>`. Otherwise, your pull request will fail during approval, but it’s highly encouraged you use `npm run commit` to make everyone's life just a bit easier.

6. Test changes.

   ```bash
   yarn run test
   ```

7. Locally merge (or rebase) the upstream development branch into your topic branch.

   ```bash
   git pull [--rebase] upstream master
   ```

8. Push your topic branch up to your fork.

   ```bash
   git push origin <topic-branch-name>
   ```

9. [Open a Pull Request](https://help.github.com/articles/using-pull-requests/) with a clear title and description against the `master` branch. Suggestions, changes, or improvements may be required for your changes to be merged, but small pull requests should be accepted quickly. Ideally, your pull request meets the four pillars of quality:
    1. Update/change/fix has test(s)
    2. Follows the existing code style
    3. Has decent commit message(s)
    4. Commit, and code comes with a smile


## Setup

First, make sure you have [yarn](https://yarnpkg.com) [installed](https://yarnpkg.com/en/docs/install).

__Install__
```bash
  cd documentation
  yarn install
```

__Development__

While this repository does not have the custom CSS and Javascript to make it look like docs.ctr-lang.com that doesn't mean you can't server the docs locally using [MkDocs](http://www.mkdocs.org/). But to do so you must first ensure you have MkDocs [installed](http://www.mkdocs.org/#installation) and the [Material theme installed](https://github.com/squidfunk/mkdocs-material) as well. Additionally, depending on your current system you may have to install some other auxiliary markdown extensions such as, [SmartyPants](https://pythonhosted.org/Markdown/extensions/smarty.html), [Table of Contents](https://pythonhosted.org/Markdown/extensions/toc.html), [Sane Lists](https://pythonhosted.org/Markdown/extensions/sane_lists.html), [markdown-include](https://github.com/cmacmackin/markdown-include), [Attribute Lists](https://pythonhosted.org/Markdown/extensions/attr_list.html).


```bash
  mkdocs serve
```


__Test__

```bash
  yarn test
```


## Commits

To keep commits uniform, this project uses [commitizen](http://commitizen.github.io/cz-cli/), but don't worry if you've never heard about commitizen or don't know how to use it. Everything is pre-configured and ready for you to rock 'n' roll out of the box. Just follow these simple steps:

1. Make your updates/changes/fixes
2. Add your changes `git add .`
3. Run: `yarn run commit` - An interactive command prompt will appear and lead you step-by-step through the whole process. It's easy peasy lemon squeezy so don't worry about a thing


## Submitting Changes

Once your commit(s) are made, push to your fork, and submit a pull request. Suggestions, changes, or improvements may be required for your changes to be merged, but small pull requests should be accepted quickly. Ideally, your pull request meets the four pillars of quality:

1. Has test(s)
2. Follows the existing code style
3. Has a decent commit message and accompanied documentation need be
4. Comes with a smile


## License

__IMPORTANT__: By contributing your code, you agree to license your contribution under the [Attribution-ShareAlike 4.0 (CC BY-SA 4.0 US)](https://creativecommons.org/licenses/by-sa/4.0/) [license](https://github.com/ctr-lang/documentation/blob/master/LICENSE.md).
