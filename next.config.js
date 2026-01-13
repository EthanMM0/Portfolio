/** @type {import('next').NextConfig} */

// GitHub Pages support:
// - Static export (no Node server)
// - Correct asset paths when deployed to https://<user>.github.io/<repo>/
// - Trailing slashes so routes resolve to folders on Pages

const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';
const repoName = process.env.GITHUB_REPOSITORY
  ? process.env.GITHUB_REPOSITORY.split('/')[1]
  : '';

// If you're deploying to a user/org site (repo name ends with .github.io), Pages is served at the root.
const isUserOrOrgSite = repoName.endsWith('.github.io');

// For project pages, assets/routes must be prefixed with /<repo>.
const basePath = isGitHubActions && !isUserOrOrgSite ? `/${repoName}` : '';

const nextConfig = {
  // Required for GitHub Pages (static hosting)
  output: 'export',
  trailingSlash: true,

  // Ensures next/image works with static export
  images: { unoptimized: true },

  // Make all routes/assets work under the repo subpath on GitHub Pages
  basePath,
  assetPrefix: basePath,
  
  env: {
  NEXT_PUBLIC_BASE_PATH: basePath,
  },
  
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
