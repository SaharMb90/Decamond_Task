'use client';
import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/Button/Button';
import Input from '@/components/Input/Input';
import { loginUser } from '@/lib/auth';
import { fetchRandomUser } from '@/lib/api';
import styles from '@/styles/Auth.module.scss';

export default function AuthPage() {
  const router = useRouter();
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const validatePhone = (phone: string) => {
    const phoneRegex = /^09[0-9]{9}$/;
    return phoneRegex.test(phone);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');

    if (!validatePhone(phone)) {
      setError('شماره تلفن معتبر نیست (باید با 09 شروع شود و 11 رقم باشد)');
      return;
    }

    try {
      setIsLoading(true);
      const userData = await fetchRandomUser(); // Fetches from Google Drive
      loginUser(userData.results[0]); // Stores user in localStorage
      router.push('/dashboard');
    } catch (err) {
      setError('خطا در دریافت اطلاعات کاربر');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.authContainer}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1 className={styles.title}>ورود به سیستم</h1>
        <Input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="شماره تلفن (09xxxxxxxxx)"
          label="شماره تلفن"
        />
        {error && <p className={styles.error}>{error}</p>}
        <Button type="submit" disabled={isLoading}>
          {isLoading ? 'در حال پردازش...' : 'ورود'}
        </Button>
      </form>
    </div>
  );
}