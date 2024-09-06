import React from 'react';
import Content from "@/components/feature/content/ContentView";
import LandingImg from "@public/images/landing.jpg";
import Carousel from "@/components/feature/carousel/Carousel";

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
        title: 'Office coffee',
        content: 'Bring the coffee shop experience to your office with our professional coffee machines and training sessions. Learn how to make the perfect cup of coffee for your team.',
        imageSrc: LandingImg,
        imagePosition: 'left'
    },
    {
        title: 'Coffee workshops',
        content: 'Join our coffee workshops to learn about different brewing methods, coffee beans, and how to make the perfect cup of coffee at home or in the office.',
        imageSrc: LandingImg,
        imagePosition: 'right'
    }
];

