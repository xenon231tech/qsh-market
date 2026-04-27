// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract QSHNFT {
    string public name = "QSH Market";
    string public symbol = "QSH";
    
    mapping(uint256 => address) public ownerOf;
    mapping(uint256 => string) public tokenURI;
    uint256 public nextTokenId = 1;
    
    event Minted(uint256 tokenId, address owner, string uri);
    
    function mint(string memory _uri) public returns(uint256) {
        uint256 tokenId = nextTokenId;
        nextTokenId++;
        
        ownerOf[tokenId] = msg.sender;
        tokenURI[tokenId] = _uri;
        
        emit Minted(tokenId, msg.sender, _uri);
        
        return tokenId;
    }
    
    function balanceOf(address _owner) public view returns(uint256) {
        uint256 count;
        for(uint256 i = 1; i < nextTokenId; i++) {
            if(ownerOf[i] == _owner) count++;
        }
        return count;
    }
}
