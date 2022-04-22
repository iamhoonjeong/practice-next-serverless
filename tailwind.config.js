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
  darkMode: 'media', // 컴퓨터 설정을 따라 dark mode setting
  // darkMode: 'class', // 클래스 네임에 'dark'가 있는지에 따라 setting
  plugins: [],
};
