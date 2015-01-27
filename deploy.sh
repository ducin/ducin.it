#!/bin/bash

echo 'deployment started'

git add .
git commit --amend --no-edit
# copy all sources as-is
git branch -D gh-pages
git checkout -b gh-pages
# gh-pages branch has been dropped and synced with current master
bower install
git add bower_components/* -f
git commit --amend --no-edit
# push with force and go back to master
git push -f
git checkout master

echo 'deployment finished'
