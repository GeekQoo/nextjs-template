/** @type {import('next').NextConfig} */

const nextConfig = {
    async rewrites() {
        return [
            {
                source: "/netdisk/:path*",
                destination: "http://localhost:3000/netdisk/:path*"
            }
        ];
    }
};

export default nextConfig;
