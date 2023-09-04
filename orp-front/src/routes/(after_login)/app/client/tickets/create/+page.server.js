// @ts-nocheck

export const load = async ({ fetch, locals }) => {
	const { id } = locals.user;
	const token = locals.token;

	const fetchAllDevicesByUser = async (id, token) => {
		const res = await fetch(`http://localhost:3000/api/user/device/${id}`, {
			headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }
		});
		const data = await res.json();
		return data;
	};
	return { devices: fetchAllDevicesByUser(id, token) };
};

export const actions = {
	create: async ({ request, locals }) => {
		const { id } = locals.user;
		const code_client = id;
		const token = locals.token;
		const formData = await request.formData();
		const comments = formData.get('comments');
		const location = formData.get('location');
		const emergency_degree = formData.get('emergency_degree');
		const code_machine = formData.get('code_machine');
		const status = 'open';
		const code_type = '2';
		const ticketToCreate = {
			comments,
			location,
			emergency_degree,
			code_machine,
			status,
			code_type,
			code_client
		};

		const res = await fetch('http://localhost:3000/api/tickets ', {
			method: 'POST',
			body: JSON.stringify(ticketToCreate),
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
				message: 'Votre ticket a bien été posté. Il sera pris en charge dans les plus brefs délais.'
			};
		}
	}
};
