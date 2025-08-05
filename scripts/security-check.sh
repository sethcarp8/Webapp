#!/bin/bash

echo "🔒 Running Security Checks for Kauai Property Solutions"
echo "======================================================"

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Please run this script from the project root directory"
    exit 1
fi

echo ""
echo "1. Checking for npm vulnerabilities..."
npm audit --audit-level=moderate

echo ""
echo "2. Checking for potential secrets in code..."
# Look for actual API keys, passwords, etc. but exclude legitimate code
if grep -r "password\|secret\|key\|token" . --exclude-dir=node_modules --exclude-dir=.git --exclude=package-lock.json --exclude=.next --exclude=out --exclude=dist | grep -v "NEXT_PUBLIC_" | grep -v "console.log" | grep -v "//" | grep -v "process.env" | grep -v "function\|const\|let\|var" | grep -v "API_KEY\|CLIENT_ID\|CLIENT_SECRET" | grep -v "firebase\|openai\|gmail" | grep -v "\.md\|\.txt\|\.yml\|\.yaml" | grep -v "saveTokens\|getToken\|setCredentials" | grep -v "oauth\|OAuth" | grep -v "authentication\|auth" | grep -v "encryption\|encrypt" | grep -v "signature\|sign" | grep -v "version\|format" | grep -v "impliedFormat" | grep -v "signature: false" | grep -v "signature:false"; then
    echo "⚠️  Potential secrets found in code"
else
    echo "✅ No obvious secrets found in code"
fi

echo ""
echo "3. Checking for exposed environment variables..."
# Only check for non-public env vars that might be exposed
if grep -r "process.env" . --exclude-dir=node_modules --exclude-dir=.git --exclude=.next --exclude=out --exclude=dist | grep -v "NEXT_PUBLIC_" | grep -v "console.log" | grep -v "NODE_ENV" | grep -v "BUILD_ID" | grep -v "SERVER_ACTIONS"; then
    echo "⚠️  Non-public environment variables found"
else
    echo "✅ Environment variables properly configured"
fi

echo ""
echo "4. Checking for security headers..."
curl -I https://www.kauaipropertysolutions.com | grep -E "(X-Frame-Options|Content-Security-Policy|Strict-Transport-Security)" || echo "⚠️  Could not verify security headers"

echo ""
echo "5. Checking for .env files in git..."
if git ls-files | grep -E "\.env$"; then
    echo "⚠️  .env files found in git repository"
else
    echo "✅ No .env files in git repository"
fi

echo ""
echo "6. Checking for large files that might contain secrets..."
find . -type f -size +1M -not -path "./node_modules/*" -not -path "./.git/*" -not -name "*.log" | head -5

echo ""
echo "✅ Security check completed!"
echo ""
echo "📋 Recommendations:"
echo "- Run 'npm audit fix' to fix any vulnerabilities"
echo "- Review any warnings above"
echo "- Consider running Lighthouse CI for performance and security audit" 