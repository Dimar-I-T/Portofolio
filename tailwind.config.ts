import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
        backgroundImage:{
            backgroundCode: "url('/codeBG.png')",
            potoProfil: "url('/profilePicture.png')"
        }
    },
  },
  plugins: [],
}
export default config