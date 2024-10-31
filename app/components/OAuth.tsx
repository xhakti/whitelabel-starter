'use client';
import {useEffect} from 'react';
import {useLoginWithOAuth, usePrivy} from '@privy-io/react-auth';
import {useRouter} from 'next/navigation';

const OAuth = () => {
  /**
   * Logic for loggin in with OAuth
   *
   */
  const {
    // When the OAuth provider redirects back to your app, the `loading`
    // value can be used to show an intermediate state while login completes.
    loading,
    initOAuth,
  } = useLoginWithOAuth({
    onOAuthLoginComplete: (...args) => {
      console.log('OAuthLoginComplete');
    },
    onComplete: (user, isNewUser, wasAlreadyAuthenticated, loginMethod) => {
      console.log('🔑 ✅ User successfully logged in with OAuth', {
        user,
        isNewUser,
        wasAlreadyAuthenticated,
        loginMethod,
      });
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return (
    <div className="grid grid-cols-2 gap-3">
      <button onClick={() => initOAuth({provider: 'google'})} className="btn">
        <div className="btn-text">Google</div>
      </button>
      <button onClick={() => initOAuth({provider: 'discord'})} className="btn">
        <div className="btn-text">Discord</div>
      </button>
      <button onClick={() => initOAuth({provider: 'twitter'})} className="btn">
        <div className="btn-text">Twitter</div>
      </button>
      <button onClick={() => initOAuth({provider: 'github'})} className="btn">
        <div className="btn-text">GitHub</div>
      </button>
      <button onClick={() => initOAuth({provider: 'tiktok'})} className="btn">
        <div className="btn-text">TikTok</div>
      </button>
      <button onClick={() => initOAuth({provider: 'linkedin'})} className="btn">
        <div className="btn-text">LinkedIn</div>
      </button>
      <button onClick={() => initOAuth({provider: 'apple'})} className="btn">
        <div className="btn-text">Apple</div>
      </button>
    </div>
  );
};

export default OAuth;
