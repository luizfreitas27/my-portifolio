import { client } from './apollo';
import { GET_PINNED_REPOSITORIES, PinnedRepositoriesResponse } from './queries';

export async function fetchPinnedRepositories(username: string) {
  try {
    const { data } = await client.query<PinnedRepositoriesResponse>({
      query: GET_PINNED_REPOSITORIES,
      variables: { username },
    });
    return data.user.pinnedItems.nodes;
  } catch (error) {
    console.error('Error fetching pinned repositories:', error);
    return [];
  }
} 