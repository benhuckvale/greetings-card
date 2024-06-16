import React, { useEffect, useState } from 'react';
import GreetingsCard from './GreetingsCard.jsx';

const GreetingsCardWrapper = () => {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const encodedGreeting = params.get('greeting');

    if (encodedGreeting) {
      const decodedGreeting = atob(encodedGreeting);
      setGreeting(decodedGreeting);
    }
  }, []);

  return <GreetingsCard greeting={greeting} />;
};

export default GreetingsCardWrapper;

