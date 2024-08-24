import { arrayMinSize } from 'class-validator';
import { ethers, JsonRpcProvider, Provider } from 'ethers';

async function main() {
    const ABI = [
        'function vesting(uint256 _campaignId, address _governor, uint256 _amount)',
    ];
    const iface = new ethers.Interface(ABI);
    const calldata = iface.encodeFunctionData('vesting', [
        6,
        '0xcE3312EC7Dd4A379903b8c8CD3cC965395562013',
        '10000000000000000000',
    ]);
    console.log('calldata: ', calldata);
}

main();
