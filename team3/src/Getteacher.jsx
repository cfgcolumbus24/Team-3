import { useEffect, useState } from 'react';
import axios from 'axios';

const GetTeacher = () => {
  const [teacherData, setTeacherData] = useState(null);
  useEffect(() => {
    const fetchTeacherData = async () => {
      try {
        const response = await axios.get('YOUR_BACKEND_ENDPOINT');
        setTeacherData(response.data);
      } catch (error) {
        console.error('Error fetching teacher data:', error);
      }
    };

    fetchTeacherData();
  }, [teacherData]);

  return null;
};

export default GetTeacher;
