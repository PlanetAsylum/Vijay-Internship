import axios from 'axios';

export const getHotCollections = async () => {
    try {
       const collection = await axios.get('https://us-central1-nft-cloud-functions.cloudfunctions.net/hotCollections');
       return collection.data;
    } catch (error) {
       console.error('Error fetching hot collections:', error);
       throw error;
    }
   };