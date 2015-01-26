set :application, "Centre controle de tachnique"
set :domain,      "democt.valyoo.fr"
set :deploy_to,   "/MAMP/htdocs/CentreCt"
set :app_path,    "app"
set :user, "valyoo" 

set :repository,  "https://github.com/bougboug/CentreCt.git"
set :scm,         :git
# Or: `accurev`, `bzr`, `cvs`, `darcs`, `subversion`, `mercurial`, `perforce`, or `none`

set :model_manager, "doctrine"
# Or: `propel`

role :web,        domain                         # Your HTTP server, Apache/etc
role :app,        domain, :primary => true       # This may be the same as your `Web` server

set :use_sudo, true
set  :keep_releases,  3

# Be more verbose by uncommenting the following line
# logger.level = Logger::MAX_LEVEL

## Symfony2
set :shared_files, ["app/config/parameters.yml"] # Les fichiers à conserver entre chaque déploiement
set :shared_children, [app_path + "/logs", "vendor"] # Idem, mais pour les dossiers
set :use_composer, true
set :update_vendors, false # Il est conseillé de laisser a false et de ne pas faire de ‘composer update’ directement sur la prod
#set :composer_options, "--verbose --prefer-dist" # Permet de spécifier des paramètres supplémentaires à composer, inutile dans notre cas
set :writable_dirs, ["app/cache", "app/logs"] # Application des droits nécessaires en écriture sur les dossiers
set :webserver_user, "valyoo" # L’utilisateur de votre serveur web (Apache, nginx, etc.)
set :permission_method, :chown # Dans le cas où vous n’avez pas les ACLs, ne pas oublier de mettre :use_sudo à true
set :use_set_permissions, true
set :dump_assetic_assets, true # dumper les assets

#default_run_options[:pty] = true # Si vous avez cette erreur : no tty present and no askpass program specified, alors décommentez
#ssh_options[:forward_agent] = true # Idem que ci-dessus

# Permet d’avoir le détail des logs de capistrano, plus facile à débugger si vous rencontrer des erreurs
logger.level = Logger::MAX_LEVEL

# Et enfin, si jamais vous rencontrez des erreurs de permissions, vous pouvez rajouter ces lignes suivantes :
after "deploy:finalize_update" do
run "chown -R dizda:www-data #{latest_release}"
run "sudo chmod -R 777 #{latest_release}/#{cache_path}"
run "sudo chmod -R 777 #{latest_release}/#{log_path}"
end