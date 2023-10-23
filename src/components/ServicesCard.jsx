import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from "@material-tailwind/react";

const Cards = (props) => {
    return (
        <Card className="w-full lg:flex-row flex-wrap mb-6">
            <CardHeader
                shadow={false}
                floated={false}
                className="m-0 lg:w-2/5 shrink-0 rounded-lg lg:rounded-r-none"
            >
                <img
                    src={props.imgUrl}
                    alt="card-img"
                    className="h-full w-full object-cover"
                />
            </CardHeader>
            <CardBody className='lg:w-3/5'>
                <Typography variant="h6" color="gray" className="mb-4 uppercase">
                    {props.title}
                </Typography>
                <Typography variant="h4" color="blue-gray" className="mb-2">
                    {props.heading}
                </Typography>
                <Typography color="gray" className="mb-8 font-normal">
                    {props.desc}
                </Typography>
                <a href={props.link} className="inline-block">
                    <Button variant="text" className="flex items-center gap-2">
                        Learn More
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                            className="h-4 w-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                            />
                        </svg>
                    </Button>
                </a>
            </CardBody>
        </Card>
    );
}


export default function ServicesCard() {
    const cardData = [
        {
            id: 1,
            imgUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
            title: "lorem ipsum",
            heading: "lorem ipsum dolor sit amet",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo eligendi et, temporibus nostrum suscipit officiis voluptate eius animi. Fuga facilis quae hic molestiae saepe ipsum deserunt. Commodi architecto tenetur neque!",
            link: "/",
        },
        {
            id: 1,
            imgUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
            title: "lorem ipsum",
            heading: "lorem ipsum dolor sit amet",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo eligendi et, temporibus nostrum suscipit officiis voluptate eius animi. Fuga facilis quae hic molestiae saepe ipsum deserunt. Commodi architecto tenetur neque!",
            link: "/",
        },
        {
            id: 2,
            imgUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
            title: "lorem ipsum",
            heading: "lorem ipsum dolor sit amet",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo eligendi et, temporibus nostrum suscipit officiis voluptate eius animi. Fuga facilis quae hic molestiae saepe ipsum deserunt. Commodi architecto tenetur neque!",
            link: "/",
        },
        {
            id: 3,
            imgUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
            title: "lorem ipsum",
            heading: "lorem ipsum dolor sit amet",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo eligendi et, temporibus nostrum suscipit officiis voluptate eius animi. Fuga facilis quae hic molestiae saepe ipsum deserunt. Commodi architecto tenetur neque!",
            link: "/",
        },
        {
            id: 4,
            imgUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
            title: "lorem ipsum",
            heading: "lorem ipsum dolor sit amet",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo eligendi et, temporibus nostrum suscipit officiis voluptate eius animi. Fuga facilis quae hic molestiae saepe ipsum deserunt. Commodi architecto tenetur neque!",
            link: "/",
        },
    ]
    return (
        <div className='mb-8'>
            {cardData.map((card) => (
                <Cards
                    key={card.id}
                    imgUrl={card.imgUrl}
                    title={card.title}
                    heading={card.heading}
                    desc={card.desc}
                    link={card.link}
                />
            ))}
        </div>
    )
}
