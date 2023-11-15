yarn build:prod
git add .
git commit -am "Build for release."
npm version $1
