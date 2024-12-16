import { Request, Response, Router } from 'express';
import messagesConstant from '../constants/messages.constant';
import { createPost, deletePost, getPosts } from '../db/posts/posts';
import wrapResHelper from '../helpers/wrapRes.helper';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
	const userId = req.query.userId?.toString();
	if (!userId) {
		res.status(400).send(
			wrapResHelper(false, messagesConstant.error.missingUserId, null)
		);
		return;
	}
	const posts = await getPosts(userId);
	res.status(200).send(
		wrapResHelper(true, messagesConstant.success.fetchedPosts, posts)
	);
});

router.delete('/', async (req: Request, res: Response) => {
	try {
		const postId = req.query.postId?.toString();
		if (!postId) {
			res.status(400).send(
				wrapResHelper(false, messagesConstant.error.missingPostId, null)
			);
			return;
		}
		await deletePost(postId);
		res.status(204).send(
			wrapResHelper(true, messagesConstant.success.deletedPosts, null)
		);
	} catch (e) {
		res.status(500).send(wrapResHelper(false, `${e}`, null));
	}
});

router.post('/', async (req: Request, res: Response) => {
	try {
		const userId = req.body?.userId;
		const postTitle = req.body?.title;
		const postBody = req.body?.body;

		if (!userId || !postTitle || !postBody)
			res.status(400).send(
				wrapResHelper(
					false,
					messagesConstant.error.missingCreatePostField(
						!userId
							? 'User ID'
							: !postTitle
							? 'Post title'
							: 'Post body'
					),
					null
				)
			);

		const response = await createPost(userId, postTitle, postBody);
		res.status(201).send(
			wrapResHelper(true, messagesConstant.success.createdPosts, response)
		);
	} catch (e) {
		res.status(500).send(wrapResHelper(false, `${e}`, null));
	}
});

export default router;
