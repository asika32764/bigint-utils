yarn build:prod
yarn doc
git add .
git commit -am "Prepare for release."
npm version "${1:-patch}"
npm publish
