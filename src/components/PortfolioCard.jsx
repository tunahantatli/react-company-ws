import React from 'react'
import { Card } from '@material-tailwind/react';

const Cards = (props) => {
    return (
        <Card className="mt-6 mb-4 w-48 shadow-lg hover:bg-brown-400 hover:text-white rounded-lg border-2">
            <img src={props.imageURL} alt="card-img" className="rounded-lg w-full h-full" />
        </Card>
    );
}
export default function PortfolioCard() {
    const cardData = [
        {
            id: 1,
            imageURL: "https://th.bing.com/th/id/OIP.ykjmTVWCALEr3ibvEYovKgHaF7?pid=ImgDet&rs=1",
        },
        {
            id: 2,
            imageURL: "https://th.bing.com/th/id/OIP.ykjmTVWCALEr3ibvEYovKgHaF7?pid=ImgDet&rs=1",
        },
        {
            id: 3,
            imageURL: "https://th.bing.com/th/id/OIP.ykjmTVWCALEr3ibvEYovKgHaF7?pid=ImgDet&rs=1",
        },
        {
            id: 4,
            imageURL: "https://th.bing.com/th/id/OIP.ykjmTVWCALEr3ibvEYovKgHaF7?pid=ImgDet&rs=1",
        },
        {
            id: 5,
            imageURL: "https://th.bing.com/th/id/OIP.ykjmTVWCALEr3ibvEYovKgHaF7?pid=ImgDet&rs=1",
        },
        {
            id: 6,
            imageURL: "https://th.bing.com/th/id/OIP.ykjmTVWCALEr3ibvEYovKgHaF7?pid=ImgDet&rs=1",
        },
        {
            id: 7,
            imageURL: "https://th.bing.com/th/id/OIP.ykjmTVWCALEr3ibvEYovKgHaF7?pid=ImgDet&rs=1",
        },
        {
            id: 8,
            imageURL: "https://th.bing.com/th/id/OIP.ykjmTVWCALEr3ibvEYovKgHaF7?pid=ImgDet&rs=1",
        },
        {
            id: 9,
            imageURL: "https://th.bing.com/th/id/OIP.ykjmTVWCALEr3ibvEYovKgHaF7?pid=ImgDet&rs=1",
        },
        {
            id: 10,
            imageURL: "https://th.bing.com/th/id/OIP.ykjmTVWCALEr3ibvEYovKgHaF7?pid=ImgDet&rs=1",
        }, {
            id: 11,
            imageURL: "https://th.bing.com/th/id/OIP.ykjmTVWCALEr3ibvEYovKgHaF7?pid=ImgDet&rs=1",
        },
        {
            id: 12,
            imageURL: "https://th.bing.com/th/id/OIP.ykjmTVWCALEr3ibvEYovKgHaF7?pid=ImgDet&rs=1",
        },
        {
            id: 13,
            imageURL: "https://th.bing.com/th/id/OIP.ykjmTVWCALEr3ibvEYovKgHaF7?pid=ImgDet&rs=1",
        },
        {
            id: 14,
            imageURL: "https://th.bing.com/th/id/OIP.ykjmTVWCALEr3ibvEYovKgHaF7?pid=ImgDet&rs=1",
        },
        {
            id: 15,
            imageURL: "https://th.bing.com/th/id/OIP.ykjmTVWCALEr3ibvEYovKgHaF7?pid=ImgDet&rs=1",
        },
    ]
    return (
        <div className="flex flex-wrap items-center lg:p-10 gap-x-6 gap-y-4 justify-center mb-10">
            {cardData.map((card) => (
                <Cards
                    key={card.id}
                    imageURL={card.imageURL}
                />
            ))}
        </div>
    )
}
