interface v3Params {
  queryParams?: MusicKit.QueryParameters;
  total?: number;
  totalHref?: string;
  update?: (progress: number) => void;
  verbose?: boolean;
  apiType?: keyof MusicKit.v3;
}

export async function v3<T>(
  url: string,
  args?: MusicKit.QueryParameters | v3Params,
  opts?: MusicKit.QueryOptions & { paramsInURL?: boolean },
  apiType: keyof MusicKit.v3 = "music",
): Promise<MusicKit.QueryResponse<T>> {
  // @ts-ignore
  return window.CiderApp.v3(url, args, opts, apiType);
}

export async function v3Turbo<T>(route: string, args?: v3Params): Promise<T> {
  // @ts-ignore
  return window.CiderApp.v3Turbo(route, args);
}
