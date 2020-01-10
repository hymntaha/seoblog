import getConfig from 'next/config';

const {publicRunTimeConfig} = getConfig();

export const API = publicRunTimeConfig.PRODUCTION ? 'https://seoblog.com' : 'http://localhost:8000';
export const APP_NAME = publicRunTimeConfig.APP_NAME;

