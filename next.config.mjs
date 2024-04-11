/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: "custom",
    loaderFile: "src/libs/myloader.ts",
    // domains: [
    //   "storage.googleapis.com",
    //   "storage.googleapis.com/wedding-invitation-a4e03.appspot.com",
    // ],
    // dangerouslyAllowSVG: true,
    // contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
