// @ts-nocheck
import { redirect } from '@sveltejs/kit';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '$env/static/private';

export const actions = {
	login: async ({ request, cookies }) => {
		const formData = await request.formData();
		const email = formData.get('email');
		const password = formData.get('password');

		const user = {
			email,
			password
		};

		/* Simple form verification */

		const emailPattern = /^[A-Za-z0-9._+%-]+@[A-Za-z0-9.-]+\.[A-Za-z]+$/;

		const passwordPattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

		if (emailPattern.test(email) && passwordPattern.test(password)) {
			const res = await fetch('http://localhost:3000/api/user/login ', {
				method: 'POST',
				body: JSON.stringify(user),
				headers: {
					'Content-Type': 'application/json'
				}
			});

			const json = await res.json();
			console.log(json);

			cookies.set('token', json.token, {
				path: '/',
				httpOnly: true,
				sameSite: 'strict',
				maxAge: 60 * 60 * 24
			});

			const userDecrypt = jwt.verify(json.token, JWT_SECRET).user;

			if (userDecrypt.user_role == 'intervention') {
				throw redirect(307, '/app/technicien');
			} else if (userDecrypt.user_role == 'user') {
				throw redirect(307, '/app/client');
			} else if (userDecrypt.user_role == 'admin') {
				throw redirect(307, '/app/admin');
		} else {
			return { error: true, message: 'Either your password or your e-mail is wrong' };
		}
	}
}};
