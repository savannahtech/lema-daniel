import { Request, Response, Router } from 'express';

import messagesConstant from '../constants/messages.constant';
import { getUsers, getUsersCount } from '../db/users/users';
import wrapResHelper from '../helpers/wrapRes.helper';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
	// await new Promise((resolve) => setTimeout(resolve, 5000));
	const pageNumber = Number(req.query.pageNumber) || 0;
	const pageSize = Number(req.query.pageSize) || 4;
	if (pageNumber < 0 || pageSize < 1) {
		res.status(400).send(
			wrapResHelper(false, messagesConstant.error.invalidPageNumber, null)
		);
		return;
	}

	const users = await getUsers(pageNumber, pageSize);
	res.status(200).send(
		wrapResHelper(true, messagesConstant.success.fetchedUsers, {
			page: pageNumber,
			users,
		})
	);
});

router.get('/count', async (req: Request, res: Response) => {
	const count = await getUsersCount();
	res.status(200).send(
		wrapResHelper(true, messagesConstant.success.fetchedCount, { count })
	);
});

export default router;
