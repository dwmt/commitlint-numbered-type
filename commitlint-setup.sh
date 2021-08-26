#/bin/sh

npm i @commitlint/cli husky @dwmt/commitlint-plugin-jira-type @dwmt/commitlint-config-jira-type -DE

cat <<EOT > commitlint.config.js
module.exports = {
  plugins: ['@dwmt/commitlint-plugin-jira-type'],
  extends: ['@dwmt/commitlint-config-jira-type'],
}
EOT

node_modules/.bin/husky install

node_modules/.bin/husky add .husky/commit-msg "npx --no-install commitlint --edit $1"

echo "You're all set!"
