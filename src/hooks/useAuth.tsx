'use client';

import { useSignIn, useUser } from '@clerk/nextjs';
import { isClerkAPIResponseError } from '@clerk/nextjs/errors';
import { useState } from 'react';
import { authErrors } from '~/constants';

export const useAuth = () => {
	const { signIn, isLoaded } = useSignIn();
	const [error, setError] = useState<string | null>(null);

	const handleClerkError = (err: unknown) => {
		if (!isClerkAPIResponseError(err)) {
			console.error('Error during authentication:', err);
			setError(authErrors.default);
			return;
		}

		const errorCode = err.errors[0]?.code as keyof typeof authErrors;
		const errorMessage = authErrors[errorCode] || authErrors.default;
		setError(errorMessage);
	};

	const signInWithGoogle = async () => {
		if (!isLoaded) return;
		try {
			return await signIn.authenticateWithRedirect({
				strategy: 'oauth_google',
				redirectUrl: '/sso-callback',
				redirectUrlComplete: '/'
			});
		} catch (err) {
			handleClerkError(err);
		}
	};

	const signInWithGithub = async () => {
		if (!isLoaded) return;

		try {
			await signIn.authenticateWithRedirect({
				strategy: 'oauth_github',
				redirectUrl: '/sso-callback',
				redirectUrlComplete: '/'
			});
		} catch (err) {
			handleClerkError(err);
		}
	};

	const user = useUser();

	return {
		signInWithGoogle,
		signInWithGithub,
		error,
		user: user?.user
	};
};
