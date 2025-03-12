import { Metadata } from 'next';
import Home from '@/pages/home/Home';

export const metadata: Metadata = {
  title: 'Главная - NeoPay Marketplace',
  description: 'Торговая площадка для игровых предметов',
};

export default function Page() {
  return (
    <main>
      <Home />
    </main>
  );
} 