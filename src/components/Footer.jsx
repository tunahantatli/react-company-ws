import { Typography, Input, Button } from "@material-tailwind/react";
import React, { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");
  const onChange = ({ target }) => setEmail(target.value);
  return (
    <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t rounded-md border-white-50 bg-brown-600 p-6 text-center md:justify-between">
      <Typography color="white" className="font-normal">
        &copy; 2023 <a href="www.tunahantatli.com">Tunahan Tatlı</a>
      </Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
          <Typography
            as="a"
            href="#"
            color="white"
            className="font-normal transition-colors hover:bg-white hover:text-brown-900 p-2 rounded-lg"
          >
            About Us
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="white"
            className="font-normal transition-colors hover:bg-white hover:text-brown-900 p-2 rounded-lg"
          >
            License
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="white"
            className="font-normal transition-colors hover:bg-white hover:text-brown-900 p-2 rounded-lg"
          >
            Contribute
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="white"
            className="font-normal transition-colors hover:bg-white hover:text-brown-900 p-2 rounded-lg"
          >
            Contact Us
          </Typography>
        </li>
        <li>
          <div className="relative flex w-full max-w-[24rem]">
            <Input
              type="email"
              label="Email Address"
              value={email}
              onChange={onChange}
              className="pr-20 border-white text-white"
              containerProps={{
                className: "min-w-0 text-white",
              }}
            />
            <Button
              size="sm"
              color={email ? "white" : "white"}
              disabled={!email}
              className="!absolute right-1 top-1 rounded"
            >
              Invite
            </Button>
          </div>
        </li>
      </ul>
    </footer>
  );
}