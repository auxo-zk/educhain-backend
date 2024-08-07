import { ethers } from 'ethers';

export class Utilities {
    static ipfsHashToBytes32(ipfsHash: string) {
        const decodedBase58 = ethers
            .decodeBase58(ipfsHash)
            .toString(16)
            .slice(4);
        return '0x' + decodedBase58;
    }

    static bytes32ToIpfsHash(bytes32: string) {
        // console.log(bytes32);
        bytes32 = '1220' + bytes32.slice(2);
        const temp = bytes32.match(/.{1,2}/g) as any;
        const preparedArray: Uint8Array = new Uint8Array(temp.length);
        for (let i = 0; i < temp.length; i++) {
            preparedArray[i] = parseInt(temp[i], 16);
        }
        const encodedBase58 = ethers.encodeBase58(preparedArray);
        return encodedBase58;
    }
}
