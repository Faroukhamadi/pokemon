/**
 * GQLESS: You can safely modify this file and Query Fetcher based on your needs
 */

import type { QueryFetcher } from 'gqless';
import { createClient } from 'gqless';
import { generatedSchema, scalarsEnumsHash } from './schema.generated';
import type {
	GeneratedSchema,
	SchemaObjectTypes,
	SchemaObjectTypesNames
} from './schema.generated';

const queryFetcher: QueryFetcher = async function (query, variables) {
	// Modify "https://graphql-pokemon2.vercel.app" if needed
	const response = await fetch('https://graphql-pokemon2.vercel.app', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			query,
			variables
		}),
		mode: 'cors'
	});

	const json = await response.json();

	return json;
};

export const client = createClient<GeneratedSchema, SchemaObjectTypesNames, SchemaObjectTypes>({
	schema: generatedSchema,
	scalarsEnumsHash,
	queryFetcher
});

export const { query, mutation, mutate, subscription, resolved, refetch } = client;

export * from './schema.generated';
