var crypto = require('crypto');

function getRandomSalt(){
    return Math.random().toString().slice(2,5);
}
function cryptPwd (password,salt) {
    var saltPassword = password + ':' + salt;
    console.log('原始密码: %s',password);
    console.log('加盐后密码: %s',saltPassword);

    var md5 = crypto.createHash('md5');
    var result = md5.update(saltPassword).digest('hex');
    console.log('加密后密码md5: %s',result);
}

var password = '123456';
cryptPwd(password,getRandomSalt());