import { Box } from '@chakra-ui/react';
import React from 'react';
import { BiLoaderCircle } from "react-icons/bi";

const Loading = () => {
    return (
        <Box display={"flex"} justifyContent="center" alignItems={"center"}>
            {" "}
            <BiLoaderCircle fontSize={"34px"} />{" "}
        </Box>
    );
}

export default Loading;