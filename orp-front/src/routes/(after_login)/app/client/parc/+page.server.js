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
