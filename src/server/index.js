const unirest =require('unirest');
const cheerio =require('cheerio');
unirest.get('https://ktc.ua/smartphone/brand-apple/').end(function(response){



const body= response.body;
const $=cheerio.load(body);

const title = $('.container-title h1').text().trim();
const image =$('.ls-is-cached lazyloaded').attr('src');
const name =$ ('.title small a').text();
const price=$('.price span').text().trim();
console.log(price);

});