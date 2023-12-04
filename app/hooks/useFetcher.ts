/**
 * Get the fetcher instance
 * @returns
 */
export function useFetcher() {
  const fetcher = async (input: RequestInfo | URL) => {
    try {
      const res = await fetch(input);

      return await res.json();
    } catch (error) {
      throw error;
    }
  };

  return fetcher;
}

export default useFetcher;
