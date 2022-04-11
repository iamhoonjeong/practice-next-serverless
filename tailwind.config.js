module.exports = {
  // tailwind 사용하는 파일
  content: [
    // ./pages/모든 디렉토리/.js, .jsx, .ts, .tsx로 끝나는 파일에서 사용
    './pages/**/*.{js,jsx,ts,tsx}',
    // ./components/모든 디렉토리/.js, .jsx, .ts, .tsx로 끝나는 파일에서 사용
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
