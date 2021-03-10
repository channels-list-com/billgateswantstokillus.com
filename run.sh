#!/usr/bin/env bash

if [ -d "../archived-videos/dist/" ]; then
  if [ -d "_nuxt/" ]; then
    rm -rf _nuxt/
  fi
  cp -r ../archived-videos/dist/* .
  git add *
else
  echo "project not found"
fi
