'use client'
import { useEffect, useState } from 'react';

const ProductPage: React.FC = () => {
  const [classes, setClasses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/classes'); // Ensure the path is correct
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        const data = await response.json();
        console.log('Fetched data:', data); // Log data for debugging
        setClasses(data);
      } catch (error) {
        let errorMessage = 'An error occurred.';
        if (error instanceof Error) {
          errorMessage = error.message;
        }
        console.error(errorMessage);
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchClasses();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Failed to load classes: {error}</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Class Listings</h1>
      {classes.length === 0 ? (
        <p>No classes available.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {classes.map((item) => (
            <div key={item.id} className="border p-4 rounded-lg shadow-md bg-white">
              <h2 className="text-xl font-semibold mb-2">{item.class_name}</h2>
              <p><strong>Code:</strong> {item.class_code}</p>
              <p><strong>Status:</strong> {item.class_status}</p>
              <p><strong>Location:</strong> {item.class_location}</p>
              <p><strong>Start Date:</strong> {item.start_date}</p>
              <p><strong>End Date:</strong> {item.end_date}</p>
              <p><strong>Number of Students:</strong> {item.number_student}</p>
              <p><strong>Price:</strong> {item.course_price ? item.course_price.toLocaleString() : 'N/A'} VND</p>
              <p><strong>Discount:</strong> {item.course_discount ? item.course_discount.toLocaleString() : 'N/A'} VND</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductPage;
