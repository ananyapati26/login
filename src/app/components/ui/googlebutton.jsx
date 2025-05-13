import React from 'react';
import { Button } from '@/app/components/ui/button';
import { signIn } from 'next-auth/react';

const GoogleSignInButton = ({ children }) => {
  const loginWithGoogle = async () => {
  try {
    await signIn('google', { callbackUrl: 'http://localhost:3000/home' });
  } catch (error) {
    console.error("Error during sign-in:", error);
  }
};


  return (
    <Button onClick={loginWithGoogle} className="w-full">
      {children}
    </Button>
  );
};

export default GoogleSignInButton;