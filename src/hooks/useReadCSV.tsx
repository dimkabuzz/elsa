import { useState, useEffect, useCallback } from 'react';
import Papa, { ParseResult } from 'papaparse';

function useReadCSV<T>(url: string) {
  const [values, setValues] = useState<{ data: T[] | undefined }>();

  const getCSV = useCallback(() => {
    Papa.parse(url, {
      header: true,
      download: true,
      skipEmptyLines: true,
      delimiter: ',',
      complete: (results: ParseResult<T>) => {
        setValues(results);
      },
    });
  }, [url]);

  useEffect(() => {
    getCSV();
  }, [getCSV]);

  return values;
}

export default useReadCSV;
