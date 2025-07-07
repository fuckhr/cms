export default {
    routes: [
        {
            method: 'POST',
            path: '/images/by-hash',
            handler: 'image.listImagesByHash',
            config: {
                policies: [],
                auth: false,
            },
        },
    ],
}; 