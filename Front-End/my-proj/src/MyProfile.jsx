  import { useState, useEffect } from 'react';
  import axios from 'axios';
  import styles from './MyProfile.module.css';
  import { toast } from 'react-toastify';

  const MyProfile = () => {
    const [profile, setProfile] = useState({
      username: '',
      email: '',
      country: '',
      state: '',
      phone: '',
      profilePic: '',
      coverPhoto: '',
    });

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
      const fetchProfile = async () => {
        try {
          setIsLoading(true);
          const $FSA_auth_token = localStorage.getItem('$FSA_auth_token');
          const response = await axios.get('http://localhost:3000/myProfile', {
            headers: {
              Authorization: `Bearer ${$FSA_auth_token}`,
            },
          });

          // Assuming the response has the necessary fields
          setProfile({
            username: response.data.username,
            email: response.data.email,
            country: response.data.country,
            phone: response.data.phone,
            profilePic: response.data.profilePic, // URL of profile picture
            coverPhoto: response.data.coverPhoto, // URL of cover photo
          });
          setIsLoading(false);
        } catch (error) {
          console.error('Error fetching profile data:', error);
          toast.error('Failed to fetch profile data.');
        }
      };

      fetchProfile();
    }, []);

    return (
      <div className={styles.profileContainer}>
        {isLoading && <div className={styles.loader}>Loading...</div>}
        {!isLoading && (
          <>
            <div className={styles.coverPhotoWrapper}>
              <img
                src={profile.coverPhoto || 'https://t3.ftcdn.net/jpg/06/79/87/08/360_F_679870832_w2jlmfSex8CA5bPDoIoVMgHIdjWCSd7V.jpg'}
                alt="Cover"
                className={styles.coverPhoto}
              />
            </div>
            <div className={styles.profileWrapper}>
              <img
                src={profile.profilePic || '/images/lion.png'}
                alt="Profile"
                className={styles.profilePic}
              />
              <h2 className={styles.username}>{profile.username}</h2>
              <p className={styles.info}>Email: {profile.email}</p>
              <p className={styles.info}>Country: {profile.country}</p>
              <p className={styles.info}>State: {profile.state}</p>
              <p className={styles.info}>Phone: {profile.phone}</p>
            </div>
          </>
        )}
      </div>
    );
  };

  export default MyProfile;
