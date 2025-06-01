import { useEffect, useState } from 'react';

interface AppConfig {
  name: string;
  foundingYear: number;
  version: string;
  mode: string;
  apiUri?: string;
  apiVersion?: string;
}
const baseConfig: AppConfig = {
  name: 'MyTemplate',
  foundingYear: 2023,
  version: import.meta.env.VITE_REACT_APP_VERSION,
  mode: import.meta.env.MODE,
  apiUri: import.meta.env.VITE_API_URI
};

type MetadataDTO = {
  version: string;
};

const useConfiguration = () => {
  const [config, setConfig] = useState<AppConfig>(baseConfig);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadConfiguration = async () => {
      try {
        if (baseConfig.apiUri) {
          const response = await fetch(`${baseConfig.apiUri}/metadata`);
          const data = (await response.json()) as MetadataDTO;
          if (!data?.version) {
            throw new Error('Invalid metadata response');
          }
          baseConfig.apiVersion = data.version;
        }
      } catch (error) {
        console.error('Failed to fetch API version:', error);
      }
      console.log('Configuration loaded:', baseConfig);
      setConfig(baseConfig);
      setLoading(false);
    };

    // Load configuration without blocking the initial render
    void loadConfiguration();
  }, []);

  return { config, loading };
};

export default useConfiguration;
