import {AMAZON_ACCESS_KEY, AMAZON_SECRET_KEY, AMAZON_ASSOCIATE_TAG} from '$env/static/private';

export const commonParameters = {
    AccessKey: AMAZON_ACCESS_KEY,
    SecretKey: AMAZON_SECRET_KEY,
    PartnerTag: AMAZON_ASSOCIATE_TAG, // yourtag-20
    PartnerType: 'Associates', // Default value is Associates.
    Marketplace: 'www.amazon.com', // Default value is US. Note: Host and Region are predetermined based on the marketplace value. There is no need for you to add Host and Region as soon as you specify the correct Marketplace value. If your region is not US or .com, please make sure you add the correct Marketplace value.
  };
