import localFont from 'next/font/local'

export const editorial = localFont({
    src: [
        {
            path: '../app/fonts/editorial.otf',
            style: 'regular',
        },
    ],
    variable: '--font-editorial',
})



export const Surtifont = localFont({
    src: [
        {
            path: '../app/fonts/Surt.woff2',
            style: 'regular',
        }
    ],
    variable: '--font-surti',
})