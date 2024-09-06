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
            {contentPageData.map((section, index) => (
                <React.Fragment key={index}>
                    <Content
                        title={section.title}
                        content={section.content}
                        imageSrc={section.imageSrc}
                        imagePosition={section.imagePosition}
                        isFirst={section.isFirst}
                    />
                    <Carousel />
                </React.Fragment>
            ))}
        </main>
    );
}
// Page data
const contentPageData = [
    {
        title: 'For Coffee Drinkers',
        content: '',
        imageSrc: LandingImg,
        imagePosition: 'right',
        isFirst: true
    },
    {
        title: 'Home coffee',
        content: 'Got a fancy coffee machine sitting at home, but struggling with that perfect brew? We’ve created an in-person 2 hour session to learn all things home brewing. From machine set up, pouring basics and perfecting your milk. Ready to make delicious coffee at home?',
        imageSrc: EspressoImg,
        imagePosition: 'left',
        isFirst: false
    },
    {
        title: 'Coffee subscriptions',
        content: 'Our customisable coffee subscription allows you to select bag size, grind setting, frequency, and duration…so you never run out of coffee again.',
        imageSrc: BoxImg,
        imagePosition: 'right',
        isFirst: false
    },
    {
        title: 'Have a cafe? Or just need lots of coffee?',
        content: 'We\'ve got you. Redbrick is here to help you serve delicious coffee. We work in a collaborative way to find the best approach to coffee for your business.',
        imageSrc: ManImg,
        imagePosition: 'left',
        isFirst: false
    }
];