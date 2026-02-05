import { Config } from '@/types/config';
import configData from '@/config.json';

export function getConfig(): Config {
  return configData as Config;
}
