/** @type {import('next').NextConfig} */


import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
    dest: "public",
    cacheOnFrontEndNav: true,
    aggressiveFrontEndNavCaching: true,
    reloadOnOnline: true,
    disable: false, // 👈 DISABLING PWA IN DEVELOPMENT MODE
    // workboxOptions: {
    //     disableDevLogs: true,

    // },
    register: true,
});

const nextConfig = {
    env: {
        NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY

    },
};

export default withPWA(nextConfig);
// export default nextConfig;
