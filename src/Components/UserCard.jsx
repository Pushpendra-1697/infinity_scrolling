import { Box, Img, Text } from '@chakra-ui/react';
import React from 'react';

const UserCard = ({ myData, index }) => {
    const { name, picture } = myData;
    const { title, first, last } = name;
    const { large } = picture;
    return (
        <Box bg='gray.400' borderRadius={'12px'} padding={'10px'} boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" display={'flex'} justifyContent={'space-evenly'} flexDirection={['row', 'row', 'column']}>
            <Text mb='2px' color={'green.600'}>{index+1}</Text>
            <Img m='auto' w={"50%"} borderRadius={'50%'} src={large} alt='profile' />
            <Text m='2% 0'>{`${title} ${first} ${last}`}</Text>
        </Box>
    );
}

export default UserCard;