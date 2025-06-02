[node]: https://nodejs.org/en
[pnpm]: https://pnpm.io/installation
[yarn]: https://yarnpkg.com/getting-started/install
[demo]: https://vite-react-ts-shadcn-ui.d1a.app/
[license]: https://github.com/doinel1a/vite-react-ts-shadcn-ui/blob/main/LICENSE
[code-of-conduct]: https://github.com/doinel1a/vite-react-ts-shadcn-ui/blob/main/CODE_OF_CONDUCT.md
[issues]: https://github.com/doinel1a/vite-react-ts-shadcn-ui/issues
[pulls]: https://github.com/doinel1a/vite-react-ts-shadcn-ui/pulls
[browserslist]: https://browsersl.ist/#q=last+3+versions%2C%3E+0.2%25%2C+not+dead
[commitlint]: https://github.com/conventional-changelog/commitlint/#what-is-commitlint
[react-icon]: https://skillicons.dev/icons?i=react
[ts-icon]: https://skillicons.dev/icons?i=ts
[js-icon]: https://skillicons.dev/icons?i=js
[tailwind-icon]: https://skillicons.dev/icons?i=tailwind
[chrome-icon]: https://github.com/alrra/browser-logos/blob/main/src/chrome/chrome_64x64.png
[firefox-icon]: https://github.com/alrra/browser-logos/blob/main/src/firefox/firefox_64x64.png
[edge-icon]: https://github.com/alrra/browser-logos/blob/main/src/edge/edge_64x64.png
[opera-icon]: https://github.com/alrra/browser-logos/blob/main/src/opera/opera_64x64.png
[safari-icon]: https://github.com/alrra/browser-logos/blob/main/src/safari/safari_64x64.png
[devbox-introd]: https://www.jetify.com/docs/devbox/
[devbox-install]: https://www.jetify.com/docs/devbox/installing_devbox/
[nixhub]: https://www.nixhub.io/

# Vite React TypeScript & Shadcn/ui — Template

This development starter template is the ultimate solution to help you getting started on your project in no time, without the hassle of setting up and configuring your development environment from scratch each time you start working.
This repository is ideal for front-end developers who want to build modern, fast and reliable web applications with the latest cutting edge technologies such as **React.js**, **TypeScript**, **Shadcn/ui**, **TailwindCSS**, **ESLint**, **Prettier**, **Husky**, **Vite** and much more!

---

**[Demo][demo]** &nbsp;&nbsp;**|**&nbsp;&nbsp; **[Bug(label: bug)][issues]** &nbsp;&nbsp;**|**&nbsp;&nbsp; **[Feature(label: enhancement)][issues]**

---

## :bookmark: Table of contents

- :computer: [Getting started](#computer-getting-started "Go to 'Getting started' section")
- :battery: [Features](#battery-features "Go to 'Features' section")
- :globe_with_meridians: [Browsers support](#globe_with_meridians-browsers-support "Go to 'Browsers support' section")
- :busts_in_silhouette: [Contribute](#busts_in_silhouette-contribute "Go to 'Contribute' section")
- :bookmark_tabs: [License](#bookmark_tabs-license "Go to 'License' section")
- :gem: [Acknowledgements](#gem-acknowledgements "Go to 'Acknowledgements' section")

---

## :computer: Getting started

### Prerequisites:

- JavaScript runtime **[node.js][node]**
- Package manager **[pnpm][pnpm]**
- Alternatively, you can use **[devbox][devbox]**, which is a native package manager that allows you to install and manage your development environment in a reproducible way. For example, you can use it to install `rabbitmq`, `redis`, `postgres` or `mariadb`.

  **When more dependencies are required, using Devbox is strongly recommended.**

  To install Devbox, follow the instructions on the [official documentation][devbox-install].
  To install the dependencies and start a shell with the project environment, run the following commands in your terminal:

  ```bash
  devbox install
  devbox shell
  ```

  You can search for available packages on the [NixHub][nixhub] website.

### Recommended VS Code extensions:

- **[ESLint][eslint]**: for linting your code;
- **[Prettier - Code formatter][prettier]**: for formatting your code;
- **[Tailwind CSS IntelliSense][tailwind-intellisense]**: for Tailwind CSS support;

Set the following settings in your VS Code `settings.json` file to enable ESLint and Prettier:

```json
"editor.formatOnSave": true,
"editor.defaultFormatter": "esbenp.prettier-vscode",
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": "explicit",
  "source.organizeImports": "explicit"
},
```

### Start developing:

- Get the repository:
  - click **"Use this template"** &nbsp; or &nbsp; **"Fork"** button <br /> alternately
  - **clone** the repository through your terminal: <br />
    ```bash
    git clone https://github.com/doinel1a/vite-react-ts-shadcn-ui YOUR-PROJECT-NAME
    ```
- Open your terminal or code editor to the path your project is located, and run:

  - To **install** the dependencies: `pnpm install`;
  - To **run** the **development server**: `pnpm dev`;
  - To **build** your app **for production**: `pnpm build`;
  - To **build** your app **for qa**: `pnpm build:qa`;
  - To **build** your app **for staging**: `pnpm build:staging`;
  - To **preview** your **production optimized app**: `pnpm preview`;

- Commit your changes and push them to your repository: by using `pnpm commit` or `npx cz`. This will call **[Commitizen][commitlint]** to help you write a conventional commit message.  
   If you want to skip the commit message, you can use `git commit -m "your commit message"`.
  [Back to :arrow_up:](#vite-react-typescript--shadcnui--template "Back to 'Table of contents' section")

---

## :battery: Features

This repository comes 🔋 packed with:

- **React.js**;
- **TypeScript**;
- **Shadcn/ui**;
- **TailwindCSS**;
- **SASS** & **SCSS**;
- **ESLint**;
- **Prettier**;
- **Husky**;
- **Commitlint** & **Commitizen**;
- **Lint staged**;
- **Playwright**;
- **Vitest**;
- **Vite**;

[Back to :arrow_up:](#vite-react-typescript--shadcnui--template "Back to 'Table of contents' section")

---

## :globe_with_meridians: Browsers support

The provided configuration ensures **92.3%** coverage for all browsers, in particular of the following:

|            Chrome             |             Firefox              |             Edge             |        Opera         | Safari                       |
| :---------------------------: | :------------------------------: | :--------------------------: | :------------------: | ---------------------------- |
| ![Google Chrome][chrome-icon] | ![Mozilla Firefox][firefox-icon] | ![Microsoft Edge][edge-icon] | ![Opera][opera-icon] | ![Apple Safari][safari-icon] |

**\*** In order to support a wider percentage of browsers, update the `./.browserslistrc` configuration file:

1. `last 3 versions`: browser version;
2. `> 0.2%`: browser usage statistics;
3. `not dead`: whether the browser is officially supported;

Update the configuration [here][browserslist] and check in real-time the **global browsers support**.

**\* The more versions to support, larger JS and CSS bundles size will be.**

[Back to :arrow_up:](#vite-react-typescript--shadcnui--template "Back to 'Table of contents' section")

---

## Update dependencies

To update the dependencies of your project, you can use the following commands:

- To update all dependencies to their latest versions: `pnpm up`
- To update a specific dependency to its latest version: `pnpm up <dependency-name>`
  @tanstack/router-plugin-vite has an incorrect vite plugin version, which forces it to be uninstalled. Reinstall it by running: `pnpm i -D @vitejs/plugin-legacy`

---

## Use TailwindCSS

- In `global.css`, you can use TailwindCSS classes to style your components.
- In `global.scss`, use (S)CSS-native classes to style your components. TailindCSS classes cannot be used in this file.

---

## :busts_in_silhouette: Contribute

Contributions are what make the open source community such an amazing place to learn, inspire, and create.  
Any contribution is greatly appreciated: big or small, it can be documentation updates, adding new features or something bigger.  
Please check the [**contributing guide**][code-of-conduct] for details on how to help out and keep in mind that all commits must follow the **[conventional commit format][commitlint]**.

---

## :bookmark_tabs: License

All logos and trademarks are the property of their respective owners.  
Everything else is distributed under the **MIT License** .  
See the [LICENSE][license] file for more informations.

[Back to :arrow_up:](#vite-react-typescript--shadcnui--template "Back to 'Table of contents' section")

---

## :gem: Acknowledgements

Special thanks to:

- [doinel1a](https://github.com/doinel1a/vite-react-ts-shadcn-ui) for the [origin template](https://github.com/doinel1a/vite-react-ts-shadcn-ui) ;
- [alrra](https://github.com/alrra) for [browser-logos](https://github.com/alrra/browser-logos);
- [tandpfun](https://github.com/tandpfun) for [skill-icons](https://github.com/tandpfun/skill-icons);

[Back to :arrow_up:](#vite-react-typescript--shadcnui--template "Back to 'Table of contents' section")
