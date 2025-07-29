export interface Resume {
  id: string;
  name: string;
  date: string;
  score: number;
  status: 'good' | 'warning' | 'bad';
}

export const resumes: Resume[] = [
  {
    id: '1',
    name: 'CV_Développeur_Frontend.pdf',
    date: '2025-01-15',
    score: 85,
    status: 'good'
  },
  {
    id: '2',
    name: 'CV_React_Developer.pdf', 
    date: '2025-01-10',
    score: 65,
    status: 'warning'
  },
  {
    id: '3',
    name: 'CV_Junior_Dev.pdf',
    date: '2025-01-05',
    score: 45,
    status: 'bad'
  }
];