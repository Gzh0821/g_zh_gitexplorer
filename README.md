# GitExplorer (with i18n)

![](https://img.shields.io/badge/author-Gaozih-%2366ccff)
![](https://img.shields.io/github/license/Gzh0821/g_zh_gitexplorer)
![](https://img.shields.io/github/stars/Gzh0821/g_zh_gitexplorer)

**The original author seems to have abandoned the project. This is the version forked from the [original repository](https://github.com/summitech/gitexplorer/) in December 2023.**

**This project replaces some deprecated npm packages and adds support for i18n localized languages.**

---

Table of Contents

[Intro](https://github.com/summitech/gitexplorer/blob/master/README.md#intro)

[Tech Stack](https://github.com/summitech/gitexplorer/blob/master/README.md#tech-stack)

[Installation](https://github.com/summitech/gitexplorer/blob/master/README.md#installation)

[Makers](https://github.com/summitech/gitexplorer/blob/master/README.md#makers)

[Contribute](https://github.com/summitech/gitexplorer/blob/master/README.md#contribute)

[Donate](https://github.com/summitech/gitexplorer/blob/master/README.md#donate)

[RoadMap](https://github.com/summitech/gitexplorer/blob/master/README.md#roadmap)

### Intro

**The original author seems to have abandoned the project. This is the version forked from the [original repository](https://github.com/summitech/gitexplorer/) in December 2023.**

**This project replaces some deprecated npm packages and adds support for i18n localized languages.**

*The following is the intro of the original project:*

*Last year, we came across [Sarah Drasner&#39;s array explorer](https://github.com/sdras/array-explorer). It is a really cool resource for anyone to easily figure out the best JS array method to use. We loved it and decided to build something similar for Git.*

*Website: [Click to find the right git commands without digging through the web.](https://gitexplorer.com)*

*Explore and Enjoy!*

*You can reach us on [the official git explorer twitter handle](https://twitter.com/gitexplorer) or on [Summitech&#39;s twitter handle](https://twitter.com/summitechng).*

### Tech Stack

- React
- Netlify
- ~~Our first hosting platform was Surge. Super easy to set up and very reliable 👍. 100% recommend!~~
- New repository deployed using [Cloudflare Pages](https://pages.cloudflare.com)

### Installation and Run

```bash
# If you do not have yarn installed:
npm install -g yarn
# install all dependecies
yarn 
# start project in dev server.
yarn start
```

~~To try GitExplorer in a docker container, run this:~~

```bash
# It has not been verified whether the new repository is compatible to docker.
```

### Makers

Origin Author Link: [Summitech](https://summitech.ng)

New repo pages on :[Gaozih](https://git.gaozih.top)

### Contribute

Thank you for contributing to GitExplorer!

Please follow the below instructions to send a Pull Request (Search the website to make sure that this command doesn't already exist).

The data folder (inside the src directory) is where you will be operating from. The three files you should be concerned with are the `primary-options.js`, `secondary-options.js` and `tertiary-options.js` files.

These three files are responsible for the options a user can pick.

`primary-options.js` contains an array of objects responsible for the options of the first select box.
`secondary-options.js` contains an object. This object houses an arrays of objects (a mouthful 😄), this is responsible for the second set of options a user sees when they select a primary option.
`tertiary-option.js` file is responsible for cases where there needs to be a third & final select box.

###### Steps to add a new command

0. Please ensure you are not on the master branch. Checkout to a new branch entirely.
1. Add an object to the array in the `primary-options.js` file. Sample Format:

```
 { value: 'show', label: 'show/view' }
```

2. Add an array to the `secondary-options` file. Sample Format:

```
show: [
    {
      value: 'repo-status',
      label: 'status of project including staged, unstaged and untracked files',
      usage: 'git status'
      nb: 'To know about this command, "run git status --help"'
    },
    {
      value: 'logs',
      label: 'commit logs/history'
    },
```

  The `nb` is optional. It is responsible for what the user sees in the notes section.

  `\n` is used to insert newline.

3. To add tertiary options, remove the `usage` and `nb` key/value pair for that command in the `secondary-options.js` file e.g..

```
show: [
    {
      value: 'logs',
      label: 'commit logs/history'
    },
```

  then supply `tertiary-options.js` file the necessary data e.g.

```
  logs: [
    {
      value: 'all',
      label: 'all',
      usage: 'git log',
      nb: 'Type q in the terminal to exit the logs'
    },
    {
      value: 'last-n-commit',
      label: 'for last xxx number of commits',
      usage: 'git log -n',
      nb: 'Replace n with number of commits e.g. git log -2'
    },
    {
      value: 'particular-period',
      label: 'since a particular period',
      usage: 'git log --since=period',
      nb: 'Replace period with intended timeframe e.g git log --since=3days. You can use dates like 2018-12-31.\n\n Similar flags are --until, --before, --after'
    }
  ]
```

4. Once you are done, add, commit, push and create a PR to Master.

### RoadMap

- [X] Enforce HTTPs & offline capabilities
- [X] Open source
- [X] i18n
- [X] PWA
- [ ] Shareable commands
