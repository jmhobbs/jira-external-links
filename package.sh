#!/bin/bash

set -o errexit
set -o nounset
set -o pipefail

__dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

VERSION=$(jq -r .version "${__dir}/JIRA-External-Links/manifest.json")
ZIPFILE="JIRA-External-Links-$VERSION.zip"
echo -e "\033[96m=> Packaging version $VERSION\033[0m"
zip -v $ZIPFILE JIRA-External-Links/*
echo -e "\033[92m=> Done! $ZIPFILE\033[0m"
