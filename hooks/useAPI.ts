import { api, queryClient } from '@/libs/api-client';
import {
  DefinedInitialDataOptions,
  useMutation,
  UseMutationOptions,
  useQuery
} from '@tanstack/react-query';


/**
 * useGet - Fetch data using GET request.
 */
export const useGet = <T = Record<string, any>>(
  path: string,
  key: string | string[],
  options?: Omit<DefinedInitialDataOptions<T, unknown>, 'queryKey' | 'queryFn'>
) =>
  useQuery({
    ...options,
    queryFn: async (): Promise<T> => await api.get(path).then((res) => res.data),
    queryKey: typeof key === "string" ? [key] : key,
  });

/**
 * Generic mutation hook template.
 */
const createMutationHook = <T>(
  method: 'post' | 'patch' | 'delete' | 'put'
) => {
  return (
    path: string,
    data?: any,
    invalidateKey?: string | string[],
    options?: Omit<UseMutationOptions<T, unknown, any>, 'mutationFn'>
  ) =>
    useMutation({
      ...options,
      mutationFn: async (): Promise<T> => await api[method](path, data).then((res) => res.data),
      onSuccess: (...params) => {
        if (invalidateKey) {
          queryClient.invalidateQueries({ queryKey: typeof invalidateKey === "string" ? [invalidateKey] : invalidateKey });
        }
        if(options?.onSuccess){
            options.onSuccess(...params)
        }
      },
    });
};

/**
 * API mutation hooks.
 */
export const usePost = createMutationHook('post');
export const usePatch = createMutationHook('patch');
export const useDelete = createMutationHook('delete');
export const usePut = createMutationHook('put');
