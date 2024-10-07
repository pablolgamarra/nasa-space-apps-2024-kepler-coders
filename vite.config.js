import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
	return {
		build: {
			outDir: 'dist',
			sourcemap: true,
		},
		plugins: [react()],
		server: {
			open: true, // Esto es opcional, para que abra automáticamente el navegador al iniciar el servidor
		},
		base: '/',
	};
});
