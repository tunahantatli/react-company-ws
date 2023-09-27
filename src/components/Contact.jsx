import { Card, CardBody, Typography } from '@material-tailwind/react';
import React from 'react'

const Cards = (props) => {
    return (
        <Card className="mt-6 mb-4 lg:w-72 h-48 shadow-lg hover:bg-brown-800 hover:text-white rounded-lg border-2">
            <CardBody>
                <Typography variant="h5" className="text-center mb-2 mt-2 font-bold">{props.title}</Typography>
                <Typography className='text-center'>
                    {props.desctription}
                </Typography>
            </CardBody>
        </Card>
    );
};
export default function Contact() {
    const cardData = [
        {
            id: 1,
            title: "Address",
            desctription: "lorem ipsum dolor sit amet edipcising elit constrectur. 11/3 33600",
        },
        {
            id: 2,
            title: "E-Mail",
            desctription: "lorem@ipsum.com",
        },
        {
            id: 3,
            title: "Phone",
            desctription: "+11111111111",
        },

    ];
    return (
        <div>
            <div className="flex flex-wrap items-center  lg:p-10 gap-x-6 gap-y-4 justify-center mb-4">
                {cardData.map((card) => (
                    <Cards
                        key={card.id}
                        title={card.title}
                        desctription={card.desctription}
                    />
                ))}
            </div>
            <Card className='w-full h-96 mt-2 mb-4 p-0 rounded-lg'>
                <CardBody className='w-full h-full rounded-lg'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7057.67450362258!2d7.421530813355334!3d43.73317945818791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cdc28bfa733ce7%3A0x1002d8bbd550b626!2sMonaco%20Grand%20Prix!5e0!3m2!1str!2str!4v1695831627994!5m2!1str!2str" referrerpolicy="no-referrer-when-downgrade" className='w-full h-full rounded-lg' title='on-map'></iframe>
                </CardBody>
            </Card>
        </div>
    )
}
