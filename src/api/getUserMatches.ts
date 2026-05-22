import type { MatchInfo, MatchSortOptions, MatchType, UserIdentifier } from "../types/mscrRankedObjects";
import { mcsrRankedApiFetch } from "./apiFetch";

export type GetUserMatchesParams = {
  before?: string; // gets matches before the match with this id
  after?: string; // gets matches after the match with this id
  sort?: MatchSortOptions;
  count?: number; //number of matches to return, default 20, max 100
  type?: MatchType; //filter by match type
  season?: number; //filter by season
  excludeCasual?: boolean; //exclude casual matches, default false
}

class GetUserMatchesSearchParams extends URLSearchParams {
  constructor(params?: GetUserMatchesParams) {
    super();
    if (!params) return;

    if (params.before !== undefined) this.set('before', params.before);
    if (params.after !== undefined) this.set('after', params.after);
    if (params.sort !== undefined) this.set('sort', String(params.sort));
    if (params.count !== undefined) this.set('count', String(params.count));
    if (params.type !== undefined) this.set('type', String(params.type));
    if (params.season !== undefined) this.set('season', String(params.season));
    if (params.excludeCasual !== undefined) this.set('excludesCasual', String(params.excludeCasual));
  }
}

export type GetUserMatchesResponse = MatchInfo[];

export const getUserMatches = async (identifier: UserIdentifier, searchParams?: GetUserMatchesParams): Promise<GetUserMatchesResponse> => {
  let endpoint = `/users/${identifier}/matches?`;
  const urlSearchParams = new GetUserMatchesSearchParams(searchParams);
  endpoint += urlSearchParams.toString();
  return await mcsrRankedApiFetch<GetUserMatchesResponse>(endpoint);
};