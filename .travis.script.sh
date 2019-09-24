#!/usr/bin/env bash

# TRAVIS_PULL_REQUEST == "false" for a normal branch commit, the PR number for a PR
# TRAVIS_BRANCH == target of normal commit or target of PR
# TRAVIS_SECURE_ENV_VARS == true if encrypted variables are available
# TRAVIS_REPO_SLUG == the repository, e.g. vaadin/framework8-demo
# TESTBENCH_LICENSE == TB license, defined as a secure variable in .travis.yml

if [ "$TRAVIS_SECURE_ENV_VARS" == "true" ]
then
	# Secure vars available, needed for TestBench tests
	# Pull request inside repository or branch build
	mvn -B -e -V -Dvaadin.testbench.developer.license=$TESTBENCH_LICENSE -Pintegration-tests verify
fi