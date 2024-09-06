import React from 'react';
import Content from "@/components/feature/content/ContentView";
import Carousel from "@/components/feature/carousel/Carousel";

// Images
import LandingImg from "@public/images/landing.jpg";
import EspressoImg from "@public/images/espresso.jpg";
import BoxImg from "@public/images/box.jpg";
import ManImg from "@public/images/man.jpg";

export default function Home() {
    return (
        <main>
            <Content
                title={contentPageData[0].title}
                content={contentPageData[0].content}
                imageSrc={contentPageData[0].imageSrc}
                imagePosition="right"
            />
            <Carousel />
            <Content
                title={contentPageData[1].title}
                content={contentPageData[1].content}
                imageSrc={contentPageData[1].imageSrc}
                imagePosition="left"
            />
            <Carousel />
            <Content
                title={contentPageData[2].title}
                content={contentPageData[2].content}
                imageSrc={contentPageData[2].imageSrc}
                imagePosition="right"
            />
            <Carousel />
            <Content
                title={contentPageData[3].title}
                content={contentPageData[3].content}
                imageSrc={contentPageData[3].imageSrc}
                imagePosition="left"
            />
        </main>
    );
}

// Page data
const contentPageData = [
    {
        title: 'Home coffee',
        content: 'Got a fancy coffee machine sitting at home, but struggling with that perfect brew? We’ve created an in-person 2 hour session to learn all things home brewing. From machine set up, pouring basics and perfecting your milk. Ready to make delicious coffee at home?',
        imageSrc: LandingImg,
        imagePosition: 'right'
    },
    {
        title: 'Home coffee',
        content: 'Got a fancy coffee machine sitting at home, but struggling with that perfect brew? We’ve created an in-person 2 hour session to learn all things home brewing. From machine set up, pouring basics and perfecting your milk. Ready to make delicious coffee at home?',
        imageSrc: EspressoImg,
        imagePosition: 'left'
    },
    {
        title: 'Coffee subscriptions',
        content: 'Our customisable coffee subscription allows you to select bag size, grind setting, frequency, and duration…so you never run out of coffee again.',
        imageSrc: BoxImg,
        imagePosition: 'right'
    },
    {
        title: 'Have a cafe? Or just need lots of coffee?',
        content: 'We\'ve got you. Redbrick is here to help you serve delicious coffee. We work in a collaborative way to find the best approach to coffee for your business.',
        imageSrc: ManImg,
        imagePosition: 'right'
    }
];

