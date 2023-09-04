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
