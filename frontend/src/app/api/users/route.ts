import axiosInstanceConstant from '@/constants/axiosInstance.constant';
import { baseURL } from '@/constants/config';
import endpoints from '@/constants/endpoints.constant';
import { apiRes } from '@/utils/api-integration.utils';

export async function GET(req: Request) {
	try {
		const { searchParams } = new URL(req.url);
		const pageNumber = Number(searchParams.get('pageNumber'));
		const paginationPageSize = Number(
			searchParams.get('paginationPageSize')
		);

		const res = await axiosInstanceConstant({
			baseURL: baseURL,
			url: endpoints.users(pageNumber, paginationPageSize),
		});

		return new Response(JSON.stringify(res.data), {
			status: 200,
			headers: {
				'Content-Type': 'application/json',
			},
		});
	} catch (e) {
		return new Response(JSON.stringify(apiRes(false, `${e}`, null)), {
			status: 500,
			headers: {
				'Content-Type': 'application/json',
			},
		});
	}
}
