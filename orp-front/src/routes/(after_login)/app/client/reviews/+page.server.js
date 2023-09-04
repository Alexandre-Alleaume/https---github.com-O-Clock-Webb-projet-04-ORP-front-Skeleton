// @ts-nocheck


export const load = ({ fetch, locals }) => {
	const { id } = locals.user;
	const token = locals.token;

	const fetchAllTicketsbyUser = async (id, token) => {
		const res = await fetch(`http://localhost:3000/api/user/ticket/${id}`, {
			headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }
		});
		const data = await res.json();
		return data;
	};
	return { tickets: fetchAllTicketsbyUser(id, token) };
};

export const actions = {
	reviews: async ({ request,locals }) => {
		const { id } = locals.user;
		const code_user = id;
		const token = locals.token;
		const formData = await request.formData();
		const grade = formData.get('grade');
		const comments = formData.get('comments');
		const code_ticket = formData.get('code_ticket');

		console.log(grade,comments,code_ticket,code_user);

		const reviewToCreate ={
			comments,
			grade,
			code_ticket,
			code_user

		}

		const res = await fetch('http://localhost:3000/api/review ', {
			method: 'POST',
			body: JSON.stringify(reviewToCreate),
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`
			}
		});
		const json = await res.json();
		console.log(json);
		if (json) {
			return {
				success: true,
				message: 'Votre ticket avis a bien été pris en compte. Merci pour votre retour.'
			};
		}

		/* Waiting from back route */
		/* const res = await fetch('http://localhost:3000/api/user/login ', {
				method: 'POST',
				body: JSON.stringify(user),
				headers: {
					'Content-Type': 'application/json'
				}
			}); */
	}
};
