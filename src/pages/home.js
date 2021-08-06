import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export default class Home extends Component {
  
    render () {
      const cheerio = require('cheerio');
      const axios = require('axios');
      const fs = require('fs');
      
      const parse = async () => {
        const getHTML = async (url) => {
          const { data } = await axios.get(url);
          return cheerio.load(data);
        };
      
        const $ = await getHTML(`https://ktc.ua/smartphone/?page=1`);
        const pagesNumber = $('.pagination').eq(-1).text(); // кількість сторінок pagesNumber.substr(11,2)є
       const product = $('a.title.small').text();
       const prise = $('.price').eq(0).text(); 
       
        //console.log(pagesNumber.substr(11,2));
        //console.log(prise);
        for (let i = 1; i <= 2; i++) {
          const selector = await getHTML(
            `https://ktc.ua/smartphone/?page=${i}`
      
          );
          
          selector('.price   ').each((i, element) => {
            const title = selector(element).find('div.h2').text();
            const link = `https://kanobu.ru${selector(element)
              .find('a')
              .attr('href')}`;
      
          // fs.appendFileSync('./file.txt', `${title};${link}\n`);
          });
       
        }
      };
      
      parse();
        return (
            <div className="todo">
     <div>{this.prise}</div>
           
          </div> 
     
       );
    }
}