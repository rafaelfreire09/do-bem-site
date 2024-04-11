const prod = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/do-bem-site",
  images: {
    unoptimized: true,
  },
  // assetPrefix: prod ? "https://rafaelfreire09.github.io/do-bem-site/" : "",
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
