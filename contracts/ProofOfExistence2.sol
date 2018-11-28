pragma solidity ^0.4.22;


contract ProofOfExistence2 {
    bytes32[] public proofs;

    function storeProof(bytes32 proof) private {
        proofs.push(proof);
    }

    function notarize(string memory document) public {
        bytes32 proof = proofFor(document);
        storeProof(proof);
    }

    function proofFor(string memory document) private pure returns(bytes32){
        return sha256(abi.encodePacked(document));
    }

    function checkDocument(string memory document) public view returns (bool) {
        bytes32 proof = proofFor(document);
        return hasProof(proof);
    }

    function hasProof(bytes32 proof) private view returns(bool) {
        for(uint256 i = 0; i < proofs.length; i++){
            if(proofs[i] == proof){
                return true;
            }
        }
        return false;
    }
}
