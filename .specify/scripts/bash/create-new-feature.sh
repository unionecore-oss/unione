#!/bin/bash

# create-new-feature.sh
# Creates a new feature branch and initializes spec file

set -e

# Parse command line arguments
FEATURE_DESCRIPTION=""
OUTPUT_JSON=false

while [[ "$#" -gt 0 ]]; do
    case $1 in
        --json)
            OUTPUT_JSON=true
            FEATURE_DESCRIPTION="$2"
            shift ;;
        *)
            FEATURE_DESCRIPTION="$1" ;;
    esac
    shift
done

if [ -z "$FEATURE_DESCRIPTION" ]; then
    echo "Error: Feature description is required"
    exit 1
fi

# Generate branch name from description (first 50 chars, sanitized)
BRANCH_BASE=$(echo "$FEATURE_DESCRIPTION" | \
    head -c 50 | \
    tr '[:upper:]' '[:lower:]' | \
    sed 's/[^a-z0-9]/-/g' | \
    sed 's/--*/-/g' | \
    sed 's/^-//;s/-$//')

# Add feature prefix and timestamp
TIMESTAMP=$(date +%Y%m%d-%H%M)
BRANCH_NAME="feature/${BRANCH_BASE}-${TIMESTAMP}"

# Create spec file path
SPEC_FILE="/Users/ai-code-lab/projects/UNIONE/.specify/specs/${BRANCH_NAME//\//-}.md"

# Create and checkout branch
git checkout -b "$BRANCH_NAME" 2>/dev/null || true

# Create spec file directory if needed
mkdir -p "$(dirname "$SPEC_FILE")"

# Initialize spec file with basic content
cat > "$SPEC_FILE" << 'EOF'
# Feature Specification

## Overview
Feature specification initialized.

## Status
DRAFT

EOF

if [ "$OUTPUT_JSON" = true ]; then
    # Output JSON format for parsing
    echo "{\"BRANCH_NAME\":\"$BRANCH_NAME\",\"SPEC_FILE\":\"$SPEC_FILE\"}"
else
    echo "Created branch: $BRANCH_NAME"
    echo "Spec file: $SPEC_FILE"
fi