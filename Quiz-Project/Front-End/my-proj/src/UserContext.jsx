import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios'
const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [userCredentials, setUserCredentials] = useState({
        userCoins: 0,
        userSc: 0,
        userAllChapterPoints: null,
    });
    
    useEffect(() => {
        const fetchUserCredentials = async () => {
          try {
            // setIsLoading(true);
            const $FSA_auth_token = localStorage.getItem('$FSA_auth_token');
            const response = await axios.get('http://localhost:3000/api/fetch-userCredentials', {
              headers: {
                Authorization: `Bearer ${$FSA_auth_token}`,
              },
            });
            setUserCredentials({
                userCoins: response.data.coins,
                userSc: response.data.overallSkillScore,
                userAllChapterPoints: response.data.allChapterPoints,
            });
          } catch (error) {
            console.error('Error fetching profile data:', error);
          }
        };
        fetchUserCredentials();
      }, []);
    return (
        <>
        
        <UserContext.Provider value={{ userCredentials, setUserCredentials }}>
            {children}
        </UserContext.Provider>
        </>

    );
};
  
export const useUser = () => useContext(UserContext);
