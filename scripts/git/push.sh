#!/usr/bin/dash

# This is a script to push up to the branch you are on with a token. 

# This script should be ran from the root directory of
# the project.

GH_USERNAME="RyanOatmeal"
REPO="ryanoatmeal.github.io"
. "../secrets.env"

CURRENT_BRANCH=$(git branch --show-current)

PUSH_URL="https://${GH_USERNAME}:${WEBSITE_TOKEN}@github.com/${GH_USERNAME}/${REPO}.git"
git push $PUSH_URL $CURRENT_BRANCH
