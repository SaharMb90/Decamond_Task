import styles from './ Button.module.scss';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

export default function Button({ type = 'button', children, disabled, onClick }: ButtonProps) {
  return (
    <button
      type={type}
      className={styles.button}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}