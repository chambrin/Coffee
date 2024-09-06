import localFont from 'next/font/local'

export const Aylafont = localFont({
    src: [
        {
            path: '../app/fonts/Ayla-Ethiopia-Regular.woff',
            style: 'regular',
        },
        {
            path: '../app/fonts/Ayla-Ethiopia-UltraLight.otf',
            style: 'light',
        },
    ],
    variable: '--font-mycustom',
})


export const Geistfont = localFont({
    src: [
        {
            path: '../app/fonts/GeistMonoVF.woff',
            style: 'mono',
        },
        {
            path: '../app/fonts/GeistVF.woff',
            style: 'vf',
        },
    ],
    variable: '--font-base',
})