'use client';

import { useRouter } from 'next/navigation';
import AuthPage from './auth/page';
import styles from './page.module.css';

export default function Home() {
  const router = useRouter();

  
  return (
    <div className={styles.page}>
      <main >
      <AuthPage />
      </main>
    
    </div>
  );
}