import { useState, useEffect } from 'react';

function useFetch(url) {
  const [ContactData, setContactData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setContactData(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();

  }, [url]);

  const deletecontact = async (id) => {
    try {
      const response = await fetch(`${url}/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      setContactData(ContactData.filter(contact => contact.id !== id));
    } catch (error) {
      setError(error);
    }
  };

  const add = async (contactName) => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ contactName: contactName })
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const newData = await response.json();
      setContactData([...ContactData, newData]);
    } catch (error) {
      setError(error);
    }
  };

  return { ContactData, loading, error, deletecontact, add};
}

export default useFetch;
