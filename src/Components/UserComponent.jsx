import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import UserCard from './UserCard';

const UserComponent = ({ userInfo }) => {
  return (
    <Box>
      <Heading fontSize={'25px'} m='1% 0 3% 0'>LIST OF USERS</Heading>
      <Box minHeight={'100vh'} overflowY={'auto'} display={'grid'} gridTemplateColumns={["repeat(1,1fr)", "repeat(1,1fr)", "repeat(5,1fr)"]} gap={"30px"}>
        {userInfo.map((ele, index) =>
          <UserCard key={index} myData={ele} index={index} />
        )}
      </Box>
    </Box>
  );
}

export default UserComponent