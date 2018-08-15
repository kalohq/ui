module KaloUI
  module Rails
    class Engine < ::Rails::Engine

      initializer 'kalo-ui.assets.precompile' do |app|
        %w(stylesheets images).each do |sub|
          app.config.assets.paths << root.join(sub).to_s
        end
      end

    end
  end
end