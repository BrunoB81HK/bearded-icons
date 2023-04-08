import { webpack } from "../data/bundler";
import { make } from "../helper";

export default {
  ...make(webpack, "_f_webpack"),
  ".angular-cli.json": "_f_angular",
  "angular-cli.json": "_f_angular",
  "angular.json": "_f_angular",
  ".angular.json": "_f_angular",
  "api-extractor.json": "_f_api_extractor",
  "api-extractor-base.json": "_f_api_extractor",
  "appveyor.yml": "_f_appveyor",
  ".appveyor.yml": "_f_appveyor",
  "aurelia.json": "_f_aurelia",
  "azure-pipelines.yml": "_f_azure",
  ".vsts-ci.yml": "_f_azure",
  ".babelrc": "_f_babel",
  ".babelignore": "_f_babel",
  ".babelrc.js": "_f_babel",
  ".babelrc.cjs": "_f_babel",
  ".babelrc.mjs": "_f_babel",
  ".babelrc.json": "_f_babel",
  "babel.config.js": "_f_babel",
  "babel.config.cjs": "_f_babel",
  "babel.config.mjs": "_f_babel",
  "babel.config.json": "_f_babel",
  "vetur.config.js": "_f_vue",
  "vetur.config.ts": "_f_vue",
  ".bzrignore": "_f_bazaar",
  ".bazelrc": "_f_bazel",
  "bazel.rc": "_f_bazel",
  "bazel.bazelrc": "_f_bazel",
  "bitbucket-pipelines.yml": "_f_bitbucketpipeline",
  ".bithoundrc": "_f_bithound",
  ".bowerrc": "_f_bower",
  "bower.json": "_f_bower",
  ".browserslistrc": "_f_browserslist",
  browserslist: "_f_browserslist",
  ".buckconfig": "_f_buckbuild",
  gemfile: "_f_bundler",
  "gemfile.lock": "_f_bundler",
  "capacitor.config.json": "_f_capacitor",
  "cargo.toml": "_f_cargo",
  "cargo.lock": "_f_cargo",
  chefignore: "_f_chef",
  berksfile: "_f_chef",
  "berksfile.lock": "_f_chef",
  policyfile: "_f_chef",
  "circle.yml": "_f_circleci",
  ".cfignore": "_f_cloudfoundry",
  ".codacy.yml": "_f_codacy",
  ".codacy.yaml": "_f_codacy",
  ".codeclimate.yml": "_f_codeclimate",
  "codecov.yml": "_f_codecov",
  ".codecov.yml": "_f_codecov",
  "config.codekit": "_f_codekit",
  "config.codekit2": "_f_codekit",
  "config.codekit3": "_f_codekit",
  ".config.codekit": "_f_codekit",
  ".config.codekit2": "_f_codekit",
  ".config.codekit3": "_f_codekit",
  "coffeelint.json": "_f_coffeelint",
  ".coffeelintignore": "_f_coffeelint",
  "composer.json": "_f_composer",
  "composer.lock": "_f_composerlock",
  "conanfile.txt": "_f_conan",
  "conanfile.py": "_f_conan",
  ".condarc": "_f_conda",
  ".coveralls.yml": "_f_coveralls",
  "crowdin.yml": "_f_crowdin",
  ".csscomb.json": "_f_csscomb",
  ".csslintrc": "_f_csslint",
  ".cvsignore": "_f_cvs",
  ".boringignore": "_f_darcs",
  "dependabot.yml": "_f_dependabot",
  "dependencies.yml": "_f_dependencies",
  "devcontainer.json": "_f_devcontainer",
  "docker-compose.yml": "_f_docker",
  "docker-compose.ci-build.yml": "_f_docker",
  "docker-compose.override.yml": "_f_docker",
  "docker-compose.vs.debug.yml": "_f_docker",
  "docker-compose.vs.release.yml": "_f_docker",
  "docker-compose-prod.yml": "_f_docker",
  "Dockerfile-production": "_f_docker",
  "docker-compose.debug.yml": "_f_dockerdebug",
  "docker-cloud.yml": "_f_docker",
  ".dockerignore": "_f_dockerignore",
  ".doczrc": "_f_docz",
  "docz.js": "_f_docz",
  "docz.json": "_f_docz",
  ".docz.js": "_f_docz",
  ".docz.json": "_f_docz",
  "doczrc.js": "_f_docz",
  "doczrc.json": "_f_docz",
  "docz.config.js": "_f_docz",
  "docz.config.json": "_f_docz",
  ".dojorc": "_f_dojo",
  ".drone.yml": "_f_drone",
  ".drone.yml.sig": "_f_drone",
  ".dvc": "_f_dvc",
  ".editorconfig": "_f_editorconfig",
  "elm-package.json": "_f_elm",
  ".ember-cli": "_f_ember",
  emakefile: "_f_erlang",
  ".emakerfile": "_f_erlang",
  ".eslintrc": "_f_eslint",
  ".eslintignore": "_f_eslint",
  ".eslintcache": "_f_eslint",
  ".eslintrc.js": "_f_eslint",
  ".eslintrc.mjs": "_f_eslint",
  ".eslintrc.cjs": "_f_eslint",
  ".eslintrc.json": "_f_eslint",
  ".eslintrc.yaml": "_f_eslint",
  ".eslintrc.yml": "_f_eslint",
  ".eslintrc.browser.json": "_f_eslint",
  ".eslintrc.base.json": "_f_eslint",
  "eslint-preset.js": "_f_eslint",
  "eslint.config.js": "_f_eslint",
  "eslint.config.cjs": "_f_eslint",
  "eslint.config.mjs": "_f_eslint",
  "eslint.config.ts": "_f_eslint",
  "app.json": "_f_expo",
  "app.config.js": "_f_expo",
  "app.config.json": "_f_expo",
  "app.config.json5": "_f_expo",
  "favicon.ico": "_f_favicon",
  ".firebaserc": "_f_firebase",
  "firebase.json": "_f_firebasehosting",
  "firestore.rules": "_f_firestore",
  "firestore.indexes.json": "_f_firestore",
  ".flooignore": "_f_floobits",
  ".flowconfig": "_f_flow",
  ".flutter-plugins": "_f_flutter",
  ".metadata": "_f_flutter",
  ".fossaignore": "_f_fossa",
  "ignore-glob": "_f_fossil",
  "fuse.js": "_f_fusebox",
  "gatsby-config.js": "_f_gatsby",
  "gatsby-config.ts": "_f_gatsby",
  "gatsby-node.js": "_f_gatsby",
  "gatsby-node.ts": "_f_gatsby",
  "gatsby-browser.js": "_f_gatsby",
  "gatsby-browser.ts": "_f_gatsby",
  "gatsby-ssr.js": "_f_gatsby",
  "gatsby-ssr.ts": "_f_gatsby",
  ".git-blame-ignore-revs": "_f_git",
  ".gitattributes": "_f_git",
  ".gitconfig": "_f_git",
  ".gitignore": "_f_git",
  ".gitmodules": "_f_git",
  ".gitkeep": "_f_git",
  ".mailmap": "_f_git",
  ".gitlab-ci.yml": "_f_gitlab",
  "glide.yml": "_f_glide",
  "go.sum": "_f_go_package",
  "go.mod": "_f_go_package",
  ".gqlconfig": "_f_graphql",
  ".graphqlconfig": "_f_graphql_config",
  ".graphqlconfig.yml": "_f_graphql_config",
  ".graphqlconfig.yaml": "_f_graphql_config",
  "greenkeeper.json": "_f_greenkeeper",
  "gridsome.config.js": "_f_gridsome",
  "gridsome.config.ts": "_f_gridsome",
  "gridsome.server.js": "_f_gridsome",
  "gridsome.server.ts": "_f_gridsome",
  "gridsome.client.js": "_f_gridsome",
  "gridsome.client.ts": "_f_gridsome",
  "gruntfile.js": "_f_grunt",
  "gruntfile.coffee": "_f_grunt",
  "gruntfile.ts": "_f_grunt",
  "gruntfile.babel.js": "_f_grunt",
  "gruntfile.babel.coffee": "_f_grunt",
  "gruntfile.babel.ts": "_f_grunt",
  "gulpfile.js": "_f_gulp",
  "gulpfile.coffee": "_f_gulp",
  "gulpfile.ts": "_f_gulp",
  "gulpfile.esm.js": "_f_gulp",
  "gulpfile.esm.coffee": "_f_gulp",
  "gulpfile.esm.ts": "_f_gulp",
  "gulpfile.babel.js": "_f_gulp",
  "gulpfile.babel.coffee": "_f_gulp",
  "gulpfile.babel.ts": "_f_gulp",
  "haxelib.json": "_f_haxe",
  "checkstyle.json": "_f_haxecheckstyle",
  ".p4ignore": "_f_helix",
  ".htmlhintrc": "_f_htmlhint",
  ".huskyrc": "_f_husky",
  "husky.config.js": "_f_husky",
  ".huskyrc.js": "_f_husky",
  ".huskyrc.json": "_f_husky",
  ".huskyrc.yaml": "_f_husky",
  ".huskyrc.yml": "_f_husky",
  "ionic.project": "_f_ionic",
  "ionic.config.json": "_f_ionic",
  jakefile: "_f_jake",
  "jakefile.js": "_f_jake",
  "jest.config.json": "_f_jest",
  "jest.json": "_f_jest",
  ".jestrc": "_f_jest",
  ".jestrc.js": "_f_jest",
  ".jestrc.json": "_f_jest",
  "jest.config.js": "_f_jest",
  "jest.config.cjs": "_f_jest",
  "jest.config.mjs": "_f_jest",
  "jest.config.babel.js": "_f_jest",
  "jest.config.babel.cjs": "_f_jest",
  "jest.config.babel.mjs": "_f_jest",
  "jest.preset.js": "_f_jest",
  "jest.preset.ts": "_f_jest",
  "jest.preset.cjs": "_f_jest",
  "jest.preset.mjs": "_f_jest",
  ".jpmignore": "_f_jpm",
  ".jsbeautifyrc": "_f_jsbeautify",
  jsbeautifyrc: "_f_jsbeautify",
  ".jsbeautify": "_f_jsbeautify",
  jsbeautify: "_f_jsbeautify",
  "jsconfig.json": "_f_jsconfig",
  ".jscpd.json": "_f_jscpd",
  "jscpd-report.xml": "_f_jscpd",
  "jscpd-report.json": "_f_jscpd",
  "jscpd-report.html": "_f_jscpd",
  ".jshintrc": "_f_jshint",
  ".jshintignore": "_f_jshint",
  "karma.conf.js": "_f_karma",
  "karma.conf.coffee": "_f_karma",
  "karma.conf.ts": "_f_karma",
  ".kitchen.yml": "_f_kitchenci",
  "kitchen.yml": "_f_kitchenci",
  ".kiteignore": "_f_kite",
  "layout.html": "_f_layout",
  "layout.htm": "_f_layout",
  "lerna.json": "_f_lerna",
  license: "_f_license",
  licence: "_f_license",
  "license.md": "_f_license",
  "license.txt": "_f_license",
  "licence.md": "_f_license",
  "licence.txt": "_f_license",
  ".lighthouserc.js": "_f_lighthouse",
  ".lighthouserc.json": "_f_lighthouse",
  ".lighthouserc.yaml": "_f_lighthouse",
  ".lighthouserc.yml": "_f_lighthouse",
  "include.xml": "_f_lime",
  ".lintstagedrc": "_f_lintstagedrc",
  "lint-staged.config.js": "_f_lintstagedrc",
  ".lintstagedrc.js": "_f_lintstagedrc",
  ".lintstagedrc.json": "_f_lintstagedrc",
  ".lintstagedrc.yaml": "_f_lintstagedrc",
  ".lintstagedrc.yml": "_f_lintstagedrc",
  manifest: "_f_manifest",
  "manifest.bak": "_f_manifest",
  "manifest.json": "_f_manifest",
  "manifest.skip": "_f_manifes",
  ".markdownlint.json": "_f_markdownlint",
  "maven.config": "_f_maven",
  "pom.xml": "_f_maven",
  "extensions.xml": "_f_maven",
  "settings.xml": "_f_maven",
  "pom.properties": "_f_maven",
  ".hgignore": "_f_mercurial",
  "mocha.opts": "_f_mocha",
  ".mocharc.js": "_f_mocha",
  ".mocharc.json": "_f_mocha",
  ".mocharc.jsonc": "_f_mocha",
  ".mocharc.yaml": "_f_mocha",
  ".mocharc.yml": "_f_mocha",
  modernizr: "_f_modernizr",
  "modernizr.js": "_f_modernizr",
  "modernizrrc.js": "_f_modernizr",
  ".modernizr.js": "_f_modernizr",
  ".modernizrrc.js": "_f_modernizr",
  "moleculer.config.js": "_f_moleculer",
  "moleculer.config.json": "_f_moleculer",
  "moleculer.config.ts": "_f_moleculer",
  ".mtn-ignore": "_f_monotone",
  ".nest-cli.json": "_f_nestjs",
  "nest-cli.json": "_f_nestjs",
  "nestconfig.json": "_f_nestjs",
  ".nestconfig.json": "_f_nestjs",
  "netlify.toml": "_f_netlify",
  _redirects: "_f_netlify",
  "ng-tailwind.js": "_f_ng_tailwind",
  "nginx.conf": "_f_nginx",
  "build.ninja": "_f_ninja",
  ".node-version": "_f_node",
  "nodemon.json": "_f_nodemon",
  ".npmignore": "_f_npm",
  ".npmrc": "_f_npm",
  "package.json": "_f_npm",
  "package-lock.json": "_f_npmlock",
  "npm-shrinkwrap.json": "_f_npm",
  ".nsrirc": "_f_nsri",
  ".nsriignore": "_f_nsri",
  "nsri.config.js": "_f_nsri",
  ".nsrirc.js": "_f_nsri",
  ".nsrirc.json": "_f_nsri",
  ".nsrirc.yaml": "_f_nsri",
  ".nsrirc.yml": "_f_nsri",
  ".integrity.json": "_f_nsri-integrity",
  "nuxt.config.js": "_f_nuxt",
  "nuxt.config.ts": "_f_nuxt",
  ".nycrc": "_f_nyc",
  ".nycrc.json": "_f_nyc",
  ".merlin": "_f_ocaml",
  "paket.dependencies": "_f_paket",
  "paket.lock": "_f_paket",
  "paket.references": "_f_paket",
  "paket.template": "_f_paket",
  "paket.local": "_f_paket",
  ".php_cs": "_f_phpcsfixer",
  ".php_cs.dist": "_f_phpcsfixer",
  phpunit: "_f_phpunit",
  "phpunit.xml": "_f_phpunit",
  "phpunit.xml.dist": "_f_phpunit",
  ".phraseapp.yml": "_f_phraseapp",
  pipfile: "_f_pip",
  "pipfile.lock": "_f_pip",
  "platformio.ini": "_f_platformio",
  "pnpmfile.js": "_f_pnpm",
  "pnpm-workspace.yaml": "_f_pnpm",
  ".postcssrc": "_f_postcssconfig",
  ".postcssrc.json": "_f_postcssconfig",
  ".postcssrc.yml": "_f_postcssconfig",
  ".postcssrc.js": "_f_postcssconfig",
  ".postcssrc.cjs": "_f_postcssconfig",
  "postcss.config.js": "_f_postcssconfig",
  "postcss.config.cjs": "_f_postcssconfig",
  ".pre-commit-config.yaml": "_f_precommit",
  ".prettierrc": "_f_prettier",
  ".prettierignore": "_f_prettierignore",
  "prettier.config.js": "_f_prettier",
  "prettier.config.cjs": "_f_prettier",
  "prettier.config.ts": "_f_prettier",
  "prettier.config.coffee": "_f_prettier",
  ".prettierrc.js": "_f_prettier",
  ".prettierrc.json": "_f_prettier",
  ".prettierrc.yml": "_f_prettier",
  ".prettierrc.yaml": "_f_prettier",
  procfile: "_f_procfile",
  "protractor.conf.js": "_f_protractor",
  "protractor.conf.coffee": "_f_protractor",
  "protractor.conf.ts": "_f_protractor",
  ".jade-lintrc": "_f_pug",
  ".pug-lintrc": "_f_pug",
  ".jade-lint.json": "_f_pug",
  ".pug-lintrc.js": "_f_pug",
  ".pug-lintrc.json": "_f_pug",
  ".pyup": "_f_pyup",
  ".pyup.yml": "_f_pyup",
  qmldir: "_f_qmldir",
  "quasar.conf.js": "_f_quasar",
  rakefile: "_f_rake",
  "razzle.config.js": "_f_razzle",
  "readme.md": "_f_readme",
  "readme.txt": "_f_readme",
  ".rehyperc": "_f_rehype",
  ".rehypeignore": "_f_rehype",
  ".rehyperc.js": "_f_rehype",
  ".rehyperc.json": "_f_rehype",
  ".rehyperc.yml": "_f_rehype",
  ".rehyperc.yaml": "_f_rehype",
  ".remarkrc": "_f_remark",
  ".remarkignore": "_f_remark",
  ".remarkrc.js": "_f_remark",
  ".remarkrc.json": "_f_remark",
  ".remarkrc.yml": "_f_remark",
  ".remarkrc.yaml": "_f_remark",
  ".renovaterc": "_f_renovate",
  "renovate.json": "_f_renovate",
  ".renovaterc.json": "_f_renovate",
  ".retextrc": "_f_retext",
  ".retextignore": "_f_retext",
  ".retextrc.js": "_f_retext",
  ".retextrc.json": "_f_retext",
  ".retextrc.yml": "_f_retext",
  ".retextrc.yaml": "_f_retext",
  "robots.txt": "_f_robots",
  "rollup.config.js": "_f_rollup",
  "rollup.config.mjs": "_f_rollup",
  "rollup.config.coffee": "_f_rollup",
  "rollup.config.ts": "_f_rollup",
  "rollup.config.common.js": "_f_rollup",
  "rollup.config.common.mjs": "_f_rollup",
  "rollup.config.common.coffee": "_f_rollup",
  "rollup.config.common.ts": "_f_rollup",
  "rollup.config.dev.js": "_f_rollup",
  "rollup.config.dev.mjs": "_f_rollup",
  "rollup.config.dev.coffee": "_f_rollup",
  "rollup.config.dev.ts": "_f_rollup",
  "rollup.config.prod.js": "_f_rollup",
  "rollup.config.prod.mjs": "_f_rollup",
  "rollup.config.prod.coffee": "_f_rollup",
  "rollup.config.prod.ts": "_f_rollup",
  ".rspec": "_f_rspec",
  ".rubocop.yml": "_f_rubocop",
  ".rubocop_todo.yml": "_f_rubocop",
  "rust-toolchain": "_f_rust_toolchain",
  ".sentryclirc": "_f_sentry",
  "serverless.yml": "_f_serverless",
  "snapcraft.yaml": "_f_snapcraft",
  ".snyk": "_f_snyk",
  ".solidarity": "_f_solidarity",
  ".solidarity.json": "_f_solidarity",
  ".stylelintrc": "_f_stylelint",
  ".stylelintignore": "_f_stylelint",
  ".stylelintcache": "_f_stylelint",
  "stylelint.config.js": "_f_stylelint",
  "stylelint.config.json": "_f_stylelint",
  "stylelint.config.yaml": "_f_stylelint",
  "stylelint.config.yml": "_f_stylelint",
  "stylelint.config.ts": "_f_stylelint",
  ".stylelintrc.js": "_f_stylelint",
  ".stylelintrc.json": "_f_stylelint",
  ".stylelintrc.yaml": "_f_stylelint",
  ".stylelintrc.yml": "_f_stylelint",
  ".stylelintrc.ts": "_f_stylelint",
  ".stylish-haskell.yaml": "_f_stylish_haskell",
  ".svnignore": "_f_subversion",
  "package.pins": "_f_swift",
  "symfony.lock": "_f_symfony",
  "windi.config.ts": "_f_windi",
  "windi.config.js": "_f_windi",
  "tailwind.js": "_f_tailwind",
  "tailwind.coffee": "_f_tailwind",
  "tailwind.ts": "_f_tailwind",
  "tailwind.config.js": "_f_tailwind",
  "tailwind.config.cjs": "_f_tailwind",
  "tailwind.config.coffee": "_f_tailwind",
  "tailwind.config.ts": "_f_tailwind",
  ".testcaferc.json": "_f_testcafe",
  ".tfignore": "_f_tfs",
  "tox.ini": "_f_tox",
  ".travis.yml": "_f_travis",
  "tsconfig.json": "_f_tsconfig",
  "tsconfig.app.json": "_f_tsconfig",
  "tsconfig.base.json": "_f_tsconfig",
  "tsconfig.common.json": "_f_tsconfig",
  "tsconfig.dev.json": "_f_tsconfig",
  "tsconfig.development.json": "_f_tsconfig",
  "tsconfig.e2e.json": "_f_tsconfig",
  "tsconfig.prod.json": "_f_tsconfig",
  "tsconfig.production.json": "_f_tsconfig",
  "tsconfig.server.json": "_f_tsconfig",
  "tsconfig.spec.json": "_f_tsconfig",
  "tsconfig.staging.json": "_f_tsconfig",
  "tsconfig.test.json": "_f_tsconfig",
  "tsconfig.tsd.json": "_f_tsconfig",
  "tsconfig.node.json": "_f_tsconfig",
  "tslint.json": "_f_tslint",
  "tslint.yaml": "_f_tslint",
  "tslint.yml": "_f_tslint",
  ".unibeautifyrc": "_f_unibeautify",
  "unibeautify.config.js": "_f_unibeautify",
  ".unibeautifyrc.js": "_f_unibeautify",
  ".unibeautifyrc.json": "_f_unibeautify",
  ".unibeautifyrc.yaml": "_f_unibeautify",
  ".unibeautifyrc.yml": "_f_unibeautify",
  vagrantfile: "_f_vagrant",
  ".vimrc": "_f_vim",
  ".gvimrc": "_f_vim",
  ".vscodeignore": "_f_vscode",
  "tasks.json": "_f_vscode",
  "vscodeignore.json": "_f_vscode",
  ".vuerc": "_f_vueconfig",
  "vue.config.js": "_f_vueconfig",
  "wallaby.json": "_f_wallaby",
  "wallaby.js": "_f_wallaby",
  "wallaby.ts": "_f_wallaby",
  "wallaby.coffee": "_f_wallaby",
  "wallaby.conf.json": "_f_wallaby",
  "wallaby.conf.js": "_f_wallaby",
  "wallaby.conf.ts": "_f_wallaby",
  "wallaby.conf.coffee": "_f_wallaby",
  ".wallaby.json": "_f_wallaby",
  ".wallaby.js": "_f_wallaby",
  ".wallaby.ts": "_f_wallaby",
  ".wallaby.coffee": "_f_wallaby",
  ".wallaby.conf.json": "_f_wallaby",
  ".wallaby.conf.js": "_f_wallaby",
  ".wallaby.conf.ts": "_f_wallaby",
  ".wallaby.conf.coffee": "_f_wallaby",
  ".watchmanconfig": "_f_watchmanconfig",
  "wercker.yml": "_f_wercker",
  "wpml-config.xml": "_f_wpml",
  ".yamllint": "_f_yamllint",
  ".yaspellerrc": "_f_yandex",
  ".yaspeller.json": "_f_yandex",
  "yarn.lock": "_f_yarn",
  ".yarnrc": "_f_yarn",
  ".yarn.installed": "_f_yarn",
  ".yarnclean": "_f_yarn",
  ".yarn-integrity": "_f_yarn",
  ".yarn-metadata.json": "_f_yarn",
  ".yarnignore": "_f_yarn",
  "yarn-error.log": "_f_yarnerror",
  ".yo-rc.json": "_f_yeoman",
  "now.json": "_f_vercel",
  ".nowignore": "_f_vercel",
  "vercel.json": "_f_vercel",
  ".vercelignore": "_f_vercel",
  "vite.config.js": "_f_vite",
  "vite.config.ts": "_f_vite",
  ".nvmrc": "_f_nvm",
  "example.env": "_f_env",
  ".env.staging": "_f_env",
  ".env.sample": "_f_env",
  ".env.preprod": "_f_env",
  ".env.prod": "_f_env",
  ".env.production": "_f_env",
  ".env.local": "_f_env",
  ".env.dev": "_f_env",
  ".env.dev.local": "_f_env",
  ".env.dev.prod": "_f_env",
  ".env.dev.preprod": "_f_env",
  ".env.dev.production": "_f_env",
  ".env.dev.staging": "_f_env",
  ".env.development": "_f_env",
  ".env.example": "_f_env",
  ".env.test": "_f_env",
  ".env.dist": "_f_env",
  ".env.default": "_f_env",
  ".jinja": "_f_jinja",
  "jenkins.yaml": "_f_jenkins",
  "jenkins.yml": "_f_jenkins",
  ".compodocrc": "_f_compodoc",
  ".compodocrc.json": "_f_compodoc",
  ".compodocrc.yaml": "_f_compodoc",
  ".compodocrc.yml": "_f_compodoc",
  "bsconfig.json": "_f_bsconfig",
  ".clang-format": "_f_llvm",
  ".clang-tidy": "_f_llvm",
  ".parcelrc": "_f_parcel",
  dune: "_f_dune",
  "dune-project": "_f_duneproject",
  ".adonisrc.json": "_f_adonis",
  "astro.config.mjs": "_f_astroconfig",
  "svelte.config.js": "_f_svelteconfig",
  "svelte.config.ts": "_f_svelteconfig",
  ".tool-versions": "_f_toolversions",
  "CMakeSettings.json": "_f_cmake",
  "CMakeLists.txt": "_f_cmake",
  "Cargo.toml": "_f_cargo",
  "Cargo.lock": "_f_cargolock",
  "pnpm-lock.yaml": "_f_pnpmlock",
  "tauri.conf.json": "_f_tauri",
  "tauri.linux.conf.json": "_f_tauri",
  "tauri.windows.conf.json": "_f_tauri",
  "tauri.macos.conf.json": "_f_tauri",
  "next.config.js": "_f_nextconfig",
  "next.config.mjs": "_f_nextconfig",
  "next.config.ts": "_f_nextconfig",
  "nextron.config.js": "_f_nextron",
  "nextron.config.ts": "_f_nextron",
  "poetry.toml": "_f_poetry",
  "poetry.lock": "_f_poetrylock",
  "pyproject.toml": "_f_pyproject",
  "rustfmt.toml": "_f_rustfmt",
  ".rustfmt.toml": "_f_rustfmt",
  "cucumber.yml": "_f_cucumber",
  "cucumber.yaml": "_f_cucumber",
  "cucumber.js": "_f_cucumber",
  "cucumber.ts": "_f_cucumber",
  "cucumber.cjs": "_f_cucumber",
  "cucumber.mjs": "_f_cucumber",
  "cucumber.json": "_f_cucumber",
  "flake.lock": "_f_flakelock",
  ace: "_f_ace",
  "ace-manifest.json": "_f_acemanifest",
  "knexfile.js": "_f_knex",
  "knexfile.ts": "_f_knex",
  "launch.json": "_f_launch",
  "redis.conf": "_f_redis",
  "sequelize.js": "_f_sequelize",
  "sequelize.ts": "_f_sequelize",
  "sequelize.cjs": "_f_sequelize",
  ".sequelizerc": "_f_sequelize",
  ".sequelizerc.js": "_f_sequelize",
  ".sequelizerc.json": "_f_sequelize",
  "cypress.json": "_f_cypress",
  "cypress.env.json": "_f_cypress",
  "cypress.config.js": "_f_cypress",
  "cypress.config.ts": "_f_cypress",
  "cypress.config.cjs": "_f_cypress",
  "playwright.config.ts": "_f_playright",
  "playwright.config.js": "_f_playright",
  "playwright.config.cjs": "_f_playright",
  "vitest.config.ts": "_f_vitest",
  "vitest.config.js": "_f_vitest",
  "vitest.config.cjs": "_f_vitest",
  "vite-env.d.ts": "_f_viteenv",
  "vite-env.d.js": "_f_viteenv",
  "pubspec.lock": "_f_flutterlock",
  "pubspec.yaml": "_f_flutter",
  ".packages": "_f_flutterpackage",
  ".htaccess": "_f_htaccess",
  "nx.json": "_f_nx",
  "project.json": "_f_nx",
  "v.mod": "_f_vmod",
  "quasar.config.js": "_f_quasar",
  "quasar.config.ts": "_f_quasar",
  "quasar.config.cjs": "_f_quasar",
  "quasar.config.mjs": "_f_quasar",
  "quarkus.properties": "_f_quarkus",
  "theme.properties": "_f_ui",
  gradlew: "_f_gradle",
  "gradle-wrapper.properties": "_f_gradle",
  "gradlew.bat": "_f_gradlebat",
  "makefile.win": "_f_makefile",
  makefile: "_f_makefile",
  make: "_f_makefile",
  version: "_f_version",
  server: "_f_sql",
  migrate: "_f_sql",
  ".commitlintrc": "_f_commitlint",
  ".commitlintrc.json": "_f_commitlint",
  ".commitlintrc.yaml": "_f_commitlint",
  ".commitlintrc.yml": "_f_commitlint",
  ".commitlintrc.js": "_f_commitlint",
  ".commitlintrc.cjs": "_f_commitlint",
  ".commitlintrc.ts": "_f_commitlint",
  ".commitlintrc.cts": "_f_commitlint",
  "commitlint.config.js": "_f_commitlint",
  "commitlint.config.cjs": "_f_commitlint",
  "commitlint.config.ts": "_f_commitlint",
  "commitlint.config.cts": "_f_commitlint",
  ".terraform-version": "_f_terraformversion",
  TerraFile: "_f_terrafile",
  "tfstate.backup": "_f_terraform",
  ".code-workspace": "_f_codeworkspace",
  "hardhat.config.js": "_f_hardhat",
  "hardhat.config.ts": "_f_hardhat",
  "hardhat.config.cts": "_f_hardhat",
  "hardhat.config.cjs": "_f_hardhat",
  "hardhat.config.mjs": "_f_hardhat",
  "taze.config.js": "_f_taze",
  "taze.config.ts": "_f_taze",
  "taze.config.cjs": "_f_taze",
  "taze.config.mjs": "_f_taze",
  ".tazerc.json": "_f_taze",
  "turbo.json": "_f_turbo",
  "unocss.config.ts": "_f_unocss",
  "unocss.config.js": "_f_unocss",
  "unocss.config.mjs": "_f_unocss",
  "unocss.config.cjs": "_f_unocss",
  "atomizer.config.js": "_f_atomizer",
  "atomizer.config.cjs": "_f_atomizer",
  "atomizer.config.mjs": "_f_atomizer",
  "atomizer.config.ts": "_f_atomizer",
  "esbuild.js": "_f_esbuild",
  "esbuild.mjs": "_f_esbuild",
  "esbuild.cjs": "_f_esbuild",
  "esbuild.ts": "_f_esbuild",
  "mix.exs": "_f_mix",
  "mix.lock": "_f_mixlock",
  ".DS_Store": "_f_dsstore",
  "remix.config.js": "_f_remix",
  "remix.config.cjs": "_f_remix",
  "remix.config.mjs": "_f_remix",
  "remix.config.ts": "_f_remix",
  "xmake.lua": "_f_xmake",
  ".sailsrc": "_f_sails",
};
