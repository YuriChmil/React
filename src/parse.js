import React, { Component } from 'react';


export default class Parse extends Component {
 
    render () {
      const cheerio = require('cheerio');
      const axios = require('axios');
      const a= 5;
      const parse = async () => {
        const getHTML = async (url) => {
          const { data } = await axios.get(url);
          return cheerio.load(data);
        };
      
        const $ = await getHTML(`https://ktc.ua/smartphone/?page=1`);
        const pagesNumber = $('.pagination').eq(-1).text(); // кількість сторінок pagesNumber.substr(11,2)є
       const product = $('a.title.small').text();
       
       const prise = $('.price').eq(0).text();
        return(
            <h1>555</h1>
        );
     
      }
     
      parse();
      
      return (
        <div className="todo">
 <h1>{a}</h1>
       
      </div> 
 
   );
    }
}