/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
};

module.exports = nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images : {
//         remotePatterns : [
//             {
//                 protocol : 'https',
//                 hostname : 'firebasestorage.googleapis.com'
//             }, {
//                 protocol : 'https',
//                 hostname : 'avatars.githubusercontent.com'
//             }
//         ]
//     }
// }

// module.exports = nextConfig
