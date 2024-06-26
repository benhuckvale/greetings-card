import React, { useEffect, useState } from 'react';
import GreetingsCard from './GreetingsCard.jsx';;
import DOMPurify from 'dompurify';

const GreetingsCardWrapper = () => {
  const [greeting, setGreeting] = useState('');
  const [designedBy, setDesignedBy] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const encodedGreeting = params.get('greeting');

    if (encodedGreeting) {
      const decodedGreeting = DOMPurify.sanitize(atob(encodedGreeting));
      const [greetingPart, designedByPart] = decodedGreeting.split('---');
      setGreeting(greetingPart.trim());
      setDesignedBy(designedByPart ? designedByPart.trim() : '');
    }
  }, []);

  return <GreetingsCard greeting={greeting} designed_by={designedBy} />;
};

export default GreetingsCardWrapper;
