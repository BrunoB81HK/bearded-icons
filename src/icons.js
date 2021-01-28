function icon(name) {
	return {
		[`_f_${name}`]: {
			"iconPath": `./icons/${name}.svg`,
		},
	};
}

function iconGeneric(name) {
	return {
		[`_${name}`]: {
			"iconPath": `./icons/${name}.svg`,
		},
	};
}

const icons = {
	...iconGeneric("file"),
	...iconGeneric("file_light"),
	...iconGeneric("folder"),
	...iconGeneric("folder_light"),
	...iconGeneric("folder_open"),
	...iconGeneric("folder_light_open"),
	...icon("elm"),
	...icon("scss"),
	...icon("less"),
	...icon("stylus"),
	...icon("postcssconfig"),
	...icon("docker"),
	...icon("git"),
	...icon("readme"),
	...icon("html"),
	...icon("json"),
	...icon("rjson"),
	...icon("markdown"),
	...icon("css"),
	...icon("cssmap"),
	...icon("js"),
	...icon("jsmap"),
	...icon("typescript"),
	...icon("typescriptdef"),
	...icon("tsx"),
	...icon("vue"),
	...icon("image"),
	...icon("zip"),
	...icon("yarn"),
	...icon("npm"),
	...icon("svg"),
	...icon("yaml"),
	...icon("font"),
	...icon("php"),
	...icon("twig"),
	...icon("composer"),
	...icon("symfony"),
	...icon("xml"),
	...icon("robots"),
	...icon("bundler"),
	...icon("stylelint"),
	...icon("prettier"),
	...icon("python"),
	...icon("log"),
	...icon("license"),
	...icon("audio"),
	...icon("lua"),
	...icon("csharp"),
	...icon("dartlang"),
	...icon("eslint"),
	...icon("handlebars"),
	...icon("webpack"),
	...icon("ruby"),
	...icon("jest"),
	...icon("babel"),
	...icon("toml"),
	...icon("elixir"),
	...icon("exs"),
	...icon("rust"),
	...icon("reactjs"),
	...icon("angular"),
	...icon("rollup"),
	...icon("java"),
	...icon("gulp"),
	...icon("grunt"),
	...icon("editorconfig"),
	...icon("light_editorconfig"),
	...icon("shell"),
	...icon("vscode"),
	...icon("ai"),
	...icon("photoshop"),
	...icon("pdf"),
	...icon("go"),
	...icon("go_package"),
	...icon("tmpl"),
	...icon("svelte"),
	...icon("browserslist"),
	...icon("erlang"),
	...icon("vite"),
	...icon("mint"),
	...icon("eex"),
	...icon("env"),
	...icon("nvm"),
	...icon("sql"),
	...icon("nginx"),
	...icon("conf"),
	...icon("c"),
	...icon("cpp"),
	...icon("powershell"),
	...icon("njk"),
	...icon("blade"),
};

export default icons;