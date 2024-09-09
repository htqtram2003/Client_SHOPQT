
import type { NextApiRequest, NextApiResponse } from 'next';

const classes = [
  // Example data structure
  {
    id: '1',
    class_name: 'Class A',
    class_code: 'A123',
    class_status: 'ACTIVE',
    class_location: 'Location A',
    start_date: '2024-08-01',
    end_date: '2024-08-31',
    number_student: 10,
    course_price: 2000000,
    course_discount: 500000
  },

];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(classes);
}
