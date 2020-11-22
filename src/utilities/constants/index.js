export const stagingServer = 'https://www.benzinga.com/money/api/';
export const devServer = 'https://www.benzinga.com/money/api/';
const devTesting = true;
export const baseURL = devTesting === true ? devServer : stagingServer;
export const endPoints = {
 getIdeas: page => baseURL + 'trade-ideas?page='+page,
};
