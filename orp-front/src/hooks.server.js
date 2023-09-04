// @ts-nocheck

import { redirect } from '@sveltejs/kit';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '$env/static/private';

export const handle = async ({ event, resolve }) => {
	//stage 1

	const { cookies } = event;

	event.locals.token = cookies.get('token');
	

	if (event.url.pathname.startsWith('/app')) {
		if (!event.locals.token) {
			throw redirect(303, '/');
		}

		const user = jwt.verify(event.locals.token, JWT_SECRET);

		event.locals.user = user.user;

		if (event.url.pathname.startsWith('/app/client')) {
			if (event.locals.user.user_role !== 'user') {
				throw redirect(303, '/');
			}
		}
		if (event.url.pathname.startsWith('/app/technicien')) {
			if (event.locals.user.user_role !== 'intervention') {
				throw redirect(303, '/');
			}
		}
		if (event.url.pathname.startsWith('/app/admin')) {
			if (event.locals.user.user_role !== 'admin') {
				throw redirect(303, '/');
			}
		}
	}

	//stage2
	const response = await resolve(event);

	//stage3
	return response;
};
