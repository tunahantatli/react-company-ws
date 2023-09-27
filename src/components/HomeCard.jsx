import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Cards = (props) => {
    return (
      <Card className="mt-6 mb-4 lg:w-72 shadow-lg hover:bg-brown-400 hover:text-white rounded-lg border-2">
        <CardBody>
            <img src={props.imageURL} alt="card-img"  className="rounded-lg"/>
          <Typography variant="h5" className="text-center mb-2 mt-2 font-bold">{props.title}</Typography>
          <Typography>
            {props.desctription}
          </Typography>
        </CardBody>
        <CardFooter className="bottom-0 mt-2 w-full">
          <Link
            to={props.link}
            className="btn p-2 w-full text-center text-white rounded-lg bg-brown-900 hover:bg-white hover:text-brown-900 mb-2"
          >
            Show More
          </Link>
        </CardFooter>
      </Card>
    );
  };
export default function HomeCard() {
    const cardData = [
        { 
            id : 1,
            title: "lorem ipsum",
            imageURL: "https://th.bing.com/th/id/OIP.BURfWz31bTAn0oD-HZeu5QAAAA?pid=ImgDet&rs=1",
            desctription:"lorem ipsum dolor sit amet edipcising elit constrectur.",
            link:"/"
        },
        { 
            id : 2,
            title: "lorem ipsum",
            imageURL: "https://th.bing.com/th/id/OIP.BURfWz31bTAn0oD-HZeu5QAAAA?pid=ImgDet&rs=1",
            desctription:"lorem ipsum dolor sit amet edipcising elit constrectur.",
            link:"/"
        },
        { 
            id : 3,
            title: "lorem ipsum",
            imageURL: "https://th.bing.com/th/id/OIP.BURfWz31bTAn0oD-HZeu5QAAAA?pid=ImgDet&rs=1",
            desctription:"lorem ipsum dolor sit amet edipcising elit constrectur.",
            link:"/"
        },
        { 
            id : 4,
            title: "lorem ipsum",
            imageURL: "https://th.bing.com/th/id/OIP.BURfWz31bTAn0oD-HZeu5QAAAA?pid=ImgDet&rs=1",
            desctription:"lorem ipsum dolor sit amet edipcising elit constrectur.",
            link:"/"
        },
        { 
            id : 5,
            title: "lorem ipsum",
            imageURL: "https://th.bing.com/th/id/OIP.BURfWz31bTAn0oD-HZeu5QAAAA?pid=ImgDet&rs=1",
            desctription:"lorem ipsum dolor sit amet edipcising elit constrectur.",
            link:"/"
        },
        { 
            id : 6,
            title: "lorem ipsum",
            imageURL: "https://th.bing.com/th/id/OIP.BURfWz31bTAn0oD-HZeu5QAAAA?pid=ImgDet&rs=1",
            desctription:"lorem ipsum dolor sit amet edipcising elit constrectur.",
            link:"/"
        },
    ];
  return (
    <div className="flex flex-wrap items-center border-t-2 border-b-2 lg:p-10 gap-x-6 gap-y-4 justify-center mb-10">
      {cardData.map((card) => (
        <Cards
          key={card.id}
          imageURL={card.imageURL}
          title={card.title}
          desctription={card.desctription}
          link={card.link}
        />
      ))}
    </div>
  )
}
