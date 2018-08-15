lib = File.expand_path("../lib-gem", __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require "kalo-ui/version"

Gem::Specification.new do |spec|
  spec.name          = "kalo-ui"
  spec.version       = KaloUI::VERSION
  spec.authors       = ["Kalo Team"]
  spec.email         = ["tech@kalohq.com"]

  spec.summary       = "Kalo UI Library"
  spec.description   = "Kalo UI Library"
  spec.homepage      = "https://kalo.design"

  spec.files         = `git ls-files`.split($\) - %w(.circleci config flow-typed lib scripts site src .babelrc .eslintignore .eslintrc.js .flowconfig .gitignore .istanbul.yml .nvmrc .prettierignore .prettierrc gulpfile.js package-lock.json package.json postcss.config.js wallaby.js)
  spec.require_paths = ["lib-gem"]

  spec.add_development_dependency "bundler", "~> 1.16"
  spec.add_development_dependency "rake", "~> 10.0"
end
