import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import UserComponent from "../Components/UserComponent";
import Loading from "../Components/Loading";
import Error from "../Components/Error";

let userDetails = JSON.parse(localStorage.getItem('userDetails')) || "";
function Dashboard() {
  const { logoutUser } = useContext(AuthContext);
  const [card, setCard] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);



  const getCardData = async () => {
    try {
      let res = await fetch(`https://randomuser.me/api?results=9&page=${page}`);
      res = await res.json();
      setCard((prev) => [...prev, ...res.results]);
      setLoading(false);
      setIsError(false);
    } catch (err) {
      setIsError(true);
    }
  };

  const handleInfiniteScroll = async () => {
    try {
      if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
        setLoading(true);
        setTimeout(() => {
          setPage((prev) => prev + 1);
        }, 1000);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCardData();
  }, [page]);

  useEffect(() => {
    window.addEventListener('scroll', handleInfiniteScroll);
    return () => window.removeEventListener('scroll', handleInfiniteScroll); // cleanup function
  }, []);

  return (
    <Box padding={'10px'}>
      <Box display={'flex'} justifyContent={'space-evenly'} mb={['10%', '10%', '5%']}>
        <Heading color={'green.600'} fontSize={'28px'}>Dashboard</Heading>
        <Text display={['none', 'none', 'block']}>Welcome❤️{userDetails.name}</Text>
        <Button bg='black' color={'red'} onClick={logoutUser}>Logout</Button>
      </Box>
      {isError && <Error />}
      <UserComponent userInfo={card} />
      {loading && <Loading />}
    </Box>
  );
}

export default Dashboard;
