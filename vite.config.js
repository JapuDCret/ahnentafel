import liveReload from 'vite-plugin-live-reload'

const config = {
    plugins: [
        liveReload([
            'index.html',
            'public',
            'src',
        ]),
    ]
}

export default config