import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig(({command}) => {
  console.log(command)
  return {
    plugins: [react()],
  }
});
