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
echo "2. Checking for security headers..."
curl -I https://www.kauaipropertysolutions.com | grep -E "(X-Frame-Options|Content-Security-Policy|Strict-Transport-Security)" || echo "⚠️  Could not verify security headers"

echo ""
echo "3. Checking for .env files in git..."
if git ls-files | grep -E "\.env$"; then
    echo "⚠️  .env files found in git repository"
else
    echo "✅ No .env files in git repository"
fi

echo ""
echo "4. Checking for large files that might contain secrets..."
find . -type f -size +1M -not -path "./node_modules/*" -not -path "./.git/*" -not -path "./.next/*" -not -path "./out/*" -not -path "./dist/*" -not -path "./build/*" -not -path "./functions/*" -not -name "*.log" | head -5

echo ""
echo "✅ Security check completed!"
echo ""
echo "📋 Recommendations:"
echo "- Run 'npm audit fix' to fix any vulnerabilities"
echo "- Review any warnings above"
echo "- Consider running Lighthouse CI for performance and security audit" 