lib = File.expand_path("../ruby-lib", __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require "kalo-ui/version"

Gem::Specification.new do |spec|
  spec.name          = "kalo-ui"
  spec.version       = KaloUI::VERSION
  spec.authors       = ["Kalo Team"]
  spec.email         = ["tech@kalohq.com"]

  spec.summary       = %q{Blah.}
  spec.description   = %q{Blah.}
  spec.homepage      = "http://kalohq.com"

  if spec.respond_to?(:metadata)
    spec.metadata["allowed_push_host"] = "TODO: Set to 'http://mygemserver.com'"
  else
    raise "RubyGems 2.0 or newer is required to protect against " \
      "public gem pushes."
  end

  spec.files         = `git ls-files -z`.split("\x0").reject do |f|
    f.match(%r{^(test|spec|features)/})
  end
  spec.bindir        = "exe"
  spec.executables   = spec.files.grep(%r{^exe/}) { |f| File.basename(f) }
  spec.require_paths = ["ruby-lib"]

  spec.add_development_dependency "bundler", "~> 1.16"
  spec.add_development_dependency "rake", "~> 10.0"
end
