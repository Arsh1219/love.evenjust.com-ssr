import { getCookie, setCookie, deleteCookie } from "cookies-next";
var URL = require("url-parse");

const target_domain = "https://love.evenjust.com"


export const getCookieRedirectUrl = () => {

    const userName = getCookie("userName") || "";
    const userId = getCookie("userId")
    const secretKey = getCookie("secretKey")

    if (userId != null && secretKey != null) {
        return `${target_domain}/domain_migration?userId=${userId}&secretKey=${secretKey}&userName=${userName}`
    }
    else {
        return target_domain
    }

}

const saveUserId = (id) => {
    setCookie("userId", id, {
        expires: new Date(new Date().getTime() + 30000000000),
    });
 
};

const saveUserName = (name) => {
    setCookie("userName", name, {
        expires: new Date(new Date().getTime() + 30000000000),
    });

};

const saveSecretKey = (key) => {
    setCookie("secretKey", key, {
        expires: new Date(new Date().getTime() + 30000000000),
    });

};


export const saveIncomingCookies = (data) => {

    saveUserId(data.userId)
    saveSecretKey(data.secretKey)
    saveUserName(data.userName)

}

export const parseIncomingCookies = () => {
    const url = new URL(window.location.href, true);

    const userId = url.query.userId
    const userName = url.query.userName
    const secretKey = url.query.secretKey

    if (userId == null) {
        return {
            status: false
        }
    }
    return {
        status: true,
        userId: userId,
        userName: userName,
        secretKey: secretKey
    }

};