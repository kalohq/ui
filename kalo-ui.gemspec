lib = File.expand_path("../ruby-lib", __FILE__)
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

  spec.files         = `git ls-files -z`.split("\x0").reject do |f|
    f.match(%r{^(test|spec|features)/})
  end
  spec.require_paths = ["ruby-lib"]

  spec.add_development_dependency "bundler", "~> 1.16"
  spec.add_development_dependency "rake", "~> 10.0"
end
