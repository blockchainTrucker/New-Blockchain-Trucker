export const hashingExample = `const bcrypt = require('bcrypt');

const costFactor = 11;
const passwordTxt = 'abcd1234!';

bcrypt.hash(passwordTxt, costFactor, function (err, passwordHash) {
	console.log('Hashed password: ' + passwordHash);
});

// Hashed password: $2b$11$NzAKDgnwvcrxYbp6lQYWIubTfUMk3Z9rkvTdhFE5fOXvhXqPC.R7G`;

export const hashingTxt1 =
	'Hashing is a process of taking an input and converting it into a fixed-size string of characters, which is a hash value. The process is designed to be a one-way function, meaning that it is computationally infeasible to recreate the original input from the hash value.';

export const hashingTxt2 =
	'Hashing is used in many fields, such as data indexing, data integrity, and digital signature. The most commonly used Hash functions are MD5, SHA1, SHA256 and SHA3. The most secure and recommended for password hashing are Bcrypt, Scrypt, Argon2 and PBKDF2.';

export const hashingTxt3 =
	'Bcrypt is a widely used and well-regarded password hashing algorithm. It is considered to be one of the best choices for hashing passwords because it is designed to be slow and computationally expensive, making it difficult for an attacker to crack hashed passwords through a brute force attack. Additionally, it uses a unique salt for each password and automatically handles the process of salting and hashing the password, which helps protect against attacks that use precomputed tables such as rainbow tables. Therefore, even if the same password is used, the resulting hash will be different each time because of the unique salt used for each password.';

export const hashingTxt4 =
	'Bcrypt is also designed to be adaptive, which means that the computational expense of hashing a password can be increased as computers become faster. This makes it difficult for an attacker to use faster hardware and brute force to crack the hashed passwords.';

export const hashingTxt5 =
	'Below is a basic example of hashing a password using Bcrypt.';

export const hungerGamesCode = `//SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.7;

contract Math {
    function add(uint256 a, uint256 b) internal pure returns (bool, uint256) {
        unchecked {
            uint256 c = a + b;
            if (c < a) return (false, 0);
            return (true, c);
        }
    }

    function sub(uint256 a, uint256 b) internal pure returns (bool, uint256) {
        unchecked {
            if (b > a) return (false, 0);
            return (true, a - b);
        }
    }

    function mod(uint256 a, uint256 b) internal pure returns (bool, uint256) {
        unchecked {
            if (b == 0) return (false, 0);
            return (true, a % b);
        }
    }

    function randomness(uint256 remaining) internal view returns (uint256) {
        uint256 time = block.timestamp;
        (, uint256 randomNumber) = mod(time, remaining);
        return randomNumber;
    }
}

contract Capitol is Math {
    address owner;
    uint256 startTime;
    string[12] districts = ["district1","district2","district3","district4","district5","district6","district7","district8","district9","district10","district11","district12"];

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner {
        require(msg.sender == owner, "Must be the contract owner");
        _;
    }

    event EntryCreated(string entryCreated);

    event Started(string started);

    event Remaining(uint256 remaining);

    event Check(string message,uint256 remaining);

    event GetWinner(string name, string district);

    struct DistrictEntries {
        string district;
        string name;
        uint age;
        string gender;
        bool alive;
    }

    DistrictEntries[] districtEntries;

    function entryChecker(uint age, string memory district, string memory gender) internal view returns(bool) {
        bool male;
        bool female;
        bool allowDistrict;
        for(uint i = 0; i < districts.length; i++) {
            if(keccak256(abi.encodePacked(districts[i])) == keccak256(abi.encodePacked(district))) {
                allowDistrict = true;
            }
        }
        require(allowDistrict == true, "District not approved");
        require(age >= 13 && age <= 18, "Only ages 13-18 allowed");
        for(uint i = 0; i < districtEntries.length; i++) {
            if(keccak256(abi.encodePacked(districtEntries[i].district)) == keccak256(abi.encodePacked(district))) {
                if(keccak256(abi.encodePacked(districtEntries[i].gender)) == keccak256(abi.encodePacked("male"))) {
                    male = true;
                }
                if(keccak256(abi.encodePacked(districtEntries[i].gender)) == keccak256(abi.encodePacked("female"))) {
                    female = true;
                }
            }
        }
        require(male == false || female == false, "This district already has 2 entries");
        require(keccak256(abi.encodePacked(gender)) == keccak256(abi.encodePacked("male")) || keccak256(abi.encodePacked(gender)) == keccak256(abi.encodePacked("female")), "Participant must be a male or female");
        if(keccak256(abi.encodePacked(gender)) == keccak256(abi.encodePacked("male"))) {
            require(male == false, "District already has a male participant");
        }
        if(keccak256(abi.encodePacked(gender)) == keccak256(abi.encodePacked("female"))) {
            require(female == false, "District already has a female participant");
        }
        return true;
    }

    function aliveFighters() public returns(uint256) {
        uint timeLeft = timeRemaining();
        require(startTime > 0, "The game hasn't begun");
        require(timeLeft > 0, "Time has expired... The game is over");
        uint256 numberAlive;
        for(uint i = 0; i < districtEntries.length; i++) {
            if(districtEntries[i].alive == true) {
                (, numberAlive) = add(numberAlive, 1);
            }
        }
        emit Remaining(numberAlive);
        return numberAlive;
    }

    function districtEntry(string memory district, string memory name, uint age, string memory gender) public returns(bool) {
        require(startTime == 0, "Registration has closed");
        bool response = entryChecker(age, district, gender);
        require(response == true, "Entry does not meet requirements");
        districtEntries.push(DistrictEntries(district, name, age, gender, true));
        emit EntryCreated("entry created");
        return true;
    }

    function commence() public onlyOwner {
        require(districtEntries.length == 24, "Not enough fighters to begin");
        startTime = block.timestamp;
        emit Started("started");
    }

    function timeRemaining() public view returns(uint256 secondsRemaining) {
        require(startTime > 0, "The game hasn't begun");
        (, uint256 endtime) = add(startTime, 300);
        (, uint256 timeLeft) = sub(endtime, block.timestamp);
        return timeLeft;
    }

    function killFighter() internal returns(string memory deadFighter, uint256 remainingFighters) {
        require(startTime > 0, "The game hasn't begun");
        uint fightersLeft = aliveFighters();
        uint256 randomNumber = randomness(fightersLeft);
        deadFighter = districtEntries[randomNumber].name;
        districtEntries[randomNumber].alive = false;
        remainingFighters = aliveFighters();
        return (deadFighter, remainingFighters);
    }

    function check() public returns(string memory fighterDied, uint fightersRemaining) {
        uint256 firstRemainingFighters = aliveFighters();
        uint256 timeLeft = timeRemaining();
        require(timeLeft > 0, "Time has expired... The game is over");
        if(firstRemainingFighters > 1) {
            (string memory deadFighter, uint remainingFighters) = killFighter();
            firstRemainingFighters = remainingFighters;
            emit Check(deadFighter, remainingFighters);
            return (deadFighter, remainingFighters);
        } else {
            emit Check("The competition is over", firstRemainingFighters);
            return ("The competition is over", firstRemainingFighters);
        }
    }

    function getWinner() public returns(string memory name, string memory district) {
        uint256 remainingFighters = aliveFighters();
        uint256 remaingTime = timeRemaining();
        string memory winnerName;
        string memory winnerDistrict;
        require(remainingFighters == 1 && remaingTime == 0, "The competition is not over yet.");
        if(remainingFighters > 1 && remaingTime == 0) {
            (, uint amountToKill) = sub(remainingFighters , 1);
            uint i = 0;
            while(i != amountToKill) {
                killFighter();
                i++;
            }
        }
        for(uint i = 0; i < districtEntries.length; i++) {
            if(districtEntries[i].alive == true) {
                emit GetWinner(winnerName, winnerDistrict);
                return (winnerName, winnerDistrict);
            }
        }
    }
}`;

export const walletCreate = `app.post('/create', (req, res) => {
	let password = req.body.password;
	let confirmPassword = req.body.confirmPassword;
	if (password !== confirmPassword) {
		res.render(path.join(__dirname, 'views', 'create.html'), {
			mnemonic: undefined,
			jsonWallet: undefined,
			filename: null,
			error: 'Passwords do not match',
		});
		return false;
	} else {
		let wallet = new ethers.Wallet.createRandom();
		wallet.encrypt(password).then((jsonWallet) => {
			let filename =
				'UTC_JSON_WALLET_' +
				Math.round(+new Date() / 1000) +
				'_' +
				Math.random(10000, 10000) +
				'.json';
			fs.writeFile(
				walletDirectory + filename,
				jsonWallet,
				'utf-8',
				(err) => {
					if (err !== null) {
						console.error(err);
						drawView(res, 'create', {
							mnemonic: undefined,
							jsonWallet: undefined,
							filename: undefined,
							error: 'Problem writing to disk ' + err.message,
						});
					} else {
						drawView(res, 'create', {
							mnemonic: wallet.mnemonic.phrase,
							jsonWallet: JSON.stringify(jsonWallet),
							filename: filename,
							error: undefined,
						});
					}
				}
			);
		});
	   }
 });`;

export const walletLoad = `app.post('/load', (req, res) => {
	let filename = req.body.filename;
	let password = req.body.password;

	fs.readFile(walletDirectory + filename, 'utf8', (err, jsonWallet) => {
		if (err !== null) {
			drawView(res, 'load', {
				address: undefined,
				privateKey: undefined,
				mnemonic: undefined,
				error: "The file doesn't exist",
			});
			return;
		}
		ethers.Wallet.fromEncryptedJson(jsonWallet, password)
			.then((wallet) => {
				if (err === null) {
					console.log(wallet.mnemonic);
					drawView(res, 'load', {
						address: wallet.address,
						privateKey: wallet.privateKey,
						mnemonic: wallet.mnemonic.phrase,
						error: undefined,
					});
				}
			})
			.catch((err) => {
				drawView(res, 'load', {
					address: undefined,
					privateKey: undefined,
					mnemonic: undefined,
					error: err.message,
				});
			});
	    });
 });`;
export const walletRecover = `app.post('/recover', (req, res) => {
	let mnemonic = req.body.mnemonic;
	let password = req.body.password;
	const wallet = ethers.Wallet.fromMnemonic(mnemonic);
	wallet.encrypt(password).then((jsonWallet) => {
		let filename =
			'UTC_JSON_WALLET_' +
			Math.round(+new Date() / 1000) +
			'_' +
			Math.random(10000, 10000) +
			'.json';

		fs.writeFile(walletDirectory + filename, jsonWallet, 'utf-8', (err) => {
			if (err !== null) {
				drawView(res, 'recover', {
					message: undefined,
					filename: undefined,
					mnemonic: undefined,
					error: err.message,
				});
			} else {
				drawView(res, 'recover', {
					message: 'Wallet recovery sucessful!',
					filename: filename,
					mnemonic: wallet.mnemonic.phrase,
					error: undefined,
				});
			}
		  });
	    });
 });`;

export const walletBalances = `app.post('/balance', (req, res) => {
	let filename = req.body.filename;
	let password = req.body.password;
	fs.readFile(walletDirectory + filename, 'utf8', async (err, jsonWallet) => {
		if (err) {
			drawView(res, 'balance', {
				wallets: undefined,
				error: 'Error with file writing',
			});
		}

		ethers.Wallet.fromEncryptedJson(jsonWallet, password)
			.then(async (wallet) => {
				let derivationPath = "m/44'/60'/0'/0/";
				let wallets = [];

				for (let i = 0; i < 5; i++) {
					let hdNode = ethers.utils.HDNode.fromMnemonic(
						wallet.mnemonic.phrase
					).derivePath(derivationPath + i);
					let walletInstance = new ethers.Wallet(
						hdNode.privateKey,
						provider
					);
					let balance = await walletInstance.getBalance();
					wallets.push({
						keypair: walletInstance,
						balance: ethers.utils.formatEther(balance),
					});
				}
				drawView(res, 'balance', {
					wallets: wallets,
					error: undefined,
				});
			})
			.catch((error) => {
				drawView(res, 'balance', {
					wallets: undefined,
					error: error.message,
				});
			});
	    });
 });`;

export const walletSend = `app.post('/send', (req, res) => {
	let recipient = req.body.recipient;
	let privateKey = req.body.privateKey;
	let amount = req.body.amount;
	if (
		recipient === '' ||
		(recipient === undefined && privateKey === '') ||
		(privateKey === undefined && amount === '') ||
		amount === undefined ||
		amount <= 0
	) {
		return;
	}

	let wallet;

	try {
		wallet = new ethers.Wallet(privateKey, provider);
	} catch (err) {
		drawView(res, 'send', {
			transactionHash: undefined,
			error: err.message,
		});
		return;
	}

	let gasPrice = 6;
	let gas = 21000;

	wallet.sendTransaction({
			to: recipient,
			value: ethers.utils.parseEther(amount, gasPrice),
			gasLimit: gas * gasPrice,
		})
		.then((transaction) => {
			drawView(res, 'send', {
				transactionHash: transaction.hash,
				error: undefined,
			});
		})
		.catch((err) => {
			drawView(res, 'send', {
				transactionHash: undefined,
				error: err.message,
			});
		});
	});
 });`;

export const ewTxt1 = `In this example, I used Ethers.js within an Embedded JavaScript single page application to create a simple Etherium wallet that uses encrypted keystore files. The wallet is capable of creating a new wallet, loading an existing wallet from a file, recovering a wallet using the mnemonic phrase, showing the balance of a wallet, and sending Etherium tokens. Below is the code for each route and an image of that route's frontend.`;
