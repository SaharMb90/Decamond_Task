'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getUser } from '@/lib/auth';
import styles from '@/styles/Auth.module.scss';

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    const user = getUser();
    if (!user) {
      router.push('/auth'); // Redirect to /auth if localStorage is empty
    }
  }, [router]);

  return (
    <div className={styles.dashboardContainer}>
      <h1 className={styles.title}>خوش آمدید به داشبورد</h1>
    </div>
  );
}