import { Box, Slide } from "@mui/material";
import { MessageText, PromotionsContainer } from "../../styles/promotions";
import { useEffect, useRef, useState } from "react";

const messages = [
  "30% off on your first ride !",
  "Ride & Vibe with people of your Interest !",
  "Make every moment count ! Whether it's a quick trip or a daily hitch !",
  "Support Us ! Make the world better 2gether !",
];

export default function Promotions() {

  const [messageIndex, setMessageIndex] = useState(0);
  const [show,setShow] = useState(true);
  const containerRef = useRef();

  useEffect(() => {

    setTimeout(() => {
        setShow(false)
    },3000);

    const intervalId = setInterval(() => {
        /* if we go to index 3=>4%4 = 0 again */
        setMessageIndex(i => (i+1) % messages.length);
        setShow(true);
        setTimeout(() => {
            setShow(false)
        },3000);

    },4000);

    return () => {
        clearInterval(intervalId);
    }

  },[]);

  return (
    <PromotionsContainer ref={containerRef}>
      <Slide direction={show ? "left" : "right" } 
             in={show}
             timeout={{enter:500,exit:100}}
             container={containerRef.current}
      >
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <MessageText>
             {messages[messageIndex]}
          </MessageText>
        </Box>
      </Slide>
    </PromotionsContainer>
  );
}
