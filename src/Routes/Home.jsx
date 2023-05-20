import { Box, Img } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Box mt={['25%', '25%', '1%']} fontSize={"33px"} color={'blue.400'}>
      <Link to="/login">
        <h3>Login Page</h3>
      </Link>
      <Link to="/dashboard">
        <h3>Home</h3>
      </Link>
      <Img m='auto' src="./logo.jpg" alt="logo" />
    </Box>
  );
}
export default Home;
