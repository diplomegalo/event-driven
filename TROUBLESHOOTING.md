# Troubleshooting Guide

This guide helps you understand and resolve common GitHub Actions workflow errors for this project.

## Understanding Workflow Status

The Azure Static Web Apps CI/CD workflow can show different statuses:

- **✅ Success**: All steps completed successfully
- **❌ Failure**: One or more steps failed
- **⚠️ Action Required**: Manual intervention or approval is needed (e.g., missing secrets, deployment approval)
- **⏸️ Skipped**: Step was skipped based on conditions

## Common Action Errors

### 1. npm install failures

**Error message**: `Failed to install npm dependencies`

**Possible causes**:
- Corrupted `package-lock.json`
- Network issues downloading packages
- Incompatible dependency versions
- Missing or invalid `package.json`

**Solutions**:
1. Verify `package.json` syntax is valid
2. Check that all dependencies have compatible versions
3. Try deleting `package-lock.json` and regenerating it locally with `npm install`
4. Check npm registry availability

### 2. Build failures

**Error message**: `Build failed. Please check the build configuration and source files for errors`

**Possible causes**:
- TypeScript compilation errors
- Missing or broken source files
- Invalid Docusaurus configuration
- Broken MDX/Markdown files

**Solutions**:
1. Run `npm run build` locally to see the actual error
2. Check TypeScript errors with `npm run typecheck`
3. Verify all imported files exist
4. Check `docusaurus.config.ts` for configuration errors
5. Validate MDX/Markdown syntax in docs and blog posts

### 3. Deployment failures

**Error message**: `Deployment failed. Please verify...`

**Possible causes**:
- Missing or invalid Azure Static Web Apps API token
- Azure resource doesn't exist or was deleted
- Incorrect path configurations
- Azure service outage

**Solutions**:
1. **Verify the secret**: Go to repository Settings → Secrets and variables → Actions
   - Ensure `AZURE_STATIC_WEB_APPS_API_TOKEN_AGREEABLE_STONE_05E821510` exists and is valid
2. **Check Azure resource**: Log into Azure portal and verify the Static Web App resource exists
3. **Verify paths**: Ensure `app_location: "/website"` and `output_location: "/build"` are correct
4. **Check Azure status**: Visit [Azure Status](https://status.azure.com/) for service outages

### 4. Action Required Status

**When**: After a push or PR, the workflow shows "Action Required"

**Possible causes**:
- Azure Static Web Apps requires manual approval for first-time deployments
- Security review needed for the deployment
- API token has expired or needs renewal

**Solutions**:
1. Check the deployment status in Azure Static Web Apps portal
2. Review any pending approvals or security checks
3. Regenerate the API token if it has expired:
   - Go to Azure Static Web App → Overview
   - Click "Manage deployment token"
   - Copy the new token
   - Update the GitHub secret

## Testing Locally

Before pushing changes, test the build locally:

```bash
cd website
npm install
npm run build
npm run serve  # Test the built site
```

## Viewing Workflow Logs

1. Go to the **Actions** tab in GitHub
2. Click on the failed workflow run
3. Click on the failed job (e.g., "Build and Deploy Job")
4. Expand the failed step to see detailed logs
5. Look for lines starting with `Error:` or `::error::`

## Workflow Summary

Each workflow run now provides a summary with:
- Status table showing each step's outcome
- Troubleshooting steps for failures
- Links to relevant documentation

Access it via:
1. Go to Actions tab
2. Click on the workflow run
3. Scroll down to see the "Summary" section

## Getting Help

If you've tried the above steps and still have issues:

1. Check the [Docusaurus documentation](https://docusaurus.io/)
2. Check the [Azure Static Web Apps documentation](https://docs.microsoft.com/azure/static-web-apps/)
3. Review the workflow logs for specific error messages
4. Create an issue with:
   - The error message
   - The workflow run URL
   - Steps you've already tried

## Preventive Measures

To avoid common issues:

1. **Always test locally** before pushing
2. **Keep dependencies updated** regularly
3. **Monitor Azure resource status** 
4. **Backup API tokens** securely
5. **Review workflow changes** carefully before merging
