export async function handler (req: any, res: any) { 
  
  return res.status(200).json({clientSecret: ''})
}


//create checkout sdk intent
const getClientSecret = async(recipientWalletAddress: string, email: string) => {
  try {
    const options = {
      method: 'POST',
      headers: {
        Accept: '*/*',
        'Content-Type': 'application/json',
        Authorization: 'Bearer 22ea05f8-1a69-4e2a-9bb0-2be5dc934c88'
      },
      body: JSON.stringify({
        quantity: 1,
        metadata: {},
        expiresInMinutes: 30,
        contractArgs: {
          "tokenId": "0"
        },
        contractId: contractID,
        walletAddress: recipientWalletAddress,
        email: email
      })
    };

    console.log("optoins are", options);
  
    const response = await fetch('https://paper.xyz/api/2022-08-12/checkout-sdk-intent', options);
    const jsonResponse = await response.json();
  
    return jsonResponse.sdkClientSecret;

  } catch (e) {
    console.log("error fetching the client secret", e);
  }
}