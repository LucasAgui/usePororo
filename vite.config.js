import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import createSvgSpritePlugin from 'vite-plugin-svg-sprite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		eslint(),
		createSvgSpritePlugin({
			symbolId: 'icon-[name]-[hash]'
		})
	]
});
