import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { message } from 'antd';
import axios from 'axios';
import InternView from './InternView';
import { API_INTERN_PROFILE_URL } from '../../../../constants/apiRoutes';

function InternProfile() {
  const [user, setUser] = useState({ profile: {} });
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    let mount = true;
    const getIntern = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          API_INTERN_PROFILE_URL.replace(':id', id),
        );
        if (mount) {
          setUser(data);
          setIsLoading(false);
        }
      } catch (error) {
        const err = error?.response?.data?.error;
        message.error(err || 'Something went wrong');
        setIsLoading(false);
      }
    };

    getIntern();
    return () => {
      mount = false;
    };
  }, [id]);

  return <InternView user={user} loading={isLoading} />;
}

export default InternProfile;
