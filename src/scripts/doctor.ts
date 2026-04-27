export interface Doctor {
  id: number;
  name: string;
  role: string;
  specialty: string;
  image: string;
  tags: string[];
  color: 'pink' | 'blue' | 'yellow' | 'green' | 'purple';
  linkedin?: string;
  email?: string;
}
