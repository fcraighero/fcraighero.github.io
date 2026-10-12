# Build locally, then publish _site/ to the `master` branch (served by GitHub Pages).
# Usage:  rake build          -> build into _site/
#         rake serve          -> local preview at http://localhost:4000
#         rake commit_deploy  -> build, commit, and deploy

SOURCE_BRANCH = `git rev-parse --abbrev-ref HEAD`.strip

desc "Build the site into _site/"
task :build do
  sh "JEKYLL_ENV=production bundle exec jekyll build"
end

desc "Serve the site locally"
task :serve do
  sh "bundle exec jekyll serve"
end

desc "Commit sources and _site/"
task :commit => :build do
  puts "\n## Staging modified files"
  system("git add -A")
  message = "Build site at #{Time.now.utc}"
  puts "\n## Committing: #{message}"
  system("git commit -m \"#{message}\"")
  puts "\n## Pushing #{SOURCE_BRANCH}"
  system("git push origin #{SOURCE_BRANCH}")
end

desc "Deploy _site/ to the master branch"
task :deploy do
  puts "\n## Recreating master from _site/"
  system("git branch -D master")
  system("git checkout -b master")
  system("git filter-branch --subdirectory-filter _site/ -f")
  system("git checkout #{SOURCE_BRANCH}")
  puts "\n## Pushing master"
  system("git push -f origin master")
end

desc "Build, commit and deploy"
task :commit_deploy => [:commit, :deploy]
