/** @type {import('next').NextConfig} */

const API_KEY = process.env.API_KEY

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        // 여기 url 로 가면
        source: "/old-blog/:path*",
        // 아래로 바뀜
        destination: "/new-sexy-blog/:path*",
        permanent: false,
        // {
        //   source: "/old-blog/:path",
        //   // 아래로 바뀜
        //   destination: "/new-sexy-blog/:path",
        //   permanent: false,
      },
    ]
  },
  // redirect 시키긴 하지만 url 은 변하지 않는다.
  async rewrites() {
    return [
      {
        // network 상에서 api key 가 보이지 않는다.
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
    ]
  },
}

module.exports = nextConfig
