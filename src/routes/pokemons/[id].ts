import type { RequestHandlerOutput, RequestEvent } from '@sveltejs/kit';
import { query, resolved } from '../../gqless';

export async function get({ params }: RequestEvent): Promise<RequestHandlerOutput> {
	return {
		status: 200,
		body: {
			id: params.id,
			data: await resolved(() => {
				return {
					name: query.pokemon({ id: params.id })?.name,
					image: query.pokemon({ id: params.id })?.image,
					maxHP: query.pokemon({ id: params.id })?.maxHP,
					weight: query.pokemon({ id: params.id })?.weight?.minimum,
					classification: query.pokemon({ id: params.id })?.classification
				};
			})
		}
	};
}
