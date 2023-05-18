/** @type {import('next').NextConfig} */
const nextConfig = {
    divServer: {
        // Disable auto-refreshing of the browser
        // when changes are made to the code
        hot: false,
        // Prevent the browser from opening
        // automatically when starting Next.js
        open: false,
    },
    images: {
        domains: [
            'sneslab.net',
            // 'goldencode.com'
            "www.goldencode.com",
            "encrypted-tbn0.gstatic.com",
            "static.wikia.nocookie.net",
            "i.stack.imgur.com",
            "static.vecteezy.com",
            "computerscience.chemeketa.edu",
            "cdn.cambridgeincolour.com",
            "slideplayer.com"

        ]
    }
}

module.exports = nextConfig
